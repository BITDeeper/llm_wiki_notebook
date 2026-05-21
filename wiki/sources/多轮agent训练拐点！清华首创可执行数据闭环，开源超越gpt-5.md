---
type: source
title: "多轮Agent训练拐点！清华首创可执行数据闭环，开源超越GPT-5"
tags: [agent, reinforcement-learning, data-quality, eigendata, qwen]
related: [eigendata, tau-squared-bench, 可执行数据闭环, credit-assignment-failure, qwen3-235b-a22b-2507]
created: 2026-02-17
updated: 2026-02-17
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/rLEyHsIy0OufDyhIQ2SwHg"
venue: "新智元"
sources: ["多轮agent训练拐点！清华首创可执行数据闭环，开源超越gpt-5.md"]
---

# 多轮Agent训练拐点！清华首创可执行数据闭环，开源超越GPT-5

## 摘要
本文报道了清华大学团队提出的 [[eigendata]] 系统，该系统通过“可执行数据闭环”解决了多轮 [[agent]] 训练中的信号失真问题。在 [[tau-squared-bench]] 基准测试中，使用该技术训练的开源模型 [[qwen3-235b-a22b-2507]] 在 Telecom 任务上达到了 98.3% 的 Pass¹ 指标，显著超越 GPT-5 (62.5%)。

## 核心观点
文章指出，多轮 Tool-Using Agent 的性能瓶颈已从模型规模转向训练信号的质量。主要问题包括：
1.  **合成数据的不可执行性**：文本层面合理的轨迹在真实环境中往往失败，导致模型学习到 [[surface-level-policy]]。
2.  **[[credit-assignment-failure]]**：用户模拟器的不稳定行为导致整段交互的 Reward 归零，使得强化学习无法正确归因失败来源。

## 解决方案
[[eigendata]] 系统通过以下三个核心组件重构了训练流程：
1.  **可执行数据闭环**：通过“生成→执行→验证→修正”的循环，确保所有训练数据在真实环境中可跑通。
2.  **用户模型稳定化**：先训练用户模拟器，消除其行为噪声，再进行 Agent 的强化学习。
3.  **Verifier-based Reward**：使用代码级验证函数替代主观的 Reward Model，提供可审计的奖励信号。

## 实验结果
-   **Telecom 任务**：Qwen3 达到 98.3% Pass¹，超越 GPT-5 和 Gemini 3.0 Pro。
-   **Airline 任务**：Qwen3 达到 73.0% Pass¹，与 Gemini 持平。
-   **消融实验**：证明移除验证器或用户模型稳定化步骤会导致性能显著下降。

## 意义
这项工作标志着 Agent 训练从“模型为中心”转向“数据和系统为中心”的工程范式转移，证明了在高质量、可验证的训练信号下，开源模型可以在复杂任务中超越闭源 SOTA。