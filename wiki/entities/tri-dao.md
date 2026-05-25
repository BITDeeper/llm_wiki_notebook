---
type: entity
title: Tri Dao
tags: ["researcher", "optimization", "flashattention", "systems", "研究者", "gpu优化", "注意力机制", "高性能计算"]
related: [mamba-3, albert-gu, together-ai, flashattention, sonicmoe, ion-stoica, coda, han-guo]
created: 2026-03-19
updated: 2026-05-25
sources: ["华人学生立大功！新王mamba-3直击transformer死穴，推理效率碾压7倍.md", "deepseek做大→mega-moe，tri-dao团队加快→sonicmoe.md", "还在手写cuda内核？coda来了！llm和新手也能让transformer跑出光速.md"]
---

# Tri Dao

[[Tri Dao]] 是普林斯顿大学助理教授，同时也是 AI 公司 [[Together AI]] 的联合创始人兼首席科学家。作为一名著名的 AI 系统研究者，他在斯坦福大学获得博士学位后加入普林斯顿。他是越南裔美国人，研究兴趣主要集中在开发高效的深度学习架构与方法。他是 GPU 内核优化和高性能深度学习领域的知名研究者。

## 研究方向

Tri Dao 的研究聚焦于通过硬件感知的算法设计，消除深度学习训练中的内存带宽瓶颈。其工作贯穿从注意力机制到通用 Transformer 操作的系统性优化。

## 主要贡献

-   **FlashAttention 系列**：作为发明者和第一作者，他开发的 [[FlashAttention]] 算法几乎被所有主流 AI 框架集成。该工作通过让注意力计算"住进"片上内存，大幅加速了 Transformer 模型的注意力机制计算，直接改变了 Transformer 模型的训练和推理方式，大幅提升了计算效率，是当前大模型训练的标配组件。
-   **Mamba 系列**：与 [[albert-gu]] 一起指导了 [[mamba-3]] 及 Mamba 系列架构的研发，推动了 [[状态空间模型]]（SSM）的发展。
-   **SonicMoE**：近期与加州大学伯克利分校的 [[ion-stoica]] 合作，领导团队开发了 [[SonicMoE]]。这是一个针对细粒度混合专家模型的高性能训练内核，旨在解决 MoE 训练中的显存和带宽瓶颈。
-   **[[coda|CODA]]**：将 FlashAttention 的"片上融合"思想扩展到归一化、激活函数等操作，Tri Dao 是该论文的共同作者，并于 2026 年 5 月 22 日在社交媒体上推广了该论文。

## 荣誉

-   2025 年获得了 Schmidt Sciences 颁发的 AI2050 Fellowship。