---
type: entity
title: Darwin Gödel Machine (DGM)
tags: [meta, agent, self-improvement, framework, history, algorithms, self-modification, open-endedness, 系统, 进化算法, 自我进化, Sakana-AI, ai系统, 递归自我改进, 编程智能体]
related: [hyperagents, jenny-zhang, 自进化架构, 哥德尔机, jurgen-schmidhuber, 开放式算法, jeff-clune, 递归式自我改进, alphaevolve, recursive-superintelligence, sakana-ai, swe-bench, ai-takeoff]
created: 2026-04-06
updated: 2026-05-22
sources: ["ai学会左脚踩右脚自进化？meta华人新研究改写agent法则.md", "meta华人实习生搞出超级智能体！自己写代码实现自我进化.md", "赌自己会失业！田渊栋八人天团狂揽44亿元，杀入「递归进化」赛道.md", "博士80小时熬夜改代码，codex-2小时交卷！科研奇点来了.md"]
origin_date: 2025-05-01
---

# Darwin Gödel Machine (DGM)

**Darwin Gödel Machine**（简称 DGM，达尔文哥德尔机）是由 [[jeff-clune|Jeff Clune]] 在 [[sakana-ai|Sakana AI]] 与不列颠哥伦比亚大学（UBC）联合发布的编程智能体研究系统，首次证明 AI Agent 可以自主重写自己的代码来提升性能。该框架旨在通过递归自我改进来提升 AI 智能体的性能，其核心思想结合了 [[jurgen-schmidhuber|Jurgen Schmidhuber]] 提出的哥德尔机（Gödel Machine）概念——其名字暗示了哥德尔不完备定理——与达尔文进化论。

DGM 是 [[hyperagents]] 的前身与基石架构，由 Meta 团队的 [[jenny-zhang|Jenny Zhang]] 等人参与提出。

## 设计原理

### 解决"净收益证明"难题

传统的哥德尔机理论要求 AI 在修改自身代码前，必须从数学上证明该改动的"净收益"（即性能提升带来的收益必须大于计算成本）。这一要求在现实世界的复杂任务中几乎无法实现。

DGM 通过以下机制绕过了这一数学证明的瓶颈：

1. **利用基础模型提议改进**：使用 LLM 生成代码修改方案。
2. **引入开放式算法**：利用 [[开放式算法]] 在大量提议中搜索，构建一个不断增长的、多样化且高质量的 AI 智能体库。
3. **经验性筛选**：通过实际测试和验证（而非数学证明）来筛选有效的改进方案。

### 工作流程

DGM 通过以下循环机制实现自我进化：

1. **自改代码**：Agent 自主重写自己的优化函数和源代码，以修复错误或增加功能。
2. **自我验证**：在 benchmark 上验证修改后的版本是否有效。
3. **存档**：如果改进有效，新代码被保留并存入 Archive 作为"垫脚石"；如果无效，回滚到之前的版本。
4. **迭代**：基于历史成功版本继续进化。这个循环可以无限次运行。

### 自我改进实例

在实验中，DGM 能够自主发现并实施多种具体的自我改进策略，例如：

- 增加补丁验证步骤
- 优化文件查看功能
- 增强编辑工具
- 自动添加历史尝试记录并分析失败原因

## 性能数据

DGM 在编程基准测试中展现了显著的性能提升，全程无人类干预：

| 基准测试 | 初始性能 | 最终性能 |
|---|---|---|
| **SWE-bench** | 20.0% | 50.0% |
| **Polyglot** | 14.2% | 30.7% |

## 局限性

DGM 的有效性高度依赖于**任务能力与自修改能力的对齐**。

- **适用场景（对齐）**：在编程任务中表现优异。因为"写代码"和"改代码"的能力是对齐的，模型在任务上的提升直接转化为改进机制的能力。
- **失效场景（不对齐）**：在非编程任务（如论文评审、数学评分）中，任务能力的提升并不直接转化为改进机制的能力，导致 DGM 几乎失效，除非进行人工定制（DGM-custom）。

这种局限性被称为系统的**自指性**瓶颈。

## 技术意义

DGM 代表了一种 AI 系统能够自主优化自身代码的范式，是 [[递归式自我改进]] 从学术设想走向工程现实的关键里程碑之一，也是 [[递归式自我改进]] 的重要实证案例。它被视为通向 [[ai-takeoff|智能爆炸]] 的关键技术路径之一。

与 Google DeepMind 的 [[alphaevolve|AlphaEvolve]] 几乎同时发布（2025年5月），两者共同验证了 AI 自我进化的技术可行性。

## 与 HyperAgents 的关系

DGM 的 Meta 层（即决定如何修改的机制）是手工设计且固定的，这成为了系统进一步进化的瓶颈。为了解决这一问题，Meta 团队开发了继任者 [[hyperagents]]（DGM-H）。

Hyperagents 将 Meta 层也纳入了可修改的范围，从而实现了跨域的自我进化，克服了 DGM 仅在特定领域有效的局限。

## 与 Recursive 的关系

DGM 的作者 [[jeff-clune|Jeff Clune]] 后来成为 [[recursive-superintelligence|Recursive Superintelligence]] 的联合创始人，将 DGM 的研究成果带入 Recursive 的商业化路径中。

## 参考文献

- 论文地址：https://arxiv.org/abs/2505.22954（2025年5月发表）