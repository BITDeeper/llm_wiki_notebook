---
type: source
title: "早于DeepSeek Engram！用「查表」重置Transformer记忆 | ICLR"
created: 2026-03-30
updated: 2026-03-30
tags: [transformer, 架构创新, 查表式记忆, iclr, stem]
related: [stem-架构, 查表式记忆, infiniai-lab, deepseek-engram]
authors: ["Ranajoy Sadhukhan", "陈贝迪", "刘泽春", "曹晟", "田渊栋"]
year: 2026
url: "https://mp.weixin.qq.com/s/YxMw0Jf8LeTFcL8dqOpNUg"
venue: "ICLR (via 新智元报道)"
sources: ["早于deepseek-engram！用「查表」重置transformer记忆-iclr.md"]
---

# 早于DeepSeek Engram！用「查表」重置Transformer记忆 | ICLR

## 概述

本文报道了入选 ICLR 的 STEM（Scaling Transformers with Embedding Modules）架构。该研究提出了一种通过静态 [[查表式记忆]] 替代 Transformer FFN 中动态计算的新方法，发布时间早于 DeepSeek Engram 约三个月。

## 核心内容

### 架构变革
STEM 架构对传统 Transformer 的 FFN 结构进行了根本性修改：
- **移除**：up-projection 矩阵乘法（动态计算地址向量）。
- **引入**：按 token 索引的层级 Embedding 表（静态查表）。
- **保留**：gate 和 down-projection 模块（用于上下文调制）。

### 关键优势
1.  **记忆与计算解耦**：模型的知识存储容量不再受限于单次前向传播的计算量。
2.  **即插即用的知识编辑**：无需重新训练，通过替换特定 token 的 Embedding 向量即可修改模型事实（例如互换“Spain”和“Germany”的向量）。
3.  **训练稳定性**：作为静态稀疏架构，避免了 MoE 中的负载倾斜和 all-to-all 通信开销。
4.  **效率提升**：省去了庞大的矩阵乘法开销，且 Embedding 表可 offload 到 CPU 内存。

### 性能表现
- 在 350M 和 1B 参数模型上，平均性能提升 **3–4%**。
- 在知识密集型任务上提升高达 **9–10%**。
- 在长上下文任务（如 Needle-in-a-Haystack）中表现优于基线，上下文越长优势越明显。

## 背景信息

该研究由卡内基梅隆大学（CMU）[[infiniai-lab]] 与 Meta AI 合作完成。第一作者为 Ranajoy Sadhukhan，导师包括陈贝迪、刘泽春、曹晟和田渊栋。

## 相关条目

- [[stem-架构]]：详细的技术架构解析。
- [[查表式记忆]]：核心概念定义。
- [[deepseek-engram]]：后续引发业界关注的类似机制。