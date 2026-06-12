---
title: "视觉语言 ViT 的细粒度能力被低估了吗？CVPR 2026 UniRefiner：也许只是特征图太“脏”"
date: 2026-06-10
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/R7Pi6hgPWAXKJcNmEuJveA"
rss_id: "2247661823_1"
---
近年来，视觉语言模型（Vision-Language Models, VLM）在图文理解、零样本识别和开放词汇感知上表现越来越强。随着模型参数规模和图文预训练数据不断增大，很多人自然会期待：这些大规模预训练视觉编码器也应该具备更强的细粒度感知能力。但在开放词汇语义分割、深度估计等密集预测任务（dense prediction tasks）中，许多模型的表现却常常不如预期。这是否意味着这些视觉编码器天然不擅长细粒度空间感知？
CVPR 2026 工作
UniRefiner
给出了一个不同的答案：
很多大规模 VLM 并非没有细粒度感知潜力，而是其视觉编码器输出的 feature map 中存在高比例、模式复杂的伪特征，掩盖了模型原有的空间感知能力。
换句话说，问题不一定是“模型不会看细节”，而可能是：
ViT 输出的 feature map 太“脏”了。
论文：https://arxiv.org/abs/2605.19622
项目主页：https://congpeiqiu.github.io/UniRefiner/
代码 (已开源)：https://github.com/CongpeiQiu/UniRefiner
机构：西安交通大学、中国科学院大学、哈尔滨工业大学（深圳）、深圳河套学院
SigLIP2-So400M and EVA-CLIP-8B noisy feature maps and UniRefiner refinement dynamics
图 1：SigLIP2-So400M 和 EVA-CLIP-8B 的 PCA feature-map dynamics。左侧为原图，中间为原始模型的 noisy feature map，右侧展示 UniRefiner refinement 过程中空间结构逐渐变干净的动态变化。
高范数 token 只是冰山一角
ViT 中的 feature artifacts 并不是一个全新问题。此前
Vision Transformers Need Registers
已经从 high-norm outlier 的角度指出，ViT feature map 中会出现高范数异常 tokens，而 register tokens 可以缓解这类问题。但 UniRefiner 进一步指出：
高范数 tokens 只是最显眼的一小部分。
对于细粒度感知任务来说，仅用范数异常来定义 artifact 并不充分。一个 token 即使范数正常，甚至包含很强的语义信息，只要它不再对应自身所在的空间位置，就会破坏下游任务所需要的细粒度信息。因此，UniRefiner 更关注的是它是否仍然保留 location-aligned semantics，也就是：
每个 visual token 是否仍然忠实表达自己所在空间位置的语义。
基于这一判据，UniRefiner 将伪特征归纳为三类典型形式：
Fixed Pattern
：这类 tokens 在不同图像中呈现高度相似的固定模式，更多反映模型内部的非语义偏置，而不是当前图像局部区域的内容。
Global Proxy
：这类 tokens 不再主要编码自身位置的局部证据，而是承载更全局的场景或图像级语义，导致局部 token 退化为全局信息的代理。
Attention Hijackee
：这类 tokens 的局部语义受到 attention 信息流主导，被更强的前景或邻近语义覆盖，从而逐渐失去自身空间位置对应的表征。
这些模式来源不同，但共同导致一个结果：
feature map 不再是一张可靠的空间画布。
Fixed Pattern, Global Proxy, and Attention Hijackee tokens
图 2：UniRefiner 将破坏 location-aligned semantics 的伪特征归纳为 Fixed Pattern、Global Proxy 和 Attention Hijackee 三类。高范数 tokens 只是其中最容易被观察到的一小部分。
UniRefiner：让 register tokens 显式承接伪特征
UniRefiner 的思路很直接：
image tokens 应该保留正常空间语义，register tokens 应该承接伪特征。
已有的 register 类方法更多依赖模型在长时间预训练中自然学会这种分工。UniRefiner 则直接给出显式优化压力：先识别哪些 tokens 仍然是正常的空间 tokens，哪些 tokens 是污染 feature map 的伪特征；再通过 contrastive register 目标进行特征分流。
可以简单理解为：
image tokens → 对齐正常、位置一致的视觉 token
register tokens → 吸收污染 feature map 的伪特征信号
同时，对比学习目标进一步拉开 image tokens 和 register tokens 的表征空间，强化两者分工。这样，原本混叠在图像区域的伪特征被推向 register tokens，而 image tokens 则被恢复为编码对应图像区域信息的空间表征。
这也是 UniRefiner 的关键：
它不是重新训练一个大模型，也不是等待 register tokens 的使用方式自然涌现，而是通过显式优化目标，让已有预训练 ViT 快速学会“自清理”。
Comparison of different register designs
图 3：不同 register 形式的比较。没有 register tokens 时，伪特征容易继续污染 image tokens；无约束 register tokens 在伪特征占比较高时难以形成稳定分工；UniRefiner 通过显式 contrastive register 目标，让 register tokens 主动承接伪特征信号。
不只是指标提升：开放世界语义开始落到像素上
UniRefiner 的一个重要特点是轻量。
它不是重新训练一个大模型，而是作为 post-hoc refinement 方法，对已有预训练 ViT 做少量训练。论文中仅使用约
5k images
和少数训练 epoch，就能 refine EVA-CLIP-8B、InternViT-6B 等大规模模型。
结果也非常直接：
refined EVA-CLIP-8B 在 ADE20K 上达到 51.9% mIoU，相比原模型提升 +9.4 个百分点，并超过 DINOv2 的 49.1%。
在视觉中心 dense prediction 任务上，UniRefiner 对不同类型的 ViT 都带来稳定提升：不仅是 EVA-CLIP-8B，DINOv2、CLIP、InternViT 和 SigLIP2 也能在语义分割、深度估计等任务上受益。
Vision-centric dense prediction results
图 4：视觉中心 dense prediction 结果。UniRefiner 在 ADE20K、CityScapes、Pascal VOC 和 NYUd 等任务上稳定提升多种 ViT backbone 的空间表征质量。
在更依赖语言对齐能力的 zero-shot semantic segmentation 中，这种收益同样明显。尤其是 EVA-CLIP-8B，经过 UniRefiner 后在多个 zero-shot 分割设置下显著提升，最高接近
+22 个百分点
。
Vision-language zero-shot dense prediction results
图 5：zero-shot semantic segmentation 结果。UniRefiner 在保留视觉语言模型开放词汇能力的同时，让 dense feature map 更适合定位语义区域。
但更有意思的是，这种提升并不只体现在几个分割指标上。
许多大规模 VLM 视觉编码器在海量图文预训练中已经沉淀了丰富的开放词汇语义和视觉概念知识。但在原始 feature map 中，这些知识往往更像是图像级语义，并不总能稳定落到对应的局部空间位置上。对于 dense prediction tasks 来说，这正是关键瓶颈：模型知道“这是什么”，并不等于每个 token 都知道“它在哪里”。
UniRefiner 的作用，正是清理视觉编码器 feature map 中的伪特征，让图文预训练中已有的开放世界语义更好地回到局部空间位置上。因此，在一些开放场景中，我们可以看到更有意思的现象：经过 refinement 后，模型不仅在 ADE20K 等标准数据集上取得更高 mIoU，也能定位复杂城市场景中的特定建筑、特定角色形象，以及遥感图像中的细粒度目标。
UniRefiner 并不是给视觉编码器灌入新的知识，而是让图文预训练中已有的开放世界语义，重新找到它在图像中的位置。
Vision-language zero-shot qualitative visualization
图 6：需要世界知识的 vision-language zero-shot 可视化。图中展示细粒度 visual representations 与 text prompt representations 之间的相似度热力图，用于观察开放词汇语义能否被定位到对应的空间区域。
从“脏特征图”到“干净空间画布”
UniRefiner 的可视化结果也很直观。
在原始大规模 ViT 中，某些 tokens 不再对应真实图像结构：背景区域可能出现固定模式，局部区域可能变成全局语义代理，前景强语义也可能通过 attention 扩散到周围 tokens。
经过 UniRefiner refinement 后，image tokens 被重新拉回正常空间语义，register tokens 承接伪特征信号，feature map 变得更加干净，空间结构也更加清晰。这不是简单地“平滑”特征，而是重新分配 token 的职责：
image tokens → 负责可靠的空间表征
register tokens → 负责承接伪特征
PCA dynamics across six ViT foundation models
图 7：不同 ViT foundation models 的 PCA feature-map dynamics。每个模型左侧为原始 vanilla feature map，右侧为 UniRefiner refinement 过程中的动态变化；可以看到 UniRefiner 在不同架构和尺度的 ViT 上都能逐步恢复更清晰的空间结构。
写在最后
UniRefiner 的意义不只是提升几个 dense prediction 指标，而是提醒我们重新思考一个问题：
VLM 视觉编码器的细粒度能力弱，究竟是能力本身不足，还是特征图中的伪特征遮住了它？
过去，我们可能低估了大规模 VLM 视觉编码器的细粒度潜力。UniRefiner 通过系统分析高范数 token 之外更广泛的伪特征，并用显式 contrastive register 目标将其分流，说明已有多模态视觉基座中仍有大量可释放的空间感知潜力。
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向