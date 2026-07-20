---
type: concept
title: 视频生成的 Test Time Scaling
created: 2026-06-14
updated: 2026-06-14
tags: [test-time-scaling, 自洽性, 推理增强, 视频生成]
related: [thinking-with-video, 推理增强, videothinkbench]
sources: ["rss/视频生成作为多模态推理新范式-cvpr-2026.md"]
---
# 视频生成的 Test Time Scaling

**视频生成的 Test Time Scaling** 是指通过增加推理时的计算量（如多次采样生成视频并进行多帧/多视频多数投票）来提升视频生成模型在视觉推理任务上准确率的方法。

## 机制与效果

在传统大语言模型（LLM）中，Self-Consistency（自洽性）是一种经典的 Test Time Scaling 方法。[[复旦大学邱锡鹏团队]]的研究发现，这一方法同样适用于 [[thinking-with-video|Thinking with Video]] 范式：

- 在目测谜题（Arc Connect）任务中，仅看单次生成视频的最后一帧，准确率为 56%。
- 改用视频内**多帧多数投票**后，准确率提升至 68%。
- 若让模型生成 5 次视频，对结果进行**多视频多数投票**，准确率可直接飙升至 90%。

这一发现表明，视频生成模型的 Test Time Scaling 将成为继文本模型之后新的研究前沿。