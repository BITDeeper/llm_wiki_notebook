---
type: concept
title: Harness（工程外壳）
created: 2026-05-18
updated: 2026-05-18
tags: [agent, 工程架构, deepseek, 产品化]
related: [任务执行范式, deepseek-v4, agent桌面端产品, context-engineering]
sources: ["deepseek开招harness产品经理！「参与agent桌面端产品全过程」.md"]
---
# Harness（工程外壳）

Harness是让Agent可靠工作的"工程外壳"。核心公式为：

**Model + Harness = Agent**

## 定义

模型（Model）负责生成，而Harness负责**约束、验证、纠错和收敛**。Harness涵盖了除模型本身以外的所有工作，是将前沿模型能力转化为可用Agent产品的关键工程层。

## 核心职责

- **约束**：限定Agent的行为边界，防止失控输出
- **验证**：检查Agent输出是否符合预期
- **纠错**：在Agent出错时进行修正
- **收敛**：确保Agent任务向正确方向收敛完成

## 与相关概念的关系

Harness Engineering与Prompt Engineering、Context Engineering并列为Agent工程化的三大课题。如果说Prompt Engineering关注如何向模型提问，Context Engineering关注如何管理上下文，那么Harness Engineering关注的是如何构建完整的工程约束体系，使Agent在真实场景中可靠运行。

## 行业意义

2026年，Harness成为AI年度热词之一。DeepSeek正式组建Harness团队并招聘产品经理，标志着行业从"模型竞赛"进入"模型+产品双轮驱动"的新阶段。这与[[任务执行范式]]的判断一致——AI行业正从单纯模型开发转向智能体工程化系统。

## 代表产品

[[claude-code]]、Codex、Claude Cowork、[[cursor]]、[[openclaw]]、[[hermes-agent]]、Manus等均属于桌面端Agent产品，其核心竞争力不仅来自底层模型，更来自Harness层的工程质量。