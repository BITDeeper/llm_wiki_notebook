---
type: entity
title: Antigravity 2.0
created: 2026-05-20
updated: 2026-05-20
tags: [谷歌, agent, 开发平台, ide, 多agent]
related: [gemini-3-5-flash, gemini-spark, google-io-2026, 任务执行范式, runtime-agent-os]
sources: ["gemini-3.5来了！今夜，谷歌亲手淘汰谷歌.md"]
origin_date: 2026-05-20
---
# Antigravity 2.0

谷歌 Agent 开发平台 Antigravity 的重大升级版本，于 2026 年 5 月 20 日在 [[google-io-2026]] 大会上发布。从 IDE 进化为独立桌面应用，彻底拥抱 Agent-first 设计理念。

## 核心升级

### 子 Agent 动态生成
- 主 Agent 将任务拆分为子任务，分配给子 Agent
- 子 Agent 之间互不干扰地并行执行
- 现场演示中 93 个子 Agent 同时并行工作

### 异步任务管理
- 长耗时操作不再阻塞主线程
- 支持后台持续执行

### 定时任务（Scheduled Tasks）
- 可设置定时任务让 Agent 自动执行
- 示例：每天检查 PR 状态、每小时运行健康检查脚本

### 新增斜杠命令
- `/goal`：让 Agent 一口气跑完任务
- `/grill-me`：反过来让 Agent 搞清楚需求再动手
- `/browser`：显式控制浏览器使用

## 标志性 Demo：93 个 Agent 构建 OS

谷歌工程师 Varun 在现场演示了让 Antigravity 搭载 [[gemini-3-5-flash|3.5 Flash]] 从零构建操作系统：

- **规模：** 93 个子 Agent 并行工作
- **请求量：** 超过 15000 次模型请求
- **Token 处理：** 26 亿个 token
- **耗时：** 12 小时
- **结果：** 从空白项目变为功能完整的 OS 内核（调度程序、内存管理、文件系统）
- **费用：** API 费用不到 1000 美元
- **后续：** 在 AI 写的 OS 上运行 DOOM，首次失败后 Agent 自动补写驱动代码，最终成功运行

## 基础设施规模

谷歌内部使用 Antigravity 处理 token 的速度：
- 2026 年 3 月：每天 5000 亿 token
- 2026 年 5 月：每天 3 万亿 token
- **12 倍增长**，体现了基础设施能力的跃迁

## 与现有维基概念的关联

- [[任务执行范式]] 的最新实例：从单纯模型开发转向智能体工程化系统
- [[runtime-agent-os]] 的商业化对应：Antigravity 2.0 提供了类似的三层架构（实体、交互、记忆）的工程实现
- 多 Agent 并行协作能力代表了 [[ai-takeoff]] 路径上的重要里程碑