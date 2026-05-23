---
type: source
title: "商汤SenseNova U1深度拆解，原生统一架构终结缝合时代"
created: 2026-05-14
updated: 2026-05-14
tags: [多模态, 原生统一架构, 商汤科技, SenseNova-U1, NEO-Unify, 技术拆解]
related: [sensenova-u1, neo-unify-架构, 原生理解生成统一, 商汤科技, mixture-of-transformers-mot]
sources: ["商汤sensenova-u1深度拆解，原生统一架构终结缝合时代.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/60m6GzLGlRAfWYWWkIDCOA"
venue: 机器之心
---
# 商汤SenseNova U1深度拆解，原生统一架构终结缝合时代

本文是机器之心对 [[商汤科技]] [[sensenova-u1]] 模型的深度技术拆解，聚焦其行业首创的 [[neo-unify-架构]] 原生统一多模态架构。

## 核心内容

### 架构创新
文章详细阐述了 NEO-Unify 架构如何通过解决三组递进矛盾实现原生统一：
1. **接口层**：Encoder-free 设计，消除 VE 和 VAE，打造近无损视觉接口（PSNR 31.56/SSIM 0.85）
2. **训练层**：[[分辨率自适应噪声尺度]] 解决动态分辨率 SNR 失衡
3. **参数层**：原生 [[mixture-of-transformers-mot|MoT]] 架构实现"知识共享、专才专用"

### 训练方法论
- 预训练语料约 2.1 万亿 token，累计超过 3.4 万亿 token
- 四步训练法：理解预热 → 生成预训练 → 统一中期训练 → 统一 SFT
- 后期训练引入 [[flow-grpo]] 强化学习机制
- [[dmd2-分布匹配蒸馏]] 将生成步数从约 100 步蒸馏到 8 步

### 推理系统
- LightLLM（多模态理解）+ LightX2V（图像生成）解耦部署
- FlashAttention3 后端加速，2048×2048 图像每步延迟 0.415 秒（5090 GPU）

### 评测亮点
- **理解能力不退化**：MMMU 80.55（超 Qwen 3.5-9B 2.15分）、MMLU-Pro 84.04
- **文字渲染突破**：LongText-Bench 英文 0.979/中文 0.962；CVTG-2K 开源第一
- **推理驱动编辑**：RISEBench CoT 30.0，远超 BAGEL（6.1）
- **交错生成**：openING 9.16，超越 GPT-4o+DALL-E3（8.20）

### 技术报告
- arxiv.org/abs/2605.12500
- Hugging Face 模型下载及 GitHub 代码仓库已开源