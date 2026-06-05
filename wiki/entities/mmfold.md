---
type: entity
title: MMFold
created: 2026-06-04
updated: 2026-06-04
tags: [ai-for-science, 蛋白质结构预测, 模型, 生物制药]
related: [分子之心, mmdesign, 许锦波, alphafold-3, foldbench]
sources: ["超越国际顶尖模型！分子之心推mmdesign，靶点命中率狂飙至90%.md"]
---
# MMFold

MMFold是[[分子之心]]自研的全原子结构预测模型，作为[[mmdesign|MMDesign]]平台的核心引擎。该模型由[[许锦波]]教授团队开发，在权威基准测试中超越[[alphafold-3|AlphaFold 3]]。

## 性能表现

在[[foldbench|FoldBench]]基准测试（基于172个抗体-抗原界面）中：

- **Top-1预测成功率**：68.6%，显著超越AlphaFold 3等同类顶尖模型
- **高精度结构预测**：成功率实现对其他模型的翻倍式超越（工业界更为看重的指标）

## 技术意义

MMFold对底层结构预测的精准描绘，使MMDesign能够"看得更准"，在庞大的计算空间中更加精准地锁定目标分子。这是MMDesign能在极小规模湿实验验证中实现多靶点高命中率的关键技术支撑。

## 与AlphaFold的关系

[[许锦波]]教授的早期工作为AlphaFold奠定了方法论基础。MMFold可视为该学术脉络的延续和产业化延伸，在抗体-抗原界面预测这一细分领域实现了对AlphaFold 3的超越。