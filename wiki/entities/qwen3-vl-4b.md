---
type: entity
title: Qwen3-vl-4B
created: 2026-06-09
updated: 2026-06-09
tags: ["视觉语言模型", "工具", "阿里", "模型", "开源", "基座模型"]
related: ["gpic", "多粒度标注", "vlm3"]
sources: ["李飞飞造了imagenet，现在她又带人超越了它.md", "百万规模数据集已经不够用了！斯坦福开源-gpic：28-万亿像素、1-亿张合规图像，视觉生成步入"大语料"时代.md", "rss/meta蔡志鹏新作vlm³：全面揭示三维视觉的bitter-lesson.md"]
---
# Qwen3-vl-4B

Qwen3-vl-4B是视觉语言模型（VLM）架构，在[[vlm3|VLM³]]研究中作为标准VLM基座使用。VLM³基于该架构，仅通过相机焦距归一化和像素空间归一化两个预处理步骤，即可在四大三维视觉任务上匹敌或超越专家视觉模型。

该模型参数量为4B，在VLM³实验中以4B参数超越8B参数的SpatialRGPT，展示了标准VLM架构在三维视觉任务上的参数效率优势。