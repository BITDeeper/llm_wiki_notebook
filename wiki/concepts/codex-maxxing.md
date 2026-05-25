---
type: concept
title: Codex-maxxing
created: 2026-05-23
updated: 2026-05-23
tags: [ai编程, agent, codex, 使用方法论, 效率优化]
related: [codex, jason-liu, agentic-engineering, 1-n-agent调度, tokenmaxxing, vibe-coding]
sources: ["openai大神教你如何榨干codex.md"]
---
# Codex-maxxing

将 [[codex]] 使用效率推到极致的方法论体系，由 OpenAI Codex 团队成员 [[jason-liu]]（Jason Liu）提出并公开发布。核心理念是将 AI 编程工具从"单次问答"改造为"持续运行的工作系统"。

## 核心组件

### 跨月存活巨型线程
不关闭的长期会话线程，积累数月对话历史、偏好和决策。每个工作流一个置顶线程（管日程、管开源项目、监控社交平台等），Agent 再次使用时不用重新交代背景，自动承接进度。

### Heartbeats + @computer 组合
- **Heartbeats**：定时任务调度，Agent 按固定间隔（如每 15/30 分钟）自动执行检查和操作
- **@computer**：计算机操控能力，Agent 可模拟点击、上传等 GUI 操作
- 两者结合使 Codex 从被动工具变为主动巡检、自动执行的"数字员工"

### 本地文件记忆
核心工作记忆存储在本地可控文件（如 Obsidian vault）而非平台内部系统。体现数据主权和可迁移性理念——AI 承载的记忆体量越大，越不该把数据锁死在单一平台。

### 验证机制
为 Agent 任务设定明确的完成标准（如通过所有单元测试），决定任务何时终止。Jason 最强调的原则——"没有验证机制的野心，顶多算个愿望"。

### 口述 > 打字
保留原始思路的模糊性和跳跃性，比精心优化 Prompt 更有效。配合 Steering 功能可在 Agent 执行时插队追加指令。

## 与相关概念的关系

- 与 [[tokenmaxxing]] 形成对比：Tokenmaxxing 追求消耗量最大化，Codex-maxxing 追求使用效率最大化
- 是 [[agentic-engineering]] 在编程工具层面的具体实践
- 多线程管理（Command-1 到 Command-9）是 [[1-n-agent调度]] 的典型案例
- 口述任务方式与 [[vibe-coding]] 的"自然语言驱动"理念一致

## 代表性实践案例

- 每 30 分钟扫描 Slack/Gmail，起草回复草稿但不发送，由人最终决定
- 做动画项目时每 15 分钟检查审阅线程，自动重新渲染并上传
- 洗澡前让 Codex 盯着亚马逊客服排队，洗完退款已到账
- 将 Python Rich 库完整迁移到 Rust，硬性要求通过所有单元测试