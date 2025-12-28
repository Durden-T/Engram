import { L as o } from "./index-CXMSo1jn.js";
function m() {
  console.group("🔍 Engram Diagnostics");
  const s = document.getElementById("engram-styles");
  s ? o.info("Diagnostics", "✅ 样式表 link 标签存在", { href: s.href }) : o.error("Diagnostics", "❌ 样式表 link 标签丢失");
  const a = getComputedStyle(document.documentElement), i = a.getPropertyValue("--background").trim(), c = a.getPropertyValue("--primary").trim();
  i ? o.info("Diagnostics", "✅ Root CSS变量存在", {
    "--background": i,
    "--primary": c
  }) : o.error("Diagnostics", "❌ Root CSS变量未定义或为空");
  const t = document.getElementById("engram-panel-root");
  if (t) {
    const n = getComputedStyle(t), r = n.backgroundColor, g = n.color;
    o.info("Diagnostics", "🎨 Panel 样式计算值", {
      backgroundColor: r,
      color: g,
      classes: t.className
    }), t.classList.contains("bg-background") && (r === "rgba(0, 0, 0, 0)" || r === "transparent" ? o.error("Diagnostics", "❌ bg-background 类存在但背景透明 (变量失效)") : o.success("Diagnostics", "✅ bg-background 生效"));
  } else
    o.warn("Diagnostics", "⚠️ 找不到 #engram-panel-root 面板元素");
  const e = document.createElement("div");
  e.style.display = "none", e.className = "bg-primary/50 text-primary-foreground", document.body.appendChild(e), requestAnimationFrame(() => {
    const n = getComputedStyle(e);
    o.info("Diagnostics", "🧪 Tailwind 混合色测试 (bg-primary/50)", {
      computedBg: n.backgroundColor
      // 应该是 rgba(...)
    }), document.body.removeChild(e);
  }), console.groupEnd();
}
export {
  m as runDiagnostics
};
//# sourceMappingURL=diagnose-DpfKDk7M.js.map
