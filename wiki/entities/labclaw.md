---
type: entity
title: LabClaw
tags: [ai-for-science, open-source, agent, bioinformatics]
related: [openclaw, labos, cong-le, wang-mengdi]
created: 2026-03-15
updated: 2026-03-15
sources: ["科研人有自己的“吃虾”方式！斯坦福普林斯顿最新开源，仅需一行指令.md"]
---

# LabClaw

**LabClaw** 是由斯坦福大学和普林斯顿大学团队联合开源的 AI 科研智能体技能包，被称为“科研版 [[OpenClaw]]”。它旨在通过封装标准化的科研技能，将 AI 辅助科研的门槛降低至“一行指令”。

## 核心特性
- **技能库**：包含 211 个生产级 `SKILL.md` 文件，覆盖生物医学研究的各个环节，包括文献检索（`pubmed-search`）、引用管理（`citation-management`）和科学写作（`scientific-writing`）。
- **低门槛调用**：用户无需编写复杂的提示词，只需向 OpenClaw 发送一条指令，即可自动调用相应的技能组合。
- **Always-On 模式**：可部署为长期运行的实验室助手，持续监控仪器数据流（如显微镜、传感器），自动分析异常并生成实验日志。

## 技术架构
LabClaw 基于 [[OpenClaw]] 平台构建，利用其智能体能力执行具体的科研任务。它可以被视为一个“应用市场”，其中每个 Skill 就像一个功能特定的 App。

## 应用场景
- **自动化文献综述**：自动检索、整理并生成论文草稿。
- **实验监控**：24/7 监控实验数据，识别设备故障或实验异常。
- **数据分析**：处理复杂的生物医学数据集并生成报告。

## 关联项目
- **[[LabOS]]**：配套的 AI-XR 协同操作系统，作为“大脑”调度 LabClaw 中的技能。
- **[[丛乐]] & [[王梦迪]]**：项目负责人。

## 外部链接
- [GitHub 仓库](https://github.com/wu-yc/LabClaw)
- [项目主页](https://labclaw-ai.github.io/)