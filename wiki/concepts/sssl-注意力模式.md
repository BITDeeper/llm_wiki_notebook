---
type: concept
title: SSSL 注意力模式
tags: [architecture, attention-mechanism, optimization]
related: [预训练十大发现, transformer]
created: 2026-03-15
updated: 2026-03-15
sources: ["卡帕西630行代码炸出81个智能体，4天协作跑2333次实验，公布预训练十大发现.md"]
---

# SSSL 注意力模式

**SSSL (Short-Short-Short-Long)** 是一种特定的注意力窗口模式，被 [[autoresearch-at-home]] 中的智能体群体独立发现并验证为最优架构之一。

## 结构
该模式由 3 个短上下文层和 1 个长上下文层循环组成。
- **优势**：平衡了计算效率与上下文需求。过多的长层会浪费计算资源在全局注意力上，过少则导致跨 token 信息缺失。
- **发现过程**：这一模式并非人工预设，而是智能体群体在大量实验中收敛得出的结果，体现了“简单即美”的原则。