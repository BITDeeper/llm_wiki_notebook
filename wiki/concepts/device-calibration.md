---
type: concept
title: "Device Calibration"
tags: [medical-ai, training-strategy, calibration]
related: [nef-net-v2, on-the-fly-calibration]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# Device Calibration

**Device Calibration**（设备校准）是 [[NEF-NET v2]] 训练流程的第二阶段。

## 目的
针对特定采集设备进行微调，以对齐不同设备间的信号域差。由于不同心电信号采集设备的硬件特性不同，采样分布可能发生漂移，Device Calibration 旨在消除这种差异。

## 实施方式
在 Any-pairs 预训练之后，模型使用特定设备采集的数据进行微调，使其“对齐本地设备域”，从而在该设备上获得更优的合成性能。