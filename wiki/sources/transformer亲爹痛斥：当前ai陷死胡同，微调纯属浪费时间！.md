---
type: source
title: "Transformer亲爹痛斥：当前AI陷死胡同，微调纯属浪费时间！"
tags: [ai-architecture, transformer, sakana-ai, llm-limitations]
related: [llion-jones, sakana-ai, 架构彩票, 锯齿状智能, continuous-thought-machines, scaling-law]
created: 2026-01-17
updated: 2026-01-17
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/gII3bQq7zU2Qzc1Bwws88w"
venue: "新智元"
sources: ["transformer亲爹痛斥：当前ai陷死胡同，微调纯属浪费时间！.md"]
---

# Transformer亲爹痛斥：当前AI陷死胡同，微调纯属浪费时间！

## 摘要
本文报道了 Transformer 论文共同作者、Sakana AI 创始人 [[Llion Jones]] 对当前 AI 研究方向的尖锐批评。他认为 Transformer 并非 AI 的终点，当前针对该架构的微调研究（如调整归一化层、改进训练方式）大多是局部优化，可能是在浪费时间。他警告称，业界可能陷入了 [[架构彩票]] 带来的 [[重力井]]，重演当年 RNN 被 Transformer 取代时的悲剧。

## 核心观点

### 1. 架构锁定与局部最优
- **历史类比**：在 Transformer 出现前，RNN 是主流，研究者们致力于微调门控单元等细节。Transformer 的出现使这些努力瞬间过时。
- **现状担忧**：当前大量论文仅对 Transformer 进行微小改动（如调整 normalization 层），这可能是徒劳的。
- **锁定效应**：Transformer 生态（工具、理解、训练方法）过于成熟，新架构必须「碾压式」优于它才能突围，否则即使更好也无法推广。

### 2. 硬件彩票与架构彩票
- 引用前 DeepMind 研究员 [[Sarah Hooker]] 的「[[硬件彩票]]」理论：技术胜出往往是因为契合现有软硬件，而非因其本质最优。
- Llion Jones 认为 Transformer 是一种「架构彩票」，其成功可能源于恰好契合了 GPU 算力，而非它是通往 AGI 的唯一路径。

### 3. 锯齿状智能
- 指出当前 LLM 具有 [[锯齿状智能]] 特性：在博士级难题上表现卓越，却在简单任务上犯低级错误。
- 这揭示了当前架构在知识表示和推理上的根本缺陷，仅靠 Scaling 无法解决。

### 4. 未来方向：生物启发
- Llion Jones 已大幅减少 Transformer 相关研究，转向探索受生物启发的新架构。
- 介绍了 Sakana AI 的新成果 [[Continuous Thought Machines]] (CTM)，该模型模拟大脑神经元的同步振荡机制，使用神经动态作为核心表示。

## 相关言论
- [[Ilya Sutskever]] 也曾表示，仅靠 Scaling 当前架构不足以实现 AGI，Scaling 吸走了创新的氧气。

## 意义
本文是 AI 领域罕见的坦诚反思，提醒研究者和从业者警惕路径依赖，关注架构层面的根本性创新，而非仅在现有范式下进行局部优化。