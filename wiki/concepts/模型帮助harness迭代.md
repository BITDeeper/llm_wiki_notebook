---
type: concept
title: 模型帮助Harness迭代
created: 2026-05-30
updated: 2026-05-30
tags: [ai工程, 模型工具关系, 迭代]
related: [ai-native组织, dogfooding闭环, minimax]
sources: ["从token无上限到全员agent：minimax的ai-native组织进化实践丨minimax胡维琦-aigc2026.md"]
---
# 模型帮助Harness迭代

传统认知中，AI系统中模型负责思考（推理与决策），Harness（工具框架）负责执行。但 [[minimax]] 在内部实践中发现，模型不仅能完成思考任务，还能反向驱动工具框架的快速迭代。

## 发现背景

MiniMax在2026年围绕文本和视频布局，在客户端和工具层做了大量创新（[[maxclaw]]、[[maxhermes]] 等），发现工具层的迭代速度远超预期。原因是模型能力的提升直接推动了Harness的改进，而非仅仅是Harness调用模型。

## 意义

这一发现挑战了模型与工具的简单分工假设，暗示在AI Native组织中，**模型和工具框架是共同进化的关系**，而非单向的服务调用关系。模型越强，工具迭代越快；工具越完善，模型的应用场景越广——形成正向飞轮。