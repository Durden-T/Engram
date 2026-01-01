# Changelog


## [0.3.0] - 2026-01-02

### 🏗️ Architecture & Refactoring (架构重构)
- **文件结构优化**: 完成了核心服务 (`src/services`)、基础设施 (`src/lib`, `src/tavern`) 和视图层 (`src/views`) 的分层重构。
- **状态管理升级**: 引入 **Zustand** 替代部分 React Context (`ThemeStore`, `DevLogStore`)，提升性能并简化状态逻辑。
- **依赖治理**: 全面迁移至绝对路径导入 (`@/*`)，消除了相对路径混乱。

### ⚡ Performance (性能优化)
- **按需加载**: 对非核心视图 (Graph, Settings) 启用 `React.lazy` 懒加载，减少首屏体积。
- **资源优化**: 优化了 Google Fonts 加载策略 (Preload)，提升页面渲染速度。

### 💄 UI/UX Improvements (体验改进)
- **毛玻璃控制**: 设置中新增全局 **毛玻璃特效开关**，允许在低性能设备上关闭磨砂效果。
- **移动端适配**:
  - 侧边栏增加收折功能和版本号显示。
  - 优化 Processing 界面在移动端的布局显示。
  - 修复了设置项长文本溢出的问题。

## [0.2.1] - 2025-12-31
### 🐛 Bug Fixes
- **修复了世界书条目黑名单功能的 bug**
- **修复了 Rerank 模型动态选择的 bug**

### 📚 Documentation
- **更新了文档**


## [0.2.0] - 2025-12-31

### ✨ New Features
- **剧情总结模块 (Story Summary Module):**
  - 新增纯文本双层记忆总结系统
  - 支持将对话提炼为结构化的剧情单元并存入世界书
  - 提供预览与修订功能，确保总结内容的准确性
  - 支持多种触发模式（手动/自动）与自定义提示词模板

### 💄 UI/UX Improvements
- **UI 精修 (Refined UI):**
  - 全面优化界面视觉风格，采用更加现代化的设计语言
  - 改进交互体验，提升操作流畅度
