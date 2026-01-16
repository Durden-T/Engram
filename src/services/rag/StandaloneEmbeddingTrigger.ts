/**
 * StandaloneEmbeddingTrigger - 独立嵌入触发服务
 *
 * 检查未嵌入事件的阈值，并在达到条件时自动触发嵌入。
 */

import { useMemoryStore } from "@/stores/memoryStore";
import { embeddingService } from "./EmbeddingService";
import { SettingsManager } from "@/services/settings/Persistence";
import { Logger } from "@/lib/logger";
import { notificationService } from "@/services/NotificationService";
import type { EmbeddingConfig } from "@/services/api/types";

/** standalone 触发器状态 */
export interface StandaloneTriggerStatus {
  /** 是否达到触发条件 */
  triggered: boolean;
  /** 触发类型 */
  triggerType: "count" | "token";
  /** 当前值 */
  currentValue: number;
  /** 触发阈值 */
  threshold: number;
  /** 待嵌入事件数量 */
  pendingCount: number;
}

/**
 * StandaloneEmbeddingTrigger 类
 */
class StandaloneEmbeddingTrigger {
  private isTriggering = false;

  /**
   * 获取当前状态
   */
  async getStatus(): Promise<StandaloneTriggerStatus> {
    const config = this.getConfig();
    const standaloneConfig = config.standalone || {
      triggerType: "count" as const,
      countLimit: 5,
      tokenLimit: 10240,
    };

    const store = useMemoryStore.getState();

    // 获取所有事件
    const allEvents = await store.getAllEvents();
    const unembeddedEvents = allEvents.filter((e) => !e.is_embedded && !e.is_archived);
    const pendingCount = unembeddedEvents.length;

    // 计算当前值和阈值
    const triggerType = standaloneConfig.triggerType;
    let currentValue = 0;
    let threshold = 0;

    if (triggerType === "token") {
      // 仅计算未嵌入事件的 token 总数
      if (unembeddedEvents.length > 0) {
        const unembeddedSummaries = unembeddedEvents.map((e) => e.summary).join("\n\n");
        const { WorldInfoService } = await import("@/tavern/api/WorldInfo");
        currentValue = await WorldInfoService.countTokens(unembeddedSummaries);
      }
      threshold = standaloneConfig.tokenLimit;
    } else {
      // 使用条目数
      currentValue = pendingCount;
      threshold = standaloneConfig.countLimit;
    }

    const triggered = config.enabled && config.trigger === "standalone" && currentValue >= threshold;

    return {
      triggered,
      triggerType,
      currentValue,
      threshold,
      pendingCount,
    };
  }

  /**
   * 检查并触发嵌入（如果条件满足）
   * 由 Pipeline 在保存事件后调用
   */
  async checkAndTrigger(): Promise<void> {
    if (this.isTriggering) {
      Logger.debug("StandaloneEmbedding", "正在执行嵌入，跳过本次检查");
      return;
    }

    const config = this.getConfig();
    if (!config.enabled || config.trigger !== "standalone") {
      return;
    }

    const status = await this.getStatus();
    if (!status.triggered) {
      return;
    }

    this.isTriggering = true;
    Logger.info("StandaloneEmbedding", "达到阈值，触发自动嵌入", {
      type: status.triggerType,
      value: status.currentValue,
      threshold: status.threshold,
      pending: status.pendingCount,
    });

    try {
      // 设置向量化配置
      const settings = SettingsManager.get("apiSettings");
      if (settings?.vectorConfig) {
        embeddingService.setConfig(settings.vectorConfig);
        embeddingService.setConcurrency(config.concurrency);
      } else {
        Logger.warn("StandaloneEmbedding", "未找到向量化配置，跳过嵌入");
        return;
      }

      // 执行嵌入
      const result = await embeddingService.embedUnprocessedEvents();

      Logger.success("StandaloneEmbedding", "自动嵌入完成", result);
      notificationService.success(`已自动嵌入 ${result.success} 个事件`, "Engram 向量化");
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : String(e);
      Logger.error("StandaloneEmbedding", "自动嵌入失败", { error: errorMsg });
      notificationService.error(`自动嵌入失败: ${errorMsg}`, "Engram 错误");
    } finally {
      this.isTriggering = false;
    }
  }

  /**
   * 获取嵌入配置
   */
  private getConfig(): EmbeddingConfig {
    const settings = SettingsManager.get("apiSettings");
    return (
      settings?.embeddingConfig || {
        enabled: false,
        trigger: "with_trim" as const,
        concurrency: 5,
      }
    );
  }
}

/** 默认实例 */
export const standaloneEmbeddingTrigger = new StandaloneEmbeddingTrigger();

export default StandaloneEmbeddingTrigger;
