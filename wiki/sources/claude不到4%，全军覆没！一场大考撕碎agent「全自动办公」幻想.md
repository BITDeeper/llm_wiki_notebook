---
type: source
title: "Claude不到4%，全军覆没！一场大考撕碎Agent「全自动办公」幻想"
created: 2026-05-25
updated: 2026-05-25
tags: [agent评测, computer-use-agent, saas-bench, 全自动办公, ai办公]
related: [saas-bench, unipat-ai, computer-use-agent, 任务执行范式, 产业深水区]
sources: ["claude不到4%，全军覆没！一场大考撕碎agent「全自动办公」幻想.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/L1tXbZqhXnLss9rq74kzsA"
venue: 新智元
---
# Claude不到4%，全军覆没！一场大考撕碎Agent「全自动办公」幻想

## 摘要

新智元关于 [[unipat-ai|UniPat AI]] 发布 [[saas-bench|SaaS-Bench]] 评测基准的深度报道。该评测包含 23 个开源 SaaS 系统、106 个真实办公任务，对主流 Computer-Use Agent 进行了系统性实战测试。结果显示：最强的 Claude Opus 4.7 端到端完全通过率仅 3.8%，Kimi K2.5 和 Gemini 3.1 Pro 完全通过率为零。报道揭示了 Agent 在真实办公场景中的四种结构性失败模式，撕碎了"全自动办公"的行业幻想。

## 核心发现

1. **全军覆没**：最强模型端到端完全通过率仅 3.8%，106 个任务仅完成 4 个
2. **四种结构性失败**：越往后越做不对、一步错步步错、做完不检查、执行极不稳定
3. **复杂度惩罚**：跨应用数从 1 增至 4，平均分从 53% 降至 20%
4. **多次运行有限改善**：Pass@3 相比 Pass@1 整体提升约 8 个百分点

## 关键论点

- 当前 Agent 的 Benchmark 成绩与真实工作能力之间存在巨大鸿沟
- 四种失败模式指向同一底层事实：Agent 缺少对持久状态的有效推理能力
- 未来方向是软件本身要为 Agent 重新设计，而非让 Agent 学会操作人类软件

## 与 Wiki 的关联

- 为 [[任务执行范式]] 提供了关键实证数据，揭示当前 Agent 范式的深层局限
- 与 [[vlm质检闭环]] 形成呼应，证明 Agent 执行流程中嵌入验证环节的必要性
- 与 [[断点续跑]] 形成对照，从反面论证中间产物持久化的价值
- 是 [[产业深水区]] 概念的典型案例：Benchmark 成绩虚高，应用闭环远未跑通