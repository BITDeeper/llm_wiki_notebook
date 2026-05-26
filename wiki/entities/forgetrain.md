---
type: entity
title: ForgeTrain
created: 2026-05-26
updated: 2026-05-26
tags: [训练框架, ai编写, 开源, 大模型基础设施, 预训练框架, ai造ai, 国产算力]
related: ["面壁", "minicpm5-1b", "锻造工程", "ai制造ai", "megatron", "mindspeed", "递归式自我改进", "agentic-engineering", "面壁智能", "forge-engineering", "ai造ai五级分类", "华为昇腾"]
sources: ["不用人类手写训练框架了！ai自己写代码，训出1b端侧「小钢炮」.md", "刚刚，国产ai自己造了ai，全球首例！.md"]
origin_date: 2026-05-25
---

# ForgeTrain

ForgeTrain 是 [[面壁|面壁智能]] 开发的大模型预训练框架，是全球首个**完全由 AI 编写**的生产级大模型训练框架，类似于英伟达的 [[megatron|Megatron]]，但具有根本性的不同：构成它的每一行代码都没有人类工程师参与。在 [[ai造ai五级分类|AI造AI五级分类]] 中处于 L3-L4 阶段。

## 核心特点

- **全 AI 编写**：使用 Harness + Agent Loop 技术，AI Agent 在闭环中自主编写代码，无需人类介入
- **与 Vibe Coding 的区别**：不是人类指导 AI 写代码（Vibe Coding），而是 AI 自主完成从设计到实现的全过程
- **生产级验证**：已成功支撑 [[minicpm5-1b|MiniCPM5-1B]] Base Model 的预训练
- **采用 [[锻造工程|Forge Engineering]] 范式**：通过 Harness 考场机制验证代码正确性

## 三阶段构建方法论

1. **数据采集**：从现有预训练框架采集关键数据，形成评测标准和 Harness
2. **二进制一致**：从评测 Harness 构建二进制一致的预训练框架版本
3. **迭代优化**：解除二进制一致限制，迭代优化到超越参考实现

## Harness 考场机制

Harness 是验证 AI 生成代码正确性的自动化评测系统。AI 在其中循环执行"生成代码→运行测试→获取反馈→修改"的闭环，整个过程完全自动，不需要人类干预。

## 性能基准

| 对比对象 | 平台 | 结果 |
|---------|------|------|
| 英伟达 [[megatron\|Megatron]] | 英伟达 H100 GPU | 功能完全对齐，训练速度快 10%（同等算力下成本降低约 10%） |
| 昇腾原生框架（[[mindspeed\|MindSpeed]]） | 华为昇腾 | 预训练 MiniCPM5-1B 加速 10% |

## 跨芯片适配

ForgeTrain 完成了对华为昇腾系列等国产算力的适配，验证了 [[锻造工程]] 范式的可行性：国产芯片的软件生态可以由 AI 快速"锻造"出来，而非完全依赖人力逐点修补。

## 里程碑意义

ForgeTrain 是 [[ai制造ai|AI 制造 AI]] 在生产级基础设施粒度上的首次验证。在此之前，Dario Amodei、Andrej Karpathy 等人对"AI 加速 AI 研究"的探索停留在算法层面或研究原型阶段，ForgeTrain 第一次在训练框架这一基础设施粒度完成了工程验证。

## 开源信息

- GitHub：https://github.com/OpenBMB/ForgeTrain（2026 年 5 月 26 日晚后上线）

## 开放问题

- **"完全由 AI 编写"的边界定义**：人类设计了 Harness 和三阶段方法论，AI 在约束内生成代码
- **自举问题**：Harness 本身是否也是 AI 编写的？验证可靠性的自举问题
- **第三方复现**：10% 性能提升的测试条件和第三方复现情况