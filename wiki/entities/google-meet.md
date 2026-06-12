---
type: entity
title: Google Meet
tags: [google, video-conferencing, collaboration, api, 视频会议, 谷歌产品, 企业协作]
related: [openclaw, gemini-live, 实时语音循环, 谷歌, gemini-3-5-live-translate]
created: 2026-04-26
updated: 2026-06-11
sources: ["今天起，deepseek-v4成openclaw默认模型！.md", "rss/谷歌干掉了「等你说完才翻译」！70+语言边听边译.md"]
---

# Google Meet

Google Meet 是 Google 开发的视频会议服务。在 [[OpenClaw]] v2026.4.24 版本更新中，它被作为一个重要的集成点引入，标志着 OpenClaw 从聊天工具向企业级工作流系统的演进。

## 实时翻译能力

2026年6月起，Google Meet 接入 [[gemini-3-5-live-translate|Gemini 3.5 Live Translate]] 私测，语音翻译从5种语言扩展至70+，单场会议可支持2000+语言组合。此前仅支持英语与其他语言之间的翻译。

## 在 OpenClaw 中的集成

### 功能定位
在 OpenClaw 生态中，Google Meet 不仅仅是一个通话工具，而是被定义为 **"bundled participant plugin"**（捆绑参与者插件）。这意味着它被视为 Agent 可以主动调用和管理的一个工作节点。

### 核心能力
1.  **全流程管理**：
    -   **会前**：支持个人谷歌账号授权、显式会议 URL 加入。
    -   **会中**：支持 Chrome 和 Twilio 实时传输，以及 paired-node Chrome（用于 Parallels、BlackHole、SoX 等本地音频环境）。
    -   **会后**：自动处理会议记录、录音、转写、生成智能笔记，并支持导出 Markdown 或扫描历史记录。

2.  **实时语音循环**：
    -   结合 [[实时语音循环]] 技术，会议中的语音输入可以直接触发后台 Agent 的复杂逻辑（如查询上下文、调用外部工具），并将结果以语音形式返回。

3.  **浏览器自动化增强**：
    -   OpenClaw 针对浏览器自动化进行了优化，以支持 Meet 的稳定运行，包括复用已打开的标签页、超时恢复以及识别登录/权限等人工阻塞点。

### 技术细节
-   **音频处理**：利用 Twilio 进行语音传输，并提供了 dry-run 检查机制（smoke command）以确保真实拨号前的环境就绪。
-   **实时接口**：集成了基于 [[Gemini Live]] 的实时语音能力，支持双向音频和函数调用。

## 相关概念
-   [[实时语音循环]]：Google Meet 是该技术在会议场景下的主要载体。
-   [[Agent工具调用]]：会议过程中的 AI 辅助（如记录、查询）依赖于 Agent 对工具的连续调用能力。