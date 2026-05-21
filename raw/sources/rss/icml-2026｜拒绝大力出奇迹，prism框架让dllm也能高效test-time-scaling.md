---
title: "ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling"
date: 2026-05-11
source: "机器之心"
url: "https://mp.weixin.qq.com/s/ADd96lqUpkKYRyeBUk4GUA"
rss_id: "2651032226_2"
---
近年来，大模型能力提升的焦点正在从「
训练时扩展」转向「
推理时扩展」。从 Best-of-N、Self-Consistency 到更复杂的搜索与验证框架，Test-Time Scaling 已经成为提升大模型复杂推理能力的重要范式。
然而，一个长期被忽视的问题是：这些方法大多默认模型是自回归生成的。
对于离散扩散语言模型（Discrete Diffusion Language Models, dLLMs）而言，情况完全不同。dLLM 并不是从左到右逐 token 生成，而是从被 mask 的序列出发，通过多步去噪逐渐恢复完整答案。这种并行、非自回归的生成方式天然具备全局双向上下文，也更适合规划与自我修正；但与此同时，传统面向自回归模型设计的树搜索、过程奖励模型和 Best-of-N 推理并不能直接高效适配。
针对这一问题，
论文提出了 PRISM：Pruning, Remasking, and Integrated Self-verification Method，一个专为离散扩散语言模型设计的高效 Test-Time Scaling 框架
。其核心目标很明确：不是简单地让模型「
多跑几遍」，而是在去噪过程中识别更有潜力的轨迹，动态裁剪、局部分支，并用模型自身完成轻量级验证，从而在较低推理预算下接近甚至超过 Best-of-N 的效果。
论文标题：
Prism: Efficient Test-Time Scaling via Hierarchical Search and Self-Verification for Discrete Diffusion Language Models
arXiv 地址：https://arxiv.org/abs/2602.01842
代码地址：https://github.com/viiika/Prism
传统 Best-of-N 太贵，PRISM 重新设计 dLLM 的推理搜索
对于 dLLM 来说，朴素 Best-of-N 的代价非常直接：如果采样 N 条轨迹、每条轨迹需要 T 步去噪，那么总函数调用次数就是 O (NT)。这意味着所有候选答案都要完整跑完，即便其中很多轨迹在中途已经明显质量不佳，也仍然会消耗完整预算。
PRISM 的关键思路是把推理过程拆成三个阶段：早期随机探索、中期渐进裁剪和后期精修。
在高噪声阶段，模型输出仍然不稳定，因此 PRISM 保持较宽的候选集合以保留多样性；在早中期去噪窗口，当答案的「
逻辑骨架」开始形成时，PRISM 使用自验证信号裁剪低质量轨迹，并把计算资源重新分配给更有前景的候选；最终，只保留较小数量的轨迹继续完成精修。论文中将这一过程称为 Hierarchical Trajectory Search（HTS）。
这种设计使得 PRISM 的实际复杂度接近 O (N + KT)，其中 K 是最终保留的较小候选宽度。相比传统 Best-of-N 的 O (NT)，这相当于把 “所有路线都跑到底” 改成了「
先广泛探索，再集中火力」。
不是重新开始，而是在低置信 token 上局部分支
PRISM 的第二个关键组件是 Local Branching via Partial Remasking。直观来说，模型在中期去噪时已经形成了一部分高置信 token，这些 token 往往对应答案的稳定结构或逻辑骨架；与此同时，低置信 token 则可能对应不确定的推理细节、实现方式或局部表达。
PRISM 不会粗暴地丢弃整条轨迹重新采样，而是保留高置信部分，只对低置信位置进行重新 mask，然后从这些局部变化中生成新的分支。这样做的好处是，它既保留了已有的高质量结构，又能继续探索不同的细节实现，避免过早收敛到单一路径。论文图 2 对这一过程做了直观展示：在渐进裁剪阶段，PRISM 会围绕高分轨迹进行局部分支，并通过部分重 mask 生成新的候选。
不再依赖外部 verifier：模型自己给自己打分
很多 Test-Time Scaling 方法依赖额外的 reward model 或 verifier 来判断候选答案质量。但这会带来显著系统开销：部署时需要额外加载一个模型，显存、延迟和工程复杂度都会上升。
PRISM 提出了 Self-Verified Feedback（SVF）：直接复用同一个 dLLM 作为二分类验证器。具体来说，模型先根据中间去噪状态生成一个完整候选答案，然后构造一个 Yes/No 验证 prompt，让模型判断该答案是否可能正确。PRISM 将 Yes 和 No 的 logits 转换为一个二元归一化分数，用于轨迹排序、裁剪和最终选择。
这一设计的价值在于，它把 verification 从「
额外模型」变成了「
同一模型的一次轻量自检」。论文进一步指出，SVF 调用次数相较去噪 NFE 很少，实验中通常低于总 NFE 的 10%，因此可以在较低额外开销下提供有效的搜索信号。
实验：在数学推理和代码生成上实现显著性价比提升
论文在四个基准上评估 PRISM：数学推理任务 GSM8K、MATH-500，以及代码生成任务 HumanEval、MBPP。实验覆盖三个离散扩散语言模型：LLaDA-8B-Instruct、Dream-7B-Instruct 和 LLaDA-2.0-mini。
在 LLaDA-8B-Instruct 上，PRISM（K=8）将 GSM8K 从 67.58% 提升到 85.30%，将 MATH-500 从 26.40% 提升到 42.80%；在代码任务上，HumanEval 提升 24.39 个百分点，MBPP 提升 16.40 个百分点。更重要的是，这些提升并不是通过线性增加 Best-of-N 计算量获得的：例如在 GSM8K 上，PRISM 用 1048 NFE 达到 85.30%，而 Best-of-16 需要 4096 NFE 才达到 87.50%，实现了超过 4 倍的去噪计算节省。
在论文图 1 中，PRISM 相比 Best-of-N 在多个任务上展现出更优的性能 — 计算曲线：在可比准确率下，GSM8K、MATH500、HumanEval、MBPP 分别呈现 2.9×、6.5×、1.8×、1.7× 的速度优势。
论文还与其他推理期扩展方法进行了比较。在 TruthfulQA 上，PRISM 的 ROUGE-1/2/L 达到 31.8/35.5/31.9，推理时间为 1048.0 秒；相比之下，LLaDA-ReMDM 为 29.5/31.8/29.5，推理时间为 1354.8 秒。这表明 PRISM 不仅能提升任务性能，也能维持更好的推理效率。
在外部 verifier 对比中，SVF 在 GSM8K 上达到 85.30%，只需加载原本的 8B 模型；虽然 Qwen3-8B verifier 可达到 87.35%，但需要额外加载模型，总参数量达到 16B。论文认为，SVF 的优势并不在于绝对替代所有外部验证器，而在于它提供了一条更轻量、更易部署的 dLLM 推理扩展路径。
意义：为非自回归语言模型打开推理期扩展路线
PRISM 的核心贡献并不是简单提出一个新的搜索启发式，而是重新定义了 dLLM 上的 Test-Time Scaling 应该如何发生。
对于自回归模型，推理搜索通常围绕「
前缀」展开；而对于离散扩散模型，中间状态是部分 mask 的全局序列，传统前缀式过程奖励和树搜索并不天然适用。PRISM 将搜索、裁剪、局部分支和自验证都重新放回 dLLM 的去噪动力学中：在结构形成阶段集中分配预算，在低置信区域探索替代表达，在无需额外模型的情况下完成验证。
这意味着，dLLM 不再只是「
并行生成更快」的替代范式，也可能成为一种适合推理、规划和自我修正的新型语言模型架构。随着 LLaDA、Dream、Mercury、Gemini Diffusion 等模型推动离散扩散语言模型走向更大规模，PRISM 展示了一条重要方向：让非自回归模型也能像当前主流 LLM 一样，通过推理期计算持续获得能力提升。
从这个角度看，PRISM 不只是一个更省算力的 Best-of-N 替代方案，而是离散扩散语言模型迈向高效推理系统的一块关键拼图。
作者简介
本文由 Jinbin Bai 等研究者完成。作者团队长期关注 discrete diffusion 与 masked generative modeling 等新一代生成范式，研究方向涵盖高分辨率文生图、统一多模态生成、离散扩散模型的偏好对齐与推理优化，以及可交互世界模型等。
此前，团队曾提出 Meissonic [1]，探索 masked generative transformer 在高分辨率文本到图像生成中的潜力；随后进一步提出 Muddit [2]，将离散扩散建模从图像生成推进到更统一的多模态生成框架。此次入选 ICML 2026 的 PRISM，则将这一研究脉络进一步延伸到推理阶段，关注如何通过层次化搜索、自验证反馈和局部 remasking，让离散扩散模型在无需额外 verifier 的情况下实现高效 Test-Time Scaling。
[1] Meissonic: Revitalizing Masked Generative Transformers for Efficient High-Resolution Text-to-Image Synthesis, ICLR 2025, https://arxiv.org/abs/2410.08261
[2] Muddit: Liberating Generation Beyond Text-to-Image with a Unified Discrete Diffusion Model, ICLR 2026, https://arxiv.org/abs/2505.23606
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com