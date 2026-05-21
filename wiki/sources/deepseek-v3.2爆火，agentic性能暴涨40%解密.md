---
type: source
title: "DeepSeek V3.2爆火，Agentic性能暴涨40%解密"
tags: [deepseek, minimax, agent, reasoning, llm]
related: [deepseek-v3-2, minimax-m2, 交错思维链, 状态漂移]
created: 2025-12-04
updated: 2025-12-04
authors: [新智元]
year: 2025
url: "https://mp.weixin.qq.com/s/XSZvYyUUNYeniORpOQWNRQ"
venue: "新智元"
sources: ["deepseek-v3.2爆火，agentic性能暴涨40%解密.md"]
---

# DeepSeek V3.2爆火，Agentic性能暴涨40%解密

## 概述
本文深入分析了 DeepSeek V3.2 和 MiniMax M2 等 AI 模型在 Agentic（智能体）性能上实现显著提升（最高 40%）背后的核心技术机制——**交错思维链**（Interleaved Thinking）。文章指出，这一机制解决了传统 ReAct 范式中存在的“状态漂移”问题，使模型能够在高扰动环境下保持长程规划的稳定性。

## 核心观点

### 1. 痛点：状态漂移
在复杂的长链路任务（如多轮对话规划）中，AI Agent 容易出现“健忘症”，即逐渐遗忘初始指令或长期规划。这种现象被称为**状态漂移**（State Drift）。这并非模型变笨，而是传统的交互范式（隐式推理）导致的结构性缺陷。

### 2. 机制：交错思维链
为了解决状态漂移，DeepSeek V3.2 提出了 **Thinking in Tool-Use**，MiniMax M2 提出了 **Interleaved Thinking**（交错思维链）。两者本质一致：
- **定义**：在推理和工具调用之间来回交替，并持续保留和复用每一轮的推理状态。
- **作用**：将隐式的思考过程显式化，充当对抗环境噪音的“滤波器”。

### 3. 效果：高扰动环境下的暴涨
MiniMax M2 的数据显示，交错思维链在不同环境下的提升幅度差异巨大：
- **高扰动环境**（如网页浏览 BrowseComp）：性能提升 **40%**（31.4 -> 44.0）。
- **低扰动环境**（如代码 SWE-Bench）：性能提升 **3.3%**（67.2 -> 69.4）。
这表明该机制的核心价值在于对抗真实世界中的噪音和不确定性。

### 4. 落地：基础设施的演进
文章强调了 MiniMax 团队在推动行业标准落地方面的努力（“基建狂魔”）。由于 OpenAI 的 Function Calling 标准最初不支持思考过程，MiniMax 主动向 [[Cline]]、OpenRouter 等主流工具提交 PR，推动 API 协议升级，确保 `reasoning_details` 等字段被正确保留。

## 关键技术细节
- **ReAct 的缺陷**：传统的“观察->思考->行动”在工程实现中往往简化为直接输出指令，导致模型在工具返回大量信息后面临巨大的环境扰动，容易迷失方向。
- **泛化的本质**：从“工具泛化”（学会用更多工具）转向“轨迹泛化”（适应任务轨迹中的各种扰动）。
- **Test-Time Compute**：通过增加测试时的思考步骤来提升性能，符合 OpenAI 提出的测试时计算扩展定律。

## 相关实体
- [[DeepSeek V3.2]]：引入 Thinking in Tool-特性的关键版本。
- [[MiniMax M2]]：交错思维链的主要推动者和开源基建贡献者。
- [[Anthropic]]：最早提出 Extended Thinking 概念的组织。
- [[Kimi K2 Thinking]]：跟随采用该技术的国产模型。