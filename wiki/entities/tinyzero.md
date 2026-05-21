---
type: entity
title: TinyZero
tags: [open-source, model, reinforcement-learning, reasoning]
related: [jiayi-pan, pure-reinforcement-learning, deepseek-r1-zero, qwen, swe-gym]
created: 2026-02-27
updated: 2026-02-27
sources: ["华人天才出走xai：算力竞赛已死，30美元解锁ai自进化！.md"]
---

# TinyZero

TinyZero 是一个开源的轻量级语言模型项目，由前 xAI 研究员 [[jiayi-pan]] 开发。该项目以其极低的训练成本（约 30 美元）和通过 [[pure-reinforcement-learning]] 实现的高级推理能力而闻名，被视为对“算力竞赛”路线的有力挑战。

## 技术细节

- **基础模型**：Qwen2.5-3B。
- **训练框架**：veRL (volcengine RL)。
- **训练方法**：纯强化学习（Pure RL），不依赖大规模监督微调（SFT）。
- **训练任务**：Countdown（倒计时游戏）和 Multiplication（乘法）。

## 核心发现

### 元认知的涌现
TinyZero 最引人注目的特征是它在训练过程中展现出了“元认知”能力。模型在输出最终答案前，会自动生成 `<thinking>` 标签，并在其中进行自我验证和纠错。
- **自我纠错示例**：当计算路径偏离目标时，模型会输出类似 "Wait, that's wrong" 的中间思维链，并立即启动新一轮推演。
- **顿悟现象**：在训练过程中观察到了类似 DeepSeek R1-Zero 的“顿悟”式能力跃迁。

### 性能表现
在 Countdown 任务上，经过纯 RL 训练后，模型的准确率从基础模型的 0% 提升至 80% 以上。

## 意义

TinyZero 证明了高级推理能力（特别是自我验证和逻辑深度）并非大模型的专利。通过高效的算法设计，小模型也能打通逻辑深度的“最后一公里”。这一发现支持了“算法创新优于算力堆砌”的观点，降低了高级 AI 技术的门槛，实现了某种程度上的“技术平权”。