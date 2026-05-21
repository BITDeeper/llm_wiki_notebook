---
type: entity
title: MiroThinker-1.7
tags: [llm, reasoning, open-source, agent]
related: [miromind, heavy-duty-reasoning, mid-training, mirothinker-h1]
created: 2026-03-16
updated: 2026-03-16
sources: ["不卷速度卷验证，陈天桥miromind精准预测15天后黄金价格.md"]
---

# MiroThinker-1.7

[[MiroThinker-1.7]] 是 [[MiroMind]] 发布的新一代“重型推理”大语言模型系列，包含 235B 参数的标准版和 30B 参数的 Mini 版。该模型专为复杂长期任务设计，强调通过深度推理和验证机制来保证输出质量，而非追求响应速度。

## 性能表现

MiroThinker-1.7 系列在发布时霸榜了多项深度研究任务测试，其中 [[MiroThinker-H1]] 版本超越了 Gemini-3.1-Pro、GPT-5.4-Thinking 和 Claude-4.6-Opus 等顶尖闭源模型：

- **BrowseComp**：88.2%
- **GAIA-Val-165**：88.5%
- **HLE-Text**：47.7%

## 核心技术

### 1. 智能体原生训练
引入了 [[mid-training]]（中期训练）阶段，利用大规模高质量任务数据重点训练模型的规划、推理和总结能力，随后配合 SFT、DPO、RL 进一步内化。

### 2. 重型求解器
结合了 [[局部验证]] 和 [[全局验证]] 的双重验证机制：
- **局部验证**：在推理每一步进行自我审查，只有通过验证才继续探索。
- **全局验证**：在生成完整推理路径后进行回溯，确保最终答案逻辑严密。

### 3. 扩展有效交互
MiroThinker 观察到一个反直觉现象：引入验证机制后，模型的交互步骤数量反而减少。这是因为验证器充当了过滤器，剔除了无效步骤，将算力集中在关键路径上。

## 实测案例

- **F1 上海站预测**：在比赛前、中、后三个阶段实时预测排名，最终结果与真实情况完全一致，且是唯一关注到天气因素的模型。
- **黄金价格预测**：提前15天预测 2026年2月25日 黄金价格（XAU/USD）为 $5185，实际报价 $5181，误差仅 0.08%。