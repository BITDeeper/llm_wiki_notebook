---
type: entity
title: "Keller Jordan"
tags: [人物, 研究员, 优化器, nanogpt]
related: [nanogpt, muon, noam-brown, andrej-karpathy, openai]
created: 2026-02-23
updated: 2026-02-23
sources: ["openai大佬爆料：本科生靠一篇博客杀进openai！没博士，0篇论文.md"]
---

# Keller Jordan

Keller Jordan 是一名机器学习研究员，以通过开源项目和博客成功入职 OpenAI 而闻名。他的案例打破了顶级 AI 实验室“非博士不用”的刻板印象，展示了 [[开源影响力]] 在职业发展中的巨大潜力。

## 职业路径

### 早期经历
- 毕业于 UCSD（加州大学圣地亚哥分校），获得数学和计算机双学士学位。
- 毕业时无博士学位，未发表过任何论文。
- 首份工作是在一家人工智能内容审核初创公司。

### 转折点：NanoGPT Speedrun
Keller 通过对 [[nanogpt]] 进行极限优化而进入业界视野。
- **成果**：将训练 Transformer 模型的 token 效率提升了 3.8 倍（从 10B tokens 降至 2.7B tokens）。
- **原则**：坚持“低成本实验”，将单次尝试成本降至 8 美元，代码仅 537 行，确保完全可复现。
- **影响**：该工作获得了 [[andrej-karpathy]] 的公开称赞，被称为“干得漂亮”。

### 入职 OpenAI
2024 年 12 月，Keller Jordan 正式加入 OpenAI。他的入职并非依靠传统学术论文，而是凭借：
1. 完全开源的代码和实验日志。
2. 可量化的性能提升（Speedrun 记录）。
3. 开发的 [[muon]] 优化器刷新了多项训练速度纪录。

## 核心贡献

### Muon 优化器
- 一种为神经网络 2D 参数隐藏层设计的优化器。
- 核心技术：使用 Newton-Schulz 迭代对 SGD-动量更新矩阵进行正交化处理。
- 性能：在 bf16 精度下稳定运行，在特定任务上表现优于 AdamW。

### 研究哲学
Keller 拒绝为 Muon 撰写传统论文，认为大多数优化器论文是“水文”。他更倾向于通过博客和代码直接传播知识，强调可复现性和实战价值。

## 相关链接
- [[开源影响力]]
- [[测试时计算]]