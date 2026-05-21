---
type: source
title: "Agent全链路成功率0%？首个真实DevOps基准曝致命短板｜ICLR'26"
created: 2026-02-27
updated: 2026-05-03
tags: [devops, benchmark, agent, iclr, software-engineering]
related: [devops-gym, 长程推理, 非python语言弱势, claude-code, deepseek-v4]
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/X5w6CDMkkIwomQ4a93rpFg"
venue: "新智元"
sources: ["agent全链路成功率0%？首个真实devops基准曝致命短板｜iclr'26.md"]
---

# Agent全链路成功率0%？首个真实DevOps基准曝致命短板｜ICLR'26

## 摘要
本文报道了由 UCSB、NUS 与 Berkeley 联合提出的首个针对 DevOps 全生命周期的端到端评估框架 [[devops-gym]]。该基准基于 30+ 个真实 Java 和 Go 项目的 700+ 个任务，测试了 AI Agent 在构建配置、监控、问题修复和测试生成四个核心阶段的能力。

实验结果显示，即使是 SOTA 模型（如 [[claude-code]]、OpenAI o4-mini、[[deepseek-v4]]），在构建任务上的成功率仅为 51.85%，监控任务仅为 20.56%。而在最关键的 **End-to-End Pipeline**（全链路流水线）任务中，所有模型的成功率均为 **0%**，暴露了当前 AI Agent 在 [[长程推理]]、动态系统理解以及 [[非python语言弱势]]方面的显著短板。

## 核心发现

1.  **全链路能力归零**：在要求 Agent 连续完成 Build → Monitor → Fix → Test 的串行任务中，所有顶级模型全军覆没，成功率 0%。
2.  **构建与监控是盲区**：Agent 擅长写代码，但难以处理复杂的环境配置（如依赖冲突）和渐进式的系统异常（如内存泄漏）。
3.  **语言鸿沟**：Agent 在 Java/Go 项目上的表现远低于 Python 项目，受限于预训练数据分布和编译复杂度。
4.  **注意力涣散**：在长周期的监控任务中，Agent 往往过度关注早期观测结果，忽略后续关键异常信号。

## 评测方法
[[devops-gym]] 采用了全容器化的隔离环境，兼容 [[terminalbench]] 格式，并实施了严格的去污染流程（移除 Git Metadata），确保了评测的公正性和真实性。

## 意义
该基准揭示了“AI 辅助编程”与“AI 辅助软件工程”之间的巨大鸿沟，指明了下一代 Agent 需要突破的方向：从单纯的代码生成转向对复杂软件系统的全生命周期治理。