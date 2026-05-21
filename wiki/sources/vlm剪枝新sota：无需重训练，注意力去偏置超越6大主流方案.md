---
type: source
title: "VLM剪枝新SOTA：无需重训练，注意力去偏置超越6大主流方案"
tags: [ai-research, pruning, vlm, efficiency]
related: [shanghai-university, nankai-university, zeng-dan, attention-debiasing, visual-token-pruning]
created: 2026-01-30
updated: 2026-01-30
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/Juv3SUYbOhl9puzF8wp1rg"
venue: "新智元"
sources: ["vlm剪枝新sota：无需重训练，注意力去偏置超越6大主流方案.md"]
---

# VLM剪枝新SOTA：无需重训练，注意力去偏置超越6大主流方案

## 概述
本文报道了上海大学曾丹团队联合南开大学研究人员在视觉-语言模型（VLM）效率优化领域的最新突破。研究指出，现有的基于注意力机制的剪枝方法普遍受到“位置偏置”和“Padding 异常”的干扰，导致剪枝效果不佳。团队提出了一种无需重新训练模型的[[注意力去偏]]方法，通过修正注意力权重中的结构性偏置，显著提升了剪枝性能。

## 核心发现

### 注意力机制的缺陷
研究揭示，VLM 中的注意力机制并非语义重要性的可靠指标，主要受两类偏置影响：
1.  **位置偏置**：模型倾向于关注序列后部的 token（通常对应图像下方），这与内容语义无关。
2.  **Padding 异常**：填充区域因隐藏状态异常激活而获得高注意力，常被错误保留。

### 解决方案
- **趋势拟合去偏**：通过拟合注意力随位置变化的趋势曲线，修正位置偏置。
- **抑制 Padding**：在剪枝阶段显式抑制 padding token 的影响。
- **即插即用**：无需重训练，不依赖特定剪枝策略，可直接集成到现有方法中。

## 实验结果
该方法在 6 种主流剪枝方案（[[FastV]], [[PyramidDrop]], [[SparseVLM]], [[HiMAP]], [[TokenCarve]], [[iLLaVA]]）上均表现出一致的性能提升。
- 在 10 个图像和 3 个视频基准测试中验证了有效性。
- 在激进剪枝（token 预算紧张）场景下效果尤为明显。
- 可视化显示，去偏后模型能更准确地聚焦于目标物体及关键细节，减少无关背景干扰。

## 意义
该研究为多模态模型在移动端部署、边缘计算和实时视觉理解等资源受限场景的应用提供了新的优化思路，强调了在利用模型内部信号（如注意力）时进行去偏处理的重要性。

## 相关链接
- 论文链接：https://arxiv.org/abs/2508.17807
- 代码仓库：https://github.com/intcomp/attention-bias