---
type: entity
title: DiagnosisArena
created: 2026-06-07
updated: 2026-06-07
tags: [评测基准, 医疗诊断, AI评测]
related: [graph-of-states, 溯因推理]
sources: ["icml-2026｜让-agent-真正协同作战：gos-为多智能体推理构建共享信念状态.md"]
---
# DiagnosisArena

医疗诊断评测基准，用于评估 AI 系统在医疗诊断任务中的推理能力。

## 在 GoS 中的使用

[[graph-of-states|GoS]] 论文对 DiagnosisArena 进行了关键改造：不再一开始就提供完整辅助检查结果，而是只给病人主诉和基础体格检查，让智能体像真实医生一样主动申请检查、逐步获取外部信息，再完成诊断。这一改造恢复了"主动取证、动态推理"的[[溯因推理]]本质。

GoS 在改造后的 DiagnosisArena 上取得了 39.86% Match 和 78.99% Relevant 的成绩。