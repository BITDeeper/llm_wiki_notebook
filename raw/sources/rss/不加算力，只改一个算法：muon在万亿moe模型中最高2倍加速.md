---
title: "不加算力，只改一个算法：Muon在万亿MoE模型中最高2倍加速"
date: 2026-03-31
source: "机器之心"
url: "https://mp.weixin.qq.com/s/cbfX8oQ1zA9_jal0EYzdpA"
rss_id: "2651024827_2"
---
机器之心编辑部
在数值分析领域，Newton-Schulz 及其相关方法已被研究多年，但大多数工作关注的是高精度计算、CPU 优化或方阵输入。
就在昨天，
普林斯顿大学、纽约大学的四位研究者提出 Gram Newton-Schulz，通过重构 Newton-Schulz，使其更适配 GPU 和大模型训练场景，在万亿参数 MoE 模型中可将优化器时间降低 40–50%
。
我们用一句话来总结 Gram Newton-Schulz 的核心思想：
不再直接在矩阵 X∈R^n×m 上迭代，而是在更小的 Gram 矩阵 X X^⊤∈R^n×n 上迭代，从而降低计算量并利用对称矩阵计算优化。
核心贡献包括如下：
将标准 Newton-Schulz 重写为数学等价形式，主要作用在 n×n 空间；
提出 Naive Gram Newton-Schulz（基础版本）；
分析半精度下的不稳定性，并提出重启策略（Stabilized 版本）；
实现对称矩阵乘法 GPU kernel；
构建 GramMuon，在实际训练中实现 40–50% 加速且精度无损。
下图 1 为基于 NVIDIA B300 平台，AdamW 与 Muon 在 LLaMA 不同模型规模下的优化器步骤耗时（实际墙钟时间）对比。
作者之一、普林斯顿大学本科生 Jack Zhang 表示，「我们让 Muon 在几乎不增加额外成本的情况下，运行速度最高提升 2 倍！Gram Newton-Schulz 可以作为 Muon 中 Newton-Schulz 的即插即用替代方案：我们观察到验证集困惑度几乎没有变化，误差在 0.01 以内。同时，我们也分享了在这一算法稳定化过程中的大量探索，确保在任何情况下都不牺牲训练质量。」
作者之一、普林斯顿大学助理教授、Together AI 联合创始人兼首席科学家 Tri Dao 表示，「这是我最喜欢的一类工作 —— 线性代数洞察 + 高性能算子。我们花了几个月时间，深入研究 Muon 中间过程里这些矩阵的特征值和特征向量，最终提出了一种简单而优雅的算法，让这一思路真正落地。」
接下来我们来看 Gram Newton-Schulz 相较于标准 Newton-Schulz 方法的优势。在此之前，有必要先回顾一下 Muon 优化器。
Muon 可以理解为在谱范数下的最速下降法：
其中：μ 表示动量系数，η 表示学习率，polar 表示极分解。
极分解定义：若 X=UΣV^⊤，则：
由于精确计算昂贵，Muon 使用 Newton-Schulz 进行近似。
标准 Newton-Schulz 的迭代形式如下：
本质上是对奇异值进行逐步归一化，使其趋向 1。不过，标准 Newton-Schulz 存在计算瓶颈。每轮迭代包含三次矩阵乘法：
XX^⊤：2mn^2
A^2：2n^3
BX：2mn^2
总 FLOPs 如下：
这就导致了一些问题，包括大量矩形矩阵乘法（GPU 效率低） 、未利用对称性，并成为优化器瓶颈。
因此，本文 Gram Newton-Schulz 核心思想是：
将迭代从 X 转移到 Gram 矩阵
：
关键变换：任何奇数多项式
可写为
这样一来，就将问题转为了 1）对 R 进行矩阵多项式迭代、 本质是近似 Y^-1/2。优势在于：维度从 n × m → n × n、可用对称矩阵乘法 kernel 以及 减少矩形 GEMM 次数。
不过，
Naive Gram Newton-Schulz
在 float16 下不稳定，Gram 矩阵可能产生负特征值，也会出现 loss spike 和 Inf。
下图为 Llama-430M 上的 Naive Gram Newton-Schulz：
因此有了
稳定版的 Stabilized Gram Newton-Schulz
：
核心改进在于使用
float16 加速
：
并在第 2 步后重启：
以及重新初始化 Gram。
结果显示，在保持稳定性的同时，仍然比原算法更快。
标准 Newton-Schulz、Naive Gram 与 Stabilized Gram 的复杂度对比如下：
结果表明，当 α>1（常见情况），Gram 方法明显更便宜，FLOPs 降低最高约 42%–58%。
最后来看下 Gram Newton-Schulz 在 Kimi K2 中的耗时：
Kimi K2 是一个万亿参数级的稀疏、细粒度 MoE 模型，每一层包含 384 个专家，隐藏层维度为 7168，专家的中间层维度为 2048。由于模型正朝着更细粒度的 MoE 架构发展，且 Kimi K2 使用 Muon 进行训练，因此这是一个评测 Gram Newton-Schulz 的理想场景。
团队将 Kimi K2 一次全局训练步骤中暴露出来的 Newton-Schulz 的墙钟时间，近似为以下部分的总和：
216 个专家的 up/gate/down 权重，形状为 2048 × 7168；
1 个 dense 的 up/gate/down 权重，形状为 7168 × 18432。
下图为 NVIDIA H100 Hopper 硬件上，在 Kimi K2 的流水线并行配置中，
Gram Newton-Schulz 的速度是标准 Newton-Schulz 的 2 倍
。
下图为 NVIDIA B300 Blackwell 硬件上，在 Kimi K2 的流水线并行配置中，Gram Newton-Schulz 的速度同样是标准 Newton-Schulz 的 2 倍。
更多细节内容请参阅原博客。
博客地址：https://dao-lab.ai/blog/2026/gram-newton-schulz/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com