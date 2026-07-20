---
type: concept
title: VideoThinkBench
created: 2026-06-14
updated: 2026-06-14
tags: [评测基准, 视频生成, 多模态推理, 数据集]
related: [thinking-with-video, sora-2, eyeballing-puzzles, arc-agi-2]
sources: ["rss/视频生成作为多模态推理新范式-cvpr-2026.md"]
---
# VideoThinkBench

**VideoThinkBench** 是由[[复旦大学邱锡鹏团队]]构建的综合评测基准，旨在全面评估视频生成模型的多模态推理能力。该基准共包含 4149 个测试样本。

## 任务分类

VideoThinkBench 将测试任务分为两大类：

### 视觉任务
考察模型通过动态生成解决视觉问题的能力，样本多通过程序自动化生成并配有可验证答案：
- **[[eyeballing-puzzles|Eyeballing Puzzles（目测谜题）]]**：考察几何直觉，要求模型模拟光线延伸或操纵几何元素。
- **Visual Puzzles**：根据颜色、形状、尺寸进行归纳推理。
- **[[arc-agi-2|ARC-AGI-2]]**：考察抽象规则归纳能力。
- **Mazes**：空间规划与搜索。

### 文本任务
由已有基准（如 MATH、MMLU、MathVista、MMMU）改编，包含纯文本和多模态的数学与通用推理。模型需在生成的视频中写出解题过程并说出答案。