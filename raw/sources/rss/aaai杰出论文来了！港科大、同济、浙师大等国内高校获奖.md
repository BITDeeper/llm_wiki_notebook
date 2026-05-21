---
title: "AAAI杰出论文来了！港科大、同济、浙师大等国内高校获奖"
date: 2026-01-22
source: "机器之心"
url: "https://mp.weixin.qq.com/s/9iSzNqFyTsqsMT_Z3kxDbA"
rss_id: "2651013372_1"
---
编辑｜张倩、陈陈
刚刚，AAAI 2026 官网公布了今年的「杰出论文」（相当于最佳论文）奖项，共有 5 篇论文获奖，其中有三篇由华人团队主导，作者来自香港科技大学（广州）、西湖大学、浙江大学、同济大学、浙江师范大学、香港城市大学等多所国内高校。
AAAI 由国际人工智能促进协会主办，是人工智能领域历史最悠久、涵盖内容最广泛的国际顶级学术会议之一，也是中国计算机学会（CCF）推荐的 A 类国际学术会议，每年举办一届。
AAAI 2026 于 1 月 20 日至 27 日在新加坡举行，总投稿数为 23,680 篇，录用论文 4,167 篇，接收率为 17.6%。
以下是获奖论文的具体情况。
论文 1：ReconVLA: Reconstructive Vision-Language-ActionModel as Effective Robot Perceiver
作者：Wenxuan Song, Ziyang Zhou, Han Zhao, Jiayi Chen, Pengxiang Ding, Haodong Yan, Yuxin Huang, Feilong Tang, Donglin Wang, Haoang Li
机构：香港科技大学（广州）、西湖大学、浙江大学、莫纳什大学
论文链接：https://arxiv.org/pdf/2508.10333
项目主页：https://zionchow.github.io/ReconVLA/
近年来，视觉 — 语言 — 动作（VLA）模型的进展，使机器人智能体能够将多模态理解与动作执行相结合。然而，实证分析发现，现有的 VLA 模型在将视觉注意力分配到目标区域时仍然存在明显困难，其注意力往往呈现分散状态。
为引导视觉注意力在正确目标上的有效 grounding ，作者提出了 ReconVLA，一种采用隐式对齐范式的重建式 VLA 模型。
该方法以模型的视觉输出为条件，引入扩散 Transformer 来重建图像中的注视区域（gaze region），而这一注视区域正对应于被操作的目标物体。通过这一过程，VLA 模型被促使学习更加细粒度的表征，并能够准确分配视觉注意力，从而更充分地利用任务相关的视觉信息，完成精确操作。
此外，作者构建了一个大规模预训练数据集，包含来自开源机器人数据集的十万余条轨迹和两百万条数据样本，进一步提升了模型在视觉重建任务上的泛化能力。大量仿真与真实环境中的实验结果表明，论文提出的隐式对齐方法具备明显优势，在精细操作能力和泛化表现上均有出色表现。
论文 2：LLM2CLIP: Powerful Language Model Unlocks Richer Cross-Modality Representation
作者：Weiquan Huang, Aoqi Wu, Yifan Yang, Xufang Luo, Yuqing Yang, Usman Naseem, Chunyu Wang, Qi Dai, Xiyang Dai, Dongdong Chen, Chong Luo, Lili Qiu, Liang Hu
机构：同济大学、微软、麦考瑞大学
论文链接：https://arxiv.org/pdf/2411.04997
论文主页：https://microsoft.github.io/LLM2CLIP/
CLIP 是一种具有奠基意义的多模态模型，它通过在数十亿规模的图像 — 文本配对数据上进行对比学习，将图像与文本映射到同一表示空间。
受到 LLM 迅猛发展的启发，作者探讨了如何利用 LLM 更强的语言理解能力与广泛的世界知识来进一步增强 CLIP，尤其是在处理冗长且结构复杂的描述文本时的表现。为此，他们提出了一种高效的微调框架，
将 LLM 嵌入到预训练的 CLIP 中
，而训练成本几乎与常规的 CLIP 微调相当。具体而言，该方法首先将 LLM 转化为适配 CLIP 场景的「嵌入化」形式，随后通过一个轻量级适配器将其与预训练的 CLIP 视觉编码器耦合，该适配器仅需在数百万规模的图像 — 文本对上进行训练。
借助这一策略，作者在无需大规模重新训练的前提下，相较于 EVA02、SigLIP-2 等当前最先进的 CLIP 变体，取得了显著的性能提升。经 LLM 增强后的 CLIP 在多种下游任务上均表现出稳定改进，包括线性探测分类、同时支持短文本与长文本（英文及多语言）的零样本图像 — 文本检索、零样本与有监督的图像分割、目标检测，以及作为多模态大模型基准中的分词器使用。
论文 3：Model Change for Description Logic Concepts
作者：Ana Ozaki, Jandson S Ribeiro
机构：奥斯陆大学、卡迪夫大学
论文链接：暂无
该论文虽已获奖，但目前还未公开发布。
论文 4：Causal Structure Learning for Dynamical Systems with Theoretical Score Analysis
作者：Nicholas Tagliapietra, Katharina Ensinger, Christoph Zimmer, Osman Mian
机构：博世 AI 中心团队、德国达姆施塔特工业大学、德国医学 AI 研究所 IKIM 等
论文链接：https://arxiv.org/pdf/2512.14361
现实世界中的系统通常按照其内在的因果关系在连续时间中演化，但这些动态机制往往是未知的。现有用于学习此类动态的方法通常存在两类问题：要么对时间进行离散化处理，在面对不规则采样数据时性能较差；要么忽略了系统背后的因果结构。
为此，本文提出 CADYT，一种用于动力系统因果发现的新方法，可以同时解决上述两大挑战。不同于当前主流将问题建模为离散时间动态贝叶斯网络的因果发现方法，该研究建模基础是基于差分的因果模型，这种模型对连续时间系统的刻画只需更弱的假设，更符合真实系统的连续演化特性。
CADYT 采用精确的高斯过程推断来建模连续时间动力学，从而在建模层面更贴近系统的真实生成过程。在算法设计上，本文提出了一种可落地的实现方案：通过结合马尔可夫条件与最小描述长度（MDL）原则，采用贪心搜索策略来识别系统的因果结构。
CADYT 能够从连续时间动力系统的轨迹数据中，发现未知的因果结构。
实验结果表明，无论是在规则采样还是不规则采样的数据场景下，CADYT 都显著优于现有的先进方法，能够恢复出更接近真实底层动力学机制的因果网络结构。
论文 5：High-Pass Matters: Theoretical Insights and Sheaflet-Based Design for Hypergraph Neural Networks
这篇获奖论文同样还没有放出论文链接，但从附录论文中，我们获悉了作者机构信息。
作者：Ming Li, Yujie Fang, Dongrui Shen, Han Feng, Xiaosheng Zhuang, Kelin Xia, Pietro Lio
机构：浙江师范大学、香港城市大学、南洋理工大学、剑桥大学
论文链接：暂无
参考链接：https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com