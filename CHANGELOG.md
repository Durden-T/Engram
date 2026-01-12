# Changelog

## [0.8.5] - 2026-01-12

### ✨ New Features (新功能)
- **RAG 召回系统 (RAG Retrieval System):**
  - **多模式支持**: 提供 Full (预处理+Embedding+Rerank)、Standard (Emb+Rerank)、Light (仅Emb) 多种模式，适应不同需求。
  - **混合打分**: 融合向量相似度 (Embedding) 和语义相关度 (Rerank) 的双重评分机制，提升召回精准度。
  - **黏性系统 (Sticky System)**: 引入短期记忆黏性机制，自动对连续召回的事件进行权重衰减，防止同一内容反复刷屏。
  - **Unified Query**: 在 Full 模式下利用 LLM 生成四维指令（因果/视觉/实体/情感），弥补用户简短输入的检索鸿沟。
- **召回日志 (Recall Log):**
  - DevLog 新增 Recall 标签页，提供召回全流程可视化。
  - 支持查看 Embedding/Rerank/Hybrid 双色分数条对比。
  - 采用 Master-Detail 两列布局，支持全屏查看详情，优化移动端体验。
- **通知系统优化**:
  - 预处理模块添加实时运行状态通知 (`toastr`)，支持点击取消。
  - 集成酒馆 `stopGeneration` API，实现真正的全链路中止。

### 🏗️ Architecture (架构改进)
- **HybridScorer**: 实现 `(1-α)*Emb + α*Rerank` 加权公式与黏性惩罚逻辑。
- **StickyCache**: 新增内存级黏性缓存服务 `services/rag/StickyCache.ts`。
- **Injector 升级**: 完善了 RAG 结果到 `{{engramSummaries}}` 宏的注入流程。

### 📄 Documentation (文档)
- 新增 `docs/Engram_RAG召回系统完全指南.md`
- 新增 `docs/V0.8.5_RAG召回系统设计.md`

## [0.8.0] - 2026-01-11

### ✨ New Features (新功能)
- **输入预处理系统 (Input Preprocessing System):**
  - 在用户发送消息时自动进行预处理，支持多种功能模式
  - **Query 增强**: 扩展用户输入的指代词，优化 RAG 检索效果
  - **剧情编排**: 生成导演指令框架，指导 AI 进行剧情发展
  - **描写增强**: 补充细节描写和环境氛围
  - 支持自定义预处理模板，统一使用 `preprocessing` 分类
  - 阻塞式事件处理，确保预处理完成后再继续生成

### 🏗️ Architecture (架构改进)
- **Preprocessor 服务**: 新增 `services/preprocessing/Preprocessor.ts`，统一管理预处理逻辑
- **OutputParser**: 新增 `services/preprocessing/OutputParser.ts`，统一解析 `<output>`, `<query>`, `<think>` 标签
- **Injector 重构**: 使用 `GENERATION_AFTER_COMMANDS` 事件实现阻塞式预处理注入
- **模板分类简化**: 将 `query_enhance`, `plot_director`, `description` 统一为 `preprocessing` 分类

### 📄 新增文件
- `src/services/preprocessing/Preprocessor.ts` - 预处理核心服务
- `src/services/preprocessing/OutputParser.ts` - 输出解析器
- `src/services/api/prompts/query_enhance.md` - Query 增强模板
- `src/services/api/prompts/plot_director.md` - 剧情编排模板
- `src/services/api/prompts/description.md` - 描写增强模板

## [0.7.1] - 2026-01-10

### 💄 UI/UX Improvements (界面优化)
- **Header Fusion & Compact Mode**: 采用了 "Borderless Fluid" 设计理念，移除了顶部边框和多余 Padding，使界面更加紧凑流畅。
- **LayoutTabs Refactor**: 全面重构了二级导航栏，统一了样式和交互，支持标签页切换时的平滑动画。
- **Divider Visibility**: 优化了分割线的可见度逻辑，在包含子 Tab 的视图中自动隐藏冗余分割线，提升视觉整洁度。
- **Sub-tabs Opacity**: 回退了子 Tab 的透明度设置，确保在各种背景下均有良好的可读性。

### 🐛 Bug Fixes & Refactoring (修复与重构)
- **Embedding Service 404 Fix**: 
  - 修复了自定义 OpenAI 兼容接口在未提供完整路径时的 404 错误。
  - 实现了智能 URL 修正功能，自动检测并补全 `/v1/embeddings` 后缀。
  - 优化了错误日志，现在会明确打印出实际请求的完整 URL。
- **Linked Deletion for Sharded DB**:
  - 修复了联动删除功能在多库架构下的失效问题。
  - 现在删除聊天或角色时，会正确清理对应的 `Engram_{chatId}` IndexedDB 数据库文件。
  - 增加了对共享 Worldbook 的删除保护警告。

