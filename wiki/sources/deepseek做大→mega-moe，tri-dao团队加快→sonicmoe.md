---
type: source
title: "DeepSeek做大→Mega MoE，Tri Dao团队加快→SonicMoE"
created: 2026-05-04
updated: 2026-05-04
tags: [moe, 系统优化, gpu, deepseek, tri-dao]
related: [sonicmoe, mega-moe, tri-dao, deepgemm, 细粒度-moe]
authors: ["机器之心", "Panda"]
year: 2026
url: "https://mp.weixin.qq.com/s/aZWTQxXqrfzc5rboCof4DA"
venue: "机器之心"
sources: ["deepseek做大→mega-moe，tri-dao团队加快→sonicmoe.md"]
---
# DeepSeek做大→Mega MoE，Tri Dao团队加快→SonicMoE

本文报道了由普林斯顿大学 [[Tri Dao]] 和加州大学伯克利分校 [[Ion Stoica]] 领导的团队发布的 [[SonicMoE]]，这是一个针对英伟达 Blackwell GPU 优化的高性能混合专家模型训练内核。

文章指出，随着 [[细粒度 MoE]] 架构的兴起，模型训练面临着 [[显存墙]] 和 [[内存墙]] 的双重挑战。SonicMoE 通过算法重设计（[[激活内存与专家粒度解耦]]）和工程优化（[[IO 感知的算子融合]]），在 B300 GPU 上实现了峰值吞吐量。实测数据显示，其前向传播性能比 [[DeepGEMM]] 高出 54%，反向传播高出 35%。

此外，文章还提到了 DeepSeek 在 [[DeepGEMM]] 库中开源的 [[Mega MoE]] 技术，将其定位为与 SonicMoE 追求“快”截然不同的“大”的方向。