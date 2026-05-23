---
type: source
title: "OpenClaw终于长出手和眼！Peter正式发布Peekaboo v3，一日三更"
created: 2026-05-11
updated: 2026-05-11
tags: [openclaw, peekaboo, computer-use, 桌面自动化, ai-agent]
related: [openclaw, peekaboo, peter-steinberger, computer-use]
sources: ["openclaw终于长出手和眼！peter正式发布peekaboo-v3，一日三更.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/bfKeR6d_mU2s5T9kssvxyQ"
venue: 新智元
---
# OpenClaw终于长出手和眼！Peter正式发布Peekaboo v3，一日三更

**来源**：新智元 | **日期**：2026-05-11

## 摘要

本文报道了 [[openclaw]] 的专属 [[computer-use]] 工具 [[peekaboo]] v3 正式回归，并在发布当日高频更新（v3.1.0→v3.1.1→v3.1.2）。Peekaboo 补上了 OpenClaw 最关键的缺失环节——桌面操作能力，使 AI 从"会回消息"进化为"能看屏幕、点按钮、操作真实桌面"。

## 核心内容

- **Peekaboo 的定位**：macOS 桌面自动化工具，负责截图、UI 元素识别、窗口操作、点击输入等，是 OpenClaw 的"眼睛和手"。
- **发展历程**：2025年6月初版上线，年末因模型能力不足停更，[[peter-steinberger]] 转向 OpenClaw 开发。2026年5月模型能力越过临界点后回归，密集更新。
- **架构分工**：OpenClaw 管"连接"（消息入口、网关、调度），Peekaboo 管"执行"（看屏幕、点按钮、跑流程）。两者合一才构成完整的 AI 助手。
- **社区验证**：已有用户用 Peekaboo 在浏览器中驱动远程 iOS 模拟器，展示完整的"识别→注册→点击→等待→继续"操作链。
- **工程现实**：连续更新主要修复 CLI、MCP、桌面应用、远程 Agent、不同模型之间的摩擦问题，属于"大量脏活"。

## 关键判断

- 模型视觉能力和 Computer-Use 能力近期越过临界点，使桌面自动化从演示走向可用。
- OpenClaw 正从"多渠道消息网关"向"AI 桌面操作系统"演进。
- 好工具的最高境界是没存在感——Peekaboo 正在往这个方向补课。