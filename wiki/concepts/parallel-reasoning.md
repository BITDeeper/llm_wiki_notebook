---
type: concept
title: 并行推理
tags: [ai-architecture, reasoning, gemini]
related: [gemini, chain-of-thought, ai-takeoff]
created: 2025-12-05
updated: 2025-12-05
sources: ["谷歌imo金牌级gemini-3深夜上线！华人大神挂帅，openai无力反击.md"]
---

# 并行推理

并行推理是一种 AI 模型处理复杂问题的计算范式，指模型能够同时探索多种假设或思路，而非按照线性顺序逐步思考。

## 技术特点
- **多路径探索**：与传统的 [[chain-of-thought]]（思维链）不同，并行推理允许模型在推理过程中同时生成并验证多个可能的解题路径。
- **复杂问题求解**：特别适用于攻克高难度的数学、科学和逻辑难题，在这些领域线性推理可能会陷入局部最优或逻辑死胡同。
- **性能提升**：通过增加计算量和探索广度，并行推理能显著提高模型在基准测试（如 [[arc-agi-2]]、[[hle]]）中的表现。

## 应用实例
- [[gemini]] 3 Deep Think 模型采用了并行推理机制，使其在 3D 场景生成和物理模拟任务中表现出极高的逻辑一致性和还原度。