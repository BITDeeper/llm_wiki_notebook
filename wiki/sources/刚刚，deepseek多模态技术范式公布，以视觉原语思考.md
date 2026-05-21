---
type: source
title: "刚刚，DeepSeek多模态技术范式公布，以视觉原语思考"
tags: [deepseek, multimodal, computer-vision, reasoning, technical-report]
related: [deepseek, v4-flash, thinking-with-visual-primitives, zhi-dai-hong-gou, ya-suo-xi-shu-zhu-yi-li, tuo-pui-tui-li]
created: 2026-04-30
updated: 2026-04-30
authors: ["机器之心编辑部"]
year: 2026
url: "https://mp.weixin.qq.com/s/2ounFVjR9t6QHSwjKC13ew"
venue: "机器之心"
sources: ["刚刚，deepseek多模态技术范式公布，以视觉原语思考.md"]
---

# 刚刚，DeepSeek多模态技术范式公布，以视觉原语思考

## 概述
本文详细报道了 DeepSeek 联合北京大学、清华大学发布的多模态技术报告《Thinking with Visual Primitives（以视觉原语思考）》。该研究针对现有多模态大模型在推理过程中存在的“指代鸿沟”问题，提出了一种将点坐标和边界框作为推理基本单位的创新范式。

## 核心发现

### 指代鸿沟
DeepSeek 指出，现有多模态模型（如 GPT-5.4, Claude Sonnet 4.6）的主要瓶颈不在于“看不见”，而在于“想不清”。在处理密集场景或复杂逻辑时，自然语言描述的模糊性导致模型无法精确定位其正在讨论的视觉对象，造成推理过程中的注意力漂移。

### 视觉原语
解决方案是将坐标和边界框直接嵌入思维链中。
- **边界框 (`<|box|>`)**：用于需要定位和尺寸信息的对象。
- **点坐标 (`<|point|>`)**：用于更抽象的空间指代，如迷宫探索轨迹。

### 技术架构
- **基座模型**：基于 [[DeepSeek]] [[v4-flash]]（284B 总参数，激活 13B）。
- **压缩机制**：通过 [[ya-suo-xi-shu-zhu-yi-li]] (CSA) 和空间合并，实现了 7056 倍的视觉压缩比。对于 800x800 图片，仅需约 90 个 KV 缓存条目，远低于竞品。

### 实验结果
- **计数任务**：在 Pixmo-Count 上得分 89.2%，超越 GPT-5.4 (76.6%) 和 Gemini-3-Flash (88.2%)。
- **拓扑推理**：在迷宫导航任务上得分 66.9%，领先 GPT-5.4 (50.6%) 约 17 个百分点，显示出在复杂空间逻辑上的显著优势。

## 训练策略
采用“先专家化，后统一”的策略：
1. 分别训练边界框专家 (FTwG) 和点坐标专家 (FTwP)。
2. 使用 [[GRPO]] 算法进行强化学习，设计了精细的奖励机制（格式、质量、精度）。
3. 通过 Unified RFT 和 On-Policy Distillation 合并并弥合性能差距。

## 局限性
- 目前需要明确的“触发词”才能启用视觉原语，尚未实现完全自主判断。
- 在极细粒度场景下，位置精度受输入分辨率限制。
- 跨场景泛化能力仍有提升空间。

## 意义
该研究不仅是工程上的胜利（极高的压缩比），更是认知科学层面的洞察：用坐标锚定逻辑链，为多模态推理提供了一种新的“思考姿势”。