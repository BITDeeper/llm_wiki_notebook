---
type: concept
title: zero-shot
tags: [robotics, ai-capability, generalization]
related: [sudo-r1, pure-simulation-training, embodied-ai-data-dilemma]
created: 2026-04-20
updated: 2026-04-20
sources: ["20亿美金苏度科技具身首秀即大招！0真机数据，zero-shot，跑出98%首次抓取成功率.md"]
---

# Zero-shot (零样本/零示教)

[[Zero-shot]] 指模型在面对从未见过的物体、环境或任务时，无需任何示教、微调或额外训练即可直接执行并达到预期效果的能力。

## 在具身智能中的意义
在机器人领域，Zero-shot 能力意味着高度的通用性和泛化能力，是实现“开箱即用”通用机器人的关键指标。

-   **对比 Few-shot**：主流路线（如 [[Physical Intelligence]]）通常需要 few-shot 示教（针对具体场景进行几次演示或调参），这限制了机器人在新环境下的即时可用性。
-   **苏度科技的实践**：[[苏度科技]] 的 [[#sudo-r1]] 系统声称在复杂抓取任务中实现了接近 100% 的 Zero-shot 成功率，无需针对具体场景做适配。

## 实现难点
要实现高成功率的 Zero-shot，模型通常需要：
1.  **强大的泛化能力**：通过大规模或高质量的预训练数据（如 [[纯仿真训练]]）建立对物理世界的广泛认知。
2.  **准确的物理直觉**：能够理解未见物体的物理属性（如重心、摩擦力）并据此规划动作。