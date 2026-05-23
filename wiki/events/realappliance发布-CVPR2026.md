---
type: event
title: RealAppliance 发布（CVPR 2026 Highlight）
created: 2026-05-13
updated: 2026-05-13
tags: [CVPR-2026, 数据集发布, 评测基准, 具身智能, 家电操作]
related: [realappliance, realappliance-bench, checkmanual, dong-hao, 北京大学, 基于说明书的家电操作规划]
sources: ["cvpr-2026-highlight｜让家电「在仿真中运转起来」，北大正式发布realappliance！.md"]
origin_date: 2025-12-01
participants: [dong-hao, 北京大学]
causes: [checkmanual]
effects: [realappliance, realappliance-bench]
significance: high
---
# RealAppliance 发布（CVPR 2026 Highlight）

## 事件概述

北京大学董豪团队正式发布 [[realappliance]] 数据集与 [[realappliance-bench]] 评测基准，论文被 CVPR 2026 接收为 Highlight。该工作标志着具身智能评测从简单桌面操作迈向复杂家电操作的重要节点。

## 背景

前序工作 [[checkmanual]]（CVPR 2025 Highlight）首次提出基于说明书的家电操作研究方向，但仅聚焦于手册理解层面。RealAppliance 将评测推进到「说明书、设备外形、交互功能与程序状态」共同构成的完整操作系统。

## 核心贡献

1. 首次实现 100 个高保真家电资产在说明书、外观、交互机制和程序逻辑四个层面的系统对齐。
2. 构建五任务递进评测体系，覆盖从文档理解到闭环执行的完整链路。
3. 揭示当前主流模型在真实家电操作场景中的能力边界——端到端成功率几乎为零。

## 影响

- 填补了说明书驱动操作规划的标准化评测空白。
- 为家庭服务机器人在复杂家电场景中的可靠部署提供了仿真基础设施。
- 评测结果暗示 [[scaling-law|Scaling Law]] 在具身推理和长链路规划任务上可能面临瓶颈。