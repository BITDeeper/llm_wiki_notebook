---
type: source
title: "OpenAI大佬爆料：本科生靠一篇博客杀进OpenAI！没博士，0篇论文"
tags: [招聘, 职业发展, 开源, 优化器, nanogpt]
related: [keller-jordan, noam-brown, nanogpt, muon, 开源影响力]
created: 2026-02-23
updated: 2026-02-23
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/No7ZEkoOPXaUU43fcuckPg"
venue: "新智元"
sources: ["openai大佬爆料：本科生靠一篇博客杀进openai！没博士，0篇论文.md"]
---

# OpenAI大佬爆料：本科生靠一篇博客杀进OpenAI！没博士，0篇论文

## 摘要
本文报道了 [[keller-jordan]] 等人通过开源项目和博客技术分析，打破传统学历壁垒，成功入职顶级 AI 实验室（OpenAI, Google DeepMind, Anthropic）的案例。OpenAI 研究员 [[noam-brown]] 指出，行动力、开源贡献和可量化的成果是比博士学位更有效的通行证。

## 核心案例

### Keller Jordan：从 NanoGPT Speedrun 到 OpenAI
- **背景**：UCSD 本科生毕业，无博士学位，0 篇论文。
- **关键项目**：
  - **NanoGPT Speedrun**：对 [[nanogpt]] 进行极限优化，将训练 Transformer 模型的 token 效率提升了 3.8 倍（从 10B tokens 降至 2.7B tokens）。
  - **Muon 优化器**：开发了基于 Newton-Schulz 迭代的正交化更新优化器，刷新了 CIFAR-10 训练速度纪录。
- **策略**：坚持“低成本实验”原则，将单次实验成本降至 8 美元，代码极简（537 行），确保完全可复现。
- **结果**：因工作可量化、进展清晰且完全开源，获得 [[andrej-karpathy]] 盛赞，并于 2024 年 12 月入职 OpenAI。

### 其他案例
- **Sholto Douglas**：通过在 Jax 社区的高质量提问和业余项目，入职 Google DeepMind。
- **Andy Jones**：通过撰写关于 [[测试时计算]] 的深度博客（包含自建 GPU 加速环境和严谨消融实验），入职 Anthropic。

## 核心观点
- **行动力 > 学历**：在已有论文基础上做改进并开源，是证明能力的绝佳方式。
- **可量化成果**：代码、日志和基准测试比简历更具说服力。
- **降低门槛**：通过极简设计和低成本实验，让个人研究者也能参与前沿探索。

## 相关技术
- [[nanogpt]]：Karpathy 开源的轻量级 GPT 训练框架。
- [[muon]]：Keller 开发的新型神经网络优化器。
- [[测试时计算]]：Andy Jones 的研究主题，探讨推理阶段计算量的价值。