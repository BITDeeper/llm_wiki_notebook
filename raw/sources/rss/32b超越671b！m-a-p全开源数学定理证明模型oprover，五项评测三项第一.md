---
title: "32B超越671B！M-A-P全开源数学定理证明模型OProver，五项评测三项第一"
date: 2026-06-09
source: "量子位"
url: "https://mp.weixin.qq.com/s/iE7Aqnzsc5kRG9r9vmrBNw"
rss_id: "2247896138_2"
---
OProver团队 投稿
量子位 | 公众号 QbitAI
形式化定理证明，一直是LLM公认最严苛的推理试金石，每一步推导都必须通过Lean 4内核的机器验证。
近两年，开源社区在MiniF2F、PutnamBench等benchmark上的成绩持续上升，但增长路径越来越趋同：扩模型、扩数据、部署阶段叠加检索和多轮修正。
一个关键问题始终存在，检索信号、编译器反馈和失败修复，大多只在部署时作为外部流程接入，模型在训练阶段并没有系统学习如何利用这些信号，形成了
训练与部署之间的“策略错位”
。
为应对这一挑战，
M-A-P开源社区
与
南京大学等团队
提出
OProver
——
一个将检索增强、编译器反馈与多轮修复直接内化到训练策略中的Lean 4定理证明框架。
在五个Lean 4 whole-proof prover评测中，OProver-32B取得三项第一、两项第二：
MiniF2F（93.3）、ProverBench（58.2）、PutnamBench（11.3）领先 LongCat-Flash-Prover w/ TIR，并在全部五项评测中超越 671B 的 DeepSeek-Prover-V2。
研究团队同步开源1.76M条形式化陈述、6.80M编译器验证证明的OProofs语料库，以及8B/32B共7个模型权重。
代码、权重与训练脚本已全面开源。
策略错位：训练与部署之间的核心矛盾
近年来的Lean 4 prover系统（Goedel-Prover-V2、DeepSeek-Prover-V2、Kimina-Prover 等）在MiniF2F上已经把Pass@32推到较高水平，同时也有工作开始引入检索、编译器反馈或self-correction。
问题在于，这些信号主要作为部署阶段的增强流程，接在已经训练好的prover外部，而非从训练阶段就被纳入学习目标。
这就形成了错位：
训练阶段，模型主要看到清晰的theorem→verified proof监督对
部署阶段，系统却把检索到的相关证明、上一轮失败尝试和Lean编译器反馈重新提供给模型，要求进行多轮修复
OProver的核心思路，是让训练目标与部署时的证明过程对齐：让模型在训练阶段就学习如何执行agentic refinement loop，把多轮修正、检索相关证明和编译器反馈作为训练策略的一部分，而非部署阶段的外部包装。
轻量、可端到端训练
部署阶段：有限轮次修复循环
OProver把定理证明建模为一个有限轮次的修复循环。
策略基于目标形式化陈述、检索记忆库中的top-k个编译器验证证明、上一轮证明尝试和Lean 4编译器返回的诊断信息，生成下一次证明尝试。任意一轮通过，整条trajectory即视为成功。
训练阶段：两阶段训练
持续预训练（CPT）：在约65B token的混合语料上预训练，其中约30%来自OProofs的Lean 4数据，20%为代码数据（OpenCoder），40%为数学语料（Nemotron-Math-4-Plus），10%为长CoT数据
迭代后训练：交替进行agentic proving rollout、SFT（基于round-level修复样本）和RL（基于GSPO算法与难题集）
关键设计在于：检索结果、失败尝试和编译器反馈不再只是部署阶段临时接入的外部流程，而是被纳入模型要学习的证明策略。
数据与模型的协同进化
OProofs语料库与prover策略在迭代中相互促进。
每轮迭代中，当前prover在题库上生成的新验证证明被加入OProofs并索引进检索记忆库；
修复trajectory成为下一轮SFT训练样本；尚未解决的”难题组”为下一轮 RL 提供训练信号。
数据、训练与策略，形成持续演化的闭环。
OProofs：面向agentic prover的Lean 4语料
研究团队同步构建并开源了OProofs，包含约1.76M条形式化陈述、6.80M条编译器验证证明。
其中4.29M条证明保留了检索到的相关证明上下文，859K条样本包含此前失败尝试的Lean编译器反馈。模型不只看到”最终正确证明是什么”，也能学习”证明失败后，如何利用检索结果和编译器反馈继续修复”。
OProofs由两条构建分支组成。
1、公开资源再证明
以NuminaMath-LEAN、Lean-Workbook、Leanabell-Prover-FormalStmt等公开Lean资源为起点，清洗去重后通过agentic proving重新生成并验证证明，同时收集检索上下文、失败尝试和修复轨迹。
2、自然语言到形式化
从Common Crawl和GitHub挖掘数学陈述，用CriticLean自动形式化为Lean 4，再通过agentic proving流程生成并验证证明。
从覆盖范围看，OProofs横跨多个数学方向：代数60.1%、分析13.7%、数论13.0%、几何6.8%。难度分布以 elementary（27.4%）和high-school（48.9%）层级为主，同时包含18.9%的本科水平和4.8%的研究生水平问题。
五项评测三项第一、两项第二
研究团队在MiniF2F、MathOlympiad、ProofNet、ProverBench、PutnamBench五个Lean 4 benchmark上评估，默认报告Pass@32，基于n=64条独立multi-round rollouts的无偏估计。
在open-weight whole-proof prover范围内，OProver-32B有三项关键结论：
1、32B全面超越671B
OProver-32B在全部五项评测中超越 DeepSeek-Prover-V2（671B），在 MiniF2F（93.3）、ProverBench（58.2）、PutnamBench（11.3）上同时领先LongCat-Flash-Prover w/ TIR（560B）。
2、8B打平32B
OProver-8B在五个benchmark上全部超越Goedel-Prover-V2-32B，参数量少4倍。
3、迭代后训练持续增益
MiniF2F-Test 上，OProver-8B从79.5提升至91.8（+12.3），OProver-32B从84.7提升至93.3（+8.6）。
消融实验：检索与编译器反馈协同贡献
移除多轮compiler feedback会导致最大幅度下降：OProver-32B在PutnamBench从11.3降至7.0，在ProofNet从33.2 降至25.8。
进一步移除检索后，性能继续下降至5.9和24.7。
这说明提升并非来自简单的best-of-N采样，而是来自检索增强的证明生成与编译器反馈引导的多轮修复之间的协同。
其中，Lean 编译器反馈提供主要修复信号；检索上下文提供相关证明结构和可参考的证明片段。
测试时扩展：更多推理预算稳定转化
随着推理预算从8增加到256，OProver-32B在五个benchmark上均呈稳定提升：MiniF2F从87.5至92.8，MathOlympiad从15.5至22.0，ProofNet从25.6至32.8，ProverBench从51.3至56.9，PutnamBench从6.4至11.3。
最优预算分配与benchmark难度相关：多数benchmark更偏向增加refinement深度，而PutnamBench这类低成功率难题需在修复深度与并行探索之间取得平衡。
开源与发布
研究团队同步开源了OProver的模型、数据与训练代码，覆盖不同训练阶段checkpoint、OProofs语料和训练pipeline。
• m-a-p/OProver-32B / OProver-8B — 最终模型
• m-a-p/OProver-32B-Base / Round1 — 32B 各阶段 checkpoint
• m-a-p/OProver-8B-Base / Round1 / Round2 — 8B 各阶段 checkpoint
• m-a-p/OProofs — 1.76M statements / 6.80M proofs / 1.06M trajectories
当然，OProver目前仍主要围绕Lean 4 whole-proof proving 展开。
后续值得观察的是，这种agentic refinement框架能否迁移到Coq、Isabelle以及工程级formal methods工具，以及更长的数据与模型协同进化周期中性能提升会持续多久。
论文：https://arxiv.org/abs/2605.17283
代码：https://github.com/multimodal-art-projection/OProver
模型与数据：https://huggingface.co/collections/m-a-p/oprover