---
type: source
title: "Claude爆火研究漏引华人团队成果，已挨打立正道歉"
tags: [anthropic, 可解释性, 情绪回路, 学术引用, 漏引事件]
related: [anthropic, chenxi-wang, 情绪回路, 情绪生成-vs-情绪感知, sev数据集]
created: 2026-04-07
updated: 2026-04-07
authors: ["听雨"]
year: 2026
url: "https://mp.weixin.qq.com/s/Qjupg0i4yjNOi5MqfYVejA"
venue: "量子位"
sources: ["claude爆火研究漏引华人团队成果，已挨打立正道歉.md"]
---

# Claude爆火研究漏引华人团队成果，已挨打立正道歉

## 概述

本文报道了 Anthropic 关于 Claude 内部“情绪机制”的研究博客遗漏引用华人团队首篇系统性工作的事件。经 MBZUAI 研究生 [[Chenxi Wang]] 沟通指出，Anthropic 已承认疏忽并更新博客，补充引用了相关论文。

## 核心事件

Anthropic 于 4 月 2 日发布论文，研究了 Claude 内部的“情绪机制”，发现了 171 种“情绪向量”。然而，该博客最初遗漏了 [[Chenxi Wang]] 等人于去年 10 月发表的论文《LLMs会“感觉”吗？情绪回路的发现与控制》。

Chenxi Wang 指出，这是首篇系统研究 LLMs 情绪产生内部机制的论文，与 Anthropic 的研究高度相关。经邮件沟通，Anthropic 通讯作者 Jack Lindsey 承认了这一疏忽，并更新了博客，在“相关工作”部分突出引用了该工作。

## 关键区别：情绪生成 vs. 情绪感知

此次漏引的根本原因在于对研究范畴的界定不同。Anthropic 最初认为先前工作有重叠，但 [[Chenxi Wang]] 指出：
- **情绪感知**：先前被引用的工作多关注 LLM 如何识别输入文本中的情绪。
- **情绪生成**：[[Chenxi Wang]] 团队及 Anthropic 的工作关注的是 LLM 自身产生情绪的内部机制。

## 华人团队的研究发现

该研究解答了三个核心问题：
1.  **存在性**：模型内部确实编码了稳定的、与具体语义无关的情绪表示。
2.  **形式**：每层网络中只有少数神经元（MLP层）和注意力头（Attn层）在主导情绪表达。
3.  **控制**：通过构建跨层的 [[情绪回路]]，实现了 99.65% 的情绪表达准确率。

## 实验细节

- **主实验模型**：[[LLaMA-3.2-3B-Instruct]]
- **验证模型**：[[Qwen2.5-7B-Instruct]]
- **数据集**：[[SEV 数据集]]（覆盖 8 种日常场景，严禁使用情绪词）
- **关键发现**：只需调节 2-4 个神经元和 1-2 个注意力头即可精准控制情绪。

## 事件结果

双方达成友好共识。Anthropic 道歉并补引；[[Chenxi Wang]] 也称赞 Anthropic 在情绪表征的功能作用、后训练演变等方面做出了独立贡献。