---
type: entity
title: 字节 Seed 团队
tags: [字节跳动, ai, 研究, 循环语言模型, 架构]
related: [字节跳动, yoshua-bengio, 循环语言模型, ouro, mythos]
created: 2026-04-13
updated: 2026-04-13
sources: ["claude强到不敢发的mythos，被质疑用了字节seed技术.md"]
---

# 字节 Seed 团队

**字节 Seed 团队** 是字节跳动旗下的 AI 研究部门，因提出 [[循环语言模型]]（LoopLM）架构而受到广泛关注。该团队与多个高校合作，图灵奖得主 [[Yoshua Bengio]] 也参与了相关论文的研究。

## 核心贡献

### 循环语言模型 (LoopLM)
该团队提出的 LoopLM 架构打破了标准 Transformer “一次过”的限制，允许模型在生成输出前，在内部潜空间对同一组信息进行多次“循环”处理。

### Ouro 系列模型
团队发布了 Ouro 系列循环语言模型作为实证：
-   1.4B 的 Ouro 模型性能对标约 4B 的传统模型。
-   2.8B 的 Ouro 模型相当于 8B–12B 的传统模型。

## 理论机制

团队的研究区分了 **知识存储**（Knowledge Storage）与 **知识操作**（Knowledge Manipulation）：
-   循环架构不增加知识存储容量（参数量不变）。
-   但极大增强了知识操作能力（多跳推理、图搜索等），这种能力随循环步数和训练 tokens 指数级增长。

## 行业影响

尽管该架构主要在学术和小模型范围内验证，但 Anthropic 的 [[Mythos]] 模型在图搜索任务上的异常表现，引发了社区关于其是否采用了字节 Seed 技术的广泛猜测。

## 相关条目

-   [[Yoshua Bengio]]：合作研究者，图灵奖得主。
-   [[循环语言模型]]：团队提出的核心架构。
-   [[Mythos]]：被怀疑采用该架构的 Anthropic 模型。