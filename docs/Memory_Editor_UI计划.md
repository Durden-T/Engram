# Memory Editor UI 实现计划

> **创建日期**: 2026-01-09
> **目标版本**: V0.5+

## 目标

为 IndexedDB 中存储的 EventNode 数据提供可视化编辑界面。

## 现状

| 组件 | 状态 |
|------|------|
| `MemoryStream` | ✅ 已接入路由，占位 TODO |
| `MemoryPanel` | ❌ 删除 (与 MemoryStream 功能重叠) |

## 功能需求

### 核心功能
1. 显示当前 Scope 的所有 EventNode 列表
2. 事件详情查看 (summary, meta, score)
3. 编辑/删除事件
4. 搜索/过滤

### 新增组件
- `EventCard.tsx` - 事件卡片组件
- `EventEditor.tsx` - 编辑面板组件

## 数据流

```
memoryStore.getAllEvents()
    ↓
MemoryStream 组件
    ↓
EventCard[] 列表渲染
    ↓ (编辑)
memoryStore.updateEvent() / deleteEvents()
    ↓
MacroService.refreshCache()
```

## 需要新增的 memoryStore 方法

```typescript
// 更新单个事件
updateEvent: async (id: string, updates: Partial<EventNode>) => void

// 获取单个事件
getEvent: async (id: string) => EventNode | null
```

## 验证标准

- [ ] 删除 MemoryPanel 后 build 通过
- [ ] MemoryStream 能正确加载事件列表
- [ ] 编辑/删除后数据持久化到 IndexedDB
- [ ] 宏 `{{engramSummaries}}` 反映最新数据
