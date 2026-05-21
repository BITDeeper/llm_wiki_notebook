---
title: "ICLR 2026｜早于DeepSeek Engram，STEM已重构Transformer「记忆」"
date: 2026-03-09
source: "机器之心"
url: "https://mp.weixin.qq.com/s/9UGMearfN_xTi_dqtz8m2g"
rss_id: "2651020444_2"
---
近年来，随着大语言模型规模与知识密度不断提升，研究者开始重新思考一个更本质的问题：
模型中的参数应如何被组织，才能更高效地充当「记忆」。
在标准 Transformer 的 FFN 中，知识主要隐式存储在 up-projection 等密集矩阵里，并通过输入相关的矩阵乘法被动态激活，这种方式在表达力上有效，但在参数可寻址性、可编辑性与系统效率上存在天然限制。
围绕这一问题，学术界与工业界逐渐将目光投向
更离散、更结构化的参数组织方式。
以 DeepSeek 提出的 engram 为代表，近期多项工作重新唤起了对「查表式记忆（lookup-based memory）」的关注。而有意思的是，
在 engram 发布之前约三个月，这篇 ICLR paper 也在这一方向进行系统探索 。
论文链接：
https://arxiv.org/pdf/2601.10639
项目主页：https://infini-ai-lab.github.io/STEM/
与 MoE 相关工作不同，STEM 并非在现有稀疏路由框架上做局部改进，而是
直接从 FFN 结构入手，将 up-projection 替换为按 token 索引的层级 embedding 表，
以一种静态、无运行时路由的方式重构 Transformer 中「记忆」的访问路径。
从「算地址」到「查地址」：STEM 的核心直觉
如果从 key-value memory view 来看标准 Transformer，SwiGLU 等 FFN 结构通常通过一次 up-projection，将输入表示映射到高维空间，生成可被 gate 调制的「地址向量」。
这一过程本质上是
输入相关的密集矩阵乘法，
既昂贵，又在参数层面高度耦合。
STEM 的关键洞察在于：
如果 FFN 的作用更接近于「按 token 访问记忆」，那么这些地址向量是否真的需要由输入动态生成？
基于这一问题，STEM 选择了一条极为直接的路径：不再通过 up-projection 计算地址向量，而是为每一层维护一个
按 token 索引的 embedding 表，
在前向传播时直接根据 token id 查表获取对应向量。
在形式上，STEM 用一个静态的、token-indexed 的向量
，替代了传统 FFN 中的
。
gate 与 down-projection 则被完整保留，用于对查表得到的向量进行上下文调制与压缩。
这一替换，使 FFN 的结构发生了一个本质变化：
「记忆容量」第一次与「每 token 计算量」被明确解耦。
结构变化虽小，却带来一系列连锁效应
尽管 STEM 只替换了 FFN 中的一个子模块，但实验结果表明，这一设计在多个维度上产生了显著影响。
1. 可编辑性：直接修改「知识向量」
STEM 的一个尤为引人注目的特性，是其
显式的 token–参数对应关系。
由于每一层的 embedding 都直接与 token id 绑定，研究者可以在不进行再训练的情况下，直接替换某个 token 的 STEM 向量，从而改变模型在相关事实上的输出行为。比如图中例子展示仅通过替换「Spain」与「Germany」的向量，就可以使模型对首都问题的回答发生对应变化。
这一能力为模型的知识编辑、和对模型的理解提供了一种新思路。
2. 训练稳定性：静态稀疏优于动态路由
与 MoE 等依赖运行时路由的方案不同，STEM 属于一种
静态稀疏结构：
每个 token 在每一层所访问的 embedding 是确定的，不涉及负载均衡或 all-to-all 通信。这种设计避免了 MoE 中常见的 load skew 与 loss spike 问题。
3. 更高效的「记忆空间」：embedding 几何结构的改变
从表示空间的角度看，用 token-indexed embedding 替代 up-projection，会显著改变 FFN 输入向量的几何分布。STEM 中的 embedding 表呈现出
更大的角度散布（large angular spread），
不同 token 的向量更加接近正交，从而有效减少了参数之间的相互干扰（cross-talk）。
这一性质意味着，在相同甚至更低的计算成本下，模型能够维持更多「可寻址的记忆槽位」，对知识存储和检索尤为有利。
4. 计算与系统效率：FLOPs 与 IO 的双重下降
从计算复杂度上看，移除 up-projection 后，每一层可节省约 d⋅d_ff 级别的矩阵乘法开销。更重要的是，大规模的 embedding 表可以被
离载到 CPU，
并通过异步 prefetch 与缓存策略进行访问。
实验结果：规模、任务与长上下文的系统验证
在 350M 与 1B 两个模型规模上，STEM 被系统性地与 dense baseline 进行对比。
结果显示：
整体平均性能提升约
3–4%，
部分知识类任务提升幅度可达
9–10%；
在 Needle-in-a-Haystack 与 LongBench 等长上下文评测中，STEM 的优势还会随着上下文长度的增加而扩大。
工程视角：如何真正落地
论文也对 STEM 的系统实现给出了较为完整的讨论：
替换位置：
仅替换 up-projection 是关键，盲目替换 gate-projection 会破坏上下文调制能力；
存储策略：
embedding 表可 CPU 离载，训练时需要将梯度回写到对应的 optimizer state；
折衷方案：
在参数占比与显存压力之间，可采用部分层替换或混合变体进行平衡。
结语
STEM 展示了一种值得关注的趋势：
通过改变参数的「组织方式」，而非一味增加规模或计算，模型同样可以获得显著能力提升。
在当前大模型架构逐渐走向复杂化的背景下，这种简洁、稳定且工程友好的设计思路，或许正是下一阶段基座模型演进中不可忽视的一条路径。
作者介绍
本文第一作者 Ranajoy Sadhukhan 为卡内基梅隆大学（CMU）InfiniAI Lab 博士生，师从陈贝迪教授。
该工作完成于其在 Meta AI 实习期间，实习导师包括
刘泽春、曹晟（Rick Cao）与田渊栋
等研究人员。
InfiniAI Lab 由陈贝迪教授创立，致力于模型、系统与硬件协同设计，研究高效且可扩展的 AI 算法与系统，重点方向包括长上下文多模态建模、突破传统 scaling laws 的新一代模型架构，以及基础模型的理解与推理能力增强，同时推动算法与系统层面的效率优化，以促进 AI 技术的普及化。
刘泽春为 Meta AI 研究科学家，研究方向涵盖基座模型训练，大模型压缩、稀疏化与端侧部署优化，专注于模型高效推理与系统协同设计。
曹晟（Rick Cao）为 Meta AI 研究员，主要研究大模型系统优化与高效推理架构设计，关注大规模模型在真实系统环境中的部署与加速问题。
田渊栋为 Meta AI 资深研究科学家，长期从事强化学习与大模型研究，曾参与 AlphaZero 等强化学习系统研发，并关注基础模型的推理与决策能力。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com