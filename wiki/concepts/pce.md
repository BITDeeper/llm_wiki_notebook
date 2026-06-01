---
type: concept
title: PCE
created: 2026-05-31
updated: 2026-05-31
tags: [评测指标, 计算机视觉, 人体动作恢复]
related: [pva-net, htd-refine, 3d人体动作恢复]
sources: ["cvpr-2026-oral-最佳论文候选-浙大&蚂蚁提出-htd-refine：对齐高阶动力学，让单目人体动作恢复告别“滑步”与“抖动”.md"]
---
# PCE

**PCE**（Percentage of Correct Estimates）是在给定误差阈值下正确预测百分比的评测指标，用于衡量预测值的准确性。

## 在 HTD-Refine 中的应用

PCE 是 [[pva-net]] 加速度预测的核心评测指标。在 EMDB 数据集上，10% 误差阈值下的加速度预测 PCE 达到 **99.6%**，表明 PVA-Net 能够从视频中极其准确地估计关节点的加速度信息。

## 指标含义

- 误差阈值通常设为相对误差的百分比（如 10%）
- PCE 越高，表示预测值落在可接受误差范围内的比例越大
- 与绝对误差指标（如 MPJPE）互补，提供对预测分布的刻画