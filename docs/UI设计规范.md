# Engram UI 设计规范 (V2.1 - 主题化版本)

## 1. 核心设计理念 (Core Philosophy)

我们的设计语言是 **"无框流体 (Borderless Fluid)"**，同时**支持多主题系统**。

-   **"无框布局" (Borderless)**: 减少大面积边框，用空间和对齐区分层级
-   **"减弱卡片" (De-emphasize Cards)**: 仅在必要时使用微妙背景区分
-   **"细线分割" (Thin Dividers)**: 使用 `1px` 极细线条 (`border-border`) 分割区域
-   **"字体区分"**: 使用字体大小和字重体现层级
-   **"极简主义" (Minimalism)**: 去除装饰性元素，强调排版和间距
-   **"注重排版"**: 不要在PC端有足够宽度的情况下，使用单一的竖直筒状布局
---

## 2. 颜色系统 (使用主题变量)

> [!IMPORTANT]
> **禁止使用硬编码颜色**（如 `bg-black`、`text-zinc-*`）！所有颜色必须使用 Tailwind 主题类。

### 2.1 语义化颜色映射

| 用途 | Tailwind 类名 | 说明 |
|------|--------------|------|
| **背景** | `bg-background` | 主背景色（随主题变化） |
| **卡片/区块** | `bg-card` | 需要区分的区块背景 |
| **悬浮层** | `bg-popover` | 下拉菜单、弹窗等 |
| **静音区域** | `bg-muted` | 禁用状态、次要区域 |
| **边框** | `border-border` | 所有分割线 |
| **主文字** | `text-foreground` | 标题、正文 |
| **次要文字** | `text-muted-foreground` | 描述、标签 |
| **强调色** | `text-primary`, `bg-primary` | CTA、链接、高亮 |

### 2.2 Sidebar 专用

| 用途 | Tailwind 类名 |
|------|--------------|
| 背景 | `bg-sidebar` |
| 文字 | `text-sidebar-foreground` |
| 激活态 | `bg-sidebar-accent text-sidebar-accent-foreground` |
| 边框 | `border-sidebar-border` |

---

## 3. 字体规范 (Typography)

-   **主要字体**: `Inter`, sans-serif
-   **代码字体**: `JetBrains Mono`, monospace
-   **字重**:
    -   标题: `font-light` + `tracking-tight`
    -   正文: `font-normal`
    -   标签: `font-medium`

---

## 4. 组件规范 (Component Specs)

### 4.1 导航 (Navigation)

```tsx
// ✅ 正确：使用主题类
<button className="text-sidebar-foreground hover:bg-sidebar-accent">

// ❌ 错误：硬编码颜色
<button className="text-zinc-500 hover:bg-zinc-800">
```

### 4.2 按钮 (Buttons)

-   **Primary**: `bg-primary text-primary-foreground`
-   **Secondary/Ghost**: `bg-transparent border-border text-muted-foreground hover:bg-accent`
-   **Icon Button**: 无背景，hover 时 `bg-accent`

### 4.3 输入框 (Inputs)

-   **边框**: `border-input` 或 `border-border`
-   **背景**: `bg-background` 或透明
-   **Focus**: `ring-ring` (无需强 glow)

---

## 5. 交互 (Interaction)

-   **Hover**: 微妙的透明度/位移变化
-   **Transition**: `duration-200 ease-out`

---

## 6. 布局结构

-   **Sidebar**: 左侧固定，使用 `border-r border-sidebar-border` 分割
-   **Panel Controls**: Z-index 最高层

---

## 7. 移动端与调试最佳实践 (Mobile & Debugging)

### 7.1 移动端高度坍塌 (Mobile Height Collapse)

在 SillyTavern 的嵌入式环境中，移动端浏览器的视口高度 (Viewport Height) 计算极易出错。
> [!WARNING]
> **不要依赖默认高度**。只要是全屏覆盖层 (Overlay/Modal)，必须显式强制设置高度和宽度：
> ```tsx
> style={{ height: '100dvh', width: '100vw' }}
> ```
> 仅使用 `h-screen` 或 `bottom-0` 往往会导致计算为 `0` 或被地址栏挤压，造成背景透明或内容截断。

### 7.2 样式调试指南 (Debugging Method)

由于 Tailwind 类可能被宿主环境 CSS 覆盖，或者 CSS 变量存在未知的透明度：
> [!TIP]
> **不要瞎猜 CSS**。遇到样式异常（如透明度问题、层级覆盖），优先使用 JS 脚本在控制台获取真实计算样式：
> 1. 打开控制台 (Console)
> 2. 使用 `window.getComputedStyle($0)` 检查元素的 `zIndex`, `opacity`, `backgroundColor` (查看 rgba alpha 值)
> 3. 编写简单的 JS 脚本批量打印层级关系，而不是反复修改 CSS 碰运气。
