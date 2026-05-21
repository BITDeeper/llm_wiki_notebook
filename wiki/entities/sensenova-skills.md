---
type: entity
title: SenseNova-Skills
tags: [toolkit, agent, sensetime, open-source, tools, ecosystem]
related: [sensenova-u1, 商汤科技, sn-infographic, openclaw]
sources: ["不卷参数卷架构-这个开源模型把图像理解和生成统一了-20260503.md", "不卷参数卷架构，这个开源模型把图像理解和生成统一了.md"]
created: 2026-05-03
updated: 2026-05-07
---

# SenseNova-Skills

SenseNova-Skills 是 [[商汤科技]] 为 [[sensenova-u1]] 模型配套开源的一套 Agent 技能工具包。它将 U1 模型的能力封装为可直接调用的工具，便于用户在各种应用场景中快速部署和使用。

## 核心组件

### sn-infographic
这是 Skills 工具包中最突出的功能之一，专注于自动化信息图生成。
- **版式库**：内置 87 种不同的版式。
- **风格库**：提供 66 种视觉风格。
- **工作流**：模型会自动生成多个选项并进行自我评分，挑选出最佳结果。
- **调用方式**：支持通过简单的命令（如 `/skill sn-infographic "提示词"`）在 [[OpenClaw]] 等 Agent 框架中直接生成图片。

## 功能覆盖

除了信息图生成，SenseNova-Skills 还覆盖了多个办公和数据处理场景：
- **PPT 制作**：自动化演示文稿生成。
- **Excel 数据分析**：智能处理和可视化表格数据。
- **深度研究**：辅助信息搜集与整理。
- **跨平台搜索**：整合不同来源的信息检索。

## 意义

SenseNova-Skills 的开源降低了大模型应用的开发门槛，使得开发者无需从零开始构建 RAG（检索增强生成）或 Agent 逻辑，直接通过技能包调用即可实现复杂的图文生成与办公自动化任务。