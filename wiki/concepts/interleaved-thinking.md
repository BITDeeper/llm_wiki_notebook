---
type: concept
title: Interleaved Thinking
tags: [agent, reasoning, deepseek, inference, ai]
related: [deepseek-v4, generative-reward-model-grm, kimi-k2, claude-code, anthropic]
created: 2026-04-25
updated: 2026-05-07
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md", "老黄开年演讲「含华量」爆表！直接拿deepseek、kimi验货下一代芯片.md"]
---

# Interleaved Thinking

Interleaved Thinking（交错思考）指 AI 模型在调用外部工具（如搜索、代码执行）的间隙，进行内部思考推理的能力。这是 [[DeepSeek V4]] 在 Tool-Calling 场景下引入的一项关键特性，旨在维持 Agent 在长时程任务中的推理连贯性。

## 技术意义
- **Agentic 成熟度**：这是继 Claude 等闭源模型之后，强调 Agentic（智能体）能力的模型都在跟进的新趋势。
- **逻辑链条**：标志着模型的逻辑链条进一步成熟，能够更好地协调“思考”与“行动”。
- **开源突破**：[[Kimi K2]] Thinking 等模型支持此功能，标志着开源模型在复杂任务规划能力上正在迅速追赶闭源模型（如 o3、Grok 4）。

## 功能描述
在 V3.2 版本中，模型会在每个新用户消息到来时丢弃之前的思考痕迹。而 V4 在工具调用场景下，保留了完整的**跨轮次推理历史**。

这使得 Agent 在处理需要多步交互的长任务时，能够保持连贯的思维链，不会因为对话轮次的增加而“遗忘”之前的推理逻辑或上下文。

## 设计细节
为了保持上下文精简，这种完整的思考历史保留仅限于 Tool-Calling 场景；在普通对话场景下，模型仍会每轮清空思考痕迹。

## 实现挑战
实现稳定的交错思考通常需要强化学习（RL）训练的支持，这对托管服务商的基础设施提出了极高要求。