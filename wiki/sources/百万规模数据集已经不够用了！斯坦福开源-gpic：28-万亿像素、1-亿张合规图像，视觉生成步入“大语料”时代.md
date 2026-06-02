---
type: source
title: "百万规模数据集已经不够用了！斯坦福开源 GPIC：28 万亿像素、1 亿张合规图像，视觉生成步入"大语料"时代"
created: 2026-06-02
updated: 2026-06-02
tags: [数据集, 视觉生成, 斯坦福, 李飞飞, 开源, 合规性, 评测基准]
related: [gpic, 李飞飞, 斯坦福大学, fd-dino-v2, ji-t2i, 视觉生成大语料时代]
sources: ["百万规模数据集已经不够用了！斯坦福开源-gpic：28-万亿像素、1-亿张合规图像，视觉生成步入"大语料"时代.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/KADadWvsFTbNL-qJ2vf9FA"
venue: 我爱计算机视觉
---
# 百万规模数据集已经不够用了！斯坦福开源 GPIC

本文报道了斯坦福大学 [[李飞飞]] 教授团队及合作机构开源的 [[gpic]]（Giant Permissive Image Corpus）数据集。该数据集包含 1 亿张合规图像、28 万亿像素，标志着视觉生成领域正式步入 [[视觉生成大语料时代]]。

## 核心内容

- **数据集规模**：1 亿张图像、28 万亿像素，提供 Full/Lite/Nano 三种规格
- **合规性**：所有图像均具有 CC BY、CC0 等宽松许可，支持商业使用
- **构建流水线**：四阶段流水线——来源筛选与许可核查、图像过滤、碰撞模型去重、多粒度标注
- **标注方案**：使用 [[qwen3-vl-4b]] 生成 Tag/Short/Medium/Long 四种长度的描述
- **评测革新**：指出 FID 指标已饱和失效，推荐使用 [[fd-dino-v2]] 作为新基准
- **基准模型**：[[ji-t2i]] 在 GPIC-Full 上训练 1 个 epoch 达到 FD 分数 76.25

## 关键论点

1. 现有数据集（ImageNet-1K、LAION）在规模、合规性、稳定性上已无法满足研究需求
2. FID 指标出现[[指标饱和与古德哈特定律]]问题，模型得分甚至优于真实图像基准线
3. 数据合规性是视觉生成研究走向成熟的基础设施要求

## 论文信息

- 论文地址：https://arxiv.org/abs/2605.30341
- 项目主页：https://gpic.stanford.edu
- 代码仓库：https://huggingface.co/datasets/stanford-vision-lab/gpic
- 主要机构：[[斯坦福大学]]、Radical Numerics、密西根大学、Salesforce 研究中心