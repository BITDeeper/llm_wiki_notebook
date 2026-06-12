```markdown
---
type: entity
title: PRISM
tags: [openai, 科学计算, 项目解散, algorithm, routing, lora, prompt-engineering, latex, 科研工具, 协作平台, ai-native, inference-framework, dllm, test-time-scaling, optimization, icml-2026, 序列模型, 线性注意力, 推荐系统, 语言建模]
related: [openai, kevin-weil, codex, gpt-rosalind, persona-prompting, 对齐税, 判别式任务-vs-生成式任务, lora-适配器, gpt-5.2, crixet, overleaf, ai-native-research-workflow, dllm, test-time-scaling, best-of-n, hts, self-verified-feedback, local-branching, ttt-test-time-training, gdn-gated-deltanet, 线性注意力, 腾讯, 北京大学, 参数化记忆, delta-mem]
created: 2026-04-18
updated: 2026-06-09
sources: ["巨震，openai核心高管集体出逃！奥特曼挥刀自裁：理想已死，搞钱要紧.md", "「你是专家」竟成ai幻觉毒药？新论文一巴掌揭穿提示词最大骗局.md", "openai凌晨放大招，免费prism颠覆科研！从摘要到致谢，gpt-5.2包圆.md", "icml-2026｜拒绝大力出奇迹，prism框架让dllm也能高效test-time-scaling.md", "rss/当线性注意力学会「写入前思考」：并行化的多步记忆写入.md"]
---

# PRISM

**PRISM** 是一个具有多重含义的术语，在 AI 领域主要指代以下五个截然不同的概念：

1.  **AI 原生科研工作区**：由 OpenAI 于 2026 年 1 月发布的云端 LaTeX 协作平台。
2.  **PRISM 算法架构**：一种旨在优化 [[persona-prompting]] 的路由算法。
3.  **PRISM 推理框架**：一种专为 [[dllm]]（离散扩散语言模型）设计的高效 [[test-time-scaling]] 框架（ICML 2026）。
4.  **PRISM 序列模型**：由 [[腾讯]] 与 [[北京大学]] 提出的 [[线性注意力]] 序列模型（ICML 2026）。
5.  **历史项目**：前首席产品官 Kevin Weil 发起的"OpenAI for Science"科学工作空间项目（已解散）。

---

## 1. AI 原生科研工作区 (2026)

[[Prism]] 是由 [[OpenAI]] 于 2026 年 1 月发布的基于云端的 AI 原生 LaTeX 工作区。它旨在通过深度集成 [[GPT-5.2]] 模型，解决科研人员在写作、编辑和协作过程中面临的工具碎片化问题。

### 核心特性

Prism 将 [[GPT-5.2]] 内嵌于项目内部，模型具备[[全语境感知]]能力，能够读取并理解整篇论文的结构、公式、引用以及上下文语境。

- **智能起草与润色**：从摘要到致谢，AI 可辅助完成全流程写作，用户仅需审核并点击"继续"。
- **草图转代码**：支持将白板上的手写公式或图示直接转换为 LaTeX/TikZ 代码，并插入文档。
- **文献管理**：基于当前内容智能搜索相关文献（如 arXiv），并自动整合引用。
- **语音编辑**：支持语音指令进行简单的文本修改，保持写作心流。

### 协作与访问

- **无限协作**：支持无限数量的协作者同时在线，无席位限制。
- **零配置**：基于云端，无需本地配置 LaTeX 环境，降低了技术门槛。
- **免费策略**：面向所有个人 ChatGPT 账号用户免费开放，旨在快速普及。

### 技术基础与市场影响

Prism 基于 OpenAI 收购的云端 LaTeX 平台 [[Crixet]] 构建。其发布被视为对现有主流云端 LaTeX 编辑器（如 [[Overleaf]]）的直接挑战，通过"完全免费"和"AI 原生"的策略推动科研工作流向 [[AI 原生科研工作流]] 转型。

---

## 2. PRISM 算法架构 (Persona Routing)

**PRISM** (Persona Routing via Intent-based Self-Modeling，基于意图的自举人格路由) 是一种旨在解决 [[persona-prompting]] 固有缺陷的算法架构。它通过动态路由机制，决定在特定任务中是否激活模型的"专家人设"，从而避免在知识检索任务中因强行维持人设而导致的准确率下降（即 [[对齐税]]）。

### 核心原理

PRISM 的核心思想是将"风格控制"与"事实判断"解耦。它不再在推理时生硬地套用专家 Prompt，而是将人设能力"蒸馏"到轻量化的 [[lora-适配器]] 中。

#### 工作流程

1.  **意图识别**：系统首先分析用户查询的意图，判断其属于 [[判别式任务-vs-生成式任务]] 中的哪一类。
2.  **门控路由**：
    - 如果是**生成式任务**（如写作、安抚），需要高对齐能力，门控开启 LoRA 适配器，激活专家模式。
    - 如果是**判别式任务**（如数学、事实核查），需要高记忆准确性，门控关闭，退回基座模型的朴素模式。
3.  **自蒸馏**：通过成对比较筛选数据，训练路由器学习何时启用人设。

### 性能表现

在 Qwen2.5-7B 等模型上的实验表明，PRISM 能够在保持极低算力开销的同时，实现"高情商生成"与"硬核知识检索"的丝滑切换：

- **生成质量**：MT-Bench 分数从 7.56 提升至 7.76。
- **知识准确率**：MMLU 分数维持在 71.7%，避免了直接使用人设带来的分数下跌。

### 意义

PRISM 揭示了提示工程的下一阶段方向：从"写更长的 Prompt"转向"更智能的任务路由"。它证明了 AI 应该"该演的时候演，该准的时候准"，而非永远戴着同一张"专家"面具。

---

## 3. PRISM 推理框架 (ICML 2026 — dLLM)

**PRISM** (Pruning, Remasking, and Integrated Self-verification Method) 是一个专为 [[dllm]]（离散扩散语言模型）设计的高效 [[test-time-scaling]]（推理时扩展）框架，由 Jinbin Bai 等研究者提出并入选 ICML 2026。

### 核心设计理念

传统的推理时扩展方法（如 [[best-of-n]]）通常假设模型是自回归生成的，直接应用于 dLLM 会导致极高的计算成本（O(NT)）。PRISM 通过利用 dLLM 独特的去噪动力学特性，重新设计了搜索与验证流程，旨在以较低的计算预算接近甚至超过传统方法的效果。

### 技术架构

PRISM 包含三个关键组件：

#### 1. Hierarchical Trajectory Search (HTS)

将推理过程划分为三个阶段，优化计算分配：

- **早期探索**：在高噪声阶段保持较宽的候选集合，保留多样性。
- **中期裁剪**：当逻辑骨架开始形成时，利用自验证信号裁剪低质量轨迹。
- **后期精修**：集中计算资源对保留的少量高潜力候选进行精细化去噪。

这一策略将计算复杂度从 O(NT) 降低至接近 O(N + KT)。

#### 2. Local Branching via Partial Remasking

针对 dLLM 的中间状态（部分掩码的全局序列）进行优化：

- **保留高置信度 Token**：锁定答案中稳定的逻辑骨架或结构。
- **局部分支**：仅对低置信度位置（不确定的细节）进行重新掩码和生成。

这种方法避免了丢弃整条轨迹重新采样，有效平衡了探索与利用。

#### 3. Self-Verified Feedback (SVF)

一种轻量级的验证机制：

- **复用自身**：直接使用当前的 dLLM 作为二分类验证器，无需加载外部 Reward Model。
- **验证方式**：根据中间去噪状态生成候选答案，并构造 Yes/No Prompt 让模型判断其正确性。
- **开销极低**：SVF 的调用次数通常低于总 NFE 的 10%，却能提供有效的排序和裁剪信号。

### 性能表现

在 LLaDA-8B-Instruct 等模型上的实验显示，PRISM 在数学推理（GSM8K, MATH-500）和代码生成（HumanEval, MBPP）任务上显著提升了基准性能。例如，在 GSM8K 上，PRISM 仅用 Best-of-16 约 1/4 的计算量（1048 vs 4096 NFE）就达到了相近的准确率（85.30% vs 87.50%）。

### 价值与意义

PRISM 不仅是一个更高效的搜索算法，更是 [[dllm]] 迈向实用化推理系统的关键拼图。它证明了非自回归模型可以通过利用其全局双向上下文和去噪特性，实现比自回归模型更具优势的推理时扩展路径。

---

## 4. PRISM 序列模型 (ICML 2026 — 线性注意力)

**PRISM**（Parallel Residual Iterative Sequence Model）是由 [[腾讯]] 广告技术团队与 [[北京大学]] 合作提出的序列模型，被 ICML 2026 录用。PRISM 在保持 [[线性注意力]] O(N) 复杂度的同时，实现了 [[ttt-test-time-training|TTT]] 级别的多步深度写入，吞吐量比 TTT-MLP 提升 174 倍。

### 问题定位

[[线性注意力]] 模型（如 [[gdn-gated-deltanet|GDN]]）每个 token 只能对状态矩阵 S 做 rank-1 外积更新，无法同时调整多个语义维度。TTT 通过多步梯度下降实现了 rank-L 写入，但打破了 parallel scan 的数学前提，导致 174 倍速度差距。

### 核心洞察

PRISM 通过分析 TTT-MLP 的梯度结构，揭示其高表达力源于「步长 × 残差 × 方向」的多步迭代模式，并发现高表达力与串行瓶颈是同一根因（权重迭代更新）的两面。

### 技术方案

1. **显式重建迭代模式**：在线性状态 S 上构造 L 步「步长 × 残差 × 方向」迭代，L 步累积 rank-L 写入。
2. **局部 Anchor 代理**：用短卷积（ShortConv）计算的局部历史状态替代全局状态 S，消除 token 间串行依赖。
3. **闭合式预计算**：将 GELU 非线性吸收进预计算缩放系数（preconditioner），L 步串行循环退化为单步闭合式计算。
4. **A/B 分离**：遗忘项保持与 GDN 一致，非线性操作限制在写入项内，保持 parallel scan 骨架。

### 架构退化

L=1 时 PRISM 精确退化为 [[gdn-gated-deltanet|GDN]]。后续步以不到 10% 的参数增量叠加低秩修正。整体可视为"GDN + 非线性旁路"。

### 实验结果

#### 序列推荐（Amazon 基准）

- PRISM 匹配 TTT 质量，超过大多数线性注意力方法。
- 吞吐量比 TTT-MLP 提升 174 倍，与 GDN 同级。

#### 语言建模（SlimPajama 2B tokens, 130M 参数）

- WikiText PPL、LAMBADA PPL 和 9 项 Zero-Shot 下游任务平均准确率均为最优。
- 领先 GDN 3.2 个百分点。

#### 消融实验关键发现

- rank-L 的真正价值不在 next-token prediction 而在长程检索下游任务。
- 单步 solver (L=1) 训练 PPL 几乎等于完整版，但 Avg ACC 下跌 2.9 个百分点。
- solver 需要自己的方向空间：shared-K 几乎不掉分（−0.3），复用 GDN base key 则大幅退化（−1.5）。

### 延伸思考

- **[[混合架构]] 必然性**：有限背包 S 容量为 d×d，超长序列仍会信息丢失；Transformer 层充当 ShortConv anchor 的"全局升级版"。
- **线性注意力的 LoRA**：PRISM 的"基础迭代 + low rank 旁路"形式启发了一种参数高效微调思路——冻结基础迭代，只加 low-rank 残差拟合旁路。

### 局限性

- 实验规模偏小（130M 参数、2B tokens），尚未验证大参数规模上的 scaling 行为。
- 短卷积 anchor 窗口通常只覆盖最近 3-4 个 token，长程依赖近似质量下降。

### 与相关工作的关系

- **[[delta-mem]]**：同属"为固定状态模型增强记忆能力"方向，δ-mem 用 8×8 在线关联记忆矩阵，PRISM 用多步残差迭代写入。
- **[[rtpturbo-v2]]**：互补关系——RTPurbo 压缩 Full Attention，PRISM 增强线性注意力。
- **[[参数化记忆]]**：PRISM 的状态矩阵 S 本质上是一种参数化记忆形式。

---

## 5. 历史项目：OpenAI for Science (已解散)

在 2026 年 1 月正式发布产品之前，Prism 曾是"OpenAI for Science"计划下的核心项目代号，由前首席产品官 [[Kevin Weil]] 发起。

### 项目愿景

该项目旨在构建一个让科学家能够利用 AI 进行长周期、高难度科研的工具，以加速如治愈癌症和破解物理难题等科学发现。该项目代表了 OpenAI 在科学领域的情怀投入。

### 战略调整与解散

在 2026 年 OpenAI 的战略转型中，Prism 项目因变现周期过长，无法满足 IPO 前夜对财务报表的要求而被解散。这一裁撤是 OpenAI 从"卖应用"转向"卖基础设施"战略转变的体现，也导致了其主导者 Kevin Weil 的离职。

### 后续整合

Prism 团队被并入 [[Codex]] 产品线，其技术能力随后以 [[GPT-Rosalind]] 系列模型的形式重新发布，从独立应用转变为底层 API 基础设施。
```