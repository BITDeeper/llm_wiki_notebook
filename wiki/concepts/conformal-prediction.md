---
type: concept
title: 共形预测
tags: [statistics, trustworthy-ai, uncertainty-quantification, machine-learning]
related: [uncertainty-quantification, cheng-lu, hallucination, nsf]
created: 2026-02-07
updated: 2026-02-07
sources: ["华科校友程璐斩获美国nsf科研奖！用可信ai助力ai医疗奇点.md"]
---

# 共形预测

**共形预测**（Conformal Prediction）是一种统计学框架，用于为机器学习模型（尤其是大语言模型）的输出提供严格的数学置信区间。它是实现 [[trustworthy-ai|可信 AI]] 和 [[responsible-ai|负责任 AI]] 的关键技术路径之一。

## 核心功能
- **不确定性量化**：不仅给出预测结果，还量化模型对该结果的置信度（例如：“我有 60% 的把握是正确的”）。
- **数学保障**：在数据满足一定交换性假设的前提下，能为预测集提供有限样本覆盖率的理论保证。

## 解决的问题
- **黑盒困境**：当前的深度学习模型（特别是大语言模型）通常是“黑盒”，用户难以判断其输出的可靠性。
- **AI 幻觉**：通过让 AI 诚实表达“不知道”或低置信度，减少因过度自信而导致的错误信息传播。

## 应用场景
- **高风险决策**：在医疗诊断、自动驾驶等领域，AI 必须能够告知人类其预测的确定性程度，以便人类专家进行复核或接管。
- **算法公平性**：有助于识别模型因训练数据偏差而对特定群体产生的不可靠预测。

## 与大模型的结合
[[cheng-lu|程璐]] 教授在 NSF CAREER Award 项目中，利用共形预测方法为大语言模型建立“安全网”，使其能够识别并标记出那些基于有偏差数据源生成的不可靠回答。