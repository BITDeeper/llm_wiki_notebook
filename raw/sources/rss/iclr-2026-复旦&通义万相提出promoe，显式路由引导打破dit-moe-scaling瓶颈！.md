---
title: "ICLR 2026 | 复旦&通义万相提出ProMoE，显式路由引导打破DiT MoE scaling瓶颈！"
date: 2026-03-31
source: "机器之心"
url: "https://mp.weixin.qq.com/s/gC6GnQP3CTk473FmXba6Bg"
rss_id: "2651024837_2"
---
混合专家架构（Mixture-of-Experts，MoE）在扩展模型容量的同时保持了计算效率，在大语言模型（LLM）的发展中发挥了巨大作用。然而，现有方法将 MoE 应用于 Diffusion Transformer（DiT）时，却发现收益非常有限，无法复刻 MoE 在 LLM 中的成功。
为什么同样的架构，跨界到视觉生成领域就「水土不服」了？
近期，来自
复旦大学、
阿里通义万相Wan Team
、浙江大学和香港大学
的研究团队指出，视觉 Token 的高度冗余性和功能异质性阻碍了视觉 MoE 中专家的专业化（specialization）。为此，他们提出了 ProMoE，一种带有显式路由引导的两步路由 MoE 框架。
相关论文已被 ICLR2026 接收，第一作者为复旦大学博士卫昱杰。
论文标题：
Routing Matters in MoE: Scaling Diffusion Transformers with Explicit Routing Guidance
论文地址：
https://arxiv.org/abs/2510.24711
代码：
https://github.com/ali-vilab/ProMoE
视觉 Token 与语言 Token 的差异
为了探究 MoE 在 DiT 中收益不明显的原因，研究团队发现，视觉 Token 具有两个独特的属性，导致传统的隐式路由分配策略产生次优的效果：
高度空间冗余性（High Spatial Redundancy）：
离散的文本 Token 语义高度浓缩且差异明显，而连续的图像 Patch（视觉 Token）在空间上高度耦合，存在大量的冗余信息，导致视觉 MoE 中的专家往往学到同质化的特征。
功能异质性（Functional Heterogeneity）：
扩散模型普遍依赖无分类器引导（CFG）技术。这就导致输入 Token 天然分为两派：条件 Token 和无条件 Token。标准 MoE 范式对它们一视同仁、同时分配，忽略了它们不同的功能角色。
图 1：
（a）我们从 110 个 ImageNet 类别中随机抽取 1k 个中间层 Token，进行 10 簇 k-means 聚类（以颜色区分）。以类别名称 / 标签作为输入时，LLM Token 形成紧凑、分离良好的簇，语义密度高，而视觉 Token 则较为分散。这种差异可以用类间距离与类内距离的比值来量化（19.283 ≫ 0.748）。（b）我们对每个 MoE 层的专家权重矩阵进行奇异值分解，并计算由其左前 k 个奇异向量张成的子空间的平均相似度来衡量专家间的多样性。引入路由引导（我们的方法）可以增强专家间的多样性。
ProMoE：两步路由与显式语义路由引导
MoE 的核心原则是
专家专业化（Expert Specialization）
，即确保每个专家都能获取集中且不重叠的知识。为了在视觉模型中实现「专家内一致」和「专家间多样」，ProMoE 引入了
两步路由器（Two-Step Router）
和
路由对比学习（Routing Contrastive Learning）。
两步路由器
第一步：条件路由（Conditional Routing）
路由器首先根据 Token 的功能角色进行硬路由分配。无条件图像 Token（来源于 null conditioning 下的图像 Patch）被直接分配给专门的
无条件专家（Unconditional Experts）
进行处理。而条件图像 Token 则进入下一步，交由标准的路由专家（Routed Experts）进行处理。这种机制实现了专家的功能隔离。
第二步：原型路由（Prototypical Routing）
对于条件图像 Token，ProMoE 引入了一组可学习的「原型」（Prototypes），每个原型对应一个特定专家。原型路由在隐空间中计算 Token 与各个 Prototype 之间的余弦相似度，并选择 identity function 作为激活函数得到路由分数，分数较高的 Token 会被分配给对应的专家。
显式语义路由引导：路由对比学习（Routing Contrastive Learning）
为了显式增强原型路由的语义引导，ProMoE 提出了一种无需手动标注的
路由对比损失（Routing Contrastive Loss，RCL）
。在训练过程中，RCL 会产生两种影响：
拉近：
将 Prototype 拉向分配给它的 Token 集合的质心，确保同一个专家处理的 Token 是语义相似的。
推开：
将 Prototype 推离其他专家处理的 Token 集合的质心，鼓励不同专家之间形成差异化，增强多样性。
同时，实验发现 RCL 中的「推开」操作在语义层面上天然起到了负载均衡的作用，比传统的负载均衡损失更加灵活且有效。
图 2：
ProMoE 架构概览。输入 Token 通过条件路由被分为无条件 Token 子集和条件 Token 子集。无条件图像 Token 由无条件专家处理。条件图像 Token 通过基于可学习原型的原型路由进行分配。路由对比学习显式增强了原型路由中的语义引导。
算法伪代码如下：
实验结果
模型配置
与 Dense Model 的对比
ProMoE 在各种规模和设置下均稳定超越了稠密模型。亮眼的是，参数量仅 1.063B 的 ProMoE-L-Flow，凭借更少的激活参数，超越了计算量更大的 Dense-DiT-XL-Flow。
与 SOTA MoE Model 的对比
ProMoE 超越现有的视觉 MoE 方案。特别是，用 1.063B 超越了拥有 16 个专家，1.846B 的 DiffMoE。
Text-to-Image 验证
在 GenEval bench 中，ProMoE 在所有子任务上优于标准的 Token-Choice MoE 模型，展现出一定的泛化能力。
可视化结果
Class-to-image generation
Text-to-image generation
收敛性分析
训练曲线显示，ProMoE 的收敛速度明显快于稠密模型和现有 MoE 模型。
Scaling 实验
ProMoE 展现出一定的扩展潜力。随着模型尺寸从 Base 扩展至 XL，以及专家数量从 4 逐步增加到 16，ProMoE 的生成性能均呈现出稳定的提升。
消融实验
总结
通过分析语言和视觉 Token 之间的差异，ProMoE 提出了一种带有显式路由引导的 MoE 框架。通过巧妙设计的条件路由、原型路由以及路由对比学习机制，ProMoE 用更少的激活参数超越了 Dense Model 以及现有 MoE 方法。这为如何在大规模扩散模型中高效引入 MoE 架构提供了一套可能的开源范式。
更多技术与实验细节，欢迎阅读原论文。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com