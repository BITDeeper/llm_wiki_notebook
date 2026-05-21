---
type: entity
title: MT-Bench
tags: [benchmark, evaluation, llm]
related: [mmlu, 判别式任务-vs-生成式任务, persona-prompting]
created: 2026-03-23
updated: 2026-03-23
sources: ["「你是专家」竟成ai幻觉毒药？新论文一巴掌揭穿提示词最大骗局.md"]
---

# MT-Bench

**MT-Bench** 是一组用于评估大语言模型多轮对话能力和生成质量的基准测试集。它通常包含需要复杂交互、格式遵循和风格控制的开放式问题。

## 在研究中的作用
在 [[persona-prompting]] 和 [[prism]] 算法的研究中，MT-Bench 被用作典型的**生成式任务**代表。数据显示，专家人设在 MT-Bench 上能显著提升模型表现（例如从 7.56 提升至 7.76），因为这类任务高度依赖模型的对齐能力和风格控制。

## 特点
- **主观性较强**：评估通常基于人类偏好或强模型（如 GPT-4）的打分。
- **依赖对齐**：测试模型是否能“像人类”一样说话，是否具备高情商和良好的格式感。