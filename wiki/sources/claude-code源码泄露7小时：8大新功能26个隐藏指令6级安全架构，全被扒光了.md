---
type: source
title: "Claude Code源码泄露7小时：8大新功能/26个隐藏指令/6级安全架构，全被扒光了"
tags: [anthropic, claude-code, security-leak, source-map, engineering]
related: [claude-code, anthropic, source-map-leaks, claude-mythos, 卧底模式, kairos, ultraplan]
created: 2026-04-01
updated: 2026-04-01
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/cJGWji1XeOEXgYGvIxGCtA"
venue: "量子位"
---

# Claude Code源码泄露7小时：8大新功能/26个隐藏指令/6级安全架构，全被扒光了

## 概述

本文报道了 [[anthropic]] 旗下产品 [[claude-code]] 在 2026 年 4 月 1 日发生的重大源码泄露事件。由于发布 v2.1.88 版本时未移除调试用的 source map 文件，导致 1906 个源文件、51 万行代码完全暴露。此次泄露不仅暴露了产品的完整架构，还揭示了包括 [[卧底模式]]、[[kairos]]（持久化记忆）、[[ultraplan]]（深度规划）在内的多项未发布功能。

## 关键发现

### 泄露规模
- **代码量**: 1906 个源文件，51 万行代码。
- **起因**: 60MB 的 source map 文件被意外打包进 npm 发布包。
- **传播**: GitHub 用户 [[instructkr]] 创建的备份库 `instructkr/claude-code` 在 7 小时内获得 2w+ 星标。

### 未发布功能
代码分析发现了大量被 feature flag 关闭的隐藏模块：
1.  **Buddy (电子宠物)**: Tamagotchi 风格的 ASCII 虚拟宠物，包含 18 种物种和稀有度机制，疑似愚人节彩蛋。
2.  **Kairos (持久化助手)**: 具备跨会话长期记忆，能在用户不活跃时自动执行四阶段记忆整合（定向、收集、整合、修剪）。
3.  **Ultraplan**: 使用 Opus 4.6 模型支持长达 30 分钟的深度任务规划。
4.  **多 Agent 协调模式**: 支持并行任务处理。
5.  **卧底模式**: 引发巨大争议的功能，旨在向开源项目提交 PR 时移除所有 Anthropic 身份信息，伪装成人类。

### 技术架构分析
- **安全设计**: 实施了极其严苛的**六级权限验证系统**、四层决策管道和独立沙箱环境。
- **代码质量**: 架构设计优秀，但代码质量参差不齐。存在单个函数 3000 多行、12 层嵌套的情况。
- **情绪检测**: 使用正则表达式匹配 `ffs`、`shitty` 等关键词来检测用户负面情绪。

## 运营安全危机

此次事件并非孤立。就在几天前（3月26日），Anthropic 刚刚经历了 [[claude-mythos]] 模型的泄露（因 CMS 配置错误）。加上 2025 年 2 月首发时的 source map 错误，这是 Anthropic **第二次犯同样的错误**。这种连续的运营失误严重挑战了其标榜的“AI 安全”形象。

## 争议与反思

- **透明度悖论**: 一个标榜安全和负责任的 AI 公司，其代码中竟包含旨在“伪装成人类”的卧底模式。
- **自动化风险**: 文末提出猜想，在 AI Agent 能自主写代码、管理发布流程的时代，此次失误是否由 AI 自主操作导致？

## 相关条目

- [[claude-code]] — 泄露事件的核心产品。
- [[source-map-leaks]] — 导致此次泄露的技术原因。
- [[claude-mythos]] — 近期另一次泄露事件中曝光的未发布模型。
- [[卧底模式]] — 引发伦理争议的隐藏功能。
- [[kairos]] — 持久化记忆技术方案。