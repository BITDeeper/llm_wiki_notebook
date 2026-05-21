---
title: "ICLR 2026 | 揭秘大模型注意力模式！中科大华为诺亚TAPPA：时序视角的统一解释框架"
date: 2026-02-28
source: "机器之心"
url: "https://mp.weixin.qq.com/s/Omo4sBMp1OeShJgwIh-PmQ"
rss_id: "2651018543_2"
---
本论文的第一作者杨庆越是中国科学技术大学 2021 级硕博连读生，师从王杰教授，主要研究方向为大模型推理加速与高效推理系统。她曾在 NeurIPS、ICLR 等顶级会议发表论文 3 篇，获华为优秀实习生等荣誉。本工作完成于其在华为诺亚方舟实验室科研实习期间，与中国科学技术大学 MIRA Lab 和华为团队合作完成。
近日，中科大王杰教授团队（MIRA Lab）和华为诺亚方舟实验室（Huawei Noah's Ark Lab）联合提出了大模型注意力模式的统一分析框架 TAPPA，从时间序列视角统一解释自回归推理过程中多类注意力模式的形成机制，并提出训练无关的 q-similarity 指标，将理论分析转化为可应用的推理优化信号，在 KV 缓存压缩与结构化剪枝中实现更合理的资源分配与稳定的精度增益。
论文发表在人工智能顶级会议 International Conference on Learning Representations（ICLR 2026）。
论文：Why Attention Patterns Exist: A Unifying Temporal Perspective Analysis
论文地址：https://arxiv.org/abs/2601.21709
代码：github.com/MIRALab-USTC/LLM-TAPPA
相关工作： AttentionPredictor (NeruIPS 2025) https://arxiv.org/abs/2502.04077
注意力模式可以帮助理解和优化大模型
在大模型的自回归推理中，每一个头都会产生一个注意力分数矩阵。将它画成热力图后，常能看到一些重复出现的几何形状。最常见的例子包括检索式注意力头 (retrieval head)，它会在很长的上下文里跳跃地寻找少数相关 token；sink 注意力头，它会在很长一段时间内持续聚焦到序列开头的少数位置；以及对角线型轨迹 (streaming head)，它会沿着最近 token 附近形成稳定的局部带状结构。这些现象被统称为
注意力
模式（atte
ntion pattern）。
这些 pattern 对应了模型在推理时不同的功能分工，例如在长上下文中进行检索，维持开头锚点，或者以流式方式持续读取最新信息。并且 pattern 的结构性可以被用作推理优化的信号，例如在 KV Cache 优化中指导保留重要的历史 token。因此，研究 pattern 的行为和出现原因对于探究大模型行为逻辑和优化大模型效率非常重要。然而，已有研究往往只描述某一种现象或某一类头的行为，缺少统一的因果解释与可迁移的分析框架，因此这些信号也常以经验规则的形式出现。
从时序视角发现和揭秘注意力模式
我们先前工作
AttentionPredictor [1] 从时间序列视角
迈出了关键一步。它将解码过程看作注意力随时间演化的序列，从而以时序视角出发观察 pattern，归纳出了注意力在解码过程中重复的时序结构，例如重复访问，顺序访问与周期性访问。基于这一观察，AttentionPredictor 把每一步的注意力视为一个随时间演化的序列，并训练轻量预测器去预测下一步注意力分布。预测结果可直接服务于 KV Cache 的保留与淘汰。
本工作
TAPPA
[2] 延续并推进了这一条逻辑链，试图回答更根本的问题：
这些 pattern 为什么会出现？
在完全相同的注意力公式下，为什么不同 head 会呈现清晰的对角线、反复聚焦，或看似随机的检索式扫描？TAPPA 的目标是给出统一解释，并把解释转化为实用的推理优化信号。
图 1：TAPPA 总览。左侧是理论视角，右侧展示用 q-similarity 指导 KV 缓存压缩与结构化剪枝的效果。
TAPPA：Q、K 和 RoPE 联合分析
TAPPA 采用时间视角审视自回归推理。自回归生成每一步的新 token 都建立在此前已生成序列之上，因此跨步的 hidden state 与注意力分布天然构成一段时间序列。为了把这种变化拆解到可分析的来源，TAPPA 从注意力计算的内积结构出发：
在第 t 步解码时，历史 key 基本固定，
注意力分布的主要变化来源于 query 的演化。
于是，理解 pattern 的第一步是把 query 序列作为时间序列来研究，并分析 query 的时间连续性如何映射到注意力分布的连续性。
进一步地，即便 query 的变化规律已知，注意力热力图呈现为哪一种几何形状还取决于两类结构性因素。其一是
Q 与 K 的几何关系如何在跨步传播，
尤其是 Q 与 K 各自的时间连续性是否能够在内积中被保留。其二是
RoPE 如何在不同频率通道上对相对位移施加相位调制。
已有研究发现，在注意力内积中，少数 embedding 通道可能占主导并决定注意力形状。因此我们提出了 TAPPA（时序注意力模式分析框架），将 Q，K 与 RoPE 联合分析，一方面解释 pattern 的跨步演化来自 query 的时间连续性，另一方面解释具体几何形态由主导通道与 RoPE 的通道响应共同塑造。
核心发现：稳定模式与随机模式的来源区别
基于上述分析视角，TAPPA 首先关注一个更基础的问题：哪些注意力头更可能产生稳定且可复现的几何结构，哪些注意力头更可能呈现难以预测的检索式分散结构。为此，TAPPA 把注意力模式归为稳定模式 (predictable) 与随机模式 (unpredictable) 两类。稳定模式在时间轴上具有更强的连续性，跨步变化呈现清晰规律。随机模式缺乏稳定规律，常表现为跨步跳跃的检索式扫描。
TAPPA 的关键结论是，
稳定模式与随机模式的分界与 query 的时间连续性紧密相关。
为刻画这种连续性，论文使用 q-similarity 指标，用于衡量相邻或近邻步骤中 query 的自相似程度。直观上看，高 q-similarity 表示 query 在时间轴上变化更平滑，注意力更容易沿时间保持稳定结构；而低 q-similarity 表示 query 变化更剧烈，注意力更可能转向分散且难预测的检索式形态。
图 2：TAPPA 用统一的形成条件解释多类稀疏注意力模式，并把 q-similarity 作为是否可预测的因素。
图 3：高与低 q-similarity 对应的注意力图示例。高相似性更容易形成稳定结构，低相似性更接近检索式分布。
稳定模式内部：Q、K 连续性与 RoPE 如何塑造几何形态
在稳定模式内，论文进一步给出三类代表性形状的形成条件，它们来自 Q、K 的连续性与 RoPE 的共同作用。以顺序访问为例，顺序对角线并非只依赖 RoPE 的高频通道，而需要 Q 与 K 同时具有较高自相似性，从而使注意力沿时间稳定地 “滑动”(如图 4)。
图 4：顺序型对角线与 Q、K 自相似性的关系示例。高 Q 相似性与高 K 相似性共同推动顺序模式形成。
周期性斜线的等间隔现象同样来自 Q、K 连续性与 RoPE 的耦合：
RoPE 会对不同相对位移引入通道级的相位调制，使得 Q 与 K 的匹配在特定步长处出现相位回归，从而触发注意力峰值以固定间隔重复出现。当 Q、K 的连续性使有效能量集中到少数主导通道时，主导通道的旋转周期便决定了多条平行斜线之间的间隔，即:
举例如图 5 所示，首先，通过 Key 维度的幅值剖面可以观察到低频 RoPE 通道在该注意力头占主导（图 5 (a)），此时注意力主要集中在主对角线附近，表现为典型的顺序型模式（图 5 (b)）。当主导通道被人为调整到更高频率（m = 2 或 m = 5）时，注意力不再局限于单一主对角线，而是出现周期性的平行对角线（图 5 (c)(d)），且频率越高 (m 越小)，斜线周期越小。
图 5： RoPE 配置如何塑造注意力模式。(a) Key 维度的幅值剖面显示某一 RoPE 通道占主导（示例为 m = 124）。(b) 在该主导通道下，注意力矩阵呈现近似单一主对角线的顺序型模式。(c)(d) 将主导通道切换到更高频率（m = 2 与 m = 5）后，注意力矩阵中出现周期性的平行对角线结构，且周期与频率相关。
把理解转化为优化：q-similarity 指导压缩与剪枝
TAPPA 将 q-similarity 作为代理信号，应用到 KV Cache 压缩和模型结构化剪枝两个推理优化场景。
KV Cache 压缩：
q-similarity 用于 per-layer 预算分配。低 q-similarity 的层更可能承载检索式注意力，需要更大缓存预算以保留关键 token；高 q-similarity 的层更稳定，可在更小预算下维持精度。实验证明，在 LongBench 数据集的多种预算设置下，我们方法的表现稳定优于 Expected Attention [1] 等基线。
图 6 我们方法相比 Expected Attention 的准确率提升。
结构化剪枝：
q-similarity 与 ShortGPT [2] 的 Block Influence 结合，形成更可靠的层重要性评分。实验证明，TAPPA 在多个模型与剪枝比例下均获得提升，其中在 LLaMA-3.1-8B、28% 剪枝比例时，四个任务的平均准确率提升了 5.6%。
表 1：TAPPA 与 ShortGPT 在相同剪枝比例下的任务准确率比较。
[1] Yang, Qingyue, et al. Attentionpredictor: Temporal patterns matter for kv cache compression. The Thirty-ninth Annual Conference on Neural Information Processing Systems.
[2] Yang, Qingyue, et al. Why Attention Patterns Exist: A Unifying Temporal Perspective Analysis. arXiv arXiv:2601.21709, 2026.
[3] Devoto et al. Expected Attention: KV Cache Compression by Estimating Attention from Future Queries Distribution. arXiv:2510.00636, 2025.
[4] Men et al. ShortGPT: Layers in Large Language Models are More Redundant Than You Expect. arXiv:2403.03853, 2024.
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com