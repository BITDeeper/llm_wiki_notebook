---
type: entity
title: Cardputer
created: 2026-05-16
updated: 2026-05-16
tags: [硬件, 开发板, esp32, 边缘设备]
related: [claude-code, anthropic, m5stack, 边缘ai终端]
sources: ["anthropic又整活，卡片大小的电脑也跑上claude-code了.md"]
---
# Cardputer

Cardputer 是 M5Stack 出品的一款掌机尺寸开发板，名称来源于 Card + Computer（卡片电脑）。在 [[anthropic]] 举办的「Code With Claude」活动中作为开发者伴手礼发放，因成功运行 [[claude-code]] 而引发社区关注。

## 硬件规格

- **芯片：** ESP32-S3
- **输入：** 迷你 QWERTY 键盘
- **显示：** 彩色小屏幕
- **传感器：** 陀螺仪等基础传感器
- **音频：** 内置扬声器
- **体积：** 卡片大小，可置于掌心

## 与 Claude Code 的集成

在「Code With Claude」活动上，开发者利用 Cardputer 成功运行完整的 Claude Code，并快速构建了多个应用：

- **魔法棒：** 通过摇晃设备（陀螺仪检测）切换明暗模式
- **Tilt 迷宫游戏：** 基于动作控制的经典弹珠迷宫
- **Oregon Trail：** 文字冒险生存游戏

开源部署方案见 GitHub 项目 dakshaymehta/cardputer-claude-os。

## 技术说明

ESP32-S3 芯片的算力远不足以本地运行大语言模型。Cardputer 运行 Claude Code 的实际技术路线应为通过 Wi-Fi 连接云端 API，设备本身仅充当超薄终端界面。这代表了 [[边缘ai终端|边缘 AI 终端]] 中"极致瘦客户端 + 云端推理"的路线，与 [[本地推理]] 的概念有本质区别。