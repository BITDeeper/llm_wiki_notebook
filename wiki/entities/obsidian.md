---
type: entity
title: Obsidian
tags: [工具, 知识管理, markdown, 笔记软件, knowledge-management, note-taking]
related: [andrej-karpathy, 自维护知识库, obsidian-web-clipper, openclaw, clawhub, 个人知识库自动化, 卡帕西式知识库, openhuman]
sources: ["卡帕西解锁大模型新玩法！构建个人知识库，“大部分token已经不跑代码了”.md", "龙虾部署不求人，还附5个openclaw必备技能.md", "虾马之后又火一个！openhuman用20分钟了解你的一切，存成卡帕西式知识库.md"]
created: 2026-04-03
updated: 2026-05-22
---

# Obsidian

[[Obsidian]] 是一款基于本地 Markdown 文件的双向链接笔记软件，支持图谱视图和灵活的插件生态，常被用于构建个人知识库（"第二大脑"）。在 AI Agent 生态中，Obsidian 作为本地知识库的兼容格式被广泛采用。

## 核心特性与优势

- **本地化**：数据完全存储在本地，符合隐私保护需求。
- **纯文本**：基于 Markdown 格式，便于大模型读取和处理。
- **反向链接**：天然支持知识网络构建，与 AI 生成的交叉引用完美契合。
- **可视化支持**：通过插件（如 Marp）生成幻灯片或展示图表。

## 在 AI 知识库中的角色

### 卡帕西式知识库

在 [[andrej-karpathy]] 公开的 [[卡帕西式知识库]]（LLM Wiki）工作流中，Obsidian 作为知识库载体，扮演了**前端查看层**的角色：

- **浏览原始数据**：查看存放在 `raw/` 文件夹中的原始资料。
- **查看编译维基**：阅读由大模型整理、摘要和链接后的结构化维基页面。

### OpenHuman 记忆树

[[openhuman]] 的 [[记忆树]] 数据同步生成兼容 Obsidian 的 .md 文件，用户可直接用 Obsidian 浏览和编辑 Agent 的"记忆"。

## 与 AI 的深度结合

在 [[openclaw]] 的生态中，Obsidian 插件赋予了智能体直接读写本地 Vault 的能力。这使得 AI 不仅仅是聊天机器人，而是成为了知识管理的主动参与者。

### 自动化工作流

结合 [[openclaw]]，Obsidian 可以实现 [[个人知识库自动化]]：

- **自动归档**：将聊天记录、搜索到的资料自动转化为 Markdown 笔记。
- **智能链接**：自动为新笔记添加双向引用和标签。
- **知识图谱构建**：辅助生成 MOC（Map of Content），梳理知识结构。

这种结合解决了传统笔记软件"录入难、整理难"的痛点，让用户专注于思考，而将繁琐的记录和整理工作交给 AI。

## 配套工具

- [[Obsidian Web Clipper]]：用于将网页内容一键抓取并转换为 Markdown 文件存入本地。