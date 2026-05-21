---
title: "ICLR 2026 Oral｜Information Shapes Koopman Representation：信息如何决定世界模拟？"
date: 2026-04-23
source: "机器之心"
url: "https://mp.weixin.qq.com/s/2N_Wfq33hX7_Ig9F4wO-og"
rss_id: "2651029477_2"
---
英国
University College London (UCL) 博士程小远、
新加坡
Nanyang Technological University (NTU) 博士元文瑄
(master project)
，为本文共同第一作者；
法国Institut Polytechnique De Paris
程思博教授、
美国
Santa Fe Institute
施密特学者章
元肇等，为本文合作者，上海财经大学助理教授孙卓，为本文通讯作者。
图1：软体机器人的模拟以及控制
大多数世界模型工作默认：只要学到一个好的 latent dynamics，问题就解决了。 但这个假设本身是可疑的——
什么样的信息，才足以支撑一个可预测、可传播的动力学？
本文从信息论出发，重新审视这一前提。
一个自然的思路是：如果非线性动力学难以建模，能否把它转化为线性问题？Koopman 算子正是这样一种诱人的框架，它试图将复杂系统嵌入潜空间，使其演化近似线性。这一思路在物理表示、天气预测和流体控制中具有极强吸引力。 然而，这种线性化并不是免费的，它依赖于一个精心构造的表示空间，而这个空间本身才是最难学习的部分。
因此，真正的核心问题不是如何学习一个隐变量表征，而是：
在有限维表示中，究竟哪些信息必须被保留，才能支撑稳定的动力学传播与长期预测
？
为此，UCL、ICL、Santa Fe Institute、Institut Polytechnique De Paris、上海财经大学最新联合提出
Information Shapes Koopman Representation
。这项工作从
动态信息瓶颈
的角度重新审视 Koopman 表征学习，明确 Koopman learning 真正所需要的信息，并据此构造出一个可优化的目标。
论文地址：
https://openreview.net/forum?id=Szh0ELyQxL
代码地址：
https://github.com/Wenxuan52/InformationKoopman
目前，该成果已被 ICLR 2026 Oral 接收。
动机：
世界模型在Koopman表征下难的，不只是「学一个 latent」
Koopman表征学习问题在于，Koopman 表征并不只是像传统潜空间学习方法，比如Autoencoder、Variational Autoencoder，一样「学一个能重建输入的 latent」。相比较而言，它还需要同时满足三个更强的性质：
Temporal Coherence
：潜空间表示要能稳定地随时间传播；
Structural Consistency
：潜空间中的演化要尽量符合 Koopman 的线性结构；
Predictive Sufficiency
：表征里要保留足够多、足够关键的动力学模式，才能支撑长期预测。
这就带来了两个需要权衡的问题：
1、如果 latent 保留的信息太多，表征会更丰富，但很难维持简单稳定的线性结构；
2、如果压缩得太狠，又容易丢掉长期预测真正需要的关键模态。
所以，该论文真正想回答的问题不是 "再加一个模块"，而是顺着这个Trade-off：
在有限容量下，一个好的 Koopman 表征，到底该保留什么信息
？
图2：信息论 Koopman 框架。(a) 带有 Information-shaped 优化目标的 Koopman 表征学习结构总览；(b) Koopman 模态与互信息项对应关系；(c) 互信息（MI）和冯·诺依曼熵（VNE）对模态中信息分配的水填充效应。
关键视角：
从
信息瓶颈角度看待
学习动力学的
问题
这篇论文的切入点，是把这个问题重新放回到
信息瓶颈（Information Bottleneck, IB）
框架下理解。
经典的信息瓶颈强调：一个好的表征，并不是尽量把输入中的所有信息都搬进 latent，而是在压缩的同时，保留对下游任务最重要的信息。
对应到 Koopman learning，这里形成了一个
动
态的
信
息瓶颈公式
：
那么核心目标就变成
：
学习一种 Koopman representation ，使其对未来状态具有最大的线性可预测性（
Relevance
↑
），同时保持尽可能结构紧凑（
Complexity
↓
）。
理论分析：
为什么互信息重要，但只靠互信息还不够？
围绕这个目标，论文给出了三个相互衔接的理论结论。
1、长期预测误差，本质上来自逐步累积的信息损失
论文首先从信息传播的角度分析了 Koopman 潜空间传播的误差来源。结论很直观：
当原始非线性系统被 Koopman 表征近似时，每一步传播都会损失一部分预测相关的信息，而长时间预测误差，就是这些小损失一步步累积起来的结果。
这意味着，
Mutual Information（互信息，MI）
直接关系到 Koopman 表征能够保住多少预测能力。
2、不是所有信息都一样重要
但只能通过互信息来量化error还不够，因为这只能告诉我们损失了多少，却不能告诉我们损失的是哪一类信息。
于是论文进一步把解码器所依赖的信息
拆成三部分（图2(b)）：
能够稳定跨时间传播的
temporal-coherent
information
；
只在短时间内有效、很快衰减的
fast-dissipating
information；
更像噪声或瞬时注入信息的
residual
information
。
其中，真正对长期预测更关键的，是第一类
：
那些能够在潜空间里持续传播，并与 Koopman 模态
对应的信息
。
3、只最大化 MI，会导致 mode collapse
那么，一个很自然的想法是：既然
temporal-coherent
information
最重要，那是不是只要尽量增大这部分互信息就够了？
答案是否定的
。
论文发现，
MI
的确会优先把信息分配给最稳定、最有收益的少数模态，但这也会带来副作用：信息过度集中到几个 dominant modes 上，导致潜空间有效维度下降，出现
mode collapse
。
为了缓解这个问题，论文又引入了
von Neumann entropy（VNE）
。它的作用，不是简单再加一个正则项，而是尽量避免模态信息过度集中，让潜空间保持必要的模态多样性。
简单来说，这篇论文的核心洞察就是：
MI 负责保住「对的模态」，VNE 负责保住「足够多的模态」
（图2(c)）。
从理论走向算法：一个真正「information-shaped」的 Koopman 目标
基于上面的分析，论文进一步构造了一个信息论驱动的 Lagrangian 目标，把互信息、结构一致性项、重建项以及 von Neumann entropy 统一到一个可优化框架中（图2(a)）。
图3：提出的Information-shaped Koopman 目标及其可优化形式。上方为从理论分析得到的统一 Lagrangian：由互信息项、von Neumann entropy项、重构项共同构成；下方为对应的可训练目标，进一步对应到 Koopman 表征学习中的三个性质。
更重要的是，这个目标和 Koopman learning 的三个核心性质是一一对应的（图3）：
MI 项
对应于
Temporal Coherence
，强调时间上的稳定传播；
线性 forward 一致性
项
对应于
Structural Consistency
，保证潜空间演化与 Koopman 线性结构一致；
VNE 项
对应于
Predictive Sufficiency
，帮助模型保留足够丰富的有效模态；
再结合 reconstruction / ELBO 项，使整个模型能够在实际训练中稳定优化。
也就是说，该论文将 "一个好的 Koopman 表征该保留什么信息" 这个问题，转换成了一个
可优化的训练目标
。
实验结果：不仅更准，而且更稳
实验部分，论文在三类任务上验证了这套方法：
物理动力系统预测
：如 Lorenz 63、Kármán vortex、Dam flow、ERA5 天气预测；
高维视觉输入下的控制与表征学习
：如 Planar、Pendulum、Cartpole；
图结构动力学预测
：如 Rope 和 Soft Robotics（如图1）。
结果表明，这套方法在短期和长期预测误差上优于多种 Koopman baseline（图4和5）。
图4：全球天气场包括地球重力势能、温度、湿度和风速。最左列为真实物理场，最右列为本文方法的预
测结果
。
图5：在其余两类图结构和视觉输入动力学系统上的泛化表现。左为图结构动力学场景，以带有噪声的 Rope 和 Soft Robotics 两个任务为例；右为视觉输入场景，以 Planar、Pendulum 和 Cartpole 控制任务为例。
尤其是在 Kármán vortex 的可视化中，在谱性质和manifold 结构上，论文展示了一个很有说服力的现象（图6）：
图6： Kármán vortex 任务上的 latent space 几何分布与 Koopman 谱结构可视化。上排比较了不同 baseline 方法在 latent space 中的轨迹分布，论文方法的 rollout 轨迹更接近单步预测，也更符合真实动力学的极限圆演化结构；下排展示了 Koopman 谱分布，论文方法学到的特征值更多分布在单位圆附近，形成了更稳定的几何结构。
相比容易出现谱退化和轨迹漂移的 baseline，加入 MI 与 VNE 后，模型学到的特征模态更加稳定，长期轨迹也更接近真实动力学结构。
总结与展望
这篇工作的重要性，在于它把 Koopman 表征学习从一个技巧性方法，重新嵌入到世界模型的基本问题之中。世界模型关心的从来不是表示本身，而是一个表示是否包含足够的信息去支持动力学的预测与控制。在这一视角下，Koopman 方法中的 simplicity 与 expressiveness 不再是调参经验，而是被明确为一个信息论上的优化目标。因而问题发生了转变。关键不再是能否找到一个线性化的潜空间，而是在有限维约束下，哪些信息是必须被保留的，才能使动力学既可传播又可预测。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com