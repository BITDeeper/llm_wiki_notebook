---
type: entity
title: Bun
tags: [tool, javascript, runtime, security, developer-tools, infrastructure, acquisition, 运行时, rust, zig, 开源项目]
related: [claude-code, source-map-leaks, anthropic, javascript-runtime, 动态工作流, claude-opus-4-8]
created: 2026-04-01
updated: 2026-05-29
sources: ["claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "30天没写一行代码，他却赚了10亿美金！.md", "claude-4.8炸场！部分能力超过mythos，支持数百子智能体并行.md"]
---

# Bun

Bun 是一款现代化的 JavaScript 运行时和打包工具，最初使用 Zig 语言编写，以其高速性能著称。它是 [[Anthropic]] 旗下 [[Claude Code]] 的首笔战略收购对象，同时也被怀疑是导致 [[claude-code]] 源码泄露事故的技术源头。2026 年 5 月，Bun 创始人 Jarred Sumner 使用 [[动态工作流]] 完成了从 Zig 到 Rust 的移植，成为 Anthropic 展示动态工作流能力的标杆案例。

## 收购背景

- **时间点**：2025 年 12 月左右。
- **收购方**：[[Anthropic]]。
- **战略意义**：此次收购标志着 AI 编码工具开始进入**中后台基础设施时代**。通过整合 Bun，Claude Code 旨在深化其与企业级开发环境的融合，进一步打开企业付费市场。

## 行业影响

Bun 被 Claude Code 收编，暗示了 AI 编程工具正从单纯的"代码补全"向全栈"开发环境"演进。这一举措不仅增强了 Claude Code 的底层执行能力，也展示了 Anthropic 构建完整开发生态的野心。

## 安全事件与漏洞历史

2026 年初，Claude Code 的 51.2 万行源码因 npm 发布时包含了 source map 文件而泄露。开发者社区推测，这可能是 Bun 中的一个漏洞导致的。

据 GitHub 记录，相关 Bug 报告早在泄露发生前三周（约 2026 年 3 月初）就已被提出，但在当时尚未修复。这一事件引发了社区对构建工具安全性与便利性权衡的讨论。

## Zig → Rust 移植

2026 年 5 月，Bun 创始人 Jarred Sumner 使用 [[claude-opus-4-8|Claude Opus 4.8]] 的 [[动态工作流]] 完成了从 Zig 到 Rust 的全面移植，成为 Anthropic 展示动态工作流能力的标杆案例。

### 移植详情

- 使用 [[claude-opus-4-8|Claude Opus 4.8]] 的动态工作流完成
- 数百个智能体并行工作
- 从首次 commit 到 merge 耗时 11 天
- 产出约 75 万行 Rust 代码
- 99.8% 的现有测试套件通过

### 争议

- 部分测试被修改以使 Rust 版本通过
- GitHub 上出现了 Zig 原版中不存在的新错误
- 移植完成后尚未投入生产环境

这一案例既展示了动态工作流的强大能力，也暴露了 AI 大规模代码生成中质量保障的挑战。