---
type: concept
title: Dynamic Workflows
created: 2026-05-29
updated: 2026-06-11
tags: [技术, agent, 并行, claude-code, 编程, 多智能体, 编排, ai编程]
related: [claude-code, claude-opus-4-8, 1-n-agent调度, 断点续跑, agent-view, ultracode, effort-control, tokenmaxxing, ai-subscription-crisis, claude-fable-5, write-loops-not-code, 从监工到产品经理, 认知投降]
sources: ["刚刚，claude-opus-4.8来了！两个史上首次改写历史.md", "rss/fable-5一天干完两个月，这类工程师更值钱了.md"]
origin_date: 2026-05-29
---
# Dynamic Workflows

Dynamic Workflows 是 [[claude-code|Claude Code]] 内置的大规模多智能体编排能力，随 [[claude-opus-4-8]] 一同发布。它允许 Claude 编写 JavaScript 脚本编排大量子智能体在后台并行执行任务，将 AI 编程从"一个人改一道题"的模式升级为"开一座工厂"的工业化模式。标志着"一人指挥 AI 军团"从概念变为工程现实。

## 技术架构

Dynamic Workflows 的工作流程分为四个阶段：

1. **任务拆解**：Claude 接到大任务后，当场写出一段 JavaScript 调度脚本，将任务拆分为几十上百个子任务
2. **并行分发**：子任务被撒给一大群 subagent 同时执行
3. **交叉审查**：再派另一拨 agent 从不同角度反复盘问、互相挑刺
4. **收敛汇总**：吵到答案收敛后，汇总成一份结果交给用户

整个调度发生在对话之外，因此即使任务规模很大，主线对话也不会混乱。

## 技术规格

- **单次运行最多：** 1000 个智能体
- **同时并发最多：** 16 个
- **实现方式：** Claude 自动编写 JavaScript 编排脚本

## 适用场景

- 全库代码审计
- 500 个文件以上的大迁移
- 需要交叉验证的研究问题

## 关键特性

- **中途续接**：支持中途断线后从断点继续执行，不用从头再来（印证 [[断点续跑]] 概念）
- **Token 消耗警告**：token 消耗远高于普通 session，建议先从小范围任务试起
- **与 Ultracode 联动**：当 [[effort-control]] 达到 xhigh 档位时，自动触发 [[ultracode]] 模式，调用整支 Agent 大军

## 预置工作流：/deep-research

Claude Code 内置的预置 workflow，专门用于深度研究：

- 将一个问题拆成多个角度搜索
- 交叉核验不同来源
- 投票筛掉站不住的说法
- 输出带引用的报告

## 标杆案例：Bun 迁移

[[jarred-sumner]] 使用 Dynamic Workflows 将 Bun 从 Zig 重写为 Rust：

- 一个 workflow 先标好每个结构体字段对应的 Rust 生命周期
- 下一个 workflow 逐文件翻译为行为一致的 Rust 版本
- 几百个 agent 同时开工，每份文件配两个审查员
- 修复循环驱动编译和测试直到全绿
- 结果：约 75 万行代码，99.8% 测试通过，11 天完成
- 产生六千多次提交，几乎没有经过人类逐行审查

## 与现有概念的关系

- 是 [[1-n-agent调度]] 概念的工程化落地，将理论上的多 Agent 调度变为可用的产品功能
- 是 [[write-loops-not-code|写 Loops 而非写代码]] 理念的具体落地
- 与 [[agent-view]] 互补：前者管调度界面，后者管调度引擎
- 高 token 消耗加剧了 [[ai-subscription-crisis]]，推动行业向按量计费转型
- 上百 Agent 并行进一步推高 Token 消耗，强化 [[tokenmaxxing]] 趋势
- 使 Claude Code 从"终端里陪你聊天的对话框"向"能持续运行、能编排、能复用的工程代理系统"演进

## 风险与张力

- **人类审查缺位**：Bun 案例中六千多次提交几乎未经逐行审查，与 [[认知投降]] 概念形成张力
- **Token 消耗悖论**：虽然 Opus 4.8 单步比上一代少输出 35% token，但 Dynamic Workflows 的规模化使用使总消耗远超普通 session