---
type: source
title: "TACO: 让 CLI Agent 在自主迭代中学会丢掉无用上下文"
tags: [cli-agent, context-compression, self-evolution, terminal-bench]
related: [taco, 观测压缩, 任务执行范式, ai-subscription-crisis]
created: 2026-05-07
updated: 2026-05-07
authors: [Jincheng Ren, Siwei Wu, Yizhi Li]
year: 2026
url: "https://mp.weixin.qq.com/s/uqpkQ7VRXD80Tq5on-2MPg"
venue: "机器之心"
sources: ["taco-让-cli-agent-在自主迭代中学会丢掉无用上下文.md"]
---

# TACO: 让 CLI Agent 在自主迭代中学会丢掉无用上下文

本文介绍了由曼彻斯特大学、北京航空航天大学、香港科技大学及 MAP 研究团队联合提出的 **[[taco]]** (Terminal Agent Compression) 框架。该框架旨在解决 CLI Agent 在长程任务中面临的上下文“脏数据”堆积问题。

## 核心观点

随着代码智能从基础模型转向自主编码智能体，CLI/终端成为进入真实软件工程工作流的关键入口。然而，长程任务中的瓶颈往往不在于上下文窗口不足，而在于上下文在多轮交互中积累了大量低价值的“脏数据”（如安装日志、编译流水），导致关键线索（如错误信息、编译参数）被淹没。

## 解决方案：TACO 框架

TACO 是一个无需训练、即插即用的自进化观测压缩框架。它不依赖静态截断或 LLM 实时总结，而是通过真实交互轨迹学习“压缩规则”。

### 关键机制

1.  **Terminal Output Compression**：根据规则过滤低价值信息，同时保留错误和关键诊断信息。
2.  **Intra-Task Evolution**：在任务中动态生成新规则，并检测“过度压缩”信号（如 Agent 重复请求完整输出）以修正规则。
3.  **Global Rule Pool Evolution**：将验证有效的规则沉淀到全局规则池，供后续任务复用。

## 实验结果

在 [[terminalbench]] 1.0/2.0 以及 SWE-Bench Lite、CompileBench 等多个基准测试中，TACO 在提升任务成功率的同时降低了 Token 消耗。实验表明，TACO 提高了上下文中的“有效信息密度”，而非单纯节省空间。

## 收敛性指标

论文提出了 **Retention (规则保留率)** 指标，用于衡量相邻两轮演化中 Top-K 规则的重合比例。当 Retention 趋于稳定（>90%）时，表明系统已学到一组稳定可复用的压缩规则。

## 意义

TACO 通过让 Agent 学会丢掉无效观察，解决了 [[任务执行范式]] 中的具体工程瓶颈，同时也为应对 [[ai-subscription-crisis]] 提供了通过技术手段降低 Token 消耗的路径。