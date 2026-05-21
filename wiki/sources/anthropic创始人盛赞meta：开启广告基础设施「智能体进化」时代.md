---
type: source
title: "Anthropic创始人盛赞Meta：开启广告基础设施「智能体进化」时代"
tags: [meta, kernel-evolve, infrastructure, optimization, agents]
related: [kernel-evolve, mtia, jack-clark, 内核代码自动生成, 树状思维链搜索, 异构硬件适配]
created: 2026-01-14
updated: 2026-01-14
authors: ["新智元", "LRST"]
year: 2026
url: "https://mp.weixin.qq.com/s/M2uhMIRdN9ifNoE-h44TLw"
venue: "新智元"
sources: ["anthropic创始人盛赞meta：开启广告基础设施「智能体进化」时代.md"]
---

# Anthropic创始人盛赞Meta：开启广告基础设施「智能体进化」时代

## 摘要
支撑 Facebook Ads、Instagram Ads 等万亿级推荐系统的技术底座，正在经历一场由 AI 智能体驱动的自我重构。Meta 最新论文揭示了基于树状思维链搜索的智能体框架 [[kernel-evolve]]，正在以「无人驾驶」的方式暴力重写广告系统的底层内核。该技术将内核开发时间从数周压缩至数小时，并在生产环境中实现最高 17 倍的性能提升。[[anthropic]] 联合创始人 [[jack-clark]] 将此评价为「LLM 智能体将成为异构 AI 系统的通用编译层」的开端。

## 核心内容

### 维度诅咒与基础设施挑战
Meta 面临的「维度诅咒」由三个维度构成：
1.  **模型架构多样性**：从传统检索模型到基于 Transformer 的序列模型。
2.  **算子原语多样性**：超过 200 种数据预处理算子。
3.  **硬件异构性**：横跨 NVIDIA GPU、AMD GPU 及自研 [[mtia]] 加速器。

### KernelEvolve 技术架构
[[kernel-evolve]] 将内核优化重新定义为图搜索与进化过程，包含四个核心组件：
-   **选择策略**：基于 UCB 的树搜索算法。
-   **通用算子**：单一、动态适应的转换函数，基于运行时上下文合成提示。
-   **适应度函数**：综合评估正确性和性能。
-   **终止规则**：基于预算或性能阈值自动终止。

### 关键成果
-   **性能突破**：在生产环境中实现 1.25 至 17 倍加速。
-   **鲁棒性**：在 KernelBench 的 250 个问题上达到 100% 通过率。
-   **专有硬件支持**：成功为训练数据中不存在的 [[mtia]] 芯片生成高质量内核。

### 行业评价
[[jack-clark]] 在《Import AI》中指出，这预示着软件工程范式的深刻变革，LLM 智能体正在接管基础设施的底层优化。

## 关键人物
-   [[Gang Liao]]：Meta 研究科学家，论文主要作者，底层优化专家。
-   [[Carole-Jean Wu]]：Meta FAIR 研究总监，体系结构与机器学习交叉领域权威。
-   [[Gaoxiang Liu]]：Meta 杰出工程师，广告服务系统和推理引擎核心负责人。

## 未来展望
-   **Agentic RL**：引入在线智能体强化学习，实现内核性能的「热进化」。
-   **软硬协同设计**：在芯片流片前通过仿真环境进化最优算子库。