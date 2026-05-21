---
type: source
title: "大模型自信且短视！Next-ToBE破除Next Token预测诅咒 | ICLR'26"
created: 2026-05-10
updated: 2026-05-10
tags: [llm, 训练范式, 数学推理, iclr, 论文解读]
related: [next-tobe, next-token-prediction, future-tokens-hit-rate, 华东师范大学, 复旦大学]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/xtEsIzo4jeFAaI5dCG0G_w"
venue: "新智元 / ICLR 2026"
sources: ["大模型自信且短视！next-tobe破除next-token预测诅咒-iclr'26.md"]
---

# 大模型自信且短视！Next-ToBE破除Next Token预测诅咒

本文报道了华东师范大学与复旦大学团队在 ICLR 2026 上发表的一项工作，该研究针对大模型（LLM）的标准训练范式 [[next-token-prediction]]（NTP）提出了批评与改进。研究指出，NTP 虽然开启了 LLM 时代，但其“短视”的特性（每一步仅预测下一个 token）限制了模型在数学推理、代码生成等长程任务上的表现。

## 核心发现：模型被压抑的“前瞻性”

文章指出，大模型并非不具备“想远一点”的能力，而是被 NTP 的 one-hot 目标分布（将 100% 概率押在下一个 token）所压制。研究团队提出了 **[[future-tokens-hit-rate]]**（FtHR）指标，证明模型当前的预测分布中实际上已经隐含了对未来 token 的预判，且这种预判与生成质量正相关。

## 解决方案：Next-ToBE

为了打破这一诅咒，团队提出了 **[[next-tobe]]**（Next Token-Bag Exploitation）方法。这是一种新的训练目标函数，不改变模型结构，仅修改损失函数：
- **软目标分布**：不再只预测下一个 token，而是让模型在预测当前 token 的同时，兼顾未来一段窗口内 token 的分布。
- **时空结构化加权**：利用随机游走等方法，根据时序和语义关系对未来 token 进行加权。
- **确定性分配调节**：通过牺牲对当前步骤的绝对置信度（适度引入不确定性），换取全局推理能力的提升。

## 实验结果

在基于 [[Qwen2.5-Math]] 和 [[Llama3.1-8B-Instruct]] 的 36 组实验中，Next-ToBE 在 35 组中取得了最优结果。研究发现，模型预测置信度与推理准确率之间呈现倒 U 型关系（A 形曲线），即“适度的不确定性”比“极度自信”更有利于推理。

## 意义

这项工作挑战了“确定性即智慧”的传统观念，表明通过优化训练目标（而非单纯扩大模型规模）可以有效解锁 LLM 的潜在推理能力。