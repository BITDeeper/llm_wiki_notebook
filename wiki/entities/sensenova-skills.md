---
type: entity
title: SenseNova-Skills
tags: [toolkit, agent, sensetime, open-source, tools, ecosystem, 开源项目, 办公自动化, 商汤科技, skills框架]
related: [sensenova-u1, 商汤科技, sn-infographic, openclaw, sensenova-6-7-flash-lite, 办公小浣熊, 任务执行范式, 领域驱动ai办公, hermes-agent, claude-code]
sources: ["不卷参数卷架构-这个开源模型把图像理解和生成统一了-20260503.md", "不卷参数卷架构，这个开源模型把图像理解和生成统一了.md", "只需一套神奇的skills，彻底跑通四个办公场景！.md"]
created: 2026-05-03
updated: 2026-05-22
---

# SenseNova-Skills

SenseNova-Skills 是 [[商汤科技]] 开源的办公场景技能框架，MIT 协议，覆盖数据分析、深度研究、PPT 生成、搜索四大类高频办公任务。GitHub 开源后迅速获得 4 位数 Star。它将 [[sensenova-u1]] 等模型的能力封装为可直接调用的工具，便于用户在各种应用场景中快速部署和使用。

## 架构设计

SenseNova-Skills 的核心理念是**模型-技能分离**：Skills 提供流程知识和工具链编排，模型提供推理和决策，二者解耦。这使得同一套 Skills 可跨多种 Agent 工具运行。

每个 Skill 都是独立目录，通过 `SKILL.md` 声明触发条件和非触发条件，Agent 根据指令自动选择和编排，无需手动指定。

## 四大类任务

### 1. 数据分析

- **sn-da-excel-workflow**：多表读取、大文件超 1 万行自动触发 Parquet 优化、清洗聚合导出全流程编排
- **sn-da-image-caption**：专门处理图片表格 OCR

### 2. 深度研究

- **sn-deep-research**：含 6 个子 Skills，分别负责规划、取证、综合、成稿、格式发现、HTML 转换
- 支持中间产物持久化和 [[断点续跑]]

### 3. PPT 生成

- **sn-ppt-entry**：统一入口，支持标准模式和创意模式
- 标准模式链路：大纲 → 逐页 HTML → 逐页 VLM 评审（不合格自动重写）→ PPTX 导出
- 内置 [[vlm质检闭环]] 机制

### 4. 搜索

- 聚合 arXiv、Semantic Scholar、PubMed、GitHub、Stack Overflow、Hacker News、HuggingFace、Reddit、Twitter、YouTube、B 站、知乎、抖音
- 学术 + 开发者 + 中英文社交全覆盖

## 附加能力：信息图生成（sn-infographic）

这是 Skills 工具包中最突出的功能之一，专注于自动化信息图生成，可调用 [[sensenova-u1]] 模型完成高密度复杂信息图生成。

- **版式库**：内置 87 种不同的版式
- **风格库**：提供 66 种视觉风格
- **工作流**：模型会自动生成多个选项并进行自我评分，挑选出最佳结果
- **调用方式**：支持通过简单的命令（如 `/skill sn-infographic "提示词"`）在 [[OpenClaw]] 等 Agent 框架中直接生成图片
- **质量保障**：含自动提示词扩写 + VLM 质检 + 质量排序

## 跨平台兼容性

已在以下 Agent 工具中验证可运行：

- [[claude-code]]
- Codex CLI
- ChatGPT
- [[openclaw]]
- [[hermes-agent]]

## 部署方式

1. **本地安装**：通过 agent_pack 一键装（集成 Hermes Agent 和 OpenClaw 框架），或直接克隆 Skills 仓库
2. **云端产品**：[[办公小浣熊]] 已集成全系 Skills，开箱即用

## 意义

SenseNova-Skills 的开源降低了大模型应用的开发门槛，使得开发者无需从零开始构建 RAG（检索增强生成）或 Agent 逻辑，直接通过技能包调用即可实现复杂的图文生成与办公自动化任务。

## 项目地址

- Skills 仓库：https://github.com/OpenSenseNova/SenseNova-Skills
- 一键安装包：https://github.com/OpenSenseNova/agent_pack