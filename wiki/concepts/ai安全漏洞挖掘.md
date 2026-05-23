---
type: concept
title: AI 安全漏洞挖掘
created: 2026-05-20
updated: 2026-05-20
tags: [ai-security, vulnerability, paradigm-shift, agent]
related: [claude-mythos, agentic-harness, 动态验证, 沙箱逃逸, 任务执行范式]
sources: ["1个月干完15个月！claude-mythos猎杀271个漏洞，有的藏了20年.md"]
---
# AI 安全漏洞挖掘

利用大语言模型自动化发现软件安全漏洞的新范式，标志着 AI 从安全研究的辅助工具升级为"顶级猎手"。

## 范式演进

### 第一阶段：静态代码分析（失败）
- 使用 GPT-4 / Claude Sonnet 3.5 进行静态代码分析
- 误报率极高，"看着像那么回事，实际全是幻觉"
- 开源社区称之为"Slop"，维护者花大量时间验证虚假发现

### 第二阶段：动态验证 + Agent 流水线（突破）
- 构建 [[agentic-harness]] 等工程化流水线
- 核心突破：模型编写测试用例**实际复现**漏洞，排除误报
- 实现从实验到生产级规模化的跨越

## 效率跃升

以 [[mozilla-firefox|Firefox]] 为例：
- 2025 年月均修复 21.5 个漏洞
- 2026 年 4 月单月修复 423 个（约 **14 倍**增长）
- 发现了潜伏 20 年的老漏洞

## 两条路线

- **[[anthropic]] 路线：** 封闭高能力，自建安全研究（[[project-glasswing|Glasswing]]）
- **[[openai]] 路线：** 广泛开放，分级授权武装防御者（[[tac-threat-assessment-community|TAC]]）

## 核心张力

AI 发现漏洞的能力已远超自动修复能力，仍需大量工程师人工处理。同时，发现漏洞的 AI 同样可能被攻击者利用——"AI 安全能力的扩散速度可能比建墙的速度更快"。