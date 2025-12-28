async function f(l) {
  try {
    const n = window.SillyTavern;
    if (n != null && n.getContext) {
      const t = n.getContext();
      if (t != null && t.getTokenCountAsync)
        return await t.getTokenCountAsync(l);
    }
    return Math.ceil(l.length / 4);
  } catch {
    return console.warn("[Engram] WorldInfoService: 无法使用酒馆 Token 计数，使用估算"), Math.ceil(l.length / 4);
  }
}
function d() {
  try {
    return window.TavernHelper || null;
  } catch {
    return null;
  }
}
class h {
  /**
   * 计算文本的 Token 数量
   * @param text 文本内容
   */
  static async countTokens(n) {
    return f(n);
  }
  /**
   * 批量计算多段文本的 Token 数量
   * @param texts 文本数组
   */
  static async countTokensBatch(n) {
    return Promise.all(n.map((t) => f(t)));
  }
  /**
   * 获取当前聊天的绑定世界书名称
   * 如果不存在则创建
   */
  static async getChatWorldbook() {
    const n = d();
    if (n != null && n.getOrCreateChatWorldbook)
      try {
        return await n.getOrCreateChatWorldbook("current");
      } catch (t) {
        return console.error("[Engram] WorldInfoService: 获取聊天世界书失败", t), null;
      }
    return console.warn("[Engram] WorldInfoService: TavernHelper 不可用"), null;
  }
  /**
   * 获取世界书的所有条目
   * @param worldbookName 世界书名称
   */
  static async getEntries(n) {
    const t = d();
    if (!(t != null && t.getWorldbook))
      return console.warn("[Engram] WorldInfoService: TavernHelper 不可用"), [];
    try {
      return (await t.getWorldbook(n)).map((o) => {
        const e = o;
        return {
          uid: e.uid || 0,
          name: e.name || "",
          content: e.content || "",
          enabled: e.enabled ?? !0,
          constant: e.constant ?? !1,
          keys: e.key || [],
          position: e.position || "before_character_definition",
          depth: e.depth || 0,
          order: e.order || 100
        };
      });
    } catch (r) {
      return console.error("[Engram] WorldInfoService: 获取世界书条目失败", r), [];
    }
  }
  /**
   * 创建新的世界书条目
   * @param worldbookName 世界书名称
   * @param params 条目参数
   */
  static async createEntry(n, t) {
    const r = d();
    if (!(r != null && r.createWorldbookEntries))
      return console.warn("[Engram] WorldInfoService: TavernHelper 不可用"), !1;
    try {
      const o = {
        name: t.name,
        content: t.content,
        enabled: t.enabled ?? !0,
        strategy: {
          type: t.constant ? "constant" : "selective",
          keys: t.keys || [],
          keys_secondary: {
            logic: "and_any",
            keys: t.keysSecondary || []
          },
          scan_depth: "same_as_global"
        },
        position: {
          type: t.position || "before_character_definition",
          role: t.role || "system",
          depth: t.depth || 0,
          order: t.order || 100
        },
        probability: t.probability || 100
      };
      return await r.createWorldbookEntries(n, [o]), !0;
    } catch (o) {
      return console.error("[Engram] WorldInfoService: 创建世界书条目失败", o), !1;
    }
  }
  /**
   * 获取世界书的 Token 统计
   * @param worldbookName 世界书名称
   */
  static async getWorldbookTokenStats(n) {
    const t = await this.getEntries(n), r = await Promise.all(
      t.map(async (e) => ({
        name: e.name,
        tokens: await this.countTokens(e.content)
      }))
    );
    return {
      totalTokens: r.reduce((e, a) => e + a.tokens, 0),
      entryCount: t.length,
      entries: r
    };
  }
  /**
   * 检查 WorldInfoService 是否可用
   */
  static isAvailable() {
    return d() !== null;
  }
  /**
   * 检查 Token 计数是否使用酒馆原生 API
   */
  static async isNativeTokenCountAvailable() {
    try {
      const n = window.SillyTavern;
      if (n != null && n.getContext) {
        const t = n.getContext();
        return typeof (t == null ? void 0 : t.getTokenCountAsync) == "function";
      }
      return !1;
    } catch {
      return !1;
    }
  }
  /**
   * 获取所有激活的世界书条目内容（用于总结）
   * 使用酒馆原生 getWorldInfoPrompt 进行扫描，获取所有激活的条目
   * 支持：蓝灯（常驻）+ 绿灯（关键词触发）
   * 
   * @param chatMessages 可选，用于关键词扫描的聊天消息
   * @returns 格式化后的世界书内容字符串
   */
  static async getActivatedWorldInfo(n) {
    var t, r;
    try {
      const e = await new Function("path", "return import(path)")("/scripts/world-info.js"), a = e == null ? void 0 : e.getWorldInfoPrompt;
      if (typeof a != "function")
        return console.warn("[Engram] WorldInfoService: getWorldInfoPrompt 不可用，回退到常驻条目"), this.getConstantWorldInfo();
      let c = n;
      if (!c || c.length === 0) {
        const s = (r = (t = window.SillyTavern) == null ? void 0 : t.getContext) == null ? void 0 : r.call(t);
        s != null && s.chat && Array.isArray(s.chat) && (c = s.chat.map((g) => g.mes || "").reverse());
      }
      if (!c || c.length === 0)
        return console.warn("[Engram] WorldInfoService: 无聊天消息，回退到常驻条目"), this.getConstantWorldInfo();
      const i = await a(c, 8192, !0, {
        trigger: "normal"
      }), u = [
        (i == null ? void 0 : i.worldInfoBefore) || "",
        (i == null ? void 0 : i.worldInfoAfter) || ""
      ].filter(Boolean).join(`

`).trim();
      return u && console.debug(`[Engram] WorldInfoService: 获取到激活的世界书内容 (${u.length} 字符)`), u;
    } catch (o) {
      return console.warn("[Engram] WorldInfoService: 获取世界书失败，回退到常驻条目", o), this.getConstantWorldInfo();
    }
  }
  /**
   * 获取常驻激活的世界书条目（蓝灯）
   * 作为 getActivatedWorldInfo 的回退方案
   */
  static async getConstantWorldInfo() {
    try {
      const t = await new Function("path", "return import(path)")("/scripts/world-info.js"), r = t == null ? void 0 : t.getSortedEntries;
      if (typeof r != "function")
        return "";
      const o = await r();
      if (!o || !Array.isArray(o))
        return "";
      const e = o.filter((a) => a.constant === !0 && a.disable !== !0 && a.content);
      return e.length === 0 ? "" : (console.debug(`[Engram] WorldInfoService: 回退获取 ${e.length} 个常驻条目`), e.map((a) => a.content).join(`

`));
    } catch {
      return "";
    }
  }
}
export {
  h as WorldInfoService,
  h as default
};
//# sourceMappingURL=WorldInfoService-CizlUCtc.js.map
