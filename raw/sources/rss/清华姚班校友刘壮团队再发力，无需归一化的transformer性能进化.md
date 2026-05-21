---
title: "清华姚班校友刘壮团队再发力，无需归一化的Transformer性能进化"
date: 2026-01-22
source: "机器之心"
url: "https://mp.weixin.qq.com/s/9vagwvWWkZcbe7lkCetDJQ"
rss_id: "2651013413_2"
---
编辑｜陈陈、冷猫
刘壮带队的无需归一化 Transformer 又有新的版本了。
一直以来，在 Transformer 架构里，LayerNorm 几乎是标配，但它也有明显问题：比如计算和访存成本高，尤其在大模型推理阶段。
因此，「无归一化（Normalization-Free）」Transformer 成为研究者探索的一个长期目标，但一直卡在两个难点上：训练不稳定，以及性能明显不如带归一化的模型。
而这篇新论文提出了一种非常简单的新激活层 Derf（Dynamic erf），让「无归一化（Normalization-Free）」的 Transformer 不仅能稳定训练，还在多个设置下性能超过了带 LayerNorm 的标准 Transformer。
论文标题：Stronger Normalization-Free Transformers
论文链接：https://arxiv.org/pdf/2512.10938
Github 链接：https://github.com/zlab-princeton/Derf
刘壮本人也在 X 账号上分享了这一成果。他表示，这是一篇关于更强无归一化 Transformer 的新论文：研究团队提出了 Derf（Dynamic erf），一种结构极其简单的逐点（point-wise）层。借助 Derf，完全不依赖归一化层的 Transformer 不仅能够稳定训练，而且
在实
际性能上
已经可以超越传统依赖 LayerNorm 等归一化机制的模型
。
这一结果表明，长期被视为标配的归一化层，并非构建高性能 Transformer 的唯一选择。
今年早些时候，刘壮、何恺明、LeCun 等人已经在题为《无需归一化的 Transformer》的论文中表明，Dynamic Tanh（DyT）函数可以取代 Transformer 中的归一化层。
Derf 进一步发展了这一想法。
和 DyT 类似，Derf 是一种不依赖统计量的逐点（point-wise）层，不需要使用激活分布的统计信息。它本质上只是一个带有少量可学习参数的平移并缩放后的高斯误差函数（Gauss error function），可以直接替换你原本使用 LayerNorm 或 RMSNorm 的位置。
由于其结构极其简单、效果稳定且性能更强，Derf 为构建无归一化（normalization-free）的 Transformer 架构提供了一种非常具有实践价值的选择。相关代码已开源。
超越归一化层的逐点函数
本文的目标正是寻找性能超越归一化层的逐点函数，以推动更强的 Transformer 架构发展。
研究团队首先系统性地研究了逐点函数的内在性质如何影响训练动态和最终性能，重点关注四个基础且具有代表性的属性：
零中心性（zero-centeredness）、有界性（boundedness）、中心敏感性（center sensitivity）以及单调性（monotonicity）
。
实验发现，只要一个函数同时满足这四个条件，模型训练过程就会更加稳定，并且通常能取得不错的性能表现。
这一分析筛选出了一类可作为有效归一化替代的逐点函数，并总结出一套面向无归一化 Transformer 的明确设计原则。
最终，Dynamic erf（Derf） 作为一种结构极其简单但性能最优的函数设计脱颖而出。
总体而言，本研究表明：只要设计得当，逐点函数不仅可以替代归一化层，甚至能够在性能上超越它们。
最优函数设计：Derf
在函数搜索过程中，我们发现 erf (x) 是性能最优的逐点函数。误差函数 erf (・) 与标准高斯分布的累积分布函数（CDF）密切相关。具体而言，erf (x) 的定义如下所示。
在本文的设计中，erf (x) 进一步引入了可学习参数，并由此提出 Derf（Dynamic erf）。对于输入张量 x，Derf 层的形式如公式（10）所示，其中位移参数 s 和缩放参数 α 都是可学习的标量，而 γ 和 β 是可学习的逐通道向量。
在将 Derf 集成到基于 Transformer 的架构中时，研究团队采用一一对应替换的方式：将模型中的各个归一化层直接替换为相应的 Derf 层。具体来说，包括
注意力层前（pre-attention）、前馈网络前（pre-FFN） 以及 最终的归一化层
，均被 Derf 所取代，从而保证 Derf 在整个模型中的一致性使用。
实验结果
研究团队在多种基于 Transformer 的架构以及少量其他现代模型上，系统评估了 Derf 的有效性。在使用相同训练配置的前提下，Derf 的表现可以持平甚至超过传统归一化层，并且在各个领域中都稳定优于 DyT。
简而言之：
1. ImageNet（ViT-B / ViT-L）：Top-1 准确率更高
2. 扩散 Transformer（DiT 系列）：FID 更低
3. 基因组任务（HyenaDNA、Caduceus）：DNA 分类准确率更高
4. 语音（wav2vec 2.0）：验证集 loss 更低
5. 语言模型（GPT-2）：整体表现与 LayerNorm 持平，明显优于 DyT
Vision Transformer（ViT）
研究团队在 ImageNet-1K 数据集上训练了 ViT-Base 和 ViT-Large 模型，分别采用 LayerNorm（LN）、DyT 和 Derf 进行对比。
Ima
geNet-1K
上的监督分类准确率。
在不同模型规模下，Derf 的 Top-1 准确率均高于 LayerNorm（LN）和 DyT，充分证明了其在 ViT 架构中的有效性。
Diffusion Transformer（DiT）
研究团队在 ImageNet-1K 上训练了三种 DiT 模型，并在 LN、DyT 和 Derf 下保留归一化层的仿射参数用于类别条件化。训练完成后，使用 ImageNet 「参考批次」评估 FID 分数，以衡量图像生成质量）。
ImageNet 图像生成质量（FID）。FID 越低表示图像生成质量越高。
结果显示，Derf 在所有 DiT 模型规模下的 FID 都低于 LayerNorm 和 DyT，进一步验证了其在扩散 Transformer 中的有效性。
语音模型
研究团队在 LibriSpeech 数据集上训练了两个 wav2vec 2.0 Transformer 模型，用于语音表示学习。表 10 报告了最终的验证集损失（validation loss）。结果显示，与 LayerNorm 和 DyT 相比，Derf 在不同模型规模上均实现了更低的验证损失，说明其在语音任务中的有效性。
LibriSpeech 数据集上的语音预训练验证损失（validation loss）。
结果显示，Derf 在两个 wav2vec 2.0 模型上均实现了比 LayerNorm 和 DyT 更低的验证损失，表明其语音表示能力更强。
DNA 模型
在长序列 DNA 建模任务中，研究团队对 HyenaDNA 和 Caduceus 模型进行了预训练，使用人类参考基因组（GRCh38.p13）。模型评估在 GenomicBenchmarks 数据集上进行，并报告所有子任务的平均准确率。
如表所示，Derf 在性能上超过了 LayerNorm、RMSNorm 以及 DyT，显示了其在基因组序列建模任务中的稳健性与泛化能力。
DNA 分类准确率（GenomicBenchmarks 数据集）表中结果为各子任务的平均准确率。每个模型均使用其默认归一化层（HyenaDNA 使用 LayerNorm，Caduceus 使用 RMSNorm）。
结果显示，Derf 在所有模型中均优于原有归一化层及 DyT，表明其在 DNA 模型上的有效性和稳健性。
语言模型
研究团队在 OpenWebText 数据集上对 GPT-2（124M）模型进行预训练，并在表 12 中报告验证集损失。对于 DyT 和 Derf，还对可学习参数 α 进行了额外微调。
GPT-2 在 OpenWebText 数据集上的验证集损失。Derf 的表现可与 LayerNorm（LN）匹配，同时在验证集损失上明显低于 DyT。
实验结果显示，Derf 在性能上可与 LayerNorm（LN）持平，同时明显优于 DyT。
这表明：一个足够简单的逐点层，不仅可以「替代」归一化层，还能让 Transformer 变得更强，而不只是不变差。
Derf 只是「拟合得更狠」吗？出人意料地，并不是。当研究团队在 eval 模式下、对训练集本身测量训练损失时，结果是：基于归一化（Norm）的模型训练损失最低，Derf 训练损失反而更高。但在测试集上，Derf 的表现更好。
这说明一个关键事实：Derf 的优势并不来自更强的拟合能力，而主要来自更好的泛化能力。
一句话总结：
Derf 是一种简单实用的、可用于更强正则化自由 Transformer 的即插即用层。
更多信息，请参阅原论文。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com