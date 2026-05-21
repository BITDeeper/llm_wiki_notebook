---
type: concept
title: IOKit HID
tags: [技术接口, 苹果, 系统架构]
related: [applespuhiddevice, olvvier]
created: 2026-02-24
updated: 2026-02-24
sources: ["黑客挖出苹果隐藏硬件！你的macbook里有加速计陀螺仪，摔没摔过售后都知道.md"]
---

# IOKit HID

## 定义
IOKit HID（Human Interface Device）是 macOS 操作系统底层用于与硬件输入设备进行通信的框架。它属于 IOKit（苹果的设备驱动框架）的一部分，允许系统与键盘、鼠标、游戏手柄等外设进行交互。

## 在隐藏传感器发现中的作用
在 [[AppleSPUHIDDevice]] 的发现过程中，IOKit HID 扮演了关键通道的角色。由于苹果未在高层 API 中公开相关接口，开发者 [[olvvier]] 通过直接访问 IOKit 设备树，绕过了官方限制，成功读取了未公开的运动传感器数据。

## 技术门槛
访问 IOKit HID 接口通常需要较高的权限（如 `root` 权限），这增加了普通用户自查设备硬件状态的难度，也加剧了硬件信息的不透明性。