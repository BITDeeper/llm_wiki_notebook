---
type: source
title: "ACL 2026｜AI for聋哑群体，港理工开源思考型手语翻译模型"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/PgSi0r7Ywy5VdOoCaA4fKw"
venue: "机器之心"
tags: [acl-2026, sign-language-translation, multimodal, ai-for-good]
related: [signthought, lc-hkslt, 香港理工大学, 四川大学, gloss-free-手语翻译, 跨模态推理]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# ACL 2026｜AI for聋哑群体，港理工开源思考型手语翻译模型

本文报道了香港理工大学与四川大学联合发表在 ACL 2026 的工作，提出了名为 [[signthought]] 的“思考型”手语翻译框架，并开源了大规模香港手语数据集 [[lc-hkslt]]。

## 核心观点
文章指出，手语翻译本质上是一个**跨模态推理问题**，而非简单的视频到文本映射。传统方法因忽略动作轨迹、空间位置和上下文关系，容易导致语义错误（如将“撞树”误译为“车在树旁”）。

## 技术方案
- **SignThought 框架**：引入 [[latent-chain-of-thought]]（潜在思维链）作为视觉与语言的接口。
- **Plan-then-Ground**：一种解耦的解码策略，先进行语义规划，再回到视频中定位视觉证据。
- **弱监督学习**：仅使用句子级监督信号，不依赖逐帧 gloss 标注。

## 实验结果
在 PHOENIX14T、CSL-Daily、How2Sign、OpenASL 和 LC-HKSLT 五个主流 benchmark 上均取得了 SOTA 的 BLEU-4 和 ROUGE 分数。消融实验证明，Latent thinking module 是性能提升的关键。

## 数据贡献
构建了包含 1311 小时视频的 [[lc-hkslt]] 数据集，提供了更真实的弱监督训练场景。

## 相关链接
- 论文地址：https://arxiv.org/abs/2604.15301
- 代码地址：https://github.com/fletcherjiang/SignThought