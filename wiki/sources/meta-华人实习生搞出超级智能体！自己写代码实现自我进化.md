---
type: source
title: "Meta华人实习生搞出超级智能体！自己写代码实现自我进化"
authors: [Henry]
year: 2026
venue: "量子位"
url: "https://mp.weixin.qq.com/s/jpFmFkCmFn8lgVCOPn9QiQ"
tags: [ai-agents, meta-learning, self-modification, iclr-2026]
related: [hyperagents, darwin-godel-machine, jenny-zhang, bingchen-zhao, meta, jeff-clune]
created: 2026-03-26
updated: 2026-03-26
sources: ["meta华人实习生搞出超级智能体！自己写代码实现自我进化.md"]
---

# Meta华人实习生搞出超级智能体！自己写代码实现自我进化

## 摘要
Meta 研究团队提出了一种名为 [[hyperagents]]（超级智能体）的新架构，该架构结合了 [[jurgen-schmidhuber]] 的哥德尔机思想与达尔文开放算法。通过 [[darwin-godel-machine]] (DGM)，智能体不仅能优化任务表现，还能实现[[元认知自我修改]]，即优化“改进自身”的底层逻辑。实验显示，该方法在 SWE-bench 上将性能从 20.0% 提升至 50.0%，且改进具有跨模型和跨语言的迁移性。

## 核心观点

### 从哥德尔到达尔文哥德尔机
传统的哥德尔机要求 AI 在修改代码前证明其净收益，这在复杂任务中计算量过大。Meta 团队提出的 [[darwin-godel-machine]] 利用基础模型提议代码改进，并通过开放式算法搜索最优解，从而绕过了复杂的证明过程。

### 超级智能体：元认知进化
虽然 DGM 在编程任务上表现出色，但受限于“自指性”（即任务能力与自我修改能力必须对齐），难以迁移到非编程领域。[[hyperagents]] 通过引入“元智能体”，使得“改进方法”本身也可被编辑和进化，从而打破了这一限制，实现了跨领域的元认知自我修改。

## 关键数据
- **SWE-bench**: 性能从 20.0% 提升至 50.0%。
- **Polyglot**: 性能从 14.2% 跃升至 30.7%。
- **迁移性**: 针对特定模型（如 Claude 3.5）优化的智能体，在切换到 o3-mini 时仍能提升性能；Python 任务上的改进可迁移至 Rust、C++ 等语言。

## 作者背景
- **[[jenny-zhang]]**: 论文一作，UBC 博士生，Meta 实习生，师从 [[jeff-clune]]。
- **[[bingchen-zhao]]**: 论文作者，爱丁堡大学博士生，本科同济大学，前 Meta FAIR 团队成员。

## 安全性考量
论文强调，随着 AI 具备突破人类预设算法边界的能力，[[ai-takeoff]] 的风险增加，因此 AI 安全必须被置于核心位置。