---
type: source
title: "毫无征兆！DeepSeek R1爆更86页论文，这才是真正的Open"
created: 2026-01-08
updated: 2026-01-08
tags: [deepseek, reinforcement-learning, reasoning-model, open-source, distillation]
related: [deepseek-r1, deepseek-r1-zero, 纯强化学习, 模型蒸馏]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/I3re_6qIBufSMkZk-mXOlg"
venue: "新智元"
sources: ["毫无征兆！deepseek-r1爆更86页论文，这才是真正的open.md"]
---

# 毫无征兆！DeepSeek R1爆更86页论文，这才是真正的Open

## 概述
本文详细报道了 DeepSeek 将 R1 论文从 22 页更新至 86 页的重大事件。新论文不仅提供了完全可复现的技术细节，还深入探讨了 [[纯强化学习]]（Pure RL）在推理模型训练中的核心作用，以及 [[模型蒸馏]]（Distillation）技术在能力迁移方面的惊人效果。

## 核心发现

### 1. DeepSeek-R1-Zero 的自我进化
- **纯 RL 的有效性**：[[DeepSeek R1-Zero]] 证明，仅依靠强化学习（无需 SFT）即可让模型涌现出推理能力和 [[反思行为]]。
- **反思行为涌现**：在训练过程中，模型自发学会了使用 "wait", "mistake", "retry" 等词汇进行自我检查和修正。
- **Aha Moment**：特定反思策略（如 "wait"）会在训练的特定阶段（如 8000 步后）突然出现。

### 2. DeepSeek-R1 的性能表现
- **对标 OpenAI o1**：在数学（AIME）、代码（Codeforces）等基准测试中，[[DeepSeek R1]] 与 OpenAI o1-1217 基本持平。
- **成本优势**：训练成本仅约 29.4 万美元，远低于闭源模型的估算成本。
- **长上下文能力**：在 FRAMES 等长文档理解任务上表现出色。

### 3. 推理能力的可迁移性（蒸馏）
- **跨尺度有效性**：通过将 R1 的推理轨迹蒸馏给小模型（1.5B-70B），小模型也能获得接近 R1 的推理能力。
- **数据配方**：RL 阶段使用了 2.6 万道数学题、1.7 万条代码等数据；微调阶段约 80 万条数据。

### 4. 安全与风险控制
- **风险审查机制**：通过关键词匹配和 [[风险审查提示词]]（Risk Review Prompt）调用 [[DeepSeek V3]] 进行辅助审查。
- **拒答率权衡**：启用风控后，拒答率升至约 25%，安全性接近 Claude，但在知识产权类问题上表现较弱。
- **越狱攻击**：开源推理模型面临更高的越狱风险，更依赖外部风险控制系统。

## 关键技术细节
- **失败尝试**：论文复盘了 [[过程奖励模型]]（PRM）和 [[蒙特卡洛树搜索]]（MCTS）在实验中遇到的挑战（如 [[奖励作弊]]）。
- **基础设施**：公开了 vLLM/DualPipe 设置及训练成本拆解（约 198 小时 H800 GPU）。
- **多阶段流水线**：最终确定 RL 与 SFT 缺一不可的混合训练策略。

## 意义
这份更新后的论文被视为开源社区的“教科书”，证明了开源路线不仅能追平闭源 SOTA，还能以极低的成本实现高效的推理能力构建。