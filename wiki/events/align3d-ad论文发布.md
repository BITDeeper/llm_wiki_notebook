---
type: event
title: Align3D-AD 论文发布
created: 2026-05-11
updated: 2026-05-11
tags: [论文发布, 3d异常检测, 零样本学习]
related: [align3d-ad, 零样本3d异常检测, 香港科技大学广州]
sources: ["港科大(广州)提出align3d-ad：引入rgb引导，破解zero-shot-3d异常检测“域差异”难题.md"]
origin_date: 2026-05-01
participants: [香港科技大学广州, 香港科技大学, 湖南大学]
causes: []
effects: []
significance: medium
---
# Align3D-AD 论文发布

2026年5月，来自[[香港科技大学广州]]、[[香港科技大学]]和[[湖南大学]]的研究团队在 arXiv 上发表了 [[align3d-ad]] 论文（arXiv: 2605.05850），提出了通过 RGB 引导解决[[零样本3d异常检测|零样本3D异常检测]]中[[域差异-3d检测|域差异]]问题的新框架。

## 关键成果

- 在 MVTec3D-AD 上达到 83.0% O-R 和 94.3% O-A，全面超越 PointAD 和 GS-CLIP
- 跨数据集泛化能力强：在 Real3D-AD 上仍达 76.1% O-R
- 推理效率比 GS-CLIP 提升近3倍

## 技术意义

Align3D-AD 代表了零样本3D异常检测从纯3D方法到引入2D语义引导的技术演进路径，其"训练时引导、推理时解耦"的设计哲学具有方法论层面的启发性。

## 待续

- 代码仓库暂未开源
- 在真实工业场景（非学术基准）中的表现有待验证