---
type: entity
title: AppleSPUHIDDevice
tags: [硬件, 接口, 苹果, 传感器]
related: [bosch-bmi286, iokit-hid, olvvier, m3-pro, 传感器隐私]
created: 2026-02-24
updated: 2026-02-24
sources: ["黑客挖出苹果隐藏硬件！你的macbook里有加速计陀螺仪，摔没摔过售后都知道.md"]
---

# AppleSPUHIDDevice

## 描述
`AppleSPUHIDDevice` 是 macOS IOKit 设备树下的一个隐藏节点，代表 MacBook 内部未公开的运动传感器接口。它属于苹果的 SPU（Sensor Processing Unit，传感器处理单元）体系，由系统驱动 `AppleSPUHIDDriver` 管理。

## 功能与数据
该接口允许读取以下数据：
- **三轴加速度**（Usage 3）：检测设备在 X/Y/Z 轴上的线性加速度。
- **三轴陀螺仪**（Usage 9）：检测设备绕各轴的旋转角速度。
- **开盖角度**：用于判断 MacBook 的开合状态。
- **环境光数据**：可能与屏幕亮度调节相关。

## 技术原理
该节点通常对应一个物理 IMU（惯性测量单元）芯片。根据拆机分析，外界推测该芯片可能为 [[Bosch BMI286]]。由于苹果未公开 API，开发者需通过 [[IOKit HID]] 接口并使用 `sudo` 权限直接与硬件通信以获取原始数据。

## 应用与争议
除了常规的姿态检测（如屏幕旋转、合盖休眠）外，该传感器的高灵敏度引发了关于 [[传感器隐私]] 的担忧。特别是用户担心苹果可能利用其记录设备跌落历史，从而在 [[AppleCare]] 维修服务中判定设备遭受过意外损坏而拒保。

## 发现者
该接口的读取方法由开发者 [[olvvier]] 首次公开并验证。