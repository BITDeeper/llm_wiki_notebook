---
type: concept
title: "On-the-fly Calibration"
tags: [medical-ai, training-strategy, calibration]
related: [nef-net-v2, device-calibration, 心电全景合成]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# On-the-fly Calibration

**On-the-fly Calibration**（在线校准）是 [[NEF-NET v2]] 模型在推理阶段采用的一种自适应技术，旨在解决真实临床场景中的视角偏移问题。

## 工作原理
在推理过程中，模型利用每条 ECG 记录的前 5 秒信号，显式估计并校正由电极贴放误差和个体解剖差异（如心脏位置）导致的视角偏差。这是通过引入可学习的角度偏差参数（$d\theta, d\phi$）来实现的。

## 作用
- **病人级自适应**：使模型能够在每次检查中快速适配特定病人的生理特征。
- **提升鲁棒性**：显著提升了模型在真实世界 messy 数据中的表现，确保输出诊断级一致的虚拟导联。

## 与其他校准的关系
On-the-fly Calibration 是 [[NEF-NET v2]] 三阶段训练流程的最后一步，紧随 Any-pairs 预训练和 [[Device Calibration]] 之后。