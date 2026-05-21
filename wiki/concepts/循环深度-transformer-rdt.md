---
type: concept
title: 循环深度 Transformer (RDT)
tags: [ai-architecture, transformer, recurrent, efficiency]
related: [openmythos, deepseekmoe, 潜在空间推理, scaling-law, 系统性泛化, 深度外推]
created: 2026-04-20
updated: 2026-04-20
sources: ["mythos架构被22岁小伙“逆推”开源了！moe和注意力借鉴deepseek.md"]
---

# 循环深度 Transformer (RDT)

[[循环深度-transformer-rdt]] (Recurrent-Depth Transformer) 是一种新型 Transformer 架构变体，其核心思想是不通过堆叠大量不同的网络层来增加深度，而是通过让同一组权重反复循环运行（例如 16 遍）来增加计算深度。

## 工作原理

与传统 Transformer 堆叠上百层不同，RDT 仅使用几层基础结构，通过多次循环迭代来处理输入。为了避免重复计算，RDT 在循环块中引入了混合专家层，利用路由器在每次循环中激活不同的专家子集。

## 优势

- **参数效率**：实验表明，770M 参数的 RDT 模型可以达到 1.3B 参数标准 Transformer 的性能。
- **推理能力**：结合 [[潜在空间推理]]，RDT 能够在内部进行多轮“思考”而不暴露中间过程。
- **泛化能力**：研究显示 RDT 在 [[系统性泛化]] 和 [[深度外推]] 任务上表现优于标准 Transformer，表明其更擅长组合已知知识。

## 技术挑战

循环架构面临的主要挑战是数值稳定性，即随着循环次数增加，梯度可能发散。这通常通过 [[lti-稳定循环注入]] 等技术来解决。