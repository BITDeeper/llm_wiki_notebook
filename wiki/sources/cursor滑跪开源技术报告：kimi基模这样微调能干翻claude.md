---
type: source
title: "Cursor滑跪开源技术报告：Kimi基模这样微调能干翻Claude"
tags: [cursor, kimi, 微调, 强化学习, 开源模型, 代码生成]
related: [cursor, kimi-k2-5, composer-2, 杨植麟, 持续预训练, 异步强化学习, 大模型训练第三阶段]
created: 2026-03-27
updated: 2026-03-27
authors: [鹭羽]
year: 2026
url: "https://mp.weixin.qq.com/s/Oh-20t6kTjeIQgVYQwXGFA"
venue: "量子位"
sources: ["cursor滑跪开源技术报告：kimi基模这样微调能干翻claude.md"]
---

# Cursor滑跪开源技术报告：Kimi基模这样微调能干翻Claude

## 概述
本文报道了 [[cursor]] 发布 [[composer-2]] 技术报告的事件，详细阐述了其基于 [[kimi-k2-5]] 进行深度微调的技术路径。同时，文章也记录了 [[杨植麟]] 关于大模型训练进入“第三阶段”的行业观点。

## 核心内容

### Cursor 的技术路径
Cursor 在报告中承认其 Composer 2 模型基于 Kimi K2.5，并详细说明了其“非纯套壳”的技术投入：
1.  **持续预训练**：注入代码领域知识，将上下文长度扩展至 256k，并引入 [[多token预测]]（MTP）层以加速推理。
2.  **异步强化学习**：在高度模拟真实 Cursor 对话的环境中进行训练，采用单指令多样本策略，不仅优化了推理路径，还扩展了正确解的覆盖范围。

### 评估基准 CursorBench
Cursor 推出了自研的内部评估基准 [[cursorbench]]。与 SWE-bench 相比，CursorBench 的任务修改量更大（中位数 181 行），指令更简洁（中位数 390 字符），更接近真实的 Agent 使用场景。测试结果显示，Composer 2 准确率达 61.3%，实现了成本与精度的“帕累托最优”。

### 杨植麟的行业观点
文章后半部分重点介绍了 [[杨植麟]] 在中关村论坛的演讲：
-   **Scaling Law 的新解**：强调提升 Token 效率、扩展上下文长度（通过 [[注意力残差]] 架构）以及引入 [[agent集群]]。
-   **大模型训练第三阶段**：预测从 2026 年起，研发主体将从人转向 AI，AI 将自动合成任务、构建环境并探索架构，人类主要提供算力和 Token。

## 意义
此事件标志着开源基座模型（如 Kimi K2.5）在全球 AI 生态中的影响力日益增强，同时也展示了垂直领域模型通过工程化手段（RL、数据构建）在特定任务上超越通用大模型的可能性。