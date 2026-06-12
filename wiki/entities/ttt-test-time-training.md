---
type: entity
title: TTT（Test-Time Training）
created: 2026-06-09
updated: 2026-06-09
tags: [序列模型, 测试时训练, 记忆增强, NeurIPS-2024]
related: [prism, gdn-gated-deltanet, 线性注意力, 参数化记忆]
sources: ["rss/当线性注意力学会「写入前思考」：并行化的多步记忆写入.md"]
origin_date: 2024-01-01
---
# TTT（Test-Time Training）

**TTT**（Test-Time Training）是由 Sun 等人提出的序列建模范式（NeurIPS 2024），其核心思想是将记忆状态从线性矩阵 S 升级为 MLP 的权重矩阵，每来一个 token 对 MLP 权重做多步梯度下降（multi-step GD），逐步精炼写入内容。

## 核心机制

TTT-MLP 的状态是两层网络 W₁、W₂。展开 W₂ 的梯度更新，每步具有「步长 × 残差 × 方向」的结构模式：

- **步长：** 每个 hidden unit 的 activation，控制写入强度
- **残差：** 当前还没写好的部分，随更新逐步递减
- **方向：** 写入方向，因 W₁ 每步更新所以方向每步不同

多步残差递减提供优化深度（depth），W₁ 多行提供多个方向提供表达宽度（width / rank-L）。

## 优势与代价

### 优势

- 实现了 rank-L 的深度写入，显著超越 rank-1 的[[线性注意力]]模型
- 建模质量接近 Transformer

### 代价

- 多步 GD 打破了历史状态无关前提：每步梯度依赖当前权重，权重又依赖前一步
- 无法应用 parallel scan，每个 token 必须独立串行跑梯度下降循环
- HBM↔SRAM 数据搬运次数从 O(1) 退化到 O(N)
- 实测比[[gdn-gated-deltanet|GDN]]慢 174 倍

## 与 PRISM 的关系

[[prism|PRISM]] 的核心贡献在于分析了 TTT-MLP 的梯度结构，揭示其高表达力源于「步长 × 残差 × 方向」模式，并在线性状态上显式重建该模式，同时通过 anchor 代理和闭合式预计算消除串行依赖，实现 TTT 级质量 + GDN 级速度。

## 参考文献

- Sun et al. "Learning to (Learn at Test Time): RNNs with Expressive Hidden States." NeurIPS 2024.