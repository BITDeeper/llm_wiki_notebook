---
type: source
title: "阿里开源PromptEcho：用冻结多模态大模型为文生图训练提供高质量Reward"
authors: [刘锦龙, 何旺贵, 姜浩]
year: 2026
venue: "机器之心"
url: "https://mp.weixin.qq.com/s/83eRAXNNKHdHS2BjY3iTuQ"
tags: [alibaba, reinforcement-learning, text-to-image, reward-model, vlms]
related: [promptecho, qwen3-vl, densealignbench, teacher-forcing, prompt-following]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# 阿里开源PromptEcho：用冻结多模态大模型为文生图训练提供高质量Reward

本文介绍了阿里巴巴团队提出的一种名为 [[promptecho]] 的新方法，旨在解决文生图模型强化学习训练中高质量 [[reward-signal]] 难以获取的问题。

## 核心观点

传统的对齐指标（如 CLIP Score）粒度过粗，而现有的开源 Reward 模型（如 PickScore、ImageReward）受限于规模和数据，难以有效指导工业级模型。[[promptecho]] 提出了一种无需标注数据和额外训练 Reward 模型的方法，直接利用冻结的多模态大模型（VLM）的预训练损失函数作为 Reward。

## 方法原理

该方法基于一个直觉：如果生成的图像忠实地遵循了文本 Prompt，那么 VLM 在看到图像后，应该能以很高的概率（似然）“复述”出原始 Prompt。

具体流程如下：
1.  **输入**：生成图像、引导 Query（如“请详细描述这张图片”）、原始 Prompt。
2.  **计算**：在 [[teacher-forcing]] 模式下，计算冻结 VLM 对原始 Prompt 的预测概率（交叉熵损失）。
3.  **输出**：取负对数似然作为 Reward 信号。

## 关键实验与发现

- **优于自回归打分**：对比实验表明，直接使用 VLM 生成离散评分（InferScore）受幻觉和采样随机性影响大，效果甚至不如 Baseline。而 [[promptecho]] 利用连续的对数似然值，具有确定性和细粒度区分能力。
- **Scaling Law 验证**：使用更大规模的 VLM（[[qwen3-vl]]-32B）作为 Reward 提供者比 8B 版本效果更好，证明 Reward 质量随模型规模提升。
- **跨任务泛化**：该方法不仅适用于文生图，还被成功应用于电商海报文字渲染任务，仅通过修改 Query 和标签格式，就将文字正确率提升了 7 个百分点。

## 意义

[[promptecho]] 揭示了 VLM 的预训练损失函数本身就是高质量的图文对齐 Reward 信号，开辟了一条低成本、高泛化性的 Reward 构建路径。