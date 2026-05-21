---
type: source
title: "OpenClaw逼出Claude最强反击！GUI操控电脑和真人无差别，网友：这得花多少token？"
created: 2026-03-24
updated: 2026-03-24
tags: [anthropic, claude-code, openclaw, gui-操控, ai-agent, 计算机使用]
related: [claude-code, openclaw, gui-操控, ai-subscription-crisis]
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/6pcXTy0O8DREbzJHC9-VxQ"
venue: 量子位
sources: ["openclaw逼出claude最强反击！gui操控电脑和真人无差别，网友：这得花多少token？.md"]
---

# OpenClaw逼出Claude最强反击！GUI操控电脑和真人无差别

本文报道了 [[Anthropic]] 针对 [[OpenClaw]] 的竞争压力，对 [[Claude Code]] 进行的重大功能更新——引入基于 GUI 的“Computer Use”能力。

## 核心内容

### 功能突破：GUI 操控
Claude Code 新增了像真人一样操作电脑的能力：
- **视觉感知**：通过实时截图“看到”屏幕内容。
- **动作模拟**：模拟鼠标键盘操作。
- **通用兼容**：不再依赖 API 或 CLI 改造，可直接操控老旧系统、Photoshop 等任何有图形界面的软件。

### 配套功能
- **远程控制**：支持通过手机远程派发任务，控制电脑执行。
- **定时任务**：支持设置自动化定时运行，无需手动触发。

### 安全机制
- **分层授权**：优先调用已授权的集成（如 Slack、Google Workspace），仅在必要时申请桌面权限。
- **敏感操作确认**：删除文件、发送消息等高危操作需用户弹窗确认。
- **隔离环境**：官方推荐在 [[Docker 隔离环境]] 中运行以降低风险。

### 市场反应与成本
- 社区评价认为 Anthropic 的全力投入使得开源项目 [[OpenClaw]] 难以跟上迭代速度。
- 网友提出核心痛点：连续执行任务带来的 [[Token 消耗]]（尤其是视觉模型输入）可能极其昂贵，这加剧了 [[AI 订阅制危机]]。

## 意义
此次更新标志着 AI Agent 从“数字原生”工具向“通用操作员”演进，打破了软件生态壁垒，但也带来了更高的算力成本和安全挑战。