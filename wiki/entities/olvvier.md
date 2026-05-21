---
type: entity
title: olvvier
tags: [开发者, 黑客, 安全研究]
related: [applespuhiddevice, iokit-hid]
created: 2026-02-24
updated: 2026-02-24
sources: ["黑客挖出苹果隐藏硬件！你的macbook里有加速计陀螺仪，摔没摔过售后都知道.md"]
---

# olvvier

## 描述
[[olvvier]] 是一名软件开发者，因发现并公开读取 MacBook 隐藏传感器数据的方法而知名。

## 主要贡献
- **发现隐藏接口**：他在搭载 M3 芯片的 MacBook Pro 上发现了名为 [[AppleSPUHIDDevice]] 的隐藏 IOKit 节点。
- **开源工具**：他编写并开源了 Python 代码，允许用户通过 [[IOKit HID]] 接口实时读取设备的加速度计和陀螺仪数据。
- **功能验证**：他不仅验证了基础的运动检测功能，还通过算法处理传感器数据，成功演示了捕捉类似心率的微弱振动信号（基于 [[BCG-球囊图]] 原理）。

## 影响
他的工作揭示了苹果硬件中未被文档化的功能，引发了关于硬件透明度、用户隐私以及 [[AppleCare]] 保修政策潜在关联的广泛讨论。