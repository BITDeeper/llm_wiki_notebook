---
title: "BudgetMem：给Runtime Agent Memory装上「预算路由器」，让记忆系统学会按需分配运行成本"
date: 2026-06-14
source: "机器之心"
url: "https://mp.weixin.qq.com/s/_-YgwrlULrhSHKiFCwrZYg"
rss_id: "2651038995_2"
---
Haozhen Zhang 现为 Nanyang Technological University（NTU）博士生，导师 Wenya Wang 为 NTU 计算机与数据科学学院助理教授。团队研究聚焦 LLM Agent Memory、LLM Interpretability 与高效智能体系统，关注大语言模型在 reasoning、memory 与 multimodal grounding 等方面的能力构建，致力于发展更可解释、高效且具备泛化能力的大模型系统。本工作同时与香港科技大学（广州）Chengwei Qin 老师合作完成；Chengwei Qin 现为香港科技大学（广州）人工智能学域助理教授，主要关注大语言模型智能体、多模态学习以及模型的高效学习。
BudgetMem：给 Runtime Agent Memory 装上 “预算路由器”
让记忆系统学会按需分配运行成本
当 LLM Agent 处理长期对话、多轮交互和复杂文档时，Memory 已经成为不可或缺的核心模块。它帮助智能体保存历史、检索信息、维持个性化上下文，并支撑跨时间的推理能力。
但一个现实问题常常被忽视：
Agent Memory 到底应该花多少成本来处理历史？
如果一个 query 只需要简单事实，是否有必要调用昂贵的 LLM 进行复杂总结？如果一个 query 依赖跨时间、跨实体、跨主题的多条证据，低成本检索和粗粒度摘要又是否足够？
对此，研究团队提出
BudgetMem: Learning Query-Aware Budget-Tier Routing for Runtime Agent Memory
，旨在让 Agent Memory 从固定的记忆处理流水线，转向 query-aware 的动态预算分配机制：对于简单 query 使用低成本处理路径，对于复杂 query 则自动调用更高质量的记忆模块。
论文：《
Learning Query-Aware Budget-Tier Routing for Runtime Agent Memory
》
链接：
https://arxiv.org/abs/2602.06025
背景：固定记忆流水线难以适应不同 Query
现有很多 Agent Memory System 仍然遵循一种固定范式：先离线构建记忆，再在未来统一检索使用。
这种
build once, use always
的方式虽然直观，但存在两个问题。首先，它是 query-agnostic 的。系统在不知道未来问题的情况下提前压缩历史，可能会丢掉后续 query 真正需要的细节。其次，它缺乏显式的 performance-cost control。简单问题和复杂问题往往被同一套流程处理，前者可能浪费成本，后者又可能预算不足。
因此，本文关注一个更贴近真实部署的问题：
当 query 到来时，记忆系统应该花多少计算去处理历史？
Runtime Query-Aware Memory Extraction
BudgetMem 将记忆构建从固定离线流程转向
runtime query-aware extraction
。系统首先将历史保留为原始 chunks，当用户 query 到来时，再检索相关片段，并通过模块化流水线构建 query-focused memory。
在本文实验中，团队采用了一个简单且可解释的模块化实例：
Filtering → Entity / Temporal / Topic Extraction → Summarization
其中，Filtering 负责筛选相关 chunks；Entity、Temporal、Topic 模块分别提取实体、时间和主题相关信息；Summary 模块最终整合为面向当前 query 的记忆。
需要强调的是，这一模块组合只是 BudgetMem 在实验中的具体实例，并不是框架本身的限制。BudgetMem 的核心在于为模块化 memory pipeline 提供统一的 budget-tier interface，因此也可以适配到其他 memory modules 或不同形式的记忆处理流水线中。
关键在于，每个 memory module 都提供
LOW / MID / HIGH
三种 budget tiers。也就是说，同一个模块既可以用低成本方式执行，也可以用更高质量但更昂贵的方式执行。这样，记忆系统不再固定调用同一套流程，而是根据当前 query 的复杂度和信息需求，动态选择合适的记忆处理路径。
三种 Budget-Tier 策略
为了系统研究 runtime memory 中的性能成本权衡，BudgetMem 比较了三种 budget-tier realization strategies。
Implementation Tiering
：改变模块实现方式，从规则 / 启发式方法，到轻量模型，再到 LLM-based 模块。
Reasoning Tiering
：改变推理行为，从 direct extraction，到 CoT-style reasoning，再到 multi-step 或 reflection-style processing。
Capacity Tiering
：改变模型大小，用不同规模的模型实现同一个 memory module。
这三种策略分别对应算法复杂度、推理深度和模型规模三个预算轴，使 BudgetMem 不只是一个省 token trick，而是一个系统研究 runtime memory performance-cost trade-off 的统一框架。
用强化学习训练 Budget Router
BudgetMem 设计了一个轻量级
Budget Router
，在 runtime memory extraction 的每一步为当前模块选择合适的预算档位。Router 会根据 query、当前模块输入和模块描述，动态决定该模块使用
LOW / MID / HIGH
哪一档，从而在低成本处理和高质量提取之间做出取舍。
由于整个 memory extraction 过程包含离散的检索、规则、小模型和 LLM 调用，难以直接端到端求导，本文将 budget-tier selection 建模为一个
sequential decision problem
，并使用强化学习训练 Router。
每个 query 的处理过程对应一个 episode。最终回答质量作为
task reward
，记忆提取成本作为
cost reward
。通过调节 cost weight，BudgetMem 可以在
performance-first
和
cost-sensitive
设置之间灵活切换：预算宽松时优先提升记忆质量和回答性能，预算紧张时则主动选择低成本路径，降低整体调用开销。
实验结果
在效果与成本之间取得更优权衡
本文在 LoCoMo、LongMemEval 和 HotpotQA 上评估 BudgetMem，并与 ReadAgent、MemoryBank、A-MEM、Mem0、MemoryOS、LightMem 等强基线比较。实验显示，在 performance-first 设置下，BudgetMem 在 F1 和 LLM-Judge 上整体优于现有 memory baselines。
同时，当我们调节 cost weight 时，BudgetMem 能形成连续、可控的 performance-cost frontier：在相近成本下取得更好效果，在相近效果下降低记忆提取成本。
进一步分析表明，不同 tiering strategy 适用于不同场景。Implementation 和 Capacity Tiering 覆盖更宽的预算范围，更适合从低成本到高性能的部署需求；Reasoning Tiering 更像细粒度质量调节旋钮，适合在相近成本区间内进一步提升记忆质量。
总结：让 Agent Memory 学会 “按需计算”
BudgetMem 的核心观点是：未来的 Agent Memory 不应只是固定地存储、检索和压缩历史，而应根据当前 query 的需求，动态决定投入多少计算来提取和组织记忆。
对于简单 query，系统可以走低成本路径快速处理；对于复杂 query，则可以主动调用更强模块、更深推理或更大模型，获得更可靠的记忆支持。
因此，BudgetMem 希望推动 Agent Memory 从 “固定流程” 走向 “按需计算”：让记忆系统不只是会记住历史，还能判断什么时候该 “快速扫一眼”，什么时候该 “认真回看”、整理证据并投入更多计算。这种能力也将成为长期对话、个性化智能体和真实部署场景中的关键基础。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com