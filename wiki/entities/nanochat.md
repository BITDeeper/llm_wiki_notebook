---
type: entity
title: nanochat
tags: [llm, codebase, gpt-2, training, open-source, training-framework]
related: [autoresearch, andrej-karpathy]
created: 2026-03-15
updated: 2026-05-08
sources: ["karpathy：写了20年代码，现在像作弊.md", "刚刚，karpathy惊呼「后agi」！ai通宵狂改110次代码，他去蒸桑拿.md", "卡帕西开源agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k.md", "刚刚，karpathy惊呼「后agi」！ai通通狂改110次代码，他去蒸桑拿.md"]
---

# nanochat

[[nanochat]] 是由 [[Andrej Karpathy]] 开源的一个 PyTorch 项目，口号是「100 美元能训练的最好的 ChatGPT」。该项目包含约 8000 行代码，实现了一个完整的语言模型训练流水线，包括分词、预训练、微调、强化学习和推理。

同时，[[nanochat]] 也是一个轻量级的模型训练核心，被用作 [[autoresearch]] 框架的基础实验平台。由于其轻量级特性，它非常适合用于 5 分钟一轮的快速实验循环。

## 项目特点

- **极简与精密**：围绕 Transformer 的深度这一核心参数，自动调整其他所有超参数（宽度、头数、学习率等）至计算最优。
- **可迭代性**：项目结构清晰，非常适合作为 AI Agent 进行自动优化的实验平台。
- **高效性**：在单个 8×H100 节点上，仅需 2 小时即可训练出 GPT-2 级别能力的模型。

## 在自动化科研中的角色

[[nanochat]] 是 [[autoresearch]] 工具的实验对象，用于演示 AI Agent 如何自主优化模型性能。

作为实验平台，nanochat 提供了一个受控环境，使得 Agent 能够通过修改 `train.py` 来探索不同的训练策略，从而验证 [[agentic-engineering]] 在实际科研中的有效性。在 autoresearch 项目中，nanochat 提供了基础的 GPT 架构实现，使得 AI 智能体能够在 `train.py` 文件中对其进行修改和优化。

在著名的「后 AGI」实验中，AI Agent 在 12 小时内对 [[nanochat]] 提交了 110 次代码变更。

## 性能演进

在 autoresearch 项目的实验中，nanochat 的训练效率得到了显著提升：

- **训练时间**：在 8xH100 节点上，训练时间从约 3 小时压缩至 2 小时。
- **模型优化**：通过 Agent 的 110 次迭代，验证损失（Validation Loss）从 0.862415 降至 0.858039。