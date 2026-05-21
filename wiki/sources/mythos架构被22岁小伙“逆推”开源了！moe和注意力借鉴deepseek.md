---
type: source
title: "Mythos架构被22岁小伙“逆推”开源了！MoE和注意力借鉴DeepSeek"
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/bJ01FQge3WRUQMIRZ5FtDQ"
venue: 量子位
tags: [ai-architecture, open-source, deepseek, anthropic, transformer, moe]
related: [openmythos, kye-gomez, 循环深度-transformer-rdt, deepseekmoe, 潜在空间推理, scaling-law]
created: 2026-04-20
updated: 2026-04-20
sources: ["mythos架构被22岁小伙“逆推”开源了！moe和注意力借鉴deepseek.md"]
---

# Mythos架构被22岁小伙“逆推”开源了！MoE和注意力借鉴DeepSeek

本文报道了开发者 [[Kye Gomez]] 开源 [[OpenMythos]] 项目的事件。该项目旨在复现据传被 Anthropic 封印的 [[Mythos]] 架构。OpenMythos 实现了一种 [[循环深度-transformer-rdt]] (RDT)，通过混合专家（MoE）路由机制和权重共享循环，挑战了传统的 [[scaling-law]]。

## 核心发现

文章指出，RDT 架构通过让同一组权重反复循环运行（最多16遍），并结合 [[DeepSeek]] 的 MoE 设计思路，仅用 770M 参数就达到了 1.3B 参数标准 Transformer 的效果。这表明“堆循环”可能比“堆参数”更高效。

## 技术细节

- **架构设计**：结合了 MoE（提供知识广度）和循环机制（提供推理深度）。
- **稳定性**：引入了 [[lti-稳定循环注入]] 机制，防止多轮迭代发散。
- **推理范式**：采用 [[潜在空间推理]]，全程不生成中间 token，与 Chain-of-Thought 截然不同。

## 实验证据

引用了 [[俄亥俄州立大学]] 和 [[UCSD]]/[[Together AI]] 的研究，证明循环 Transformer 在 [[系统性泛化]] 和 [[深度外推]] 任务上表现优于标准 Transformer，暗示当前模型的瓶颈在于知识组合而非记忆。