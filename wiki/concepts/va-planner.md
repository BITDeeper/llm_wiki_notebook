---
type: concept
title: VA-Planner（视频-音频规划器）
created: 2026-06-11
updated: 2026-06-11
tags: [多模态生成, 语义规划, MLLM, 跨模态推理]
related: [baton, 语义蓝图, 双语义对齐塔]
sources: ["rss/指令遵循媲美seedance-2.0！复旦腾讯联合提出baton，多说话人场景m-wer暴降76%.md"]
---
# VA-Planner（视频-音频规划器）

VA-Planner（Video-Audio Planner）是[[baton|Baton]]框架的跨模态语义推理核心，用一个可训练的多模态大语言模型（MLLM）联合预测视频和音频的planned tokens，构成[[语义蓝图]]。

## 工作原理

对于包含N个关键帧（FPS=6采样）和M个音频块（每块对应1秒音频）的生成任务，VA-Planner构造结构化用户Prompt，包含视觉语义token占位符和音频语义token占位符。MLLM执行自回归推理，从占位符位置提取隐藏状态，获得视频和音频隐藏表示。

由于音频规划区域位于视频规划区域之后，音频隐藏表示能进一步关注前面的视频隐藏表示，在推理阶段自然建立隐式的跨模态依赖关系。

## 初始化与训练

- 以Qwen3初始化MLLM
- 监督目标为planned tokens与真实感知特征（SigLip2/WavTokenizer倒数第二层）之间的L2损失
- 直接回归连续特征（而非离散token），保留更丰富的语义结构信息