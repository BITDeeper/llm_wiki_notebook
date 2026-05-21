---
type: concept
title: Agent-Skills
tags: [standard, protocol, agent-engineering]
related: [magicskills, anthropic, skill-复用]
sources: ["龙虾的应用商店挂牌了！北大开源magicskills，让agent-skill可自由安装组合同步.md"]
created: 2026-03-19
updated: 2026-03-19
---

# Agent-Skills

[[Agent-Skills]] 是一个关于 AI Agent 技能（Skill）定义与格式的开放标准（官网：agentskills.io）。

## 核心定义

该标准定义了一个技能的文件夹格式，通常包含：
- **SKILL.md**：技能的元数据文件，既是写给大模型的指令说明，也是工具读取元数据的来源。
- **脚本与资源**：支持技能运行的具体代码、Prompt 模板或其他资源文件。

## 设计理念

秉持“Write once, use everywhere”（一次编写，到处使用）的理念，旨在解决不同 Agent 框架和应用之间技能接入方式割裂的问题。

## 生态支持

该标准已被业界广泛采纳，覆盖了 26+ 平台，包括但不限于：
- **模型/应用**：Claude, OpenAI Codex, Gemini CLI, GitHub Copilot, Cursor, Windsurf。
- **合作伙伴**：Atlassian, Figma, Canva, Stripe, Notion, Zapier 等。

此外，[[Anthropic]] 官方维护的开源仓库 `anthropics/skills` 也是基于此标准构建的重要技能库。

## 价值

作为 [[MagicSkills]] 等工具的生态基础，Agent-Skills 标准使得技能可以在不同的 Agent 运行时和框架之间无缝流转，是实现 [[Skill-复用]] 和构建通用 Agent 生态的关键前提。