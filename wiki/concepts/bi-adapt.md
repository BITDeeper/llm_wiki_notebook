---
type: concept
title: Bi-Adapt
created: 2026-06-07
updated: 2026-06-07
tags: [具身智能, 双臂操作, 泛化, ICRA, 少样本学习]
related: [roboscience, shao-lin, dro-grasp, vloa架构, sim2real]
sources: ["连续入选icra最佳论文，roboscience机器科学如何突破具身智能泛化瓶颈？.md"]
---
# Bi-Adapt

Bi-Adapt（Few-Shot Bimanual Adaptation for Novel Categories of 3D Objects via Semantic Correspondence）是[[shao-lin|邵林]]团队提出的用于高效学习通用双臂操作的新型框架，入围ICRA 2026机器人操作与运动方向最佳论文奖提名（Finalist）。

## 解决的问题

双臂操作远比单臂抓取复杂：两只手不仅要分别判断接触点和动作方向，还必须彼此配合。传统方案要么针对不同物体人工设计动作（难以覆盖复杂几何结构），要么依赖大规模数据训练（成本高昂）。Bi-Adapt解决的核心问题是：**将已学会的双臂操作经验迁移到没见过的新物体类别上**。

## 技术路线

Bi-Adapt将跨类别双臂操作分解为三步曲：

1. **建立操作经验库**：在已知类别上记录成功操作时两只夹爪的接触位置、运动方向和协同方式。关键设计是将双臂动作拆为两个相互依赖的模块，训练时采用反向数据流。
2. **语义对应迁移**：借助视觉基础模型（DIFT，即diffusion feature）做跨类别语义对应，将已知物体的成功接触点映射到新物体的候选接触点。
3. **少样本交互适配**：通过少量试错执行候选接触点，根据成功/失败反馈微调模型，过滤错误接触点。

## 性能表现

- 仿真测试：在五类新类别双臂操作任务上成功率达到59%—70%，显著超过启发式规则、M-Where2Act、DualAfford等基线方法
- 真实机器人：完成展开、打开、取盖等任务，验证了跨类别操作能力从仿真到真实环境的可迁移性

## 在VLOA中的定位

Bi-Adapt为[[vloa架构|VLOA]]架构补齐了跨类别操作泛化的关键底层能力。