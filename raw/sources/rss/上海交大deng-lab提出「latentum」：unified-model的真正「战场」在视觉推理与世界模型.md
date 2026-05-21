---
title: "上海交大DENG Lab提出「LatentUM」：Unified Model的真正「战场」在视觉推理与世界模型"
date: 2026-04-13
source: "机器之心"
url: "https://mp.weixin.qq.com/s/QVnCUrJZcfN7SdPuOVRHwQ"
rss_id: "2651027445_2"
---
本文作者团队来自上海交通大学 DENG Lab 与清华大学、加州大学圣地亚哥分校（UCSD）。该研究由博士生金佳纯、准博士生周泽同共同完成，指导教师为邓志杰、朱军、刘鹏飞、张昊、杨啸老师。DENG Lab 隶属上海交通大学，致力于高效、跨模态生成模型的研究。
过去一段时间，生成理解统一模型（Unified Model）经常被理解成一种「既能看懂图、又能生成图」的多模态通用系统。
但如果统一模型的价值只停留在「会看会画」，那它和把 VLM、T2I 简单拼在一起并没有本质区别。真正更值得追问的问题是：
模型能不能把自己生成出的视觉内容直接纳入推理闭环，让图像不只是输出结果，而是推理、规划乃至世界建模过程中的中间思维状态？
近期，
上海交通大学 DENG Lab 提出的 LatentUM
尝试去回答上述问题。
从结果上看，这条路线确实带来了实际性能收益：LatentUM 在 GenEval 上最高达到 0.92，在 Visual Spatial Planning 任务上准确率最高达到 0.99，在导航世界模型任务上，LatentUM 在 NWM 评测上取得 ATE 1.34、RPE 0.34，超过近期 Transfusion-RAE 等统一世界模型基线。
这说明，
共享语义 latent space 并不只是一个更「统一」的建模方案，它确实有机会把视觉生成变成推理与建模过程中的有效中间变量。
论文地址：https://arxiv.org/pdf/2604.02097
代码地址：https://github.com/SJTU-DENG-Lab/LatentUM
模型仓库：https://huggingface.co/collections/SJTU-DENG-Lab/latentum
重新思考 Unified Model 的价值与存在的问题
现有多数生成理解统一模型 (Unified Model) 的目标，仍然停留在打造一个「能看又能画」的多模态六边形战士，但它们往往在理解和生成两端都不及最好的 specific model。
LatentUM 想推动大家重新思考这个方向的目标函数：Unified Model 的真正潜力，并不只是把视觉理解和视觉生成装进同一个框架里，而是在模态交错生成中把生成出的视觉内容真正纳入 reasoning loop，形成 cross-modal chain-of-thought，进一步服务于复杂视觉推理、规划乃至世界建模。
换句话说，Unified Model 最值得做的事，
是让模型在推理过程中真的把图像当作中间思维载体来使用，而不是把「会看会画」本身当作终点。
图 1：LatentUM 在带有自我反思的文生图任务、视觉空间规划任务、世界建模任务上都超越了基线模型。
基于这一观察，LatentUM 给出的核心思路是：
不再让视觉生成服务于像素空间，而是让模型直接生成与语言共享语义空间的离散 visual semantic tokens。
这样一来，模型生成出来的视觉内容，就可以被模型自己直接读取、继续推理，而不必再经过「像素中转」。
换句话说，LatentUM 想实现的，不是一个简单把理解和生成拼在一起的 Unified Model，而是一个真正基于 shared semantic latent space 运作的 latent-space unified model。
当前大部分 Unified Model 通常把理解和生成建立在两套不同的视觉表示上：理解侧使用与语言对齐的语义特征，生成侧使用面向像素重建的 VAE 特征。结果就是，模型一旦想基于自己生成的图继续思考，就不得不先把生成特征解码成像素，再重新编码回理解特征。这个过程不仅低效，也会引入额外的 codec bias，造成跨模态错位，限制图文交错推理能力。
也正因为如此，很多现有统一模型虽然「既能看又能画」，但在真正需要视觉中间态参与推理的任务上，并没有把 unified 的优势发挥出来。
LatentUM 的模型设计
图 2：LatentUM 架构的三个关键设计。
围绕这一目标，LatentUM 主要包含三个关键设计。
首先是 Model Behavior Aligned Quantization（MBAQ）。
由于连续语义特征维度高，难以直接进行生成建模。LatentUM 选择先将其量化为可自回归预测的离散 visual semantic tokens。传统视觉离散化方法通常追求还原像素或原始特征，但对 Unified Model 来说，更关键的是量化后的 token 能否继续支撑视觉理解与语言推理。
因此，MBAQ 不是优化重建误差，而是让量化后的视觉特征尽可能保留原始视觉特征所对应的 VLM 的理解行为。
这意味着量化器会优先保留那些真正影响视觉理解结果的语义信息，主动舍弃对预测贡献有限的低层像素细节。相比关注特征还原，MBAQ 更关注量化后的 token 是否仍然能够支持原有的视觉问答与语言推理能力。
这对于 Unified Model 尤其关键，因为只有当生成出的 visual token 仍然能够被模型自己稳定理解时，它们才能真正作为中间思维状态参与后续的跨模态推理。
第二是 Mixture-of-Modal Experts（MoME）。
统一建模并不意味着所有模态都必须完全走同一套参数路径。为降低视觉理解与视觉生成之间的训练干扰，LatentUM 将理解和生成分成两条并行分支，它们共享 self-attention，但在其余部分适度解耦。
这样既保留图文之间的信息流动，也减少了不同目标之间的负迁移。虽然生成理解两套参数解耦，但模型生成的视觉 token 可以重新被理解分支直接读取并缓存进上下文，从而继续参与后续推理。
第三是 Decoupled Pixel Decoder。
虽然 LatentUM 的离散语义特征不再围绕像素重建来训练，但作者们发现离散语义特征中仍然保有大部分的像素信息，可以通过一个独立的 diffusion decoder 将其恢复成像素。
这样一来，像素空间在 LatentUM 中不再是内部推理的必经桥梁，而只是一个按需调用的可视化接口，从而避免模型为了像素保真而牺牲统一语义空间本身的表达能力。
实验结果
基于上述设计，论文实现了 LatentUM-Base。模型以 InternVL3.5-4B 为初始化底座，直接继承其成熟的视觉理解能力，并在图文数据上进行训练来补足视觉生成分支，总训练成本大约是 6000 GPU hours。
实验结果首先验证了这种 shared semantic latent space 不会显著损害视觉理解能力。论文在多项理解基准上评估 LatentUM-Base，发现当输入图像被量化成离散语义 token 后，视觉理解的能力依旧在线。
这说明
MBAQ 学到的 token 并不是简单压缩结果，而是真的保留了足够支撑视觉理解的语义结构。
图 3：LatentUM-Base 的视觉理解能力与基线方法的对比。
在视觉生成方面，得益于视觉 token 的语义对齐，LatentUM-Base 同样展现出了很强的 instruction-following 能力。在 GenEval 上，LatentUM-Base 达到 0.85，已经超过大多数已有 Unified Model，而且这一结果是在相对有限的数据规模下取得的。
这说明
共享语义空间让模型更容易把文本条件中的语义约束真正落实到视觉 token 上。
图 4：LatentUM-Base 的文生图样例展示。
除了基本的 text-to-image generation，LatentUM 还能利用自己的理解能力反过来提升生成。
论文在 post-training 阶段探索了 generate-then-reflect 的范式：先生成，再让模型基于自己的理解分支对结果做「自检」，并通过强化学习进一步优化。仅基于自我理解 reward，LatentUM-Vis-Gen 在 GenEval 上从 0.85 提升到 0.87；如果进一步使用外部 pixel-level reward，最终可以达到 0.92，在统一模型中取得新的最好结果。
在更强调语义判断稳健性的 GenEval2 上，LatentUM 也显著领先已有 Unified Model。
图 5：LatentUM 在 GenEval bench 上超越了 Unified Model 的基线。
为了验证共享语义 latent space 是否真的能支撑复杂的图文交错推理，论文进一步在 Visual Spatial Planning 任务上做了系统评测。
这个任务要求模型在迷宫环境中进行规划，不仅要读懂当前视觉状态，还要在推理过程中基于采取的 action 持续更新下一个未来状态。
结果上，LatentUM-Vis-Plan 在粗粒度中间状态的设定下平均准确率达到 0.85，在细粒度中间状态的逐步交错推理的设定下达到 0.99，显著超过 ThinkMorph 等需要经过像素空间中转的方法。
这说明，
如果视觉内容本身就处在统一语义空间里，那么「边想边看、边看边想」并不是概念展示，而是可以带来性能增益的实际能力。
LatentUM 在 VSP 任务上的 demo。
图 6：LatentUM 在 Visual Spatial Planning bench 上大幅超越了各类跨模态推理基线。
最后，论文还进一步探索了 LatentUM 在 world modeling 中的潜力。
在导航世界模型设定下，LatentUM-WM 在 NWM 评测上取得 ATE 1.34、RPE 0.34，超过了近期 Transfusion-RAE 这类统一世界模型基线。
这说明
shared semantic latent space 也许不仅是连接理解和生成的一种方法，也可能是连接推理与世界建模的一条自然路径。
LatentUM 在 navigation world modeling 任务上的 demo。
从更大的角度看，LatentUM 想推动大家重新思考 Unified Model 的目标。它不应该只是把「看」和「画」放进同一个模型里，而应该成为一个能够在共享语义空间中进行交错生成、反思、规划与预测的通用多模态系统。
对 Unified Model 来说，真正重要的，
也许从来不是「既会看又会画」，而是能不能在共享语义空间中用各种模态持续地生成、推理。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com