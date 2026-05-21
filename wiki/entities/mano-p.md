---
type: entity
title: Mano-P
tags: [model, gui-agent, vla, private-ai]
related: [cider, 明略科技, claude-code, gui-vla]
created: 2026-05-06
updated: 2026-05-06
sources: ["国产双开源：让mac成为你的私人ai工作站.md"]
---

# Mano-P

Mano-P 是由 [[明略科技]] 开源的 GUI-VLA（图形界面视觉语言动作）智能体模型。名称中“Mano”源自西班牙语“手”，“P”代表 Private（私有）。其核心能力是通过纯视觉理解屏幕内容并操作图形界面（GUI），实现端侧的自动化任务执行。

## 核心特性

### 纯视觉操作
Mano-P 不依赖 CDP 协议或 HTML 解析，而是像人类一样通过视觉感知屏幕。这意味着它不仅能操作浏览器，还能控制桌面软件、Web 系统乃至复杂的专业工具。

### 基准测试表现
- **OSWorld**：Mano-P 1.0-72B 以 58.2% 的成功率位列全球第一，领先第二名逾 13 个百分点。
- **WebRetriever**：得分 41.7，超越 Gemini 2.5 Pro Computer Use (40.9) 和 Claude 4.5 Computer Use (31.3)。

### 端侧性能
在 Apple M4 Pro 上，其 4B 量化模型可实现：
- **Prefill 速度**：476 tokens/s
- **解码速度**：76 tokens/s
- **内存占用**：峰值仅 4.3GB

配合 [[cider]] 的 W8A8 加速，其 prefill 时间可进一步缩短约 12.7%。

## 应用场景

### 全自动编程流水线
在软件开发场景中，Mano-P 可以与 [[claude-code]] 形成互补：
1. [[claude-code]] 负责生成代码。
2. Mano-P 接管 GUI 测试，打开界面、点击验证并反馈结果。

这种组合将原本消耗大量云端 Token 的 GUI 测试环节转移至本地，实现了成本归零和数据隐私保护。

### Private AI 实践
Mano-P 是 [[private-ai]] 理念的重要实践。通过在本地运行，所有截图与任务数据无需上传云端，实现了物理级别的数据隔离。它证明了端侧 AI 不仅能跑通，还能在高价值场景中达到实用级别的精度。

## 开源协议
Mano-P 以 Apache 2.0 协议开源，支持商业使用与二次开发。其完整技术栈（含训练方法、剪枝与量化方案）计划后续开源。