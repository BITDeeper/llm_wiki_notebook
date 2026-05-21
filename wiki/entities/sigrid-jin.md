---
type: entity
title: Sigrid Jin
tags: ["developer", "ai", "open-source", "开发者", "开源", "学生"]
related: [claude-code, claw-code, oh-my-codex, anthropic, ai-洗代码]
created: 2026-04-01
updated: 2026-05-08
sources: ["claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "封不住！claude-code爆改python版加冕最快10万星，且clone且珍惜.md"]
---

# Sigrid Jin (instructkr)

Sigrid Jin 是一位韩国开发者，目前为哥伦比亚大学在读学生。他是 [[claw-code]]（Claude Code 的 Python 重写版）的作者，因在 [[claude-code]] 源码泄露事件中通过 AI 工作流重写代码以规避版权封杀而闻名。

## 关键事件：Claude Code 源码重写

2026 年 3 月 31 日凌晨 4 点，面对 [[anthropic]] 发起的 DMCA 版权投诉，Sigrid Jin 采取了一种被称为“[[金蝉脱壳]]”的策略。受其韩国女友提醒，为了避免直接使用泄露的 TypeScript 源码可能带来的法律风险，他启动了名为 [[oh-my-codex]] 的 AI 辅助工作流。

### 技术实现
- **工具**：使用了 10 个 [[OpenClaw]] 账号和一台 MacBook Pro。
- **方法**：利用 OpenAI Codex 进行端到端的自动化代码重写。在数小时内，他将泄露的 51.2 万行 TypeScript 核心逻辑重写为 Python。
- **结果**：生成的 Python 版本保留了原始架构逻辑，但找不到一行原始源代码，成功规避了 [[DMCA]] 的版权检测。

### 项目演进
这一行动基于 [[净室设计]] 原则，声称未直接复制原始代码，从而使得针对原始 TypeScript 代码的版权投诉失效。随后，代码又被进一步重构为 Rust 版本，Jin 称之为项目的“完全体”。

## 项目影响

- **GitHub 增长**：他创建的 [[Claw Code]] 项目在发布后 2 小时内获得 5 万 Stars，24 小时内突破 10 万 Stars，成为 GitHub 历史上增长最快的开源项目之一。
- **行业讨论**：他的行动被视为 AI 时代 [[ai-洗代码]] 的标志性案例，引发了关于 AI 辅助代码重写与版权法边界的大讨论。

## 背景与观点

- **消耗记录**：曾因一年消耗 250 亿 Claude Token 被《华尔街日报》报道，并受邀参加 Claude Code 官方周年派对。
- **技术立场**：并非单一 AI 实验室的“死忠粉”，认为 Codex 逻辑推理更强，而 Claude Code 代码更干净。
- **关注领域**：对 [[Harness Engineering]]（AI 智能体系统工程）有浓厚兴趣。