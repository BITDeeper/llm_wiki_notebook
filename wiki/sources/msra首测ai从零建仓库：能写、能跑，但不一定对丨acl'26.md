---
type: source
title: "MSRA首测AI从零建仓库：能写、能跑，但不一定对丨ACL'26"
tags: [msra, acl-2026, repo-genesis, code-generation, benchmark]
related: [repo-genesis, 微软亚洲研究院, 仓库级代码生成, claude-code, cursor]
created: 2026-04-16
updated: 2026-04-16
authors: [微软DKI团队]
year: 2026
url: "https://mp.weixin.qq.com/s/7aXCL8MSVvPc_f2gxJkSFw"
venue: "量子位 (ACL 2026 论文报道)"
sources: ["msra首测ai从零建仓库：能写、能跑，但不一定对丨acl'26.md"]
---

# MSRA首测AI从零建仓库：能写、能跑，但不一定对丨ACL'26

## 概述
本文报道了微软亚洲研究院（MSRA）被 ACL 2026 高分录用的最新工作，该研究提出了名为 [[repo-genesis]] 的基准测试，用于评估 AI 从零开始构建完整代码仓库的能力。研究揭示了当前 AI 编程模型在“能写、能跑”与“逻辑正确”之间存在显著差距。

## 核心发现

### 1. 现状：能写、能跑，但不一定对
尽管现有的 AI 编程工具（如 [[cursor]]、[[copilot]]）在接口覆盖率（AC）和部署成功率（DSR）上表现尚可，但在功能正确性（Pass@1）上依然很低。
- **最强系统表现**（Copilot + Claude）：Python Pass@1 仅 23.67%，Java 仅 21.45%。
- **反差**：部分系统的部署成功率（DSR）可达 100%，但功能正确率却很低，说明模型擅长“模仿形式”和“搭建骨架”，但在“逻辑实现”和“系统整合”上存在缺陷。

### 2. 失败原因分析
研究对失败案例进行了分类统计，指出主要瓶颈在于：
- **跨文件一致性问题**：占失败原因的 50.2%。这是仓库级生成的核心挑战。
- **架构连贯性**：约占 26.0%。
- **依赖管理**：约占 23.8%（在 Java 语言中尤为突出，占 44.7%）。

### 3. 数据集与训练价值
[[repo-genesis]] 包含 106 个仓库（60 Python、46 Java），涵盖 18 个领域、11 套框架，共 1258 个 API 和 2335 条测试。
- 基于 [[ms-agent]] 扩展并利用该数据微调的 [[genesis-agent]]-8B 模型，在多项指标上与 GPT-5 mini 互有胜负，证明了该数据集作为训练信号的有效性。

## 技术细节

### 评测维度
RepoGenesis 引入了三维评测指标，打破了单一准确率指标的局限性：
1. **Pass@1**：功能是否正确，能否扛住黑盒测试（最硬指标）。
2. **API Coverage (AC)**：需求里的接口，实现覆盖了多少。
3. **Deployment Success Rate (DSR)**：生成物能不能真的部署跑起来。

### 局限性
- 主要覆盖 REST 式 Web 微服务，语言集中在 Python/Java。
- 输入是结构化较好的 README，未完全模拟真实世界中“需求含糊、反复改稿”的场景。
- 测评以“过测”为主，未量化代码的可读性、长期可维护性及工程规范。

## 意义
该研究将行业关注点从“片段生成”拉回到“工程构建”，指出了 [[仓库级代码生成]] 中 [[跨文件一致性]] 的关键瓶颈，为下一代模型与 Agent 的开发提供了明确的改进方向。

## 原始出处
- 论文标题：RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository
- 论文链接：https://arxiv.org/abs/2601.13943
- 代码与榜单：https://github.com/pzy2000/RepoGenesis/