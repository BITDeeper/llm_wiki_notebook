---
type: entity
title: tAmeR APP
tags: [software, ar, teleoperation, haptic-feedback]
related: [tamen, shi-chu-jue-rong-he, ren-zai-huan]
created: 2026-04-13
updated: 2026-04-13
sources: ["港大×复旦×上交：视触觉融合+闭环纠错，让机器人双臂协作不再「盲操」.md"]
---

# tAmeR APP

**tAmeR APP** 是 TAMEn 团队自研的遥操作应用程序，用于支持 [[闭环数据采集]] 过程中的人类介入。

## 核心功能

### AR 触觉反馈
该应用赋予了遥操作者实时的触觉反馈能力。通过增强现实（AR）技术，操作者可以直观地感知机器人与环境的交互状态，从而进行更精确的控制。

### 介入纠错
当机器人在执行任务中遇到失败或卡顿时，人类操作者可以通过 tAmeR APP 接管控制权进行纠错。这一过程不仅解决了当前的执行错误，更重要的是记录了“recovery 状态”下的数据。

### 数据价值
tAmeR APP 采集的纠错数据（包括视觉、触觉、位姿信息）被视为训练机器人的高价值样本，有助于提升模型在边缘情况下的鲁棒性。

## 关联
- 属于 [[tamen]] 系统的“价值推理与训练层”。
- 体现了 [[人在环]] 的数据采集理念。