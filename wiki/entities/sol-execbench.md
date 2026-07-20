---
type: entity
title: SOL-ExecBench
created: 2026-06-12
updated: 2026-06-12
tags: [基准测试, gpu内核优化, 英伟达]
related: [first-steps-toward-automated-ai-research, recursive-superintelligence, 英伟达]
origin_date: 2026-01-01
sources: ["rss/anthropic警告的递归ai，田渊栋新公司刚刚走出了「第一步」.md"]
---
# SOL-ExecBench

## 简介

SOL-ExecBench 是 [[英伟达]] 推出的 GPU 计算内核优化基准测试，包含 235 个内核编写任务，覆盖矩阵乘法、归约、归一化层、注意力组件、量化例程、融合块等多类真实工作负载。

## 评分标准

- **SOL 分数 0.5**：对应基准 PyTorch 实现
- **SOL 分数 1.0**：对应硬件理论极限
- 此前最佳公开成绩：0.699

## Recursive 系统成果

[[recursive-superintelligence|Recursive]] 的系统在 235 个内核上整体运行，允许跨任务复用发现的优化模式（如内存搬运策略、分块方式、规约技巧），最终得分提升至 0.754，将距离硬件极限的差距缩小 18%。

## 特殊意义

内核工程是极高度专业化领域，能写出高效 Triton/CUDA 内核的工程师全球凤毛麟角。Recursive 团队坦承自身非内核领域专家，"这些想法来自系统本身，而不是来自我们的专业背景"，证明了 [[自动化ai研究员|自动化 AI 研究]] 系统在人类专家稀缺领域自主发现新知识的能力。