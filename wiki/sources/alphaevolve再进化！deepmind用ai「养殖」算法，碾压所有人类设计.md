---
type: source
title: "AlphaEvolve再进化！DeepMind用AI「养殖」算法，碾压所有人类设计"
tags: [deepmind, 算法进化, 博弈论, ai-for-science]
related: [google-deepmind, gemini, alphaevolve, vad-cfr, shor-psro, 代码即基因组, 可利用度]
created: 2026-02-27
updated: 2026-02-27
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/KB66x5hlNa1W-Mbp5GjN3g"
venue: "新智元"
sources: ["alphaevolve再进化！deepmind用ai「养殖」算法，碾压所有人类设计.md"]
---

# AlphaEvolve再进化！DeepMind用AI「养殖」算法，碾压所有人类设计

## 概述
本文报道了 [[google-deepmind]] 发布的 [[alphaevolve]] 框架，该框架利用 [[gemini]] 作为遗传算子，将算法源代码视为基因组进行自然选择。AlphaEvolve 成功进化出了 [[VAD-CFR]] 和 [[SHOR-PSRO]] 等新型博弈论算法，这些算法采用了人类研究者从未尝试过的反直觉机制，在 11 个测试博弈中全面碾压人类几十年设计的最优方案（如 CFR+, DCFR）。

## 核心发现
- **范式转换**：算法设计从“人类直觉+数学推导”转变为“自动化搜索+代码进化”。
- **反直觉机制**：AI 发明的算法学会了“局势混乱时忘掉旧经验”、“发现好招时加倍下注”以及“训练和考试使用不同策略”等人类难以想象的逻辑。
- **性能碾压**：在几乎所有测试博弈场景中，进化出的算法在 [[可利用度]] 指标上均优于人类基线。

## 技术细节
- **代码即基因组**：将算法源代码作为进化的基本单位，利用 LLM 进行语义层面的变异（如重写逻辑、注入控制流）。
- **适应度函数**：使用博弈论中的硬核指标 [[可利用度]]（Exploitability）来筛选算法，越低越好。
- **目标领域**：主要针对 [[不完全信息博弈]] 中的两大基石算法家族：[[CFR]] 和 [[PSRO]]。

## 意义
这标志着 AI 不再仅仅是执行人类编写的算法，而是开始具备“发明”算法的能力。DeepMind 计划将此框架扩展到深度强化学习智能体的完整设计中。