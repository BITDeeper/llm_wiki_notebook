---
type: source
title: "谷歌祭出Transformer杀手，8年首次大突破！掌门人划出AGI死线"
tags: [google, deepmind, titans, miras, agi, transformer, rnn, memory]
related: [google-deepmind, gemini, titans-架构, miras-框架, 神经长期记忆, p-doom, jeff-dean, demis-hassabis]
created: 2025-12-07
updated: 2025-12-07
authors: [新智元]
year: 2025
url: "https://mp.weixin.qq.com/s/2RYtqVeyIIo5UNADWRyusg"
venue: "新智元"
sources: ["谷歌祭出transformer杀手，8年首次大突破！掌门人划出agi死线.md"]
---

# 谷歌祭出Transformer杀手，8年首次大突破！掌门人划出AGI死线

## 摘要
本文详细报道了 Google DeepMind 在 NeurIPS 2025 上发布的 [[titans-架构]] 和 [[miras-框架]]，这被视为 Transformer 架构问世 8 年来的首个重大突破。同时，DeepMind CEO [[demis-hassabis]] 在访谈中重申了 AGI 将在 5-10 年内（约 2030 年）实现的预测，并定义了通往 AGI 所需的关键能力（创造力、持续学习）。

## 核心内容

### Titans 架构：Transformer 的继任者
- **定位**：结合了 RNN 的线性推理速度和 Transformer 的并行训练优势。
- **核心机制**：引入 [[神经长期记忆]] 模块（基于深层 MLP），而非传统的上下文窗口。
- **关键指标**：引入 [[惊奇度]]（Surprise Metric）来决定哪些信息应被写入长期记忆。
- **性能**：在 BABILong 基准测试中，以更少参数优于 GPT-4 等巨型模型；支持超过 200 万 token 的上下文窗口。

### MIRAS 框架：序列建模的统一视角
- **理论**：将各种序列模型视为解决“融合新信息与保留旧记忆”这一核心问题的不同手段。
- **四个维度**：
    1. 记忆架构
    2. 注意偏置
    3. [[保留门]]（Retention Gate）：一种记忆正则化机制。
    4. 记忆算法
- **成果**：基于该框架构建了 YAAD、MONETA、MEMORA 等无注意力模型。

### AGI 预测与定义
- **时间表**：[[demis-hassabis]] 预测 AGI 将在 5-10 年内（约 2030 年）实现。
- **定义标准**：必须具备人类所有认知能力，特别是**创造力**和**发明能力**，且各项能力均衡发展。
- **缺失能力**：当前 LLM 缺乏持续学习、在线学习、长期规划和多步推理能力。
- **路径**：除了 [[scaling-law]]，还需要 1-2 个像 Transformer 或 AlphaGo 级别的“核爆突破”。

### 安全与愿景
- **风险**：[[p-doom]]（人类灭亡概率）不是零，必须认真对待。
- **愿景**：实现“后稀缺时代”，解决能源、疾病等重大问题。

### Gemini 3 的元认知潜力
- [[demis-hassabis]] 指出 [[gemini]] 3 展现了被低估的“元认知”能力，例如理解电影《搏击俱乐部》中摘下戒指的象征意义。
- 多模态融合（语言+视频）的潜力远超当前理解。

## 关键人物
- [[demis-hassabis]]：Google DeepMind CEO。
- [[jeff-dean]]：谷歌首席科学家，重申不后悔发表 Transformer 论文。
- [[钟沛林]]：谷歌研究科学家，清华姚班校友，Titans 和 MIRAS 论文共同作者。

## 相关链接
- [[google-deepmind]]
- [[gemini]]
- [[titans-架构]]
- [[miras-框架]]