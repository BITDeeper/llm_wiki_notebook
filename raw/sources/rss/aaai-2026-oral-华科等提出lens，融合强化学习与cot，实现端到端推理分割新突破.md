---
title: "AAAI 2026 Oral 华科等提出LENS，融合强化学习与CoT，实现端到端推理分割新突破"
date: 2025-12-04
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/SHp9r7MKy4gUm_RjzHmULw"
rss_id: "2247648576_1"
---
论文标题
: LENS: Learning to Segment Anything with Unified Reinforced Reasoning
作者
: Lianghui Zhu, Bin Ouyang, Yuxuan Zhang等
机构
: 华中科技大学、vivo
论文地址
: https://arxiv.org/abs/2508.14153
代码仓库
: https://github.com/hustvl/LENS
项目主页
: https://hustvl.github.io/LENS/
AAAI 2026的录用论文中，来自华中科技大学、vivo的研究团队联合提出了一种名为
LENS
（Learning to Segment Anything with Unified Reinforced Reasoning）的全新框架，为“分割一切”任务（SAM）带来了有趣的新思路(被录用为Oral展示)。简单来说，LENS的核心思想是利用强化学习（Reinforcement Learning, RL）来“教会”分割模型进行类似人类的“思考”，即链式思维（Chain-of-Thought, CoT），从而在处理复杂的文本指令时，能够更准确、更鲁棒地分割出图像中的目标物体。
背景：当分割模型遇到复杂推理
文本提示的图像分割（Text-prompted image segmentation）是一项非常有趣且实用的技术，它允许我们用自然语言来指定要从图像中分割出的内容，在人机交互、机器人等领域有巨大潜力。
目前的许多方法，比如大家熟知的SAM（Segment Anything Model），通常采用监督微调（Supervised Fine-Tuning, SFT）的方式来适应这项任务。但这种方式有个明显的短板：它们在执行分割时，往往忽略了“思考”的过程。也就是说，模型直接从指令到结果，缺乏一个明确的、可解释的推理链条。这导致它们在面对陌生的、需要多步推理的复杂指令时，泛化能力会大打折扣。
如上图所示，对比了三种主要的文本提示的图像分割大模型训练范式：
LISA (a)： 作为 MLLM + SAM 的基线，它采用端到端的监督微调（SFT）策略，仅通过标签数据训练整个模型。
SegZero (b)： 转向强化学习（RL）范式，但其训练过程为非端到端。
LENS (c)： 相比之下，LENS 提出了一个统一且高效的端到端强化学习训练框架。该框架的核心创新在于引入了上下文模块与统一奖励机制，这两者共同作用，能够有效增强模型对复杂指令的理解能力，并最终大幅提高所生成分割掩码的质量。
LENS：统一强化推理框架
为了解决上述问题，研究者们设计了LENS框架，一个能够以端到端方式联合优化“推理过程”和“分割结果”的可扩展强化学习框架。
LENS的整体框架如上图所示，它主要包含一个多模态大语言模型（MLLM）作为
推理模型
（如Qwen2.5-VL），一个
分割模型
（如SAM2），以及一个创新的
上下文模块（Context Module）
来连接它俩。整个训练过程分为两个阶段：
阶段一：预训练对齐（Pretraining Alignment）
这个阶段的目标是先让MLLM和SAM能够“对话”。由于两者是独立训练的，它们的特征表示不在一个频道上。研究者们引入了
上下文模块
（包含上下文查询和连接器），并只训练这个轻量级的模块，同时冻结MLLM和SAM的主体参数。
这样一来，上下文模块就学会了如何将MLLM理解文本后产生的“想法”（即CoT推理和边界框预测）转换成SAM能听懂的“指令”（即分割提示），为后续的联合优化打下基础。
阶段二：强化学习（Reinforcement Learning）
这是LENS的核心所在。在对齐之后，框架开始解冻MLLM和分割模型的解码器部分，利用强化学习进行端到端的联合优化。这里的关键是研究者们提出的
统一奖励机制（Unified Rewards）
。
传统的强化学习可能只关注一个方面的奖励，但LENS的奖励是“多粒度”的，它同时考虑三个层面：
句子级格式奖励 (
)
: 鼓励MLLM生成格式正确、有逻辑的CoT推理过程。
框级奖励 (
)
: 通过比较预测边界框（Bounding Box）和真实边界框的IoU，奖励精准的物体定位。
分割级奖励 (
)
: 通过计算预测掩码（Mask）和真实掩码的IoU，直接奖励高质量的分割结果。
统一奖励函数可以表示为：
通过这个精心设计的奖励函数，模型在学习如何更好地分割的同时，也在学习如何进行更有效的“思考”。这种RL驱动的CoT推理，使得整个模型在面对复杂场景时更加智能和可靠。
实验效果：性能全面领先
LENS的效果到底如何？研究者在多个主流的指代表达分割（Referring Expression Segmentation, RES）基准测试上进行了验证，包括RefCOCO、RefCOCO+和RefCOCOg。
在标准的RES任务上，LENS-3B模型取得了平均
81.2%的cIoU
，全面超越了此前的SOTA方法GLaMM、近期备受关注的SAM3和Gemini的组合SAM3-Agent-Gemini2.5-Pro，在一些测试集上提升高达
5.6%
。
另外在ReasonSeg和GroundingSuite-Eval这两个更考验推理能力的基准上，从上表可以看出，，LENS-3B同样展现出了卓越的性能，特别是在cIoU指标上，以
78.3%
的成绩远超其他方法，3B模型能与7B Agent（SAM3-Agent-Qwen2.5-VL-7B）互有胜负，性能证明了其强大的泛化和推理能力。
上图的定性结果也直观地展示了LENS的优势。即便是物体被部分遮挡，或者初始的上下文框（context box）有偏差，LENS依然能凭借其丰富的多查询上下文信息，准确地分割出目标物体。
写在最后
最后让NoteBookLM做个总结:
作者已经开源了代码，感兴趣的朋友不妨去亲自体验一下!