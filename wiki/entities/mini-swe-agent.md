---
type: entity
title: mini-SWE-agent
tags: [tool, framework, agent, benchmarking, 评测框架, ai编程, harness]
related: [swe-bench, programbench, john-yang, deepswe, datacurve]
created: 2026-05-06
updated: 2026-05-27
sources: ["刷榜ai全挂了！meta斯坦福地狱级测试，gptclaudegemini交出0分.md", "gpt-5.5反杀claude登顶，ai编码旧榜不准了？.md"]
---

# mini-SWE-agent

**mini-SWE-agent** 是一个极简的 AI 智能体脚手架（Harness）工具，被用于 [[ProgramBench]] 的测试环境，同时也是 [[deepswe]] 评测基准统一使用的 Harness，为所有模型提供相同的 bash 工具和同一套提示词。

## 设计特点

- **极简配置**：没有上下文压缩、没有多 Agent 协作、没有定制化工具链。
- **设计目的**：将"模型能力"与"外围脚手架"分离，提供一个标准化的测试环境，以纯粹考察模型本身的代码生成、理解与修改能力，排除外部工具和不同工具链带来的干扰，确保评测反映的是模型本身的能力而非外围差异。

## 争议

不同模型家族训练时适配的工具形态不同，统一 Harness 可能将每家模型都按在其原生上限之下。[[deepswe]] 团队用 10 道 SWE-Bench Pro 任务做了对照实验，mini-SWE-agent 的通过率与 token 消耗不输 Claude Code、Codex CLI、Gemini CLI 等原生 Harness，但 10 道题的样本量不足以完全消除质疑。