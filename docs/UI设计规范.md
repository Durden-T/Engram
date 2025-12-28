# Engram UI 设计规范 v1.0

> 本文档定义 Engram 插件的 UI 布局、导航结构、文件架构和响应式适配方案。

---

## 1. 布局方案

### 1.1 PC 端布局

```
┌─────────────────────────────────────────────────┐
│  [Logo]  Engram                      [⛶]  [X]  │  ← Header
├──────┬──────────────────────────────────────────┤
│  📋  │                                          │
│  🌐  │                                          │
│  ⚡→ │  [总结] [向量] [批量]   ← 二级导航        │
│  🔑  │                                          │
│  ⚙️  │           [主内容区域]                   │
│      │                                          │
├──────┴──────────────────────────────────────────┤
│  🔍  [搜索记忆...]                              │  ← SearchBar
└─────────────────────────────────────────────────┘
```

**组件说明**：
- **Header**: Logo + 标题 + 全屏切换 + 关闭按钮
- **Sidebar**: 左侧图标导航，宽度 48px，支持二级展开
- **Content**: 主内容区，根据当前路由渲染对应视图
- **SearchBar**: 底部全局搜索栏

### 1.2 移动端布局

```
┌─────────────────────────┐
│  [☰]  Engram    [⛶] [X] │  ← Header (汉堡菜单)
├─────────────────────────┤
│                         │
│      [主内容区域]        │
│                         │
├─────────────────────────┤
│  🔍  [搜索...]          │
└─────────────────────────┘

点击 ☰ → 侧边栏从左滑出覆盖
```

---

## 2. 导航结构

### 2.1 一级导航

| 图标 | ID | 标签 | 路径 | 说明 |
|------|-----|------|------|------|
| 📋 List | `memory` | 记忆流 | `/memory` | 时间轴展示记忆事件 |
| 🌐 Network | `graph` | 世界图谱 | `/graph` | React Flow 可视化 |
| 🧠 Brain | `brain` | 记忆 | `/brain` | 数据处理操作 |
| 🔑 Key | `api` | API 预设 | `/api` | LLM 接口配置 |
| ⚙️ Settings | `settings` | 设置 | `/settings` | 通用配置 |

### 2.2 二级导航（记忆）

| 标签 | 路径 | 说明 |
|------|------|------|
| 总结剧情 | `/brain/summarize` | 调用 LLM 生成事件摘要 |
| 向量化 | `/brain/vectorize` | 计算记忆向量 |
| 批量处理 | `/brain/batch` | 批量操作历史对话 |

---

## 3. Views 文件架构

```
src/views/
├── index.ts                    # 导出所有视图
│
├── Layout/                     # 🔹 布局框架
│   ├── index.tsx               # MainLayout 容器
│   ├── Header.tsx              # 头部组件
│   ├── SearchBar.tsx           # 搜索栏
│   └── Sidebar/
│       ├── index.tsx           # 侧边栏主组件
│       ├── NavItem.tsx         # 一级导航项
│       └── SubNavList.tsx      # 二级导航列表
│
├── MemoryStream/               # 📋 记忆流页面
│   ├── index.tsx
│   └── components/
│       ├── MemoryCard.tsx
│       ├── TimelineView.tsx
│       └── FilterBar.tsx
│
├── GraphView/                  # 🌐 图谱可视化
│   ├── index.tsx
│   └── components/
│       ├── FlowCanvas.tsx      # React Flow 画布
│       ├── NodeInspector.tsx   # 节点详情面板
│       └── ControlBar.tsx      # 画布控制器
│
├── Brain/                      # 🧠 记忆（含二级路由）
│   ├── index.tsx               # 二级导航容器
│   ├── Summarize/
│   │   └── index.tsx
│   ├── Vectorize/
│   │   └── index.tsx
│   └── BatchProcess/
│       └── index.tsx
│
├── APIPresets/                 # 🔑 API 预设管理
│   ├── index.tsx
│   └── components/
│       ├── PresetCard.tsx
│       └── PresetEditor.tsx
│
└── Settings/                   # ⚙️ 设置页
    ├── index.tsx
    └── sections/
        ├── GeneralSection.tsx
        └── StorageSection.tsx
```

---

## 4. 响应式适配

### 4.1 断点定义

```css
/* Tailwind 断点 */
--mobile: 0px - 767px
--tablet: 768px - 1023px
--desktop: 1024px+
```

### 4.2 适配策略

| 元素 | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| 面板宽度 | 100% (全屏) | 450px | 450px |
| 侧边栏 | 隐藏，汉堡菜单触发 | 显示 48px | 显示 48px |
| 二级导航 | 展开覆盖内容区 | 侧边展开 | 侧边展开 |
| 搜索栏 | 简化 | 完整 | 完整 |

### 4.3 全屏模式

```typescript
interface PanelState {
  isFullscreen: boolean;  // 全屏开关
  isSidebarOpen: boolean; // 移动端侧边栏状态
}

// 移动端默认全屏
const defaultState = {
  isFullscreen: isMobile,
  isSidebarOpen: false,
};
```

---

## 5. 导航数据结构

```typescript
import { List, Network, Brain, Key, Settings, type LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  icon: LucideIcon;
  label: string;
  path: string;
  children?: Omit<NavItem, 'icon' | 'children'>[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'memory', icon: List, label: '记忆流', path: '/memory' },
  { id: 'graph', icon: Network, label: '世界图谱', path: '/graph' },
  { 
    id: 'brain', 
    icon: Brain, 
    label: '记忆', 
    path: '/brain',
    children: [
      { id: 'summarize', label: '总结剧情', path: '/brain/summarize' },
      { id: 'vectorize', label: '向量化', path: '/brain/vectorize' },
      { id: 'batch', label: '批量处理', path: '/brain/batch' },
    ]
  },
  { id: 'api', icon: Key, label: 'API 预设', path: '/api' },
  { id: 'settings', icon: Settings, label: '设置', path: '/settings' },
];
```

---

## 6. 样式规范

### 6.1 技术栈

本项目全面采用 **Tailwind CSS** 进行样式开发，遵循 **Locality of Behavior (LoB)** 原则，将样式直接写在组件定义的 TSX 文件中。

### 6.2 开发原则

1.  **Utility-First**: 优先使用 Tailwind 工具类（如 `flex`, `p-4`, `text-primary`）。
2.  **Locality of Behavior**: 样式与结构不分离，禁止使用 `.module.css` 或独立的 `.css` 文件（全局样式除外）。
3.  **Design Tokens**: 通过 `tailwind.config.js` 将 CSS 变量映射为 Tailwind 主题，确保设计一致性。

### 6.3 Design Token 映射示例

| CSS 变量 | Tailwind 类名 | 用途 |
|----------|---------------|------|
| `--engram-primary` | `text-primary` / `bg-primary` | 品牌主色 |
| `--engram-bg-base` | `bg-bg-base` | 基础背景 |
| `--engram-bg-surface`| `bg-bg-surface` | 卡片背景 |
| `--engram-text-primary`| `text-text-primary` | 主要文字 |
| `--engram-radius-md` | `rounded-md` | 中等圆角 |

**代码对比**：

❌ **旧方式 (CSS)**:
```css
.card {
    background: var(--engram-bg-surface);
    border-radius: var(--engram-radius-md);
    padding: var(--engram-space-4);
}
```

✅ **新方式 (Tailwind)**:
```tsx
<div className="bg-bg-surface rounded-md p-4">
    ...
</div>
```

### 6.4 共享组件样式 (`@layer components`)

为了复用高频组件样式，我们在 `src/styles/main.css` 中使用 Tailwind 的 `@layer components` 定义了一组语义化类名。

| 类名 | 对应 Tailwind 组合 | 用途 |
|------|-----------------------|------|
| `.engram-btn` | `inline-flex items-center ...` | 基础按钮容器 |
| `.engram-btn-primary` | `bg-gradient ... text-white` | 主要按钮 |
| `.engram-card` | `bg-bg-surface backdrop-blur-md ...` | 通用卡片样式 |
| `.engram-page-header` | `flex items-center border-b ...` | 页面标题栏 |
| `.engram-icon-btn` | `w-8 h-8 flex center ...` | 图标按钮 |

使用示例：
```tsx
<div className="engram-card p-4">
    <div className="engram-page-header">
        <h2>Title</h2>
        <button className="engram-btn engram-btn-primary">Action</button>
    </div>
</div>
```

### 6.5 图标

使用 [Lucide React](https://lucide.dev/) 图标库，按需导入，通过 Tailwind 设置颜色和大小：

```tsx
import { Settings } from 'lucide-react';

<Settings className="w-5 h-5 text-text-secondary hover:text-primary transition-colors" />
```

---

## 7. CSS 优先级与冲突处理

> ⚠️ 本项目作为 SillyTavern 扩展，需要与宿主应用的全局样式共存。以下规范用于避免样式冲突。

### 7.1 问题背景

SillyTavern 有大量全局 CSS 规则，会影响我们的 UI。我们需要：
1. **隔离** SillyTavern 的样式，不让其影响 Engram 组件
2. **确保** Tailwind 工具类能正常工作

### 7.2 CSS 选择器优先级

```
内联样式 (1000) > ID选择器 (100) > 类选择器 (10) > 元素选择器 (1)
```

### 7.3 Reset 规则规范

❌ **错误写法** - 优先级 101，会覆盖所有 Tailwind 类：
```css
#engram-panel-root button {
    border: none;
}
```

✅ **正确写法** - 使用 `:where()` 将优先级降到 1：
```css
:where(#engram-panel-root) button {
    border-width: 0;
    border-style: solid;
    border-color: transparent;
}
```

### 7.4 颜色透明度规范

本项目使用 CSS 变量定义颜色，不支持 Tailwind 原生的 opacity 语法 `bg-primary/20`。

❌ **错误写法** - Tailwind JIT 不会生成此类：
```tsx
<div className="bg-primary/20" />
```

✅ **正确写法** - 使用 `tailwind.config.js` 中定义的色阶变体：
```tsx
<div className="bg-primary-20" />  // 对应 color-mix(in srgb, var(--primary) 20%, transparent)
```

**可用的颜色变体**（定义于 `tailwind.config.js`）：
| 颜色 | 可用变体 |
|------|----------|
| `primary` | `5`, `10`, `20`, `30`, `50`, `90` |
| `muted` | `20`, `30`, `50` |
| `background` | `80` |
| `secondary` | `80` |

### 7.5 调试工具

项目提供调试脚本 `debug-css.js`，可用于检查 CSS 规则冲突：

```javascript
// 在浏览器控制台运行
fetch('/scripts/extensions/Engram_project/debug-css.js').then(r=>r.text()).then(eval)
```

输出内容包括：
- Tailwind 类是否被正确生成
- 匹配按钮的 CSS 规则及其优先级
- 内联样式是否能正常覆盖

### 7.6 常见问题排查

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| Tailwind 类不生效 | Reset 规则优先级过高 | 使用 `:where()` 包装选择器 |
| `bg-primary/20` 无效 | 配置不支持原生 opacity | 改用 `bg-primary-20` |
| hover 效果不显示 | 可能被 `transition: none` 阻止 | 检查 reset 规则 |
| 内联样式不生效 | 某处使用了 `!important` | 用调试脚本定位规则 |
