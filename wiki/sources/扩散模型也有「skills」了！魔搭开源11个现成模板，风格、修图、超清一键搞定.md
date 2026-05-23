---
type: source
title: "扩散模型也有「Skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定"
created: 2026-05-16
updated: 2026-05-16
tags: [扩散模型, 可控生成, 插件框架, 开源, 魔搭社区]
related: [diffusion-templates, 魔搭社区, diffsynth-studio, 扩散模型插件标准化, 办公技能框架, 模型-技能分离架构]
sources: ["扩散模型也有「skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定.md"]
authors: [魔搭社区团队, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/IyMNhU6IY7Ke0o9M_BN-mA"
venue: 量子位公众号
---

# 扩散模型也有「Skills」了！魔搭开源11个现成模板，风格、修图、超清一键搞定

## 摘要

本文由 [[魔搭社区]] 团队投稿至 [[量子位]]，报道了专为扩散模型设计的插件框架 [[diffusion-templates]] 的正式开源发布。该框架通过标准化的 Template 插件机制，解决了当前扩散模型生态中 ControlNet、LoRA、IP-Adapter 等工具互不兼容、底层冲突的行业痛点。

## 核心内容

- **问题背景**：扩散模型插件生态碎片化严重，各工具各自为政，叠加使用时频繁出现特征层冲突。
- **技术方案**：设计 Template Cache（含 KV-Cache 等媒介格式）作为统一中间表示层，Template Pipeline 负责多模型调度，实现插件与基础框架的完全解耦。
- **开源成果**：基于 FLUX.2-klein-base-4B 训练并开源 11 个 Template 模型，覆盖亮度调节、结构控制、超分辨率、图像编辑、美学对齐、局部重绘、年龄控制、色调调节、内容参考等场景。
- **代码仓库**：框架代码在 [[diffsynth-studio]] 项目下完全开源，同时包含模型训练代码。

## 关键链接

- 项目主页：https://modelscope.github.io/diffusion-templates-web/
- 开源代码：https://github.com/modelscope/DiffSynth-Studio
- 技术报告：https://arxiv.org/abs/2604.24351
- 模型集（11个模型）：https://modelscope.cn/collections/DiffSynth-Studio/KleinBase4B-Templates
- 数据集（17个数据集）：https://modelscope.cn/collections/DiffSynth-Studio/ImagePulseV2