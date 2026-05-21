---
type: entity
title: Sage 模型
tags: [端侧模型, 多模态, agent, moe]
related: [商汤绝影, pinchbench, tau2-bench, scout, erl, orinx]
created: 2026-04-22
updated: 2026-04-22
sources: ["3b激活参数！商汤绝影sage登顶pinchbench，端侧第一.md"]
---

# Sage 模型

Sage 是 [[商汤绝影]] 发布的端侧多模态智能体基座大模型。它旨在打破“只有大模型才能做好 Agent 任务”的行业认知，通过架构创新和后训练技术，在有限的端侧算力下实现了超越云端旗舰模型的 Agent 任务完成率。

## 模型架构
- **架构类型**：MoE (Mixture of Experts)
- **参数规模**：总参数 32B，激活参数 3B。
- **部署平台**：NVIDIA [[OrinX]]。
- **性能指标**：首字响应（TTFT）约 0.5s，单 Token 推理延迟（TPOT）低至 0.03s，生成吞吐达到 80tk/s。

## 核心技术
Sage 的性能优势主要得益于两项自研的后训练技术：
1. **[[scout]]** (Sub-Scale Collaboration on Unseen Tasks)：分级协同学习框架。通过“探路与吸收解耦”，利用小模型快速探索高价值路径，再喂给大模型学习，节省约 60% 算力。
2. **[[erl]]** (Erasable Reinforcement Learning)：可擦除强化学习。允许模型在推理过程中自动识别并“擦除”错误步骤，阻断偏差扩散，提升任务完成率 20%。

## 评测表现
- **PinchBench**：任务完成率 **94%**，超越 Claude-Opus-4.6 (93.3%) 和 GPT-5.4 (90.5%)。
- **τ2-bench**（工具调用）：得分 80，较同级端侧旗舰 Gemma4 提升 38%。
- **Human Semantic Understanding**（座舱语义）：得分 91，较 Gemma4 提升 32%。
- **MMLUPro**（跨学科知识）：得分 76，领先同级端侧模型约 10%。

## 应用场景
Sage 不仅是语音助手，而是具备主动感知和复杂任务执行能力的智能体：
- **复合指令解析**：一次性联动空调、导航、音乐等多个系统。
- **主动感知**：如检测到后排儿童自动触发儿童模式（锁窗、切换内容）。
- **实时决策**：结合路况主动提出备选路线方案。

## 生态兼容
Sage 可接入 [[OpenClaw]]、[[Hermes Agent]] 等主流 Agent 框架，作为端侧基座支持全场景智能体部署。