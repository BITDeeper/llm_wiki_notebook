---
type: source
title: "黑客挖出苹果隐藏硬件！你的MacBook里有加速计/陀螺仪，摔没摔过售后都知道"
tags: [硬件, 隐私, 苹果, 逆向工程, 传感器]
related: [applespuhiddevice, bosch-bmi286, olvvier, iokit-hid, bcg-球囊图, 传感器隐私]
created: 2026-02-24
updated: 2026-02-24
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/X1FjH5PvsR19hQ2lKAgEoQ"
venue: "量子位"
sources: ["黑客挖出苹果隐藏硬件！你的macbook里有加速计陀螺仪，摔没摔过售后都知道.md"]
---

# 黑客挖出苹果隐藏硬件！你的MacBook里有加速计/陀螺仪，摔没摔过售后都知道

## 概述
本文报道了开发者 [[olvvier]] 发现并公开了读取 [[AppleSPUHIDDevice]] 数据的方法，证实了搭载 M3 系列芯片的 MacBook Pro 内部隐藏了未公开的加速度计和陀螺仪。这一发现引发了关于 [[传感器隐私]] 和 [[AppleCare]] 拒保风险的广泛讨论。

## 核心发现
- **隐藏硬件**：在 M3 系列 MacBook Pro 中发现了名为 `AppleSPUHIDDevice` 的节点，属于苹果 SPU（Sensor Processing Unit）体系。
- **数据读取**：通过 [[IOKit HID]] 接口，可以实时读取三轴加速度、三轴角速度、开盖角度及环境光数据。
- **高灵敏度**：传感器灵敏度极高，甚至能通过捕捉心脏跳动引起的微弱机械振动（[[BCG-球囊图]] 原理）来模拟测量心率。

## 技术细节
- **芯片推测**：外界推测该 IMU（惯性测量单元）芯片为 [[Bosch BMI286]]，但未获官方确认。
- **系统要求**：需要 `sudo` 权限访问 IOKit HID 接口。
- **适用机型**：已证实存在于 M3 系列 MacBook Pro；英特尔芯片老款 Mac 和初代 M1 MacBook 已确认不存在。

## 争议与担忧
- **保修风险**：网友担忧苹果可能利用该传感器记录设备跌落历史，以此作为判定人为损坏并拒绝 [[AppleCare]] 理赔的依据。
- **透明度问题**：苹果未公开相关 API 或文档，用户对此硬件的存在毫不知情，存在严重的信息不对称。

## 验证方法
开发者提供了开源代码仓库，用户可通过终端命令检测节点是否存在，并运行 Python 脚本实时查看传感器数据。

## 相关链接
- [GitHub 仓库](https://github.com/olvvier/apple-silicon-accelerometer)