---
title: "AdaptMMBench：多模态大模型自适应推理新基准，首个解耦评测「推理模式选择」与「推理过程质量」"
date: 2026-02-05
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/OnZxEbP-szJVf-b5YRKeiQ"
rss_id: "2247655628_1"
---
本工作由北京理工大学、北京通用人工智能研究院（BIGAI）、西安电子科技大学、阿里巴巴集团的研究者们共同完成。
论文标题
：AdaptMMBench: Benchmarking Adaptive Multimodal Reasoning for Mode Selection and Reasoning Process
项目主页
：https://adaptmmbench.github.io/
ArXiv 论文
：https://arxiv.org/abs/2602.02676
数据集
：https://huggingface.co/datasets/xintongzhang/AdaptMMBench
代码
：https://github.com/AdaptMMBench/AdaptMMBench
在多模态大模型（LMMs）快速发展的今天，如何让模型像人类一样灵活地在“直接看图”和“使用工具推理”之间切换，即
自适应多模态推理（Adaptive Multimodal Reasoning）
，成为了提升模型效率和准确率的关键。然而，现有的评测方法往往依赖静态的难度标签，忽视了模型能力对任务难度的动态感知，导致难以区分模型是“选对了路”还是“仅是结果正确”。
为了解决这一问题，研究团队提出了
AdaptMMBench
，这是一个针对自适应多模态推理的综合评测基准，旨在从
推理模式选择
和
推理过程质量
两个维度，对模型进行细粒度的解耦评测。
AdaptMMBench 概览
全面的数据覆盖
AdaptMMBench 覆盖 Real-world、OCR、GUI、Knowledge、Math 五大核心领域，共包含 1420 个高质量样本。 数据既涵盖基于直接感知的基础任务，也包含需要 多步推理与工具调用 的复杂问题，并在 数据分布与难度梯度 上经过精心设计，能够全面评估模型在真实场景中的综合能力。
数据概览
自适应推理模式选择和推理过程质量评测
使用 MCC 指标评测「模式选择」能力
不同于以往的静态难度划分，AdaptMMBench 引入了
Matthews Correlation Coefficient (MCC)
指标。该指标能够根据模型自身的能力边界，动态地判定任务对于当前模型来说是“简单”还是“困难”，从而公平地评估模型是否在合适的时候选择了合适的推理模式（即：简单题直接看，难题用工具/思维链）。
评估策略
细粒度的「推理过程」分析
仅仅看最终答案是不够的。AdaptMMBench 进一步深入推理过程，从以下三个维度进行评估：
Key Step Coverage (关键步骤覆盖率)
：模型是否执行了解决问题所需的关键步骤？
Tool Effectiveness (工具有效性)
：模型是否正确调用工具，工具的执行过程与结果是否符合当前步骤的目标与整体任务需求？
Efficiency (推理效率)
：模型解决问题的代价如何？
实验发现
通过对多个主流多模态大模型的评测，研究团队进行了深入的分析，主要发现如下：
1. 不同推理模式下的准确率 (Accuracy across Reasoning Modes)*
准确率分析
自适应推理普遍有效
：几乎所有模型在自适应模式下的表现都优于仅使用文本推理的基线。
与“理想上限”仍有差距
：虽然自适应推理带来了提升，但与 Oracle（理想工具使用）模式相比仍有很大提升空间（如 GPT-5 有 ~10% 的差距）。这说明目前的性能瓶颈主要在于
工具调用不够完美
，而非模型本身的推理能力不足。
生成式工具有助于特定任务
：在需要辅助线生成的几何题中，目前的开源模型因缺乏视觉生成能力受限，而引入 Oracle 视觉输入后性能大幅提升，凸显了未来集成生成式工具的重要性。
2. 自适应推理模式选择能力 (Adaptive Reasoning Mode Selection Capability)
模式选择分析
准确率高 ≠ 模式选择好
：实验发现，模式选择能力（MCC）与最终任务准确率并没有呈现强相关。例如，AdaptVision 虽然准确率一般，但 MCC 达到 0.17，优于所有基于 Qwen2.5-VL-7B 的模型。GPT-5 则以 0.41 的 MCC 展现了最佳的模式选择能力。
模型规模提升模式选择能力
：在 Qwen3-VL 系列中，随着模型规模增大，模式选择能力显著提升。这表明更大的模型容量有助于更准确地校准“何时需要使用工具”。
部分模型存在策略失衡
：一些模型在工具使用上表现出极端的偏好。例如 Deepeyes v2 几乎对所有样本都调用工具，而 Thyme 仅在約 3% 的情况下调用。这种失衡往往导致模式选择性能下降。
3. 推理过程的质量与效率 (Quality and Efficiency of the Reasoning Process)
过程质量分析
过程对齐结果
：关键步骤覆盖率 (Key Step Coverage) 与最终准确率排名高度一致，Qwen3-VL-235B 等大模型表现优异。
效率与步骤数非正相关
：Token 消耗量并不完全取决于推理步骤数或工具调用次数。例如 Thyme 虽然步骤最少，但 Token 消耗却高于步骤最多的 PyVision。
总结
AdaptMMBench 为多模态大模型的自适应推理能力提供了一个全新的观测窗口。它不仅关注“结果对不对”，更关注模型是“怎么想的”以及“怎么做的”。研究团队希望通过这一基准，推动社区更多地关注多模态模型的元认知能力（Meta-cognition）和推理过程的质量，从而构建出既聪明又高效的新一代多模态智能体。
更多详细信息，请访问项目主页或阅读原论文。
加入【CV】技术群
入群加好友(v:Gentle-Word),请备注你感兴趣的技术方向