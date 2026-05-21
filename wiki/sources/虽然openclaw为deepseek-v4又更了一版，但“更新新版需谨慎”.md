---
type: source
title: "虽然OpenClaw为DeepSeek V4又更了一版，但“更新新版需谨慎”"
tags: [openclaw, deepseek-v4, agent, 更新日志, 语音交互]
related: [openclaw, deepseek-v4, 实时语音通话, 浏览器自动化]
created: 2026-04-26
updated: 2026-04-26
authors: [鱼羊]
year: 2026
url: "https://mp.weixin.qq.com/s/0A6x8S7Jv5tzE85QAq2cZQ"
venue: "量子位"
sources: ["虽然openclaw为deepseek-v4又更了一版，但“更新新版需谨慎”.md"]
---

# 概述
本文报道了 AI 智能体工具 [[openclaw]] 在 2026 年 4 月发布的 4.24 版本更新。该版本正式集成了 [[DeepSeek V4]] 系列模型（Flash 和 Pro），并将 `deepseek-v4-flash` 设为默认配置。此外，更新大幅增强了实时语音交互能力，使其能够调用完整的 Agent 能力，并改进了浏览器自动化的鲁棒性。文章也指出了该工具频繁更新带来的稳定性风险。

# 主要内容

## DeepSeek V4 集成
- **模型接入**：[[DeepSeek V4]] 系列的 Flash 和 Pro 版本已加入模型库。
- **默认设置**：配置 DeepSeek API 后，默认模型变更为 `deepseek-v4-flash`。
- **修复**：针对后续工具调用回合的重放和逻辑处理问题进行了修复。

## 实时语音能力升级
- **功能打通**：Talk、Voice Call 和 Google Meet 现已支持 `realtime voice loops`。
- **深度集成**：语音对话不再局限于轻量回复，而是可以调用完整的 [[openclaw]] Agent。
- **交互流程**：AI 能够在语音对话中调用工具、查询上下文、进行深层推理，并将结果通过语音返回，实现了“边听边想边干活”。

## 浏览器自动化改进
- **坐标点击**：新增基于视口坐标的点击能力（CLI 命令：`openclaw browser click-coords`）。这对于 DOM 结构复杂或按钮难以定位的网页非常有用，能模拟更接近真人的视觉操作。
- **超时调整**：浏览器动作的默认超时时间延长至 60 秒，提高了长等待场景下的稳定性。

## 社区反馈与稳定性
- **更新风险**：尽管功能强大，但社区反馈（如“倒霉朋友”的截图）表明更新可能导致系统崩溃或功能异常。
- **测试质疑**：网友吐槽更新“跟没做过测试似的”，反映了快速迭代与工程稳定性之间的矛盾。

# 相关条目
- [[openclaw]]：本次更新的主体工具。
- [[DeepSeek V4]]：本次接入的核心模型。
- [[实时语音通话]]：本次升级的关键交互特性。
- [[浏览器自动化]]：本次改进的执行接口。