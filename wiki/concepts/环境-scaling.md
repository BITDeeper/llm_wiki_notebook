---
type: concept
title: 环境 Scaling（环境规模化）
created: 2026-06-06
updated: 2026-06-06
tags: [scaling-law, 训练方法, 模拟环境, 基础设施]
related: [mobile-agent, phoneworld, scaling-law, sim2real]
sources: ["ai手机时代，mobile-agent最缺是更真实的世界.md"]
---
# 环境 Scaling（环境规模化）

环境 Scaling 是指通过规模化构建可交互、可验证、可扩展的模拟环境来提升 AI 智能体能力的策略。这是继模型参数和数据量之后的全新 Scaling 维度。

## 核心理念

在 [[mobile-agent|Mobile Agent]] 等强交互场景中，单纯提升模型大小已不足以应对复杂的真实世界。环境决定了：
1. 训练数据从哪里来。
2. Agent 的动作能否被执行。
3. 结果能否被验证。
4. 失败能否被复现。

[[phoneworld|PhoneWorld]] 项目通过实验证明了环境 Scaling 的有效性：随着可验证轨迹的增加以及 App 环境多样性的提升，模型收益会持续增加。这一理念与 [[sim2real]] 密切相关，强调通过逆向工程真实世界来构建高质量的数字训练沙盒。