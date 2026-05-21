---
type: entity
title: Lawrence Chan
tags: [researcher, fact-checking, ucb-berkeley]
related: [pine-ai, ikp-不可压缩知识探针, ben-sturgeon]
created: 2026-05-03
updated: 2026-05-03
sources: ["gpt-5.5参数有10t？病毒式论文刚刚被打假，实际缩水至1.5t.md"]
---

# Lawrence Chan

Lawrence Chan 是 UC 伯克利 CHAI 实验室的研究者。

## 主要贡献
他对 [[Pine AI]] 发布的 [[IKP (不可压缩知识探针)]] 论文进行了深入的代码复现和数据分析，成功指出了原论文中的关键逻辑漏洞。

## 打假发现
1.  **代码偏差**：发现原论文在计算小模型得分时使用了“保底处理”（将负分归零），导致拟合曲线斜率人为变大。
2.  **数据质量**：指出原论文使用的测试题库中约有 25% 存在歧义或事实错误。

他的工作将 GPT-5.5 的参数估算值从 9.7T 修正至 1.5T，并强调了在 AI 辅助科研中保持人类严谨性的重要性。
