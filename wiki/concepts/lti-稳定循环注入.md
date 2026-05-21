---
type: concept
title: LTI 稳定循环注入
tags: [stability, control-theory, recurrent-networks]
related: [循环深度-transformer-rdt, openmythos, ucsd]
created: 2026-04-20
updated: 2026-04-20
sources: ["mythos架构被22岁小伙“逆推”开源了！moe和注意力借鉴deepseek.md"]
---

# LTI 稳定循环注入

[[lti-稳定循环注入]] (LTI Stable Looped Injection) 是一种用于保证循环神经网络在多轮迭代中保持数值稳定的技术。该概念源自 [[UCSD]] 和 [[Together AI]] 的论文 *Parcae*。

## 作用

在 [[循环深度-transformer-rdt]] 等架构中，权重反复循环运行可能导致梯度消失或爆炸（发散）。LTI 稳定机制通过控制注入循环的信息流，确保系统在多轮迭代后仍能收敛或保持稳定，从而实现安全的深度推理。