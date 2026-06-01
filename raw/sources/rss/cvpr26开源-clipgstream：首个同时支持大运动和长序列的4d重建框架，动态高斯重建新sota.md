---
title: "CVPR26开源 | ClipGStream：首个同时支持大运动和长序列的4D重建框架，动态高斯重建新SOTA"
date: 2026-05-30
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/boFZV3ANqEX5c-TJQ7KNCw"
rss_id: "2247661100_1"
---
0. 论文信息
标题：ClipGStream: Clip-Stream Gaussian Splatting for Any Length and Any Motion Multi-View Dynamic Scene Reconstruction
作者：Jie Liang, Jiahao Wu, Chao Wang, Jiayu Yang, Xiaoyun Zheng, Kaiqiang Xiong, Zhanke Wang, Jinbo Yan, Feng Gao, Ronggang Wang
机构：Guangdong Provincial Key Laboratory of Ultra High Definition Immersive Media Technology, Shenzhen Graduate School, Peking University Pengcheng Laboratory, MIGU Video Co., Ltd.
原文链接：https://arxiv.org/pdf/2604.13746
官方主页：https://liangjie1999.github.io/ClipGStreamWeb/
代码仓库：https://github.com/liangjie1999/ClipGStream
1. 导读
在 VR / MR / XR 等沉浸式媒体飞速发展的今天，动态 3D 场景重建已成为连接真实世界与数字体验的关键技术。然而，面对长序列、大运动的复杂动态场景，现有方法始终难以兼顾「时间稳定性」与「可扩展性」。 近日，北京大学、鹏城实验室联合团队提出了 ClipGStream——一种全新的 Clip-Stream 混合动态重建框架，首次在统一框架中同时解决了长序列建模与大尺度运动重建难题，在多组公开基准上实现 SOTA。 该工作已被
CVPR 2026
接收。
代码仓库已开源
。
2.为什么“长时序 + 大运动”是动态重建的核心挑战？
现有的动态重建方法只能在短序列低速运动场景上建模，但是在现实中存在大量长序列和高速运动的场景，比如一场篮球比赛，球员可能在场上连续飞奔长达数分钟，现有的动态重建方法在面对这样的极困难场景时，会出现长序列结构漂变，动态建模失败，闪烁等问题。因此只有同时驯服了时间和运动这两大难题，4D 技术才能从精美的实验室 Demo，真正走向千行百业的落地应用。
动态 4D要同时解决“空间在哪里”和“时间怎么变”的双重难题。已有的方法主要分为基于Clip和基于Frame-Stream的两类方法。Clip类方法像如4DGS，LocalDyGS，试图把整个场景的信息都存入同一个时空场中。一旦序列变长，时空场就会因为容量不足导致存在大量内容冲突，从而使得动态建模失败。因此该类方法的主要缺陷就在于时域扩展性差。
Frame-Stream类方法如3DGStream通过学习帧间的残差信息实现动态建模。但其缺乏局部一致性，导致长序列输入下，模型随时间推移而充满错误累积和结构漂变。此外，基于残差的学习很难捕获大运动物体，导致其在充满高速运动的场景下效果不佳。
我们的方法通过将Clip类方法和Frame-Stream类方法相融合，实现以Clip为单位的流式训练，打破了“时长-质量-显存”的不可能三角。它让高精度动态重建不再局限于几秒钟的慢动作视频，而是能够驾驭长达数千帧的高速运动场景。
3.核心框架：片段-流式训练
ClipGStream 首先将输入的多视角视频帧切分为多个短片段（clip），每个片段包含N个时间帧的多视角图片。其中第一个clip作为Reference Clip，后续 clip 作为Source Clip。在训练好Reference Clip后，后续Source Clip通过继承静态信息实现时域建模的一致性，独立训练动态信息保证动态建模。以clip为单位的流式训练相较于粒度更细的以帧为单位的流式训练有着更好的局部一致性，避免了长时间训练的帧间抖动。同时流式训练相较于单纯的clip训练也有更好的时域扩展性。
论文中一个非常关键的设计，是将场景表示拆分为两类特征：静态特征和动态特征。静态特征负责学习场景的外观等信息，而动态场景则负责表征运动的可见性。通过动静态特征解耦的方式，便于我们在训练后续Source Clip时，继承静态信息保证clip间时域一致性，同时独立训练动态特征保证对运动的建模。
4.继承与独立训练
我们的方法包含两种互补策略，分别对应 clip 内（intra-clip）与 clip 间（inter-clip）两个层级。
Clip 内训练策略（Intra-clip Training Strategy）： 对于Reference Clip，我们首先将锚点的静态特征与动态特征解码为 时域高斯，随后进行光栅化渲染。对于每个Source Clip，我们在继承自 Reference Clip 的 锚点基础上额外引入残差锚点，用于捕获新出现或发生位移的结构；同时，为该 clip 单独训练一个独立的时空场，以建模其局部运动。
Clip 间继承策略（Inter-clip Inheritance Strategy）： 为了在不同 clip之间保持时间一致性，每个Source Clip 都会继承来自 Reference Clip 的锚点、静态特征以及解码器。所有继承得到的组件在优化过程中均保持冻结，从而能够稳定地重建任意长度的动态序列。
5. 实验结果
消融结果：关于锚点补偿模块（RAC）与 锚点继承模块（AI）的消融实验。如 (a)(b)(c) 所示，从相邻 clip 之间的残差热力图可以看出，移除任意一个模块都会导致静态区域出现明显时域不一致（闪烁）；而在同时启用这两个模块后，如 (d) 所示，闪烁现象被显著抑制，clip 之间的过渡也更加平滑。这表明，这两个组件在维持 clip 间稳定性方面都发挥了关键作用。
消融结果：(a) 在不继承解码器的情况下，渲染结果会出现明显的模糊现象；相比之下，采用解码器继承后，如 (b) 所示，图像细节更加清晰。这表明继承解码器可以保证后续clip的训练更加稳定。
总结：让动态 Gaussian 真正迈向长序列与复杂运动时代
ClipGStream 证明了，动态高斯重建终于可以同时兼顾“超长序列”与“复杂大运动”这两个过去很难兼得的问题。通过提出 Clip-Stream 混合训练框架，ClipGStream 在保持时间一致性的同时，实现了对 1400 帧长视频和高速动态场景的稳定建模，显著缓解了传统方法中的闪烁、漂移和长序列崩坏问题。这意味着，动态 4D 重建正在从“只能处理短片段的小实验”，逐渐迈向真实世界复杂动态内容的规模化生产。未来，无论是自由视角体育直播、VR/MR 沉浸式内容、数字人还是 volumetric video，高质量、长时序、强动态的 4D 内容生成，都有望真正走向实际应用。 对更多实验结果和文章细节感兴趣的读者，可以阅读一下论文原文~
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向