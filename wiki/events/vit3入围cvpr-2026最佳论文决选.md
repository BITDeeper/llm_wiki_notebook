---
type: event
title: ViT³入围CVPR 2026最佳论文决选
origin_date: 2026-06-12
created: 2026-06-12
updated: 2026-06-12
tags: [cvpr-2026, 最佳论文, 测试时训练, 计算机视觉]
related: [vit3, cvpr-2026, test-time-training, 阿里巴巴, 清华大学]
significance: high
participants: [vit3, 阿里巴巴, 清华大学]
causes: [cvpr-2026]
effects: []
sources: ["rss/入围cvpr-2026最佳论文决选，vit³用「测试时训练」突破transformer复杂度瓶颈.md"]
---
# ViT³入围CVPR 2026最佳论文决选

[[cvpr-2026|CVPR 2026]]在美国丹佛举办，共收到16092篇投稿，其中15篇杀入最佳论文决选（Best Paper Finalists），入围率不足千分之一。

[[vit3|ViT³]]（Vision Test-Time Training）是入围论文之一，由[[阿里巴巴]]与[[清华大学]]合作完成。该论文将[[test-time-training|测试时训练（TTT）]]系统引入视觉领域，通过学习驱动的上下文压缩突破标准Transformer的二次计算复杂度瓶颈，在高分辨率图像处理中实现4.6倍推理加速和90.3%显存节省。

该论文的意义在于：它不是简单的效率优化，而是改变了视觉模型保存和调用上下文信息的方式——不再单纯依赖固定公式压缩信息，而是通过一次快速的在线学习将上下文写入紧凑的内部模型。这为高分辨率多模态应用和端侧部署打开了新的可能性。