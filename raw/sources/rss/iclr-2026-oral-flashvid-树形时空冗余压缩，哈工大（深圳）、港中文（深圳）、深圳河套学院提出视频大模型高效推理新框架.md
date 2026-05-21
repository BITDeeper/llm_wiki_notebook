---
title: "ICLR 2026 Oral | FlashVID: 树形时空冗余压缩，哈工大（深圳）、港中文（深圳）、深圳河套学院提出视频大模型高效推理新框架"
date: 2026-04-02
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/zrViJ_S9ZY5C9-69vD1vuA"
rss_id: "2247658249_1"
---
当前视频大模型（VLLM）需要处理大量的视觉 Tokens，例如，LLaVA-OneVision、LLaVA-Video 需要处理的视觉 token 序列长度分别为 32 x 196 =
6272
、64 x (169 + 1) =
10,880
，因此推理效率特别低。一个主流的高效推理方案是
视觉 Token 压缩
，利用视觉信息内在的冗余度，进行 Token 挑选或合并，保留关键的视觉信息，在加速的同时尽可能保持模型原有的性能。
然而，现有的加速框架通常没有考虑视频的
动态性
，通常将时间冗余度限制在固定的空间位置（如 PruneVID），由于视频的动态性质，相同的视觉元素会随着时间的演进经历大小、方向、属性上的变化，因此导致时空冗余压缩效果不佳。为了解决这个问题，我们提出了 FlashVID：
核心在于树形时空冗余压缩模块（TSTM），基于相邻帧的视觉特征相似性建立时空冗余树，同时对视频的时间和空间冗余进行建模，然后将每棵冗余树合并为单个 token 表示完成 Inter-frame Token 合并；
为了防止合并信息量丰富的视觉 Tokens，在时空冗余压缩前我们使用基于注意力和多样性的 Token 挑选方法（ADTS）完成 Intra-frame Token 挑选。
FlashVID 将 ADTS 和 TSTM 有机结合，取得了极好的性能。
FlashVID 的优势在于
极好的性能
以及
通用性
。作者在 5 个主流视频理解数据集（VideoMME、EgoSchema、LongVideoBench、MVBench、MLVU）和 3 个代表性视频大模型（LLaVA-OneVision、LLaVA-Video、Qwen2.5-VL）以及不同的 Token 保留率上进行了大量实验，结果表明，FlashVID 取得了
SoTA 性能
，在所有设定中均远超现有 SoTA 加速框架（FastV、VisionZip、PruneVID、FastVID），特别地，在 LLaVA-OneVision 上，仅保留 10% 视觉 Tokens，FlashVID 保留了模型
99.1%
的性能，并取得
6.3x
预填充、
2.1x
Time-To-First-Token（TTFT）加速。
除此之外，FlashVID 可作为一个
即插即用
的模块， 在相同计算预算下，使视频大模型处理更多的视频帧，例如：FlashVID 可以使得 Qwen2.5-VL 处理
10x
视频帧，相对性能提升
8.6%
。
论文标题
： FlashVID: Efficient Video Large Language Models via Training-free Tree-based Spatiotemporal Token Merging
作者团队
：Ziyang Fan, Keyu Chen, Ruilong Xing, Yulin Li, Li Jiang, Zhuotao Tian
机构
：哈尔滨工业大学（深圳），香港中文大学（深圳），深圳河套学院
论文地址
：https://arxiv.org/abs/2602.08024
代码地址
：https://github.com/Fanziyang-v/FlashVID
研究背景：时空冗余压缩的困境
现有视频大模型加速框架（如 PruneVID）通常将时间和空间冗余
独立
进行压缩，忽略了视频内在的时空关联性，导致性能下降；此外，现有方法（TTM）通常将时间冗余度限制于相同的空间位置上，然而由于视频的动态性，相同的视觉元素会随着时间演进，在空间位置、大小、外观、属性产生变化，因此这种严格的空间位置限制条件是不可靠的。
如上图所示，(a) 表示在相同合并阈值下，使用 TSTM 和 TTM 合并的视觉 Tokens 数量变化曲线，由于 TSTM 没有严格的空间位置限制，可以灵活地捕捉时空关联，合并的视觉 Tokens 特征相似度显著高于 TTM，说明了 TSTM 时空冗余压缩的有效性。此外，(b) 和 (c) 展示了 TTM 和 TSTM 的 Token 合并模式对比，TTM 在合并是可能会引入非相关的视觉信息，影响最终的视频表征，因此压缩性能不佳。
FlashVID：结合 ADTS 和 TSTM，实现极致压缩
TSTM：树形时空冗余压缩
视频展现出在空间位置、大小、外观等方面的动态性，使时空冗余压缩存在显著挑战，为了解决这个问题，我们提出树形时空冗余压缩机制（TSTM），将视频冗余建模为时空冗余树。
构造时空冗余树
：给定视频特征
，TSTM 渐进式构建时空冗余树，基于计算相邻帧的特征相似度矩阵以及一个预定义的合并阈值
：
，每个 Token 与前一帧特征最相似的 token 连接，逐步构建得到时空冗余树
，有效捕捉了细粒度的时间变化，避免合并不相似的 tokens。
压缩时空冗余度
：TSTM 将每棵时空冗余树压缩为一个 token 表示（平均树上所有视觉特征）：
，并保留于根节点。
ADTS：基于注意力和多样性的 Token 挑选
尽管 TSTM 能有效压缩视频的时空冗余度，但是可能会导致视觉信息丰富的视觉 tokens 丢失。为了缓解这个问题，我们进一步引入基于注意力和多样性的 Token 挑选方法，识别时空中信息量丰富的 tokens，同时确保视觉特征的多样性。具体来说，我们将 token 挑选方法视为最大最小多样性问题（Max-Min Diversity Problem，MMDP），首先计算逐帧余弦距离矩阵：
[CLS] 注意力矫正
：我们使用视觉编码器的 [CLS] 注意力，对于没有显式的 [CLS] token 编码器（如 SigLIP），从其注意力矩阵中推导：
，
为每个 token 获取到其他 tokens 的注意力平均值，[CLS] 注意力矫正项关注与每个帧的 in。
事件相关度矫正
：为了识别与当前视频事件最相关的 tokens，我们引入事件相关度矫正项，首先计算
，然后计算事件相似度矩阵：
最后，时空中信息丰富的 tokens 通过 MMDP 问题求解：
algorithm
如算法 1 所示，FlashVID 首先使用 ADTS 模块挑选出每帧信息丰富的视觉 tokens，然后使用 TSTM 模块进行时空冗余压缩。
实验结果：全面领先的 Training-free 加速框架
FlashVID 在 5 个主流视频理解数据集以及 3 个代表性的视频大模型以及 4 种不同的 token 保留率上进行评估，并取得了 SOTA 性能。
LLaVA-OneVision 和 LLaVA-Video
在 VideoMME、EgoSchema、LongVideoBench、MVBench 数据集上，FlashVID 在4 种不同的 Token 保留率一致取得 SOTA 性能，特别地，在 LLaVA-OneVision 上的 15%、20%、25% 保留率上平均性能超过原始模型（100% 保留率），在 10% 保留率下，仍然保持 99.1% 的性能。类似地，在 LLaVA- Video 上也取得了 SOTA 性能。
Qwen2.5-VL
为了证明 FlashVID 的泛化性，研究者在与 LLaVA 系列模型有显著区别的 Qwen2.5-VL 上进行了实验，实验表明，FlashVID 一致取得了 SOTA 性能。
Qwen2.5-VL
研究者还探索了在固定计算量的条件下，结合视觉 Token 压缩框架，使视频大模型的处理更多的视频帧数，结果表明，FlashVID 可以使得 Qwen2.5-VL 处理
10x
视频帧，相对性能提升
8.6%
。
效率实验
在 LLaVA-OneVision 64 帧的设定下，研究者在 VideoMME 数据集上进行了效率实验，FlashVID 在 10% 的保留率下，使 LLaVA-OneVision 取得
6.3x
预填充加速、
2.1x
Time-To-First-Token（TTFT）加速，相对于 FastVID 而言，FastVID 在相似的性能下（98.5%）， 取得了
4.0x
预填充加速、
1.8x
TTFT 加速，证明了 FlashVID 可以实现视频大模型的高效推理。
总结与价值
研究者通过对视频大模型时空冗余压缩的观察，发现现有加速框架没有考虑时空关联性，并且通常将时间冗余度限制于相同的空间位置，导致性能下降，为了解决这个问题，提出了一种新颖的视频大模型加速框架 FlashVID，并取得了极好的压缩性能以及推理效率。
论文的贡献可以总结为：
揭示现有加速方法的时空冗余压缩的局限性
：即没有考虑时空关联性以及时间冗余度限制于相同的空间位置。
提出了 FlashVID 框架
：有机结合帧内 token 挑选方法 ADTS 和帧间时空冗余压缩机制 TSTM，提供了紧密且信息量丰富的视频特征表示。
极好的效率和性能
：在主流的视频理解数据集、不同视频大模型上取得了一致超过现有 SOTA 加速方法，同时能够在计算资源受限的条件下，处理更多的视频帧数，提升视频大模型的性能。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向