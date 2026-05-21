---
type: entity
title: PromptEcho
tags: [alibaba, reinforcement-learning, text-to-image, reward-model]
related: [qwen3-vl, teacher-forcing, prompt-following, densealignbench, z-image, qwenimage-2512]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# PromptEcho

[[promptecho]] 是由阿里巴巴团队提出的一种用于文生图模型强化学习训练的 Reward 获取方法。其核心思想是利用冻结的多模态大模型（VLM）的预训练损失函数，作为衡量生成图像与文本 Prompt 对齐程度的高质量 Reward 信号。

## 核心机制

该方法基于“回响”原理：如果图像准确描绘了 Prompt 中的内容，VLM 在观察图像后应能以高概率复述出原始 Prompt。

具体操作是将生成图像和引导 Query 输入冻结的 VLM，在 [[teacher-forcing]] 模式下计算原始 Prompt 的 Token 级交叉熵损失，取负值作为 Reward。这种方法复用了 VLM 在预训练中习得的图文对齐知识，无需额外的标注数据或训练专门的 Reward 模型。

## 技术优势

- **确定性**：相比让 VLM 自回归生成评分（InferScore），[[promptecho]] 计算的是连续的对数似然值，避免了采样噪声和幻觉干扰，具有细粒度的区分能力。
- **可扩展性**：实验证明，使用更大规模的 VLM（如 [[qwen3-vl]]-32B）能提供更优质的 Reward，符合 Scaling Law。
- **通用性**：不仅限于文生图，通过调整引导 Query 和标签格式，该方法可直接应用于其他任务（如文字渲染），无需重新训练 Reward 模型。

## 实验结果

在 [[z-image]] 和 [[qwenimage-2512]] 等前沿文生图模型上的实验表明，[[promptecho]] 显著提升了模型的 [[prompt-following]] 能力，特别是在处理密集描述、属性绑定和空间关系等复杂语义时表现优异。此外，在电商海报文字渲染任务中，它将文字正确率从 68% 提升至 75%。