---
title: "首个测试时共进化合成框架TTCS：在「左右互搏」中突破推理瓶颈"
date: 2026-02-10
source: "机器之心"
url: "https://mp.weixin.qq.com/s/Vp4E2-hORs5UQ1v2bpa0Gg"
rss_id: "2651016314_2"
---
在 DeepSeek-R1 和 OpenAI o1 引领的「后训练（Post-Training）」与「测试时扩展」（Test-Time Scaling）」时代，如何利用测试时的算力进行有效训练成为焦点。
然而，面对极难的测试题，现有的测试时训练（Test-Time Training, TTT）往往因伪标签噪声大而陷入「瞎猜」的困境。
厦门大学 DeepLIT 课题组
提出了一种全新的测试时课程合成框架 ——
TTCS (Test-Time Curriculum Synthesis)
。该框架不依赖任何外部人工标注，通过生成器（Synthesizer）与求解器（Solver）的共进化博弈，自动合成处于模型「能力边界」的课程数据，解决了测试样本过难导致的训练坍塌问题。
实验显示，在 Qwen2.5-Math-1.5B 上，TTCS 将数学推理平均分从 17.30 暴涨至 41.49，在极具挑战的 AIME 竞赛题上更是显著超越了 TTRL 等强基线。
论文标题：
TTCS: Test-Time Curriculum Synthesis for Self-Evolving
论文链接：https://arxiv.org/abs/2601.22628
项目代码：https://github.com/XMUDeepLIT/TTCS
HuggingFace 主页：https://huggingface.co/papers/2601.22628
01. 核心动机：当「题海战术」遇到「超纲难题」
随着大语言模型（LLM）的发展，业界共识已从单纯的「预训练扩大参数」转向挖掘测试时扩展（Test-Time Scaling）的潜力。
DeepSeek-R1 等模型的成功证明了强化学习（RL）在推理任务上的巨大威力。然而，目前的 RL 范式（如 RLVR）通常依赖大量高质量的 Ground Truth 标签，这限制了其扩展性。
为了摆脱对标签的依赖，
测试时训练（Test-Time Training, TTT）
应运而生。其核心思想是：在测试阶段，利用模型对测试题生成的伪标签（Pseudo-labels）进行即时更新。
但在面对高难度推理任务（如 AIME 数学竞赛）时，TTT 遭遇了致命的「能力错配」悖论
：
伪标签不可靠（Noisy Rewards）
：面对 AIME 这种难题，由于模型本身能力不足，即使进行多次采样（Majority Voting），大部分答案也是错的。基于错误的共识进行训练，只会让模型「越学越偏」。（如 Intro 中 Figure 1 (a) 所示）
缺乏中间阶梯（Steep Learning Curve）
：就像让小学生直接做微积分，缺乏中间难度的过渡题目，模型无法跨越巨大的难度鸿沟，导致优化失败。
团队思考：如果没有老师，模型能否像人类自学者一样，通过自己给自己出题，把一道难题拆解变为一组成梯度、可解决的练习题，从而实现螺旋上升？
基于此，团队提出了
TTCS
—— 一个基于共进化（Co-evolution）的测试时课程合成框架。
02. 方法论：Synthesizer 与 Solver 的双重共进化
TTCS 的核心在于构建了一个闭环的生态系统，包含两个共享初始权重的 Agent，它们通过迭代式的
GRPO (Group Relative Policy Optimization)
进行训练：
角色分工
Synthesizer（合成器
）
：扮演「出题老师」。它以原始测试题为种子，生成一系列变体问题。它的目标不是生成最难的题，而是生成处于 Solver 当前能力边界（Capability Frontier）的题目。
Solver（求解器
）
：扮演「学生」。它在原始测试题和合成题组成的混合数据集上进行解题，并通过自我一致性（Self-Consistency）奖励进行更新。
关键机制：如何寻找「能力边界」？
为了防止生成的题目太简单（无效训练）或太难（无效反馈），团队设计了一套精密的能力自适应奖励（Capability-Adaptive Reward）机制：
探测难度
：Solver 对生成的题目
进行多次采样，计算自洽性分数（Self-Consistency Score, s）。
方差驱动奖励
：团队发现，当
时，意味着模型对这道题「似懂非懂」，即题目恰好处于最近发展区（Zone of Proximal Development）。因此，奖励函数设计为
，迫使 Synthesizer 专门生成这类题目。
多样性惩罚
：引入编辑距离惩罚，防止 Synthesizer 偷懒直接抄袭原题。
闭环效应：
Solver 能力提升后，其「能力边界」会向更难的区域移动，感知到这一变化的 Synthesizer 为了获得高奖励会自动生成难度更高的问题，Solver 继续攻克新难题。二者相互追赶，在测试时实现了动态的 Curriculum Learning。
03. 硬核实验结果：推理能力提升
团队在 AMC23、AIME24、AIME25、MATH-500、Minerva 等多个权威数学基准上进行了广泛验证。基础模型涵盖 Qwen2.5-Math (1.5B, 7B) 和 Qwen3-4B。
1. 主流基准上的碾压式提升
TTCS 在所有尺寸的模型上均取得了显著优于基线的成绩（详见 Table 1）：
Qwen2.5-Math-1.5B
：TTCS 的平均分达到
41.49
，相比预训练模型（17.30）提升了
+24.19 分
！即使对比测试时微调的强基线 TTRL（36.56），依然有大幅优势。
Qwen2.5-Math-7B
：TTCS 平均分达到
52.54
，相比广泛使用的 Self-Consistency（32.15）提升了
+20.39 分
，再次证明了主动的测试时训练远胜于被动的多路采样。
2. 攻克高难度竞赛题 (AIME)
在最能体现推理上限的 AIME 竞赛题上，TTCS 展现了极强的攻坚能力：
AIME 2024
：在 1.5B 模型上，TTRL 仅得 13.23 分，而 TTCS 跃升至
19.79
分，提升幅度达
+6.56
。
AIME 2025
：在 7B 模型上，TTCS 达到了
19.90
分，显著优于 TTRL 的 14.06 分。
这有力地证明了：当测试题太难导致 TTRL 的伪标签失效时，TTCS 通过合成中间难度的课程，成功架起了通往高难度推理的桥梁。
3. 为什么 TTCS 有效？（深度分析）
为了探究性能提升的来源，团队进行了多维度的分析：
不仅仅是数学（泛化性）
：
实验 Q1 显示，在 AIME 上进行测试时训练的 TTCS 模型，在
MMLU-Pro
和
SuperGPQA
等通用领域推理任务上也实现了性能跃升（Figure 3a）。这说明模型学到的是通用的推理逻辑，而非简单的过拟合。
动态老师 > 静态名师
：
团队尝试用一个更强但固定的
Qwen2.5-14B-Instruct
模型作为 Synthesizer（实验 Q3）。结果令人惊讶：
共进化的 1.5B Synthesizer (TTCS) 带来的提升 (+5.34) 竟然是静态 14B Synthesizer (+2.66) 的两倍
！
这揭示了一个深刻的道理：适应学生当前水平的老师，比单纯水平高但不懂因材施教的老师更重要。
数据效率惊人
：
即使只使用 10% 的测试数据（仅 3 道题），TTCS 在 AIME24 上的准确率就能达到
13.33
，远超同等数据量下 TTRL 的表现（Figure 4）。这表明 TTCS 能够高效地榨取每一个测试样本的信息量。
04. 总结与展望
TTCS 框架的提出，是对「测试时计算」范式的一次重构。团队证明了：在测试时，模型不应是被动的解题者，而应是主动的课程设计者。
通过 Synthesizer 和 Solver 的共进化，TTCS 完美解决了测试时训练中「数据稀缺」和「难度断层」的两大痛点。
这不仅为提升大模型在复杂数学、代码推理任务上的表现提供了新思路，也为未来自进化智能体（Self-Evolving Agents）—— 即模型能够在完全未知的环境中通过自我博弈实现持续进化 —— 奠定了坚实基础。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com