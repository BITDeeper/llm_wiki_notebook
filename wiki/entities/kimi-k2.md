---
type: entity
title: Kimi K2
tags: [moonshot-ai, kimi, llm, moe, agent, model, 大语言模型, 编程模型]
related: [qwen3, deepseek-v4, moe, gb200-nvl72, mistral-large-3, moonshot-ai, agentic-coding-token消耗分析, token效率悖论]
created: 2026-01-06
updated: 2026-05-22
sources: ["老黄开年演讲「含华量」爆表！直接拿deepseek、kimi验货下一代芯片.md", "ai三国杀！openai狂卷，deepseek封神，却被mistral偷了家？.md", "花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---

# Kimi K2

由 [[Moonshot AI]]（月之暗面）开发的前沿大语言模型系列，包括 K2 和 K2 Thinking 版本。该模型代表了中国 AI 在长上下文和通用能力上的高水平表现，在 2026 年 CES 上被英伟达选为展示下一代 Rubin 架构性能的核心模型之一，同时也是 [[Mistral AI]] 进入全球市场时必须正视的竞争对手。

## 技术特点

- **MoE 架构**：采用混合专家模型，仅激活少量参数以处理特定任务。
- **交错思考**：支持在调用工具的间隙进行内部推理，这是继 Claude 之后强调 Agentic 能力的新趋势。
- **海量工具调用**：支持数百步稳定的工具调用，对托管服务商的精准支持能力要求极高。
- **原生 4bit 精度**：K2 Thinking 在后训练阶段原生采用 4bit 精度，以支持长序列 RL 扩展，使其更胜任实际服务任务。

## 性能表现

### 硬件与推理效率

- **英伟达实测**：在 [[GB200 NVL72]] 平台上，推理吞吐量飙升至原来的 10 倍，Token 成本降至 1/10。

### 基准测试与对比

- **Anthropic 评测**：在针对全球 16 个前沿模型的行为基准测试中，Kimi K2 Thinking 凭借极低的被误导率，被评为"表现最佳的非美国模型"。
- **对标 Mistral Large 3**：在 [[Mistral AI]] 发布 [[Mistral Large 3]] 的相关报道中，Kimi K2 被频繁用作性能对比的标杆。
    - **基准测试**：在 MMLU、GPOA 等基础任务评测中，Mistral Large 3 与 Kimi K2 127B 保持同一水平。
    - **LMArena**：两者表现互有胜负，常被归为同一梯队。
    - **人工评估**：在通用任务和多语言任务中，Mistral Large 3 对 Kimi K2 取得了 53%–60% 的胜率。

### Token 消耗与效率

在 2026 年 5 月发表的 agentic coding token 消耗研究中，Kimi-K2 在 8 个测试模型中 token 消耗最高，但准确率并不突出：

- 比 GPT-5 多消耗约 **150 万 token**
- 与 Claude Sonnet-4.5 相比，同样比 GPT-5 多消耗约 150 万 token
- 在所有模型都成功的任务子集和所有模型都失败的任务子集中，token 消耗排序基本保持最高

这一表现体现了 [[token效率悖论]]——更高的资源投入并未转化为更好的任务表现。

## 行业影响

- **合作伙伴**：OpenAI 前 CTO 的新产品 Thinker 宣布接入 Kimi K2 Thinking。
- **业界评价**：获得硅谷风投教父 Marc Andreessen 的公开盛赞。