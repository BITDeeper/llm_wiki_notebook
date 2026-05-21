---
type: source
title: "Claude第一款AI桌宠硬件，深圳制造"
tags: [anthropic, 硬件, 深圳供应链, ai桌宠, m5stack]
related: [anthropic, claude-desktop-buddy, m5stack, ai桌宠, 深圳供应链优势]
created: 2026-04-27
updated: 2026-04-27
authors: [听雨]
year: 2026
url: "https://mp.weixin.qq.com/s/XFXn97IjObeorb272yORiQ"
venue: "量子位"
sources: ["claude第一款ai桌宠硬件，深圳制造.md"]
---

# Claude第一款AI桌宠硬件，深圳制造

## 概述
本文报道了 Anthropic 工程师 Felix Rieseberg 发起的开源硬件项目 [[claude-desktop-buddy]]。该项目旨在将 Claude 助手具象化为实体桌面设备，通过深圳制造的 [[M5StickC Plus]] 开发板实现物理交互。

## 核心内容

### 项目背景
- **发起方**：Anthropic 工程师 Felix Rieseberg。
- **项目性质**：开源硬件项目，代码及硬件指南公开。
- **核心功能**：显示 Claude 工作状态，提供实体按键进行审批或拒绝操作，内置 18 种 ASCII 动画形象。

### 硬件细节
- **官方参考硬件**：[[M5StickC Plus]]，由深圳公司 [[M5Stack]]（明栈科技）制造。
- **核心芯片**：ESP32（上海乐鑫科技）。
- **交互方式**：蓝牙连接电脑，屏幕显示状态，实体按键输入。
- **视觉反馈**：复用了 [[claude-code]] 源码泄露中的宠物系统，包含睡觉、忙碌、庆祝等多种动画状态。

### 供应链分析
文章深入探讨了为何美国顶尖 AI 公司会选择深圳硬件：
1. **成本优势**：海外同类硬件成本是国内的 3-4 倍。
2. **供应链完整性**：深圳拥有全球最密集的电子元器件供应商和开模厂商，24 小时内可完成上百个零部件调配。
3. **开发者生态**：[[M5Stack]] 凭借高质量的文档和代码可靠性，成为全球开发者的“默认选项”，这使其在 AI 生成代码时代具有先天优势。

### 行业观察
- **AI 时代的硬件逻辑**：AI 外设的底层逻辑（声、光、电、传感器）与传统 IoT 硬件一致，但用户从人变成了 AI。文档质量直接影响硬件被 AI 集成的成功率。
- **深圳制造的地位**：从 AWS IoT EduKit 到 Anthropic Buddy，深圳硬件公司多次被国际巨头选为官方参考，体现了中国硬件生态的全球影响力。
- **未来展望**：[[M5Stack]] 已将公司使命调整为“为未来的 AI 世界准备基础设施”。

## 关键引述
> “在华强北，一个想法根本忍不到晚上12点，就有人做出来了。” — [[M5Stack]] CEO 赖景明

> “如果文档不全、协议写不清楚，AI在调用时可能‘先天性地写下错误代码’。” — 赖景明

## 相关链接
- 项目地址：https://github.com/anthropics/claude-desktop-buddy