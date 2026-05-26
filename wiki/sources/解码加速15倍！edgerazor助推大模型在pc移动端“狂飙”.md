---
type: source
title: "解码加速15倍！EdgeRazor助推大模型在PC/移动端狂飙"
created: 2026-05-25
updated: 2026-05-25
tags: [量化, 端侧部署, 轻量化, 开源框架, 知识蒸馏]
related: [edgerazor, 南京大学lamda团队, 混合精度量化感知蒸馏, 量化, 本地推理]
sources: ["解码加速15倍！edgerazor助推大模型在pc移动端“狂飙”.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/j6kRNP257cEp8dXOnX0cbQ"
venue: 机器之心
---
# 解码加速15倍！EdgeRazor助推大模型在PC/移动端"狂飙"

## 摘要

本文报道了由[[南京大学lamda团队]]与[[微软ai]]联合推出的开源端侧大模型轻量化框架[[edgerazor]]。该框架采用[[混合精度量化感知蒸馏]]（MPQAD）范式，通过三大核心模块——[[混合精度结构量化]]（SQMP）、[[层自适应特征蒸馏]]（LAFD）和[[熵感知kl散度]]（EAKLD）——突破了端侧量化部署的[[量化不可能三角]]。

## 核心发现

1. **性能SOTA**：在基础型、指令微调型和多模态大模型的16个下游任务上，各类比特位宽下均超越主流PTQ/QAT/QAD方法。
2. **极低比特稳健性**：在1.88-bit极低比特下，GSM8K和HumanEval等复杂任务上显著优于同类2-bit方法。
3. **训练效率革命**：训练token数缩减75%–90%（最低3.1B vs 基线30B），单机8卡即可完成训练。
4. **全员量化**：量化参数覆盖率达99.99%（传统方法仅73.89%），1.58-bit下实现7.03×压缩比。
5. **端侧部署实效**：PC端解码加速16×，手机端12×；1.58-bit模型磁盘占用仅约190MB。

## 关键信息

- **论文**：arXiv:2605.04062
- **GitHub**：https://github.com/zhangsq-nju/EdgeRazor
- **Hugging Face**：https://huggingface.co/collections/zhangsq-nju/edgerazor-nbit
- **Playground**：https://huggingface.co/spaces/zhangsq-nju/EdgeRazor-PlayGround
- **通讯作者**：[[张绍群]]（南京大学LAMDA团队助理教授）