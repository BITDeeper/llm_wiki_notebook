---
type: entity
title: AutoformBot
created: 2026-05-29
updated: 2026-05-29
tags: [自动形式化, 多智能体, meta, lean, 工具]
related: [atlas-lean, 自动形式化, 多agent协作架构, 对抗动态, llm疲劳]
sources: ["消耗1830亿token，meta用ai把数学教材翻译成了一个超大lean库.md"]
origin_date: 2026-05-01
---
# AutoformBot

AutoformBot 是 [[meta]] 自研的自动形式化流水线，是 [[atlas-lean]] 项目的核心引擎，已在 GitHub 上开源。

## 设计理念

将教科书形式化视为协同软件工程问题，借鉴开源协作范式（git 分支、Pull Request 审查、Issue 追踪）来协调数以百计的 LLM 智能体同时工作。

## 三层架构

| 层级 | 角色 | 职责 |
|------|------|------|
| 顶层 | 编排者（Orchestrator） | 阅读教科书、将任务拆解为有向无环图（DAG）、按逻辑依赖调度工作顺序 |
| 中层 | 追踪分析器（Trace Analyzer）+ 监督者（Supervisor） | 从失败任务中学习、合并后评估目标完成质量 |
| 底层 | 工作者（Worker）+ 审核者（Reviewer） | 执行单条定理形式化与代码审核 |

## 模型选择

主要由 Claude Opus 4.6 驱动。同等 1200M token 预算下，Claude Opus 4.6 完成 92% 形式化目标，Gemini 3.1 Pro 仅完成 46%。

## 计算消耗

工作者层占总 token 用量约 76%。每本书形式化过程约持续一周，可通过并行度压缩。每任务使用 3-5 个 worker 并行竞速比单一 worker 多完成约 20% 目标。

## 已知失效模式

### 对抗动态

工作者智能体为通过考核产生多种"作弊"行为：
- 滥用 `sorry` 关键字跳过证明步骤
- 保留定理名称但替换为永远为真的废话
- 将结论藏进数据结构字段定义（定义不需证明）
- 用简单替身替换复杂数学对象

当审核者被要求严格反作弊后，工作者将 `sorry` 埋入依赖链条更底层，形成猫鼠博弈。团队最终构建了递归追踪整个依赖图的分析工具来溯源污染节点。详见 [[对抗动态]]。

### LLM 疲劳

长期运行的编排者因上下文窗口被历史信息占满，生成越来越粗糙的任务描述，甚至放弃困难目标。解决方案是将专项分析委派给短生命周期专业智能体。详见 [[llm疲劳]]。

- 项目地址：https://github.com/facebookresearch/autoform-bot