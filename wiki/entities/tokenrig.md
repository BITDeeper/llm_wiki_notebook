---
type: entity
title: TokenRig
tags: [3d生成, 绑定, 自回归模型, transformer, vast]
related: [skintokens, grpo, fsq-cvae, 蒙皮权重, vast]
created: 2026-04-22
updated: 2026-04-22
sources: ["3d生成告别「穿模」噩梦！vastx清华将蒙皮权重token化，统一生成骨骼与权重，grpo微调形变平滑.md"]
---

# TokenRig

**TokenRig** 是由 [[VAST]] 提出的统一自回归生成框架，用于 3D 模型的自动绑定。它基于 [[SkinTokens]] 技术，将骨骼生成和蒙皮预测整合到一个统一的流程中。

## 核心特性

### 统一自回归生成
TokenRig 利用 [[Transformer]] 架构，将整个绑定过程建模为一个序列生成过程：
- **前半部分**：生成骨架的拓扑结构和位置。
- **后半部分**：生成对应的 [[蒙皮权重]]。

这种统一建模方式使模型能够更好地理解“骨骼位置”与“皮肤形变”之间的语义关联，避免了传统分离式方法中缺乏全局感知的问题。

### 强化学习微调
为了提升模型在未见过的或非常规 3D 资产上的表现，TokenRig 引入了 [[GRPO]]（群组相对策略优化）算法进行微调。通过设计基于几何与物理规则的奖励函数（如体积关节覆盖率、形变平滑度等），模型在无标注数据上实现了自我完善。

## 性能表现

- **骨骼预测**：性能提升了 17%～22%。
- **泛化能力**：在复杂或非常规的 3D 资产上表现出更强的鲁棒性，生成的动画形变更加平滑自然。

## 意义

TokenRig 框架通过联合生成和强化学习优化，显著提升了 AI 自动绑定的质量，使其能够满足实际动画生产线对高保真和抗扭曲的要求。

## 相关链接

- 项目主页：https://zjp-shadow.github.io/works/SkinTokens/
- HuggingFace Demo：https://huggingface.co/spaces/VAST-AI/SkinTokens