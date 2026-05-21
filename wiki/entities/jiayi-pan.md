---
type: entity
title: Jiayi Pan
tags: [researcher, ai, reinforcement-learning, xai]
related: [tinyzero, swe-gym, xai, grok-4, pure-reinforcement-learning]
created: 2026-02-27
updated: 2026-02-27
sources: ["华人天才出走xai：算力竞赛已死，30美元解锁ai自进化！.md"]
---

# Jiayi Pan

Jiayi Pan (潘嘉毅) 是人工智能领域的研究员，前 xAI Grok 4 团队核心成员。他以开发低成本、高效率的 AI 推理模型而闻名，是 [[tinyzero]] 和 [[swe-gym]] 的开发者。

## 职业经历

### 早期经历与教育
- **本科**：毕业于密歇根大学，获得计算机科学与电子计算机工程双学位（2023年）。
- **博士**：进入加州大学伯克利分校攻读博士，研究方向为语言模型与视觉/机器人学的结合。

### xAI 时期 (2025.05 - 2026.02)
- 加入 xAI 的 Reasoning 团队，成为 [[grok-4]] 开发的核心成员之一。
- 在职期间，专注于强化学习模块的优化，推动模型从简单预测向自我验证演进。
- 2026年2月26日宣布离职。

## 核心贡献

### SWE-Gym
在伯克利期间早期开发的项目，将软件工程基准 SWE-bench 转化为强化学习环境。该环境要求 AI 不仅能读懂代码，还要生成可通过测试的 Patch，旨在让 AI 学会修正代码。

### TinyZero
2025年宣布开源的项目。基于 Qwen2.5-3B 模型，使用 [[pure-reinforcement-learning]] 在极低成本（约30美元）下训练，成功复现了类似 DeepSeek R1-Zero 的自我推理和纠错能力。该工作挑战了单纯依赖算力堆砌的 Scaling Law 路线。

## 技术理念
Jiayi Pan 的研究脉络显示出一条清晰的技术路径：让 AI 学会改代码（[[swe-gym]]） -> 学会推理（[[grok-4]]） -> 学会自我纠错（[[tinyzero]]）。这引发了业界关于 AI 是否能通过这些组件组合实现“自我进化”的讨论。

## 相关链接
- [GitHub - SWE-Gym](https://github.com/SWE-Gym/SWE-Gym)
- [GitHub - TinyZero](https://github.com/Jiayi-Pan/TinyZero)