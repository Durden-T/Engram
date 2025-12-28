# 剧情总结功能 API 调研报告

> **调研目的**: 为 Engram 剧情总结模块确定可用的 SillyTavern API  
> **调研日期**: 2024-12-27  
> **状态**: ✅ 调研完成

---

## 1. 调研结论摘要

| 需求 | 可用 API | 来源 | 复杂度 |
|------|----------|------|--------|
| 事件监听 (楼层计数) | `eventSource.on(event_types.MESSAGE_RECEIVED)` | SillyTavern 原生 | 🟢 低 |
| 聊天切换监听 | `eventSource.on(event_types.CHAT_CHANGED)` | SillyTavern 原生 | 🟢 低 |
| 获取聊天记录 | `getChatMessages()` 或 `getContext().chat` | 酒馆助手 / 原生 | 🟢 低 |
| LLM 生成 | `generate()` / `generateRaw()` | 酒馆助手 | 🟢 低 |
| Token 计数 | 酒馆原生 `tokenizers` / 酒馆助手内置 | 原生 | 🟡 中 |
| 世界书操作 | `createWorldbook()` / `getOrCreateChatWorldbook()` | 酒馆助手 | 🟢 低 |
| 设置存储 | `extension_settings` + `saveSettingsDebounced()` | 原生 | 🟢 低 |
| 通知提示 | `toastr.success()` / `toastr.error()` | 原生 (toastr库) | 🟢 低 |

---

## 2. 事件系统 API

### 2.1 核心事件类型

```typescript
// 导入方式
import { eventSource, event_types } from '../../../script.js';

// 关键事件
const EVENTS = {
  MESSAGE_SENT: 'message_sent',           // 用户发送消息后
  MESSAGE_RECEIVED: 'message_received',   // AI消息接收后 ✅ 楼层计数关键
  CHAT_CHANGED: 'chat_id_changed',        // 聊天切换 ✅ 上下文切换关键
  GENERATION_AFTER_COMMANDS: 'GENERATION_AFTER_COMMANDS', // 生成前最佳注入时机
  APP_READY: 'app_ready',                 // 应用就绪
  SETTINGS_LOADED_AFTER: 'settings_loaded_after' // 设置加载完成
};
```

### 2.2 使用示例

```typescript
// 监听楼层变化 (用于计数)
eventSource.on(event_types.MESSAGE_RECEIVED, (messageId) => {
  console.log('新消息接收，楼层:', messageId);
  floorCounter++;
  checkTriggerCondition();
});

// 监听聊天切换 (用于重置状态)
eventSource.on(event_types.CHAT_CHANGED, () => {
  console.log('聊天已切换');
  resetFloorCounter();
});
```

---

## 3. 聊天记录 API

### 3.1 酒馆助手 API (推荐)

```typescript
// 获取消息 - 支持范围查询
const messages = getChatMessages('0-{{lastMessageId}}');
const lastMessage = getChatMessages(-1)[0];
const recentMessages = getChatMessages(-10); // 最近10条

// 消息结构
interface ChatMessage {
  message_id: number;
  name: string;
  role: 'system' | 'assistant' | 'user';
  is_hidden: boolean;
  message: string;
  data: Record<string, any>;
  extra: Record<string, any>;
}
```

### 3.2 原生 API

```typescript
import { getContext } from '../scripts/st-context.js';
import { chat, characters, this_chid } from '../script.js';

// 获取当前聊天数组
const currentChat = chat; // 或 getContext().chat
const currentCharacter = characters[this_chid];
```

---

## 4. LLM 生成 API

### 4.1 酒馆助手 generate API (推荐)

```typescript
// 使用酒馆当前预设生成
const result = await generate({
  user_input: '请总结以下对话...',
  should_stream: false,
  max_chat_history: 0, // 不使用聊天历史
  overrides: {
    chat_history: { prompts: [] } // 清空聊天历史
  }
});

// 使用自定义 API
const result = await generate({
  user_input: '请总结...',
  custom_api: {
    apiurl: 'https://your-api.com',
    key: 'your-key',
    model: 'gpt-4',
    source: 'openai'
  }
});
```

### 4.2 generateRaw - 完全自定义提示词

```typescript
const result = await generateRaw({
  ordered_prompts: [
    { role: 'system', content: '你是一个剧情总结助手...' },
    { role: 'user', content: '请总结以下对话:\n' + chatHistory }
  ],
  custom_api: { ... }
});
```

---

## 5. 世界书操作 API

### 5.1 酒馆助手 API (推荐)

```typescript
// 获取/创建聊天绑定世界书 ✅ 核心API
const worldbookName = await getOrCreateChatWorldbook('current');

// 创建新世界书
await createWorldbook('Engram_Memory_Book', []);

// 获取世界书内容
const entries = await getWorldbook(worldbookName);

// 替换世界书内容
await replaceWorldbook(worldbookName, newEntries);

// 创建新条目
await createWorldbookEntries(worldbookName, [{
  name: '剧情单元_001',
  enabled: true,
  strategy: {
    type: 'constant', // 蓝灯常亮
    keys: [],
    keys_secondary: { logic: 'and_any', keys: [] },
    scan_depth: 'same_as_global'
  },
  position: {
    type: 'before_character_definition',
    role: 'system',
    depth: 0,
    order: 100
  },
  content: '📜 剧情摘要: ...',
  probability: 100,
  recursion: { prevent_incoming: false, prevent_outgoing: false, delay_until: null },
  effect: { sticky: null, cooldown: null, delay: null }
}]);
```

### 5.2 世界书条目结构

```typescript
interface WorldbookEntry {
  uid: number;
  name: string;
  enabled: boolean;
  strategy: {
    type: 'constant' | 'selective' | 'vectorized';
    keys: (string | RegExp)[];
    keys_secondary: { logic: 'and_any' | 'and_all' | 'not_all' | 'not_any'; keys: (string | RegExp)[] };
    scan_depth: 'same_as_global' | number;
  };
  position: {
    type: 'before_character_definition' | 'after_character_definition' | ... | 'at_depth';
    role: 'system' | 'assistant' | 'user';
    depth: number;
    order: number;
  };
  content: string;
  probability: number;
  // ...其他字段
}
```

---

## 6. 设置存储 API

### 6.1 扩展设置存储

```typescript
import { extension_settings, saveSettingsDebounced } from '../extensions.js';

// 读取设置
const engramSettings = extension_settings.engram || {};

// 保存设置
extension_settings.engram = {
  summarizer: {
    triggerMode: 'auto',
    floorInterval: 10,
    apiPresetId: 'default',
    worldBookBindMode: 'chat',
    enablePreview: true
  },
  trimmer: {
    enabled: true,
    tokenThreshold: 2000,
    keepRecentCount: 3
  }
};
saveSettingsDebounced(); // 防抖保存

// 设置将自动同步到 settings.json
```

### 6.2 聊天元数据存储

```typescript
import { chat_metadata, saveChatDebounced } from '../script.js';

// 存储到当前聊天
chat_metadata.extensions = chat_metadata.extensions || {};
chat_metadata.extensions.engram = {
  floorCounter: 15,
  lastSummaryAt: 10
};
saveChatDebounced();
```

---

## 7. 通知系统 API

### 7.1 Toastr 通知

```typescript
// 酒馆已全局加载 toastr
toastr.success('总结完成！', '成功');
toastr.error('LLM 调用失败', '错误');
toastr.warning('Token 超限，即将触发修剪', '警告');
toastr.info('正在处理...', '提示');

// 配置项
toastr.options = {
  closeButton: true,
  progressBar: true,
  timeOut: 5000
};
```

---

## 8. Token 计数 API

### 8.1 酒馆原生 tokenizers

```typescript
// 需要调研具体导入路径
import { countTokens } from '../tokenizers.js';

const tokenCount = countTokens(text);
```

### 8.2 备选方案 - 字符估算

```typescript
// 简单估算 (约 4 字符 = 1 token)
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
```

---

## 9. 预设管理 API (用于 Engram 独立 API 配置参考)

```typescript
// 获取当前预设设置
const preset = getPreset('in_use');

// 预设结构参考
interface Preset {
  settings: {
    max_context: number;
    max_completion_tokens: number;
    should_stream: boolean;
    temperature: number;
    // ...
  };
  prompts: PresetPrompt[];
}
```

---

## 10. 开发建议

### 10.1 推荐技术路线

1. **事件监听**: 使用 SillyTavern 原生 `eventSource`
2. **聊天记录**: 使用酒馆助手 `getChatMessages()`
3. **LLM 生成**: 使用酒馆助手 `generateRaw()` (支持自定义 API)
4. **世界书操作**: 使用酒馆助手 `getOrCreateChatWorldbook()` + `createWorldbookEntries()`
5. **设置存储**: 使用原生 `extension_settings`
6. **通知**: 使用 `toastr`

### 10.2 需要进一步调研

- [ ] Token 计数的具体导入方式和函数签名
- [ ] 酒馆助手的详细版本要求
- [ ] 角色绑定世界书的操作方式 (`rebindCharWorldbooks`)

---

## 11. 参考文档

- [酒馆架构详细说明](./sillyTavern酒馆项目架构详细说明.md)
- [酒馆助手类型定义](../sillytavern以及酒馆助手提供的api和宏/@types%20(3).txt)
- [SillyTavern 源码](file:///Users/macbookair/Desktop/extension_extension_project/SillyTavern-release)

---

*调研完成，可开始开发工作*
