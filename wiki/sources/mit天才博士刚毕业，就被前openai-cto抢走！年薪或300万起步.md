---
type: source
title: "MIT天才博士刚毕业，就被前OpenAI CTO抢走！年薪或300万起步"
tags: [人才招聘, 系统优化, 量化, 长上下文, 薪资]
related: [肖光烜, thinking-machines, smoothquant, streamingllm, duoattention, 注意力汇点]
created: 2026-01-09
updated: 2026-01-09
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/mj1btl06U66ML1gr0eIwkQ"
venue: "新智元"
sources: ["mit天才博士刚毕业，就被前openai-cto抢走！年薪或300万起步.md"]
---

# MIT天才博士刚毕业，就被前OpenAI CTO抢走！年薪或300万起步

## 摘要
本文报道了 MIT 博士毕业生 [[肖光烜]] 加盟 [[Thinking Machines]] 的消息。文章详细梳理了肖光烜在清华和 MIT 的学术背景，以及其在 Meta 和英伟达的实习经历。重点解读了他的博士论文《Efficient Algorithms and Systems for Large Language Models》，该论文系统性地解决大模型推理中的显存、速度和量化难题，提出了 [[SmoothQuant]]、[[StreamingLLM]] 和 [[DuoAttention]] 等关键技术。此外，文章还披露了 Thinking Machines 提供的高达 46.25 万美元的平均基础年薪，反映了 AI 领域对顶尖系统人才的激烈争夺。

## 核心内容

### 人才动向
- **肖光烜**：清华本科（计算机+金融双学位），MIT 博士（导师 [[韩松]]），主攻深度学习高效算法与系统。
- **新东家**：[[Thinking Machines]]（由前 OpenAI CTO [[Mira Murati]] 创立），将专注于大模型预训练工作。

### 技术突破
肖光烜的博士论文构建了一套高效大模型系统的完整框架，解决了三大工程难题：

1.  **量化难题 ([[SmoothQuant]])**
    -   **问题**：[[激活值异常]] 导致量化困难。
    -   **方案**：通过数学等价变换，将量化难点从激活值转移到权重。
    -   **成果**：实现首个十亿级模型 W8A8 无损量化，无需重训。

2.  **长序列/流式推理 ([[StreamingLLM]])**
    -   **发现**：[[注意力汇点]] 现象——模型会持续关注初始 token 以维持数值稳定。
    -   **成果**：实现常数内存的流式推理，上下文扩展至百万级。

3.  **推理加速与显存优化**
    -   **[[DuoAttention]]**：结合检索与流式注意力，大幅降低 KV Cache 显存占用。
    -   **[[XAttention]]**：基于反对角评分的块稀疏注意力，加速预填充。
    -   **[[FlashMoBA]]**：定制的 CUDA 内核，使小块注意力机制在 GPU 上高效运行。

### 行业薪资数据
-   **Thinking Machines**：平均基础年薪 46.25 万美元（约 330 万人民币）。
-   **对比**：显著高于 OpenAI（29.2 万美元）和 Anthropic（38.75 万美元）。

## 相关条目
- [[肖光烜]] — 本文主角，MIT 博士，高效 AI 系统专家。
- [[Thinking Machines]] — Mira Murati 创立的 AI 初创公司，以高薪吸纳人才著称。
- [[注意力汇点]] — StreamingLLM 发现的关键现象，解释了长文本推理的稳定性机制。
- [[SmoothQuant]] — 解决激活值异常的量化算法。
- [[ai-subscription-crisis]] — 高昂的人力成本（如 TML 的薪资）是推高 AI 运营成本的因素之一。