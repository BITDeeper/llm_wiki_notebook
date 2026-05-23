---
type: event
title: Codex接入HeyGen插件实现全流程视频制作
created: 2026-05-16
updated: 2026-05-16
tags: [ai视频, codex, heygen, 插件集成, 产品发布]
related: [codex, heygen, openai, 视频即代码, vibe-coding]
sources: ["codex直接剪视频，剪辑软件都不用开，pr-ae瑟瑟发抖.md"]
origin_date: 2026-05-16
participants: [codex, heygen, openai]
causes: [openai]
effects: [视频即代码]
significance: medium
---
# Codex接入HeyGen插件实现全流程视频制作

2026年5月16日，OpenAI 旗下 AI 编程代理 [[codex]] 正式接入 [[heygen]] AI视频生成平台插件，用户可通过一句自然语言提示词完成数字人生成、口播视频制作、字幕添加、自动剪辑、导出等视频制作全流程。

## 事件背景

在此之前，AI 视频制作工具（如 Sora、Runway、Veo）在口播讲解、字幕、转场等精细操作上仍有局限。2026年1月，Remotion + Claude Code 推出"视频即代码"方案，但门槛过高，用户需要懂 React 才能使用。

## 事件经过

Codex 将 HeyGen 作为插件集成，用户在 Codex 内一键安装后即可调用 HeyGen 的全部视频生成能力。技术原理是将视频制作流程转化为 HTML+CSS+JS 代码工作流，用户无需掌握任何编程或视频编辑技术。

## 实测效果

量子位实测展示了完整流程：
1. 生成数字人女孩形象照（皮肤纹理、瞳孔细节自然）
2. 制作声画同步的数字人口播视频（约1分钟）
3. 替换口条并添加字幕（口型自动匹配新字幕）
4. 执行复杂剪辑指令（裁剪、去闭眼帧、字幕排版调整）
5. 成品自动下载到本地文件夹（约10秒）

## 影响与意义

- 标志着 [[vibe-coding]] 理念从编程领域正式扩展到视频制作领域
- 体现了 [[agentic-engineering]] 中 AI 自主调试、解决故障的能力
- 将"视频即代码"范式门槛降至零，非技术用户也可完成专业级口播视频制作
- 对传统视频编辑软件（Premiere、After Effects）的工作流模式构成潜在挑战