---
type: entity
title: DeepSeek-R1-Distill-Llama-8B
created: 2026-06-03
updated: 2026-06-03
tags: [大模型, deepseek, 蒸馏模型]
related: [sft底层机理-交互视角, 交互机理]
sources: ["吃透大模型sft底层机理：终结实践争议，规避无效算力.md"]
---
# DeepSeek-R1-Distill-Llama-8B

DeepSeek-R1-Distill-Llama-8B 是 DeepSeek 推出的基于 Llama 架构的 8B 参数蒸馏模型。在 [[sft底层机理-交互视角|SFT 交互机理研究]] 中，该模型被用作实验示例，展示了如何使用少量 AND-OR [[交互机理]] 来解释模型在给定 prompt 下预测目标 token 的置信度。

例如，论文展示了该模型在预测 token「transformer」时，「generative」和「pre-trained」之间存在 AND 交互机理——当二者同时出现时，会提高模型生成目标 token 的置信度。