---
type: event
title: Thinking Machines Lab 发布首款交互模型
created: 2026-05-12
updated: 2026-05-12
tags: [产品发布, 交互模型, 里程碑, thinking-machines]
related: [thinking-machines-lab, tml-interaction-small, 翁荔, 交互模型, 微回合, encoder-free-early-fusion, 双模型协同架构]
sources: ["刚刚，thinking-machines出手！首款交互模型来了，翁荔出镜实测.md"]
origin_date: 2026-05-12
participants: [thinking-machines-lab, 翁荔]
causes: [thinking-machines-lab]
effects: [tml-interaction-small]
significance: high
---
# Thinking Machines Lab 发布首款交互模型

## 事件概述
2026年5月12日，[[thinking-machines-lab|Thinking Machines Lab]] 正式发布成立以来首款自研大模型 [[tml-interaction-small|TML-Interaction-Small]]，这是一款同时具备强智能和实时交互性的 [[交互模型]]。联合创始人 [[翁荔]] 亲自出镜演示模型能力。

## 背景
- 2025年7月，Thinking Machines Lab 完成约 20 亿美元种子轮，估值约 120 亿美元
- 此后近一年时间对外动作不多，主要通过研究博客 Connectionism 释出阶段性成果
- Horace He 主笔的《Defeating Nondeterminism in LLM Inference》为本次发布的 trainer-sampler bitwise 对齐奠定基础
- 团队经历了 12 个版本和 137 页训练日志的迭代

## 核心发布内容
1. **200ms [[微回合]] 时间对齐**：将时间缝进模型架构
2. **[[encoder-free-early-fusion]]**：抛弃编码器，从零联合训练所有模态
3. **[[双模型协同架构]]**：实时门面 + 后台大脑
4. **[[批次不变性]] 训练**：trainer-sampler bitwise 对齐，端到端开销不到 5%

## 评测表现
- FD-bench v1.5 交互质量 77.8 分，大幅领先 Gemini（54.3）和 GPT（46.8）
- 端到端延迟 0.40 秒，比 GPT 快 3 倍
- 时间感知评测与第二名拉开数量级差距

## 行业意义
- 标志着 120 亿美元估值公司从"纯研究信誉"阶段进入"产品交付"阶段
- 首次提出"交互模型"这一全新模型品类，区别于传统 turn-based 大模型
- 为 AI 行业从"对话模型"到"协作模型"的范式跃迁提供了首个工程实现