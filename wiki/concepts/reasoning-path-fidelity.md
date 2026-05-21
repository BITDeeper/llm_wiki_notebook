---
type: concept
title: 推理路径一致性
tags: [evaluation, metrics, reasoning, ai-safety]
related: [superchem, chemical-reasoning, chain-of-thought]
created: 2025-12-15
updated: 2025-12-15
sources: ["gpt-5准确率不足40%！北大发布多模态、高难度化学基准superchem.md"]
---

# 推理路径一致性

**推理路径一致性** (Reasoning Path Fidelity, RPF) 是 [[superchem]] 基准引入的一项评测指标，用于评估大模型的思维链是否与专家的解析逻辑一致。

## 定义
RPF 通过对比模型生成的思维链与专家撰写的详细解析（包含关键检查点），量化模型在得出结论过程中所经过的逻辑路径的正确程度。

## 价值
- **区分“真懂”与“猜对”**：高准确率并不代表模型真正理解了问题。例如，DeepSeek-V3.1-Think 在 SUPERChem 中准确率尚可，但 RPF 得分较低，说明其可能通过启发式猜测或概率捷径得分，而非严谨的逻辑推演。
- **诊断性**：低 RPF 分数指出了模型在推理逻辑上的缺陷，即使最终答案是正确的，其过程也可能不可靠或不可复现。

## 应用场景
在科学、数学或编程等需要严密逻辑的领域，RPF 比单纯的准确率更能反映模型的可靠性。它对于评估 [[ai-agent]] 在复杂任务中的表现尤为重要，因为错误的中间步骤可能导致灾难性的后果。