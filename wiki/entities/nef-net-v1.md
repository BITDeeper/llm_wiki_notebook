---
type: entity
title: "Nef-Net v1"
tags: [ai-model, medical-ai, ecg]
related: [nef-net-v2, 心电全景合成]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# Nef-Net v1

**Nef-Net v1** 是 [[港科广]] 团队早期提出的心电全景合成模型，是 [[NEF-NET v2]] 的前身。

## 局限性
尽管 Nef-Net v1 提出了心电全景图的概念，但在实际应用中存在以下缺陷：
1.  **视角信息混叠**：通过将多视角特征平均融合来建立心脏电生理场，导致波形细节被抹平，尤其是在监督导联较少时。
2.  **缺乏真实场景校准**：未考虑不同设备间的域差以及电极贴放误差和个体解剖差异导致的视角偏移。
3.  **验证不足**：缺乏像 [[Panobench]] 这样密集视角的数据集来系统验证全景合成能力。

这些缺陷促使团队开发了 [[NEF-NET v2]]，引入了 [[View-to-View Transformation]] 和三阶段训练策略。