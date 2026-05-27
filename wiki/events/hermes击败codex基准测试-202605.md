---
type: event
title: Hermes击败Codex基准测试
created: 2026-05-26
updated: 2026-05-26
tags: [agent, 基准测试, hermes, codex, 开源, 里程碑]
related: [hermes-agent, codex, nous-research, openai, 框架开销优化, 架构优于语言]
sources: ["python逆天改命！开源hermes首次击败openai-codex.md"]
origin_date: 2026-05-26
participants: [hermes-agent, codex, nous-research, openai]
causes: [框架开销优化]
effects: [架构优于语言]
significance: high
---
# Hermes击败Codex基准测试

2026年5月，[[hermes-agent]] 在针对真实世界 CLI 任务的 11 项基准测试中以 6:5 击败 [[openai]] 旗下的 [[codex]]，标志着开源 Agent 在工程层面首次击败闭源巨头产品。

## 事件背景

- [[hermes-agent]] 由 [[nous-research]] 开发，使用 Python 编写，2026年2月25日上线
- [[codex]] 由 [[openai]] 开发，使用 Rust 编写
- 优化前 Hermes 战绩为 5胜6负，处于落后

## 转折点

[[nous-research]] 团队通过三项 [[框架开销优化]]（Bitwarden磁盘缓存、PEP 562懒加载、配置文件去重），将启动时间从 701ms 降至 258ms，降幅 63%。

## 结果

- **单轮任务（8项）**：Hermes 的中位框架开销降至与 Codex 持平甚至略低
- **多轮任务（3项）**：Hermes 在 5 轮对话的总开销上领先，优化后优势进一步拉大
- **总战绩**：从 5:6 反转为 6:5

## 行业影响

1. 验证了 [[架构优于语言]] 的论点——Python 编写的框架可以通过架构优化击败 Rust 编写的竞品
2. 引发"Python打赢Rust"的行业讨论
3. 展示了开源社区在 Agent 工程领域的竞争力

## 数据亮点

- GitHub 星标：16.7万（三个月内）
- 日活 Token 消耗：353B（[[openclaw]] 的近两倍）

## 未解问题

- 11项基准测试的具体任务和评判标准未充分披露
- "6:5"的结果是否具有统计显著性存疑