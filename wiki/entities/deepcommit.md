---
type: entity
title: DeepCommit
tags: [tool, pipeline, software-engineering, data-processing]
related: [evoclaw, 里程碑任务依赖图, 持续软件演进]
created: 2026-03-25
updated: 2026-03-25
sources: ["openclaw代码越改越崩？新研究evoclaw揭示：agents持续开发成功率仅13.37%.md"]
---

# DeepCommit

[[deepcommit]] 是一个由 EvoClaw 研究团队提出的 Agent 驱动自动化流水线，用于将原本噪声很大的 Git 历史重构为可验证的 [[里程碑任务依赖图]]（Milestone DAG）。

## 工作流程

DeepCommit 的构建过程分为三个阶段：

1.  **静态分析与去噪**
    过滤掉与核心功能无关的修改（如文档、CI/CD 配置等），并通过静态分析提取出代码行级别和符号级别的 commit 间依赖关系。

2.  **Agent 驱动的 DAG 构建**
    利用大模型 Agent 充当“架构师”，通过四个子步骤重构历史：
    -   寻找具有开创性的“种子”提交。
    -   将语义相关的提交聚拢并合并为一个完整的 Milestone。
    -   推理出它们之间的依赖关系。
    -   动态拆分过大的 Milestone 以保证颗粒度均匀。

3.  **运行环境解析与验证**
    面对重构后可能出现的接口不匹配和编译报错，DeepCommit 设计了一套“迭代式修复循环”。Agent 会主动分析报错日志，动态修改 Dockerfile，并补充原本遗漏的隐式依赖，最终确保能收集到至少 85% 的原有测试用例。

## 核心价值

DeepCommit 解决了传统 Commit（太碎）和 Release（太粗）的粒度问题，在语义完整性与依赖保留之间取得了平衡，为评估 AI 代码演进能力提供了真实可执行的任务基础。