---
type: concept
title: Compaction (对话压缩)
tags: [optimization, context-window, memory, agent]
related: [agent-loop, prompt-caching, codex]
created: 2026-01-24
updated: 2026-01-24
sources: ["openai绝地反击！codex大脑首曝，8亿用户极限架构硬刚claude.md"]
---

# Compaction (对话压缩)

Compaction 是一种特殊的上下文管理技术，用于在对话历史超过模型上下文窗口限制时，保留模型对原始对话的“隐性理解”，而非简单地丢弃旧信息或生成粗糙的摘要。

## 工作原理
当 [[agent-loop]] 运行产生的 Token 数量超过预设阈值时，系统会调用一个特殊的压缩接口（如 OpenAI 的 `/responses/compact`）。

不同于传统的摘要（Summary）——即用一段简短的文本概括长文本——Compaction 会生成一段 `encrypted_content`（加密内容）。这段内容虽然对人类不可读，但模型能够读取并“回忆”起原始对话中的关键细节和逻辑。

## 重要性
在处理长任务（如阅读大型代码库、分析长日志）时，简单的截断或摘要会导致 Agent 遗忘关键信息（如函数定义、变量类型），从而出现“变傻”现象。Compaction 通过保留隐性记忆，确保 Agent 在处理超长任务时依然能保持“智商”在线。

## 与摘要的区别
| 特性 | 普通摘要 | Compaction |
| :--- | :--- | :--- |
| **可读性** | 人类可读 | 人类不可读（加密） |
| **信息密度** | 低（丢失细节） | 高（保留隐性理解） |
| **用途** | 快速浏览 | 模型状态恢复 |

## 应用场景
Compaction 主要应用于需要长期记忆和复杂推理的 AI Agent 场景，例如：
- **编程助手**：在修改多个文件后，仍记得项目初期的架构设计。
- **数据分析**：在处理大量日志后，仍能关联早期的异常事件。