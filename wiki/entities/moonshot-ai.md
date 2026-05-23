---
type: entity
title: Moonshot AI
tags: [公司, 中国ai, 模型开发商, organization, china, llm, kimi, company, ai公司, 中国]
related: [kimi-k2-6, muon-优化器, deepseek-v4, agent-cluster, kimi-linear-48b, su-jianlin, chen-guangyu, attention-residuals, flash-linear-attention, kimi-k2, agentic-coding-token消耗分析]
created: 2026-04-24
updated: 2026-05-22
sources: ["没想到！deepseek-v4里，竟还藏着一个中国万亿开源模型.md", "单agent时代结束，ai们开始组团上班.md", "kimi新架构让马斯克叹服！17岁高中生作者一战成名.md", "花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---

# Moonshot AI（月之暗面）

[[Moonshot AI]]（月之暗面）是中国领先的人工智能初创公司，以开发 [[Kimi]] 系列大语言模型而闻名。公司成立于 2023 年，在短短两年多时间内成长为中国 AI 创业公司中最受关注的团队之一，与 [[DeepSeek]] 并称为中国 AI 开源领域的"双子星"。

## 发展方向与战略

Moonshot AI 在模型进化路径上呈现出清晰的层级递进，从基座构建向协作系统演进：
1.  **基座构建**：通过 K2 模型确立了大规模参数基座。
2.  **推理增强**：通过 K2 Thinking 引入深层推理能力。
3.  **协作系统**：通过 K2.5 和 K2.6 推动 [[agent-cluster]]（Agent 集群）技术，致力于解决 AI 从单体智能向集体协作的范式转移。

公司不仅关注模型参数的提升，更注重工程化系统的构建，特别是 AI 作为"协调者"在任务执行中的动态管理和自动修复能力。

## 核心产品与技术

### 模型开发
- **Kimi 系列**：开发了包括 K1.5、K2、K2.6 在内的多代模型，擅长长上下文处理和数学推理。
- **[[Kimi K2]]**：在 agentic coding token 消耗研究中，Kimi-K2 是测试模型中 token 消耗最高但准确率并不突出的模型，体现了 [[token效率悖论]]。
- **Kimi K2.6**：具备全球领先的开源性能，强调多智能体协作和全栈编码能力。
- **[[Kimi Linear 48B]]**：总参数 48B（激活参数 3B）的 MoE 架构大模型，用于验证 [[Attention Residuals]] 等新技术。
- **开源策略**：积极开源万亿参数级模型（如 [[Kimi K2.6]]），推动了全球 AI 社区的发展。

### 关键技术贡献
- **[[Attention Residuals]]**：2026 年提出的新型网络连接机制，基于 [[时间-深度对偶性]]，将注意力机制应用于深度维度，显著提升了训练效率（1.25 倍）。该论文获得了 [[Elon Musk]] 和 [[Andrej Karpathy]] 的公开赞赏。
- **[[Flash Linear Attention]] (FLA)**：公司正在进行的高效注意力机制研究项目，旨在优化长上下文处理和推理效率。
- **MoBA（混合块注意力）**：提出的创新架构之一，受到业内专家称赞。
- **[[Muon 优化器]]**：在 Moonlight 论文中首次将 [[Muon 优化器]] 扩展到大规模模型训练，证明了其在计算效率上相比 AdamW 的优势（约两倍效率）。该技术后来被 [[DeepSeek V4]] 采用。
- **RoPE（旋转位置编码）**：公司关键人物 [[苏剑林]] 是该技术的提出者，该技术现已成为大模型位置编码的主流标准之一。

### 工程与硬件
- **Mooncake 体系**：提出了分离式 KV 缓存存储和调度方案，解决长上下文推理的内存瓶颈。
- **国产芯片支持**：通过"Prefill-as-a-Service"架构，致力于推进国产芯片（如华为 Ascend NPU）的混合推理方案。
- **Claw 群组**：正在测试中的人机协作群组功能，旨在探索人与 AI 在同一工作流中的协同模式。

## 核心团队

公司拥有业内公认最高的人才密度之一，其核心成员包括：
- **[[苏剑林]]**（苏神）：RoPE 提出者，Attention Residuals 论文共同一作。
- **[[张宇]]**：Kimi Linear 第一作者，Attention Residuals 论文共同一作。
- **[[陈广宇]]**：17 岁高中实习生，Attention Residuals 论文共同一作。

## 行业地位

- **人才密度**：业内公认人才密度最高的团队之一。
- **政策参与**：公司创始人杨植麟曾参加总理座谈会，是中国 AI 领域被点名的代表。
- **国际认可**：其模型被 NVIDIA GTC 大会选为推理吞吐和 token 成本的基准，并被 Cursor 等国际顶级产品用作底座。

## 参见
- [[DeepSeek]]：主要对标与技术互鉴伙伴。
- [[技术互鉴]]：双方形成的独特行业现象。
- [[token效率悖论]]：Kimi K2 在 agentic coding 场景中体现的 token 消耗与效果不对等现象。