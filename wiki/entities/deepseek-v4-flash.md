---
type: entity
title: DeepSeek V4 Flash
tags: [deepseek, llm, model-variant, 大模型, moe, 万亿参数]
related: [deepseek-v4, deepseek-v4-pro, agentic-coding, orbit, rl-post-training]
created: 2026-04-25
updated: 2026-05-28
sources: ["不愧是deepseek！v4一手实测：推理编程能力给到夯，熟悉的d老师也回来了.md", "全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---

# DeepSeek V4 Flash

[[DeepSeek V4 Flash]] 是 [[DeepSeek V4]] 系列中的轻量快速版本，为 1T 参数的 MoE 架构大语言模型。虽然在世界知识储备方面稍逊于 [[DeepSeek V4 Pro]]，但展现出了接近的推理能力，且在编程场景中不输 Pro。

## 实测表现

- **创意视觉任务**：在"鹈鹕骑自行车"的 SVG 绘图任务中，Flash 模式在画面颜色和运动轨迹呈现上优于 Pro 模式，显示出其在创意任务上的潜力。
- **经济性**：由于模型参数和激活更小，V4-Flash 能够提供更加快捷、经济的 API 服务。

## 适用场景

适合对响应速度和成本敏感的任务，以及需要快速生成创意内容或原型的场景。

## 在 Orbit 框架中的验证

在 [[orbit]] 框架的验证实验中，V4 Flash 在单台 8×B200 上完成了 100+ step 的 RL 后训练。

- **硬件：** 单台 8×B200
- **精度：** FP4 base + BF16 adapter
- **训练步数：** 100+ step
- **结果：** reward、eval accuracy、pass@k 整体上升，train-rollout log-prob diff 保持在稳定区间，显存可控。

与 [[kimi-k2-6|Kimi-K2.6]] 实验结果趋势一致，进一步验证了 [[adapter-first-rl|Adapter-first]] 路径的通用性。