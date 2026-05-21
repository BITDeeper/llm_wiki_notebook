---
type: source
title: "延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈"
tags: [multi-agent, distributed-systems, consensus, optimization, ai-engineering]
related: [advaita-research, agentic-consensus, aegean, jialin-li, decision-flip, quorum-fast, streaming-consensus]
created: 2026-02-07
updated: 2026-02-07
authors: ["LRST", "Jialin Li", "Stephanie Yu"]
year: 2026
url: "https://mp.weixin.qq.com/s/IroIhb02L6OZo--u2ri6Ng"
venue: "新智元"
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# 延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈

## 概述
本文报道了 [[advaita-research]]（[[hetu]]）发布的关于多智能体系统共识机制的研究论文。该研究指出当前多智能体 AI 系统缺乏明确的“共识语义”，导致高延迟和高计算成本。通过引入 [[agentic-consensus]]（智能体共识）框架和 [[aegean]] 协议系统，在保持准确率（accuracy）波动在 2.5% 以内的前提下，实现了最高 **20×** 的端到端延迟下降、**11×** 的 P99 尾延迟改善以及 **4.4×** 的 token 成本削减。

## 核心观点
研究认为，多智能体推理的性能瓶颈不在于模型能力，而在于缺乏可操作的共识语义。当前系统（如 OpenAI 的强化单体、Google DeepMind 的搜索式推理、Anthropic 的启发式辩论）主要关注“如何更好地推理”，而忽视了“何时停止”这一生产级关键问题。

## 关键技术机制
论文提出的 [[aegean]] 系统包含三个核心机制：
1.  **[[quorum-fast]]**：不再等待所有 agent 完成，只要达到法定人数即推进决策，消除“最慢 agent 决定整体延迟”的瓶颈。
2.  **稳定性窗口（β）**：要求一致性必须在时间维度上持续存在，以过滤 [[decision-flip]]（暂时性一致）现象。
3.  **[[streaming-consensus]]**：在 token 生成过程中持续检测共识状态，一旦满足稳定条件立即终止剩余生成。

## 关键数据
-   **决策不稳定**：在 MMLU 测试中，100 个样本里出现了 64 次 [[decision-flip]]。
-   **延迟改善**：在 AIME 数据集上，P99 延迟改善约 **11×**，平均延迟改善约 **20×**。
-   **成本降低**：在 GSM8K 数据集上，Token 消耗减少 **4.4×**（约 1.3K vs 5.7K）。

## 意义
该研究将多智能体推理从 prompt 与 workflow 设计层面，重新拉回到系统设计和工程层面。它提出了一个工程判断标准：如果一个多智能体系统无法明确回答“何时算达成一致、何时可以安全停止、延迟由谁决定”，那它在工程上仍停留在 workflow，而非真正的分布式系统。