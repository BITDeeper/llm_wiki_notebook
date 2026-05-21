---
type: entity
title: Perplexity Computer
tags: ["perplexity", "agent", "多模型编排", "操作系统", "full-stack", "deployment", "ai-agent", "productivity-tool", "browser-based", "operating-system"]
related: ["perplexity", "openclaw", "多模型编排", "ai-即电脑", "alex-graveley", "aravind-srinivas", "claw-龙虾化", "任务执行范式", "claude-cowork", "claude-opus-4-6", "agentic-ai-system", "浏览器沙盒隔离"]
created: 2026-02-26
updated: 2026-05-08
sources: ["别了，openclaw！19个顶尖ai夜袭硅谷，3万刀金融终端变「废铁」.md", "硅谷全面“龙虾化”！anthropic微软meta和notion等集体交卷自己的claw.md", "21万年费彭博终端机被ai复刻！perplexity俩月憋出新“pc”：整合所有ai功能，以opus为核心调度19个模型.md"]
---

# Perplexity Computer

[[Perplexity Computer]] 是由 [[Perplexity]] 公司发布的「全能 Agent」个人计算系统，官方将其定义为“2026年个人电脑应有的样子”。它被视为 [[OpenClaw]] 的「最强平替」，旨在通过 [[多模型编排]] 技术实现端到端的任务自动化。该产品试图充当「全栈项目经理」，将软件开发的全生命周期整合为一个统一的流程。

## 核心特性

### Agentic AI System
Perplexity Computer 的核心定位是 [[agentic-ai-system]]。与传统的对话式 AI 不同，它强调“能行动”。用户只需描述期望结果，系统便会自动拆解任务，生成执行步骤，并调度多个 sub-agents 分别处理推理、编码、研究和图像生成等工作。

### 多模型编排
系统采用“一个核心 + 多个工具”的架构模式，整合了包括 Claude、Gemini、GPT、Grok 在内的 **19 个顶尖 AI 模型**。系统会根据任务特性自动分配最合适的模型：
- **核心大脑**：以 [[Claude Opus 4.6]] 作为主要调度模型。
- **推理**：优先使用 Claude。
- **研究**：优先使用 Gemini。
- **速度**：优先使用 Grok。
- **其他**：还包括 ChatGPT 5.2、Nano Banana 和 Veo 3.1 等，分别处理编码、轻量级任务或视频生成。

这种架构打破了单一模型的能力天花板，实现了「推理用 Claude、研究用 Gemini、速度用 Grok」的协同效应。

### 全栈工作流
Perplexity Computer 试图将软件开发的所有环节统一，实现「想法即产品」：
1.  **搜**：信息检索。
2.  **研**：背景调研。
3.  **计**：方案计划。
4.  **编**：代码编写。
5.  **部署**：上线发布。

### 安全与隔离
为了解决 AI Agent 的安全问题，Perplexity Computer 采用了 [[浏览器沙盒隔离]] 技术：
- **沙盒运行**：所有操作限制在浏览器提供的“安全且可靠的开发沙盒”中。
- **系统隔离**：不触碰用户的主操作系统文件，即使出现漏洞也不会扩散到主网络。
- **对比竞品**：这与 [[OpenClaw]] 直接控制操作系统的模式形成鲜明对比，旨在避免类似 OpenClaw 删除用户邮件的安全事故。

### 权限与集成
- **文件系统**：拥有直接访问用户文件的权限（在沙盒内）。
- **浏览器**：内置浏览器，可自主抓取和操作 Web 数据。
- **Shell 权限**：具备执行代码和部署应用的能力。
- **持久记忆**：能够记住用户过去的工作和偏好。
- **长时间运行**：支持异步任务，可持续运行数小时甚至数月。
- **并发执行**：用户可同时运行数十个 Perplexity Computer 实例。

## 定价模式
采用 [[按量计费]] 模式，向 Max 订阅用户提供每月 10,000 个积分。这反映了 [[ai-subscription-crisis]] 中提到的趋势：由于 Agent 任务的高算力消耗，传统的固定订阅制正在失效。
- **订阅门槛**：目前仅对 **Max 订阅用户**开放。
- **未来计划**：Perplexity Pro 和 Enterprise 版本即将上线该功能。

## 技术架构
该系统的技术灵魂人物是 [[Alex Graveley]]（GitHub Copilot 前总架构师）。他在入职 Perplexity 的两年间还打造了 AI 原生浏览器 Comet。

## 实测案例

### 1. 实时金融终端（平民版彭博终端）
用户仅通过一句话指令，Perplexity Computer 便构建出了媲美 [[Bloomberg Terminal]]（年费 2.5 万美元）的实时金融分析工具。
- **成本对比**：彭博终端机标准年费约为 2.5 万美元，而 Perplexity Computer 仅需订阅 Perplexity Max（年费 2000 美元），成本降至原来的 1/12。
- **功能验证**：它能针对英伟达股票进行深度分析，包括股价图表、公司信息、财务摘要和市场洞察。
- **效率验证**：证明了 AI Agent 在重构专业软件成本结构上的巨大威力。

### 2. 全球卫星追踪
系统从 CelesTrak 抓取了约 1,500 颗卫星的轨道数据（TLE），利用 satellite.js 库进行 SGP4 轨道外推计算，构建了一个每秒更新一次的全球卫星实时位置 Web 应用。

## 理念背景
[[Aravind Srinivas]] 在发布该产品时提出了 [[ai-即电脑]] 的理念，认为未来的计算机不应是繁琐的 GUI，而应是由 AI 组成的「交响乐团」。他强调，2025 年平均每 17 天就有一个新模型面世，计算的护城河已从底层代码转向对异构模型的调度能力。

这也标志着搜索引擎公司向执行型 Agent 的转型（即 [[claw-龙虾化]] 趋势），试图通过覆盖软件开发的全生命周期来构建新的竞争壁垒。

## 潜在风险
尽管强调安全性，但 Perplexity Computer 仍面临平台依赖风险。如果 Google 等底层模型提供商因策略调整封禁 Perplexity 的访问权限（类似于此前限制 OpenClaw 访问 Gemini），其多模型调度能力将受到严重影响。