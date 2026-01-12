# Engram RAG 召回系统完全指南 (RAG Retrieval System Guide)

## 1. 系统概述 (Overview)

Engram V0.8.5 引入了全新的 RAG (Retrieval-Augmented Generation) 召回系统。该系统旨在解决角色扮演场景下常见的「检索鸿沟」问题——即用户输入的短文本（动作、简短对话）与长篇剧情记忆（详细叙事、环境描写）之间在语义密度和表达方式上的巨大差异。

本系统采用多阶段混合检索架构，结合了 LLM 预处理、向量检索 (Embedding)、重排序 (Rerank) 和规则化黏性策略，以提供精准且连贯的记忆召回体验。

## 2. 核心架构 (Core Architecture)

整个召回流程是一个精密的 Pipeline，包含四个主要阶段：

```mermaid
graph TD
    UserInput[用户输入] --> Injector
    Injector -->|GENERATION_AFTER_COMMANDS| Preprocessor
    
    subgraph Stage 1: 预处理 (可选)
        Preprocessor -->|LLM| UnifiedQuery[Unified Query\n统一检索指令]
    end
    
    subgraph Stage 2: 向量检索
        UnifiedQuery -->|Embed| QueryVec[查询向量]
        DB[(Engram DB)] -->|Embed| EventVec[事件向量]
        QueryVec & EventVec -->|Cosine Similarity| Candidates[候选集 Top-K]
    end
    
    subgraph Stage 3: 重排序 (可选)
        Candidates --> RerankService
        RerankService -->|Cross-Encoder| Reranked[重排后列表]
    end
    
    subgraph Stage 4: 混合与优化
        Reranked --> HybridScorer[混合打分]
        HybridScorer --> StickySystem[黏性系统\n(应用惩罚)]
        StickySystem --> FinalRecall[最终结果]
    end
    
    FinalRecall --> MacroService
    MacroService -->|{{engramSummaries}}| Prompt[最终 Prompt]
```

### 关键组件

1.  **Injector (注入器)**: 监听酒馆事件，阻塞生成流程，协调预处理和召回。
2.  **Preprocessor (预处理器)**: 利用 LLM 分析用户意图，生成更适合检索的 Unified Query。
3.  **EmbeddingService**: 处理文本向量化，支持多并发和批处理。
4.  **RerankService**: 对初步召回结果进行精细化语义重排序。
5.  **StickyCache (黏性缓存)**: 维护短期记忆连贯性，防止同一内容刷屏。

## 3. 召回模式 (Recall Modes)

系统提供四种预设模式，以适应不同用户的硬件条件和 API 预算：

| 模式 | 组件 | 特点 | 适用场景 |
| :--- | :--- | :--- | :--- |
| **Full (顶配)** | 预处理 + Embed + Rerank | 效果最优，成本最高，延迟最高 | 追求极致体验，Token 充足 |
| **Standard (标准)** | Embed + Rerank | 性价比平衡，由 Embed 广撒网，Rerank 精选 | 大多数用户的首选 |
| **Light (轻量)** | 仅 Embedding | 速度最快，成本低，仅需向量模型 | 本地运行或预算有限 |
| **LLM Only (暴力)** | 纯 LLM 筛选 | 无需向量模型，利用 LLM 上下文筛选 (待实现) | 无法部署向量模型的环境 |

*   **Vector Query Source**:
    *   **Light/Standard**: 由于无预处理，系统自动使用**用户原始输入**作为查询词。
    *   **Full**: 系统优先使用预处理生成的 **Unified Query**。

## 4. 关键技术特性 (Key Features)

### 4.1 Unified Query (统一检索指令)
为了弥补「用户输入」与「剧情文本」的鸿沟，Full 模式下的预处理器会将用户输入转化为四种维度的检索指令：
*   **因果指令**: 查找导致当前动作的前因后果。
*   **视觉指令**: 查找相关的环境和外观描写。
*   **实体指令**: 查找提及的物品或人物背景。
*   **情感指令**: 查找类似的情感交互历史。

### 4.2 混合打分 (Hybrid Scoring)
当同时启用 Embedding 和 Rerank 时，系统使用加权公式计算最终相关度：

```typescript
HybridScore = (1 - α) * EmbeddingScore + α * RerankScore
```
*   **EmbeddingScore**: 基于余弦相似度，擅长捕捉字面和浅层语义相关性。
*   **RerankScore**: 基于 Cross-Encoder 模型，擅长理解深层逻辑关系。
*   **α (Alpha)**: 混合权重，可配置。默认 `0.5` 表示两者同等重要。

### 4.3 黏性系统 (Sticky System)
为了模拟真实记忆的「惯性」（即话题不会在每一轮对话中突变），我们引入了黏性系统。

*   **工作原理**: 记录每一轮的召回结果。
*   **惩罚机制**: 如果某个事件连续多轮被召回，系统会逐渐降低其权重（应用惩罚系数），使其在后续轮次中更容易被新内容替换。
*   **衰减公式**: `AdjustedScore = OriginalScore * (1 - Penalty)`
*   **配置**: 可调整衰减系数 (`decayFactor`) 和最大停留轮数 (`maxStickRounds`)。

### 4.4 可观测性 (Recall Logs)
在开发者面板 (DevLog) 中新增了 **Recall** 标签页，提供：
*   每次召回的完整快照 (Query, Timestamp, Latency)。
*   Embedding 和 Rerank 分数的直观对比条。
*   黏性惩罚状态的可视化。

## 5. 配置指南 (Configuration)

### 5.1 启用 RAG
前往 `API 配置` -> `Engram RAG` 面板：
1.  **启用开关**: 打开 "启用 RAG 召回系统"。
2.  **选择模式**: 推荐从 "Standard" 开始。

### 5.2 向量模型设置
在 `API 配置` -> `向量化` 面板：
*   **源**: 支持 `Transformers.js` (本地) 或 OpenAI 兼容接口。
*   **模型**: 推荐 `text-embedding-3-small` 或本地 `bge-m3`。

### 5.3 Rerank 设置
在 `API 配置` -> `Rerank` 面板：
*   **源**: 通常使用 BGE-Reranker 或 Cohere API。
*   **Top-N**: Rerank 后保留的精选条目数（建议 5-10）。

## 6. 开发接口 (Developer API)

### 核心服务
*   `retriever`: 单例对象，通过 `retriever.search()` 执行召回。
*   `stickyCache`: 单例对象，管理黏性状态。
*   `MacroService`: 负责将召回结果注入到 `{{engramSummaries}}`。

### 宏接口
剧情 AI 的 Prompt Template 中可以使用以下宏接收召回内容：
*   `{{engramSummaries}}`: 包含当前轮次召回并在 `{{engramSummaries}}` 中格式化好的记忆片段。
