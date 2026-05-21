---
type: concept
title: DBTL 闭环
tags: [workflow, bio-manufacturing, iteration]
related: [saion-ai, cell2cloud, ai-for-science]
created: 2026-03-11
updated: 2026-03-11
sources: ["国产物理ai黑马杀出！超越gpt与斯坦福biomni，狂揽生物制造sota.md"]
---

# DBTL 闭环

DBTL (Design-Build-Test-Learn) 即“设计-构建-测试-学习”闭环，是生物制造领域标准的研发迭代流程。

## 在 SAION 中的实现
[[saion-ai]] 平台通过 [[物理人工智能]] 实现了 DBTL 的全自动化与智能化：
1.  **Design (设计)**：AI 认知层基于文献与数据设计实验方案。
2.  **Build (构建)**：通过 [[bpl-生物标准协议语言]] 指令调度 [[cell2cloud]] 设备构建生物样本。
3.  **Test (测试)**：设备自动运行实验并获取结果。
4.  **Learn (学习)**：实验数据实时回流，通过强化学习优化模型，指导下一轮设计。

## 意义
这一闭环机制使得 AI 系统能够像人类科学家一样，通过实验结果不断积累经验、修正假设，实现自我进化。