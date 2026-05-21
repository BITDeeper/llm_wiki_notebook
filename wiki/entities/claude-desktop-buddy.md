---
type: entity
title: Claude-Desktop-Buddy
tags: [anthropic, 硬件, 开源项目, ai桌宠]
related: [anthropic, claude-code, m5stack, m5stickc-plus, ai桌宠]
created: 2026-04-27
updated: 2026-04-27
sources: ["claude第一款ai桌宠硬件，深圳制造.md"]
---

# Claude-Desktop-Buddy

## 概述
[[Claude-Desktop-Buddy]] 是 Anthropic 推出的首款开源 AI 桌宠硬件项目。该项目由 Anthropic 工程师 Felix Rieseberg 发起，旨在将 Claude 助手从屏幕延伸至物理桌面，提供实体化的交互体验。

## 硬件规格
- **官方参考开发板**：[[M5StickC Plus]]
- **制造商**：[[M5Stack]]（深圳明栈科技）
- **核心芯片**：ESP32（乐鑫科技）
- **连接方式**：蓝牙

## 核心功能
1. **状态可视化**：通过内置屏幕显示 Claude 的工作状态（如思考、等待、空闲）。
2. **物理交互**：提供实体按键，允许用户一键审批或拒绝 Claude 执行的操作（如文件访问、网络请求）。
3. **情感反馈**：内置 18 种 ASCII 动画形象，复用了 [[claude-code]] 源码泄露中的宠物系统逻辑。动画包括睡觉、待机、忙碌、提醒、庆祝、眩晕、心动等，循环播放以增强情感连接。

## 开发与部署
- **开源性质**：项目完全开源，提供详细的硬件指南和代码仓库。
- **部署难度**：低。用户只需持有兼容开发板，通过 Claude 辅助烧录固件，全程约 10 分钟即可完成。
- **社区反馈**：项目发布后引发开发者复现热潮，导致 [[M5StickC Plus]] 在淘宝等平台一度售罄。

## 技术特点
- **代码复用**：其宠物动画系统直接源自此前 [[claude-code]] 源码泄露事件中发现的代码，显示了 Anthropic 内部资产的复用策略。
- **AI 友好性**：选择 [[M5Stack]] 作为参考硬件的部分原因在于其高质量的文档，使得 AI（如 Claude 自身）能够更准确地生成控制代码。

## 局限与改进
部分开发者指出，原版 0.96 英寸屏幕较小，实体按键审批功能在特定工作流中利用率有限。因此，社区出现了改进版本，例如将其改造为语音输入入口，以增强其实用性。

## 外部链接
- GitHub 仓库：https://github.com/anthropics/claude-desktop-buddy