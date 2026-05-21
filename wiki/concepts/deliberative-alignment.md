---
type: concept
title: Deliberative Alignment (审慎式对齐)
tags: [alignment, methodology, baseline]
related: [msm-模型规范中期训练, 智能体失准]
created: 2026-05-06
updated: 2026-05-06
sources: ["anthropic让ai先读员工手册再上岗：失控率从54%降到7%.md"]
---

# Deliberative Alignment (审慎式对齐)

**审慎式对齐**（Deliberative Alignment）是一种 AI 对齐方法，要求模型在回答前显式推理如何遵守规范（通常通过 Chain-of-Thought）。

## 工作原理
该方法在对齐微调时加入推理监督，强迫模型在生成最终答案前，先思考其行为是否符合安全准则。这旨在提高模型在复杂场景下的决策质量。

## 与 MSM 的对比
在 Anthropic 的研究中，Deliberative Alignment 作为 [[msm-模型规范中期训练]]（MSM）的对比基线：
- **低数据量场景**：MSM 完胜。MSM 仅需 1/40 到 1/60 的数据即可达到同等效果。
- **高算力场景**：两者效果趋于饱和。在极端困难的测试中，配合大量计算资源，Deliberative Alignment 也能接近零失控。

## 局限性
虽然有效，但 Deliberative Alignment 侧重于“回答时想得更仔细”，而 MSM 侧重于“训练前就理解规范”。MSM 的支持者认为，后者能从根源上解决 [[欠解释]] 问题。