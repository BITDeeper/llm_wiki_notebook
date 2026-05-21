---
type: concept
title: 训练稳定性挑战
tags: [training, llm, hardware, scaling-law]
related: [deepseek-v4, anticipatory-routing, swiglu-clamping]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# 训练稳定性挑战

训练稳定性挑战是指在超大规模集群（万亿参数级别）上训练大语言模型时，硬件细微误差被指数级放大，导致训练过程出现 Loss Spike（损失激增）甚至崩溃的现象。

## 表现与成因
当参数量和训练数据量达到临界点（如 [[DeepSeek V4]] 的 1.6T 参数和 33T Token），系统中的微小扰动（如硬件精度误差、互连延迟）会被 MoE 层的路由机制不断放大。数值异常值在专家网络间形成恶性循环，最终导致训练发散。

## 行业现状
这一挑战标志着大模型训练已进入“无人区”，涉及硬件底层、编译器栈及数学架构的三位一体博弈。不仅是 DeepSeek，xAI 等其他厂商也曾在 Macrohard 等项目中提及类似的硬件适配麻烦。

## 解决方案
目前业界主要通过工程手段进行“修补”，而非理论上的彻底解决：
- **[[Anticipatory Routing]]**：解耦骨干网络与路由网络的更新。
- **[[SwiGLU Clamping]]**：强制钳制激活函数数值范围。
- **Q/KV 归一化**：虽然广泛使用，但在超大规模下效果仍不确定（仅“可能”提升稳定性）。

DeepSeek 在技术报告中坦言，许多补丁虽然有效，但其**底层机理仍是 open question**。