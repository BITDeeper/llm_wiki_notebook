---
type: entity
title: "Mobile-Agent-v3.5"
created: 2026-03-04
updated: 2026-03-04
tags: [gui-agent, framework, open-source, alibaba]
related: [gui-owl-1-5, mrpo, tong-yi-qian-wen-tuan-dui, gui-agent-shi-jie-mo-xing]
sources: ["给gui-agent装上「世界模型」：阿里通义用混合数据+统一思维链，让模型学会预判屏幕变化.md"]
---

# Mobile-Agent-v3.5

**Mobile-Agent-v3.5** 是由阿里巴巴通义实验室开源的新一代多平台 GUI Agent 框架。该框架旨在解决原生 GUI 模型在端到端落地中的技术壁垒，支持跨桌面、手机、浏览器等多端的统一控制。

## 核心特性

### 多平台统一控制
框架设计了一个统一的策略 $\pi_\theta(a|o,d)$，能够适配移动、桌面、Web 三个不同的平台环境（$d \in \mathbb{D}=\{\text{mobile, desktop, web}\}$）。每个平台虽有各自的动作空间 $\mathcal{A}_d$ 和 UI 交互范式，但通过共享骨干网络和特定的训练策略（如 [[MRPO]] 的交替优化），模型实现了跨设备的泛化能力。

### 动作空间扩展
除了基础的纯 GUI 交互（点击、滑动、输入），Mobile-Agent-v3.5 原生支持：
*   **外部工具调用**：Agent 可以直接调用 API 完成复杂计算或数据库查询。
*   **MCP 协议**：集成了 Model Context Protocol，增强了与外部工具链的互操作性。

### 端云协同架构
框架支持 [[GUI-Owl-1.5]] 的两种模型变体协同工作：
*   **云端规划**：利用大参数的 Thinking 模型进行复杂任务拆解。
*   **端侧执行**：利用轻量级的 Instruct 模型在本地设备上进行高频实时交互。

## 技术支撑
该框架的高效运行依赖于以下关键技术：
*   **混合数据管线**：处理长轨迹合成与不可行查询负样本。
*   **世界模型**：赋予 Agent 预判屏幕状态变化的能力。
*   **MRPO 算法**：解决多平台混合训练中的梯度冲突与 GRPO 结果坍塌问题。

## 开源与生态
项目已开源模型权重、Agent 框架源码及在线云端沙箱体验 Demo，为开发者提供了从研究到部署的完整路径。