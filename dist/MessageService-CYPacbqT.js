var u = Object.defineProperty;
var g = (n, e, t) => e in n ? u(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var c = (n, e, t) => g(n, typeof e != "symbol" ? e + "" : e, t);
const f = {
  MESSAGE_RECEIVED: "message_received",
  // 聊天事件
  CHAT_CHANGED: "chat_id_changed"
};
function i() {
  try {
    const n = window.SillyTavern;
    if (n != null && n.getContext) {
      const e = n.getContext();
      return (e == null ? void 0 : e.eventSource) || null;
    }
    return null;
  } catch {
    return console.warn("[Engram] EventBus: 无法获取 SillyTavern eventSource"), null;
  }
}
class o {
  /**
   * 订阅事件
   * @param event 事件名称
   * @param callback 回调函数
   * @returns 取消订阅函数
   */
  static on(e, t) {
    const s = i();
    return s && s.on(e, t), this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(t), () => {
      this.off(e, t);
    };
  }
  /**
   * 一次性订阅事件（触发后自动取消）
   * @param event 事件名称
   * @param callback 回调函数
   */
  static once(e, t) {
    const s = i();
    if (s)
      s.once(e, t);
    else {
      const r = (...a) => {
        this.off(e, r), t(...a);
      };
      this.on(e, r);
    }
  }
  /**
   * 取消订阅事件
   * @param event 事件名称
   * @param callback 回调函数
   */
  static off(e, t) {
    var r;
    const s = i();
    s && s.removeListener(e, t), (r = this.listeners.get(e)) == null || r.delete(t);
  }
  /**
   * 清除所有已注册的监听器
   * 在扩展卸载时调用
   */
  static clearAll() {
    const e = i();
    for (const [t, s] of this.listeners)
      for (const r of s)
        e && e.removeListener(t, r);
    this.listeners.clear();
  }
  /**
   * 检查 EventBus 是否可用
   */
  static isAvailable() {
    return i() !== null;
  }
}
c(o, "listeners", /* @__PURE__ */ new Map());
const m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventBus: o,
  TavernEventType: f
}, Symbol.toStringTag, { value: "Module" }));
function l() {
  try {
    const n = window.SillyTavern;
    return n != null && n.getContext ? n.getContext() : null;
  } catch {
    return console.warn("[Engram] MessageService: 无法获取 SillyTavern 上下文"), null;
  }
}
function h(n, e) {
  let t = "assistant";
  return n.is_user ? t = "user" : n.is_system && (t = "system"), {
    id: e,
    role: t,
    content: n.mes || "",
    name: n.name || "",
    isHidden: n.is_hidden ?? !1,
    raw: n
  };
}
class d {
  /**
   * 获取当前聊天的所有消息
   * @param options 查询选项
   */
  static getAllMessages(e = {}) {
    const t = l();
    if (!(t != null && t.chat))
      return [];
    let s = t.chat.map((r, a) => h(r, a));
    if (e.includeHidden || (s = s.filter((r) => !r.isHidden)), e.role) {
      const r = Array.isArray(e.role) ? e.role : [e.role];
      s = s.filter((a) => r.includes(a.role));
    }
    return s;
  }
  /**
   * 获取最近 N 条消息
   * @param count 消息数量
   * @param options 查询选项
   */
  static getRecentMessages(e, t = {}) {
    return this.getAllMessages(t).slice(-e);
  }
  /**
   * 获取指定范围的消息
   * @param start 起始索引（包含）
   * @param end 结束索引（不包含）
   * @param options 查询选项
   */
  static getMessages(e, t, s = {}) {
    return this.getAllMessages(s).slice(e, t);
  }
  /**
   * 获取当前楼层数（消息总数）
   * @param options 查询选项
   */
  static getFloorCount(e = {}) {
    return this.getAllMessages(e).length;
  }
  /**
   * 获取最后一条消息
   * @param options 查询选项
   */
  static getLastMessage(e = {}) {
    const t = this.getAllMessages(e);
    return t.length > 0 ? t[t.length - 1] : null;
  }
  /**
   * 获取当前角色名称
   */
  static getCurrentCharacterName() {
    var t;
    const e = l();
    return !(e != null && e.characters) || e.characterId < 0 ? null : ((t = e.characters[e.characterId]) == null ? void 0 : t.name) || null;
  }
  /**
   * 格式化消息为纯文本（用于传给 LLM）
   * @param messages 消息数组
   * @param format 格式化模板
   */
  static formatMessagesAsText(e, t = "simple") {
    return t === "simple" ? e.map((s) => `${s.name}: ${s.content}`).join(`

`) : e.map((s) => `[${s.role.toUpperCase()}] ${s.name}:
${s.content}`).join(`

---

`);
  }
  /**
   * 检查 MessageService 是否可用
   */
  static isAvailable() {
    return l() !== null;
  }
}
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MessageService: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  o as E,
  d as M,
  f as T,
  m as a,
  v as b
};
//# sourceMappingURL=MessageService-CYPacbqT.js.map
