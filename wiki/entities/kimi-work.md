---
type: entity
title: Kimi Work
created: 2026-06-04
updated: 2026-06-04
tags: [ai办公, agent, 产品, 月之暗面]
related: [月之暗面, webbridge, vibe-working, qoderwork, codex, claude-code, sensenova-skills, 办公技能框架]
sources: ["kimi-work内测结论：是比code们更懂中国职场.md"]
origin_date: 2026-06-03
---
# Kimi Work

月之暗面推出的面向知识工作者的本地通用 Agent，目前处于内测（Beta）阶段。产品定位为"[[vibe-working]]"而非"[[vibe-coding]]"，瞄准非技术职场用户的日常办公需求。

## 核心功能

### WebBridge 浏览器插件
内置浏览器操控能力，支持 AI 自动打开网页、点击按钮、填写表单、提取信息等操作。详见 [[webbridge]]。

### Skill 能力
支持三种 Skill 使用方式：
- **自定义 DIY Skill**：用户可创建专属工作流
- **内置 Skill**：预置办公场景技能（PPT生成、周报整理等）
- **本地 Skill 调用**：调用用户本地已有的技能模块

与 [[sensenova-skills]] 的平台侧预置 Skill 不同，Kimi Work 更强调用户侧 DIY 的个性化路径。

### Agent 集群
支持自主创建包含最多 300 个子 Agent 的协作团队，将大任务拆解为子模块并行处理，最后汇总结果。该功能需付费使用，是 [[多agent协作架构]] 和 [[1-n-agent调度]] 范式的商业实现。

## 竞品定位

- 与 [[codex]]、[[claude-code]] 等编程导向工具不同，Kimi Work 主打办公场景
- 与 [[qoderwork]] 同属 AI Native 办公平台赛道，但 QoderWork 侧重设计/PPT/写作三大模式，Kimi Work 侧重本地 Agent + 浏览器操控
- 与 [[pi-presentation-intelligence]] 在 PPT 生成能力上存在竞争

## 实测表现

- 周报生成、PPT制作、信息收集等标准化任务效果正面
- 浏览器交互体感优于竞品（暗指 Claude/Codex 类产品）
- 资源消耗控制良好，未出现电脑发烫卡死问题
- Skill 化写作效果有限，文本偏 AI 感
- 输出格式稳定性有待优化