---
type: entity
title: M5StickC Plus
tags: [硬件, 开发板, esp32]
related: [m5stack, claude-desktop-buddy, 乐鑫科技]
created: 2026-04-27
updated: 2026-04-27
sources: ["claude第一款ai桌宠硬件，深圳制造.md"]
---

# M5StickC Plus

## 概述
[[M5StickC Plus]] 是 [[M5Stack]] 旗下一款销量极高的微型物联网开发板。因其集成度高、体积小巧及丰富的文档资源，被 [[Anthropic]] 选为 [[claude-desktop-buddy]] 项目的官方参考硬件。

## 硬件规格
- **核心处理器**：ESP32 芯片（双核，240MHz，由 [[乐鑫科技]] 制造）。
- **显示屏**：0.96 英寸 TFT LCD 屏幕（分辨率 135x240），适合显示简单的 ASCII 动画和状态信息。
- **交互组件**：内置两个实体按键、麦克风、喇叭、红外发射器、陀螺仪和震动马达。
- **连接性**：支持蓝牙（BLE）和 Wi-Fi。
- **电源**：内置锂电池，可通过 USB-C 充电。

## 在 AI 桌宠中的应用
在 [[claude-desktop-buddy]] 项目中，M5StickC Plus 承担了以下功能：
1. **显示输出**：通过屏幕展示 Claude 的状态和 18 种 ASCII 宠物动画。
2. **物理输入**：通过实体按键接收用户的审批（同意/拒绝）指令。
3. **状态反馈**：利用震动马达提供触觉反馈（如通知提醒）。

## 选中原因
尽管 M5StickC Plus 是旧款产品（已有 Plus 2 和 Stick S3 等后续型号），但仍被 Anthropic 工程师选中，主要原因包括：
- **可获得性**：作为老款产品，在工程师手边更为常见，且新款常处于缺货状态。
- **文档成熟度**：经过多年迭代，其相关文档和社区支持极为完善，降低了 AI 辅助开发的门槛。

## 市场反应
受 [[claude-desktop-buddy]] 项目热度影响，M5StickC Plus 曾在淘宝等电商平台出现短暂售罄。