---
type: concept
title: Eyeballing Puzzles（目测谜题）
created: 2026-06-14
updated: 2026-06-14
tags: [视觉推理, 几何直觉, 评测任务]
related: [videothinkbench, thinking-with-video, sora-2]
sources: ["rss/视频生成作为多模态推理新范式-cvpr-2026.md"]
---
# Eyeballing Puzzles（目测谜题）

**Eyeballing Puzzles（目测谜题）** 是 [[videothinkbench|VideoThinkBench]] 评测基准中的一类核心视觉任务，专门用于考察 AI 模型的几何直觉。

## 任务形式

分为 Point（点）、Line（线）、Shape（形状）三种类型。模型需要模拟光线的延伸和反射，或操纵几何元素（如移动点和线）来辅助推理，最终得出几何结论。

## 重要性

在传统认知中，视觉语言模型（VLM）在静态图像理解上具有优势。然而，在多帧投票评估下，[[sora-2|Sora-2]] 在此任务中竟击败了 Gemini 2.5 Pro、GPT-5 high 和 Claude Sonnet 4.5 等顶尖 VLM。这充分展现了 [[thinking-with-video|Thinking with Video]] 范式在进行“画图模拟”推理时的独特优势。