---
type: source
title: "Karpathy：写了20年代码，现在像作弊"
tags: [ai-coding, karpathy, agentic-engineering, paradigm-shift]
related: [andrej-karpathy, agentic-engineering, autoresearch, claude-code, vibe-coding, slopacolypse]
created: 2026-03-15
updated: 2026-03-15
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/RCZHr1RB-7Yn4tcJdPcG-A"
venue: "新智元"
sources: ["karpathy：写了20年代码，现在像作弊.md"]
---

# Karpathy：写了20年代码，现在像作弊

## 概述
本文详细记录了 AI 专家 [[andrej-karpathy]] 在编程范式上的最新转变。他从一年前提出的 [[vibe-coding]]（氛围编程）转向了更系统化的 [[agentic-engineering]]（智能体工程）。文章通过 [[autoresearch]] 项目和家庭监控系统搭建的实例，展示了 AI Agent 如何在无人干预下自主完成复杂的工程任务，引发了关于“作弊感”和 [[slopacolypse]]（代码泛滥）的讨论。

## 核心事件

### autoresearch 项目
Karpathy 开源了一个自动化实验项目，旨在让 AI Agent 在真实 LLM 训练环境中自主运行实验。
- **运行机制**：Agent 修改代码 -> 训练 5 分钟 -> 检查结果 -> 保留或丢弃，循环往复。
- **成果**：在 Karpathy 睡觉期间，Agent 对 [[nanochat]] 仓库进行了 110 次修改，验证损失从 0.862415 降至 0.858039。
- **效率**：每小时约 12 次实验，且不占用人类时间。

### 家庭监控系统搭建
Karpathy 展示了 Agent 全程执行复杂任务的能力：
- **任务内容**：登录服务器、配置 SSH 密钥、下载模型、搭建 Web UI、生成完整报告。
- **耗时**：约 30 分钟。
- **自主性**：遇到报错时，Agent 自行搜索解决方案并修复，无需人类介入。

## 观念演变

### 从 Vibe Coding 到 Agentic Engineering
- **Vibe Coding (2025年2月)**：随意的、非结构化的 AI 辅助编程，Karpathy 认为它适合周末项目，但“太慢”。
- **Agentic Engineering (2026年2月)**：新的默认模式。99% 的时间不直接写代码，而是编排 Agents 并充当监督者。Karpathy 强调这其中有“艺术与科学”，值得深耕。

### 工作流的翻转
Karpathy 描述了过去几周内他 20 年来最大的工作流变化：
- **过去**：80% 手写代码 + 20% Agent 辅助。
- **现在**：80% Agent 执行 + 20% 修改润色。
- **比喻**：就像手持 AI 在瞄准，它在发射弹药。偶尔会走火，但找到正确角度时，能瞬间解决问题。

## 行业影响与心理冲击

### Slopacolypse (代码泛滥)
Karpathy 造词描述大量 AI 生成的低质量代码汹涌而至、难以区分的局面。他提到使用 [[claude-code]] 时有一种真实的“作弊感”和“不适感”，并感到自己“手动写代码的能力正在慢慢萎缩”。

### 数据佐证
Y Combinator 2025 冬季批次的初创公司中，25% 的代码库 95% 以上由 AI 生成。

### 专家角色的转变
Box CEO [[aaron-levie]] 指出，深度技术专长不会被稀释，而是被乘上了更大的杠杆。Karpathy 对此表示赞同，认为在顶层，技术专长现在是一个“乘数”。

## 工程实践：锁定策略
在 [[autoresearch]] 项目中，Karpathy 采取了一种关键的控制策略：
- **策略**：锁定所有文件，仅允许 Agent 修改 `train.py`。
- **目的**：保持 diff 可审查，确保人类能读懂 Agent 在做什么，在自动化与控制权之间取得平衡。

## 结论
Karpathy 的经历标志着编程从“编写代码”向“编排智能体”的根本性转变。新的游戏规则是：谁能最快让 Agent 推进项目，谁就是赢家。懂得如何提出正确问题、验证结果并在正确节点介入，变成了稀缺资产。