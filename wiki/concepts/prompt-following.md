---
type: concept
title: Prompt Following
tags: [generative-ai, evaluation-metric, text-to-image]
related: [promptecho, densealignbench]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# Prompt Following

[[prompt-following]] 指文生图模型准确理解并执行文本指令中包含的各类约束条件的能力。

## 核心挑战

早期的文生图模型往往只能捕捉 Prompt 的整体风格或主要对象，而忽略细节。[[prompt-following]] 要求模型能够精确处理：
- **属性绑定**：如“红色的猫”而非其他颜色。
- **空间关系**：如“猫在桌子上”而非“桌子在猫下”。
- **对象计数**：准确生成指定数量的对象。
- **文字渲染**：在图像中生成正确的文字内容。

## 评估与提升

[[densealignbench]] 是专门针对这一能力构建的评测基准。[[promptecho]] 方法的核心目标正是通过高质量的 Reward 信号，利用强化学习来提升模型的 [[prompt-following]] 能力，使其能够处理包含密集描述和复杂语义的指令。