---
type: source
title: "MiniMax M3一手实测：老黄PPT上74个Logo，我以为能难住它"
created: 2026-06-02
updated: 2026-06-02
tags: [minimax, 大模型, 多模态, 编程, 稀疏注意力, 开源模型, 评测]
related: [minimax, minimax-m3, minimax-code, msa-minimax-sparse-attention, 量子位]
sources: ["minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/xmbyazYJ6L2rOGLkl1tftQ"
venue: 量子位
---
# MiniMax M3一手实测：老黄PPT上74个Logo，我以为能难住它

量子位发布的一手实测报道，全面评测 [[minimax]] 最新开源旗舰模型 [[minimax-m3]] 的三大核心能力：1M长上下文、原生多模态和强Coding能力。

## 核心内容

报道重点测试了M3在以下场景的表现：
- **论文复现**：独立复现ICLR 2025 Outstanding Paper（学习动力学）和ICLR 2026论文（Polar Express优化器），自主运行近12小时，产出18次commit与23张图表
- **多模态识别**：从黄仁勋ComputeX演讲PPT中识别74个企业Logo并全部正确匹配公司信息，生成交互式瀑布流网页
- **视频理解**：理解1.3G语言学奥赛讲解视频，复现解题过程为交互式网页
- **地图应用**：根据黄仁勋北京行程制作可交互打卡地图

## 技术亮点

- [[msa-minimax-sparse-attention|MSA]]（MiniMax Sparse Attention）：以KV块为外层循环实现高硬件利用率
- [[交互式用户模拟器框架]]：用LLM模拟真实开发者协作行为训练Agent能力
- 原生多模态（Early Fusion）：从预训练第一步即进行图文混合训练
- SWE-Bench Pro跑出59%，超过GPT-5.5和Gemini 3.1 Pro

## 行业影响

M3是首个同时实现长上下文、原生多模态和强Coding三大能力的开源模型，此前只有GPT、Claude、Gemini的闭源旗舰能做到。[[nous-research]] 联创和Vercel CEO Guillermo Rauch公开为M3背书。

## 关联

- 同步推出的 [[minimax-code]] 对标 [[claude-code]]
- Token Plan计费方式引发争议，官方提高周用量限额回应