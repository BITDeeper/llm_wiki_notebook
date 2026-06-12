---
type: event
title: PiD 发布——生成式解码器范式提出
created: 2026-06-08
updated: 2026-06-08
tags: [图像生成, 英伟达, 扩散模型, 技术里程碑]
related: [pid-pixel-diffusion-decoder, 英伟达空间智能实验室, 生成式解码器范式]
origin_date: 2025-05-01
participants: [英伟达空间智能实验室, yifan-lu, sanja-fidler]
causes: [vae解码器瓶颈]
effects: [生成式解码器范式]
significance: high
sources: ["rss/英伟达重新定义文生图最后一步：潜在表征直达4k，高精细节一步生成！.md"]
---
# PiD 发布——生成式解码器范式提出

英伟达空间智能实验室发布 PiD（Pixel diffusion Decoder），提出将 VAE 解码器从被动重建模块改造为主动生成式像素扩散模型的新范式。

## 时间

- 论文提交：约 2025 年 5 月（arxiv 编号 2605.23902）
- 中文媒体报道：2026 年 6 月 8 日（[[机器之心]]）

## 核心参与者

- [[yifan-lu|Yifan Lu]]：第一作者，多伦多大学博士生
- [[sanja-fidler|Sanja Fidler]]：导师/通讯作者
- [[英伟达空间智能实验室]]：研究机构

## 背景

高精图像需求（4K/超写实）持续增长，传统级联超分流水线（latent → VAE 解码 → 超分扩散 → 高分辨率图像）成为工程瓶颈，步骤多、延迟高、显存压力大。

## 核心成果

- 提出 [[生成式解码器范式]]，解码器从"解压器"变为"渲染器"
- 512×512 latent 直达 2048×2048 像素输出
- GB200 上 2K 解码约 210ms，比扩散超分基线快 3-6 倍
- 4K 解码峰值显存仅约 22.5GB
- 兼容 FLUX.1/2、SDXL、SD3、DINOv2、SigLIP-2 等多种 latent 来源

## 影响

- 重新定义了图像生成系统中解码器的角色
- 为高分辨率图像生成提供了新的模块化工程方案
- 提示行业关注"最后一公里"——从 latent 到高质量像素的转换