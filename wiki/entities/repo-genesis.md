---
type: entity
title: RepoGenesis
tags: [benchmark, code-generation, msra, acl-2026]
related: [微软亚洲研究院, genesis-agent, 仓库级代码生成, 跨文件一致性]
created: 2026-04-16
updated: 2026-04-16
sources: ["msra首测ai从零建仓库：能写、能跑，但不一定对丨acl'26.md"]
---

# RepoGenesis

[[repo-genesis]] 是由 [[微软亚洲研究院]]（MSRA）提出的首个面向多语言、仓库级、端到端 Web 微服务生成的基准测试数据集。相关论文被 ACL 2026 高分录用。

## 核心特征
与传统的 HumanEval 或 SWE-Bench 等基准不同，RepoGenesis 聚焦于从零开始（0 到 1）构建完整代码仓库的能力，而非仅生成单个函数或在既有仓库中打补丁。

### 数据规模
- **仓库数量**：106 个（60 个 Python，46 个 Java）。
- **覆盖范围**：18 个领域，11 套框架。
- **测试规模**：包含 1258 个 API 和 2335 条测试用例。
- **评测子集**：Verified 包含 30 个仓库（6 个来自真实 GitHub 项目 + 24 个专家构造），另有 76 个仓库构成 Train 子集。

### 任务定义
**输入**：一份结构化的需求文档（README.md），包含功能、API、模式和约束。
**输出**：一套完整的可部署代码仓库，包括源码、配置和依赖声明。

## 评测体系
RepoGenesis 引入了三维评测指标，以全面评估模型的生成能力：

1.  **Pass@1**：功能正确性，即生成代码能否通过黑盒测试。这是最硬核的指标。
2.  **API Coverage (AC)**：接口覆盖率，衡量需求中定义的接口有多少被实际实现。
3.  **Deployment Success Rate (DSR)**：部署成功率，衡量生成的代码是否能够成功部署并运行。

## 实验结果
在对 DeepCode、MetaGPT、MS-Agent、Qwen-Agent 等开源 Agent，以及 Antigravity、Cursor、Copilot 等商业 IDE 的评测中：
- **接口覆盖率 (AC)**：最高可达约 73.91%。
- **部署成功率 (DSR)**：部分配置下可达 100%。
- **功能正确率 (Pass@1)**：最强系统（Copilot + Claude）在 Python 上仅 23.67%，Java 上仅 21.45%。

这一结果揭示了当前 AI 模型在 [[跨文件一致性]] 和逻辑正确性上的显著短板。

## 训练价值
研究团队基于 [[ms-agent]] 扩展了 [[genesis-agent]]，利用 RepoGenesis 数据中的成功轨迹进行微调。实验表明，基于该数据微调的 8B 模型在多项指标上可与 GPT-5 mini 竞争，证明了其作为高质量训练信号的价值。

## 局限性
- 目前主要聚焦于 REST 式 Web 微服务。
- 语言覆盖仅限于 Python 和 Java。
- 输入需求文档较为结构化，未完全涵盖真实开发中需求模糊多变的情况。

## 外部链接
- 论文链接：[arXiv:2601.13943](https://arxiv.org/abs/2601.13943)
- GitHub 仓库：[pzy2000/RepoGenesis](https://github.com/pzy2000/RepoGenesis/)
- 公开榜单：[RepoGenesis Leaderboard](http://23.83.232.182:4090/)