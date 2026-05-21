---
type: concept
title: Think@n
tags: [optimization, inference, strategy, cost-reduction]
related: [深度思考比率, 思维链, ai-subscription-crisis]
created: 2026-02-25
updated: 2026-02-25
sources: ["不是所有token都平等！谷歌提出真·深度思考：思维链长≠深度推理.md"]
---

# Think@n

[[think-at-n]] 是一种基于 [[深度思考比率]] (DTR) 的推理优化策略，旨在解决大模型推理成本高昂的问题。

## 工作原理
1. **并行采样**：为每个问题生成多个推理样本。
2. **早期估算**：在推理初期（前 50 个 Token）快速估算每个样本的 DTR 值。
3. **筛选与终止**：保留 DTR 值最高的前 50% 样本继续生成，直接终止低 DTR 样本的后续生成。
4. **多数投票**：基于保留的高质量样本得出最终答案。

## 效果
- **性能提升**：在 [[gpt-oss]]-120B-medium 模型上，AIME 2025 准确率从 92.7% 提升至 94.7%。
- **成本减半**：推理 Token 消耗从 355.6k 降至 181.9k，实现了“性能不减，成本减半”。

## 意义
该策略证明了通过识别“真思考”而非单纯依赖长 [[思维链]]，可以显著提升推理效率，为缓解 [[ai-subscription-crisis]] 提供了可行的技术路径。