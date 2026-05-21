---
type: entity
title: TuriX-CUA
tags: [tool, framework, open-source, automation]
related: [turix, turix-superpower, planner-executor-架构, cua-computer-use-agent]
created: 2026-04-15
updated: 2026-04-15
sources: ["全球最年轻00后团队「掀桌子」：gpt做不到的物理执行，被这群少年跑通了.md"]
---

# TuriX-CUA

[[TuriX-CUA]] 是 [[TuriX]] 团队开发的开源计算机使用框架，也是其商业产品 [[TuriX Superpower]] 的核心引擎。该项目基于 Python 构建，旨在实现 Agent 对物理环境的直接操作。

## 技术架构
TuriX-CUA 采用了 **[[Planner+Executor 架构]]**（多模型设计）：
- **Planner（规划者）**：负责任务的思考、决策和规划。
- **Executor（执行者）**：负责具体的物理操作和执行。
这种分离设计有效提升了长序列任务的稳定性。

## 核心功能
- **跨平台支持**：支持 macOS、Windows 和 Linux 多平台。
- **热插拔大脑**：用户可以通过修改配置文件更换底层的视觉语言模型（VLM），无需改动代码。
- **视觉模型驱动**：通过视觉识别界面元素来操作 GUI，而非依赖 API。

## 社区反响
该项目在 GitHub 上迅速获得了超过 2200 Stars，团队表示 Issue 区的反馈将直接驱动项目的工程化迭代。