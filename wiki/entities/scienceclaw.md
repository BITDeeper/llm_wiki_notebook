---
type: entity
title: ScienceClaw
tags: [ai4s, agent, 智能体平台, 科研工具]
related: [紫东太初, harness, ai4s, hermes-agent, claude-managed-agents, 多agent分层编排]
created: 2026-05-03
updated: 2026-05-03
sources: ["claude有的，国产也有！紫东太初科研龙虾scienceclaw，已经把harness卷进实验室.md"]
---

# ScienceClaw

ScienceClaw 是由 [[紫东太初]] 团队开发的 AI4S（人工智能用于科学）科研智能体平台。它采用 [[harness]]（托管架构），旨在为科研工作者和企业提供可控、可观测的智能体运行环境。

## 核心特性

### 1. 托管架构
与 [[hermes-agent]] 的“大脑增强型”路线不同，ScienceClaw 中的 Agent 没有直接执行权。所有行为必须先进入 Harness，由系统进行路由、策略校验与沙盒托管后才能触发实际执行。这一思路与 [[claude-managed-agents]] 类似。

### 2. 执行透明度
ScienceClaw 的主要差异化优势在于实现了**全链路实时可观测**。相比于 Claude Managed Agents 的黑盒托管，ScienceClaw 允许用户回溯任务执行过程，这对于科研场景中的调试和优化至关重要。

### 3. 多 Agent 分层编排
ScienceClaw 构建了三层架构体系：
- **调度层**：Lead Agent，负责统筹规划和任务拆解。
- **配置层**：SubAgent 注册表，负责 Agent 的注册配置、权限清单和行为配置。
- **执行层**：子Agent工厂，统一入口创建，支持 Soul 文件热更新和中间件灵活组合。

### 4. 软硬一体化
ScienceClaw 不仅能生成实验方案，还能深度接入实验室自动化终端与具身智能硬件，直接实现物理世界交付。

## 能力验证

### 科研场景
- 能够设计复杂的生物实验方案（如蛋白 FUS 的 LLPS 实验），并提供具体的试剂用量和预期结果。
- 内置 3000+ 顶级科研工具，包括 [[alphafold]]、ESMfold 等，覆盖 8 大学科场景。

### 通用场景
- 支持商业数据分析（如生成电商数据报告、异常检测）。
- 支持媒体内容生成（如营销文案）。
- 已接入飞书、微信等平台，支持移动端办公。

## 技术底座
基于紫东太初 4.0 大模型，支持 350 个国产算子，强调全栈自主可控。

## 对比分析
| 特性 | Hermes Agent | Claude Managed Agents | ScienceClaw |
| :--- | :--- | :--- | :--- |
| **核心路线** | 逻辑链增强（大脑型） | Harness 托管 | Harness 托管 |
| **执行权** | Agent 直接执行 | 沙箱托管 | 沙箱托管 |
| **可观测性** | - | 黑盒 | **全链路透明** |
| **主要场景** | 通用 | 通用企业 | **科研 + 通用** |

## 参见
- [[harness]]：智能体托管框架的概念。
- [[ai4s]]：ScienceClaw 所属的应用领域。