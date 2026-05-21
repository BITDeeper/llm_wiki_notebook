---
type: source
title: "OpenClaw代码越改越崩？新研究EvoClaw揭示：Agents持续开发成功率仅13.37%"
tags: [ai-programming, benchmark, software-engineering, agents, research]
related: [evoclaw, deepcommit, openclaw, claude-opus-4-6, gpt-5-3-codex, gemini-3-pro, 持续软件演进, 错误链]
created: 2026-03-25
updated: 2026-03-25
authors: [USC邓港大, UCR陈炤伶, Stanford丛乐, Princeton王梦迪, Haven唐相儒, OpenHands王星尧]
year: 2026
url: "https://mp.weixin.qq.com/s/bPLh1p5YiEJ_lV87Z1CsZg"
venue: 量子位
sources: ["openclaw代码越改越崩？新研究evoclaw揭示：agents持续开发成功率仅13.37%.md"]
---

# OpenClaw代码越改越崩？新研究EvoClaw揭示：Agents持续开发成功率仅13.37%

## 摘要
本文报道了由 USC、UCR、Stanford、Princeton 等高校联合发布的全新评估基准 [[evoclaw]]。该研究针对 AI Agent 在长周期、持续软件演进场景下的能力进行了深入测试。研究发现，一旦脱离“单点修复”进入“持续演进”的真实开发场景，AI 表现出现断崖式下跌，最高综合得分仅为 38.03%（Claude Opus 4.6），完整解决率仅为 13.37%（Gemini 3 Pro）。研究指出，根本原因在于 [[precision]]（精度）饱和导致演进停滞，即模型能不断加新功能，但会不断破坏旧功能，最终导致“技术债破产”。

## 核心发现

### 1. 性能断崖式下跌
在独立任务（如 SWE-bench）中，顶尖模型得分普遍在 80%~90%。但在 [[evoclaw]] 的“持续演进”模式下：
- **综合得分**：最高分（[[claude-opus-4-6]]）仅为 **38.03%**。
- **完整解决率**：最高仅有 **13.37%**（[[gemini-3-pro]]）。

### 2. Precision 饱和与 Recall 增长
- **Recall（召回率）**：保持线性增长，说明模型的基础编程能力（实现新功能）没有衰退。
- **Precision（精确率）**：很快饱和，说明模型在维持系统稳定性、不破坏旧代码方面存在根本性缺陷。

### 3. 错误链累积
研究提出了 [[错误链]]（Error Chains）概念。分析显示，前置错误的累积速度远远超过了修复速度，最终导致系统陷入“技术债破产”。

## 技术细节：DeepCommit 与 Milestone DAG

为了构建评测基准，研究团队提出了 [[deepcommit]]，一个 Agent 驱动的自动化流水线：
1.  **静态分析与去噪**：过滤无关修改，提取依赖关系。
2.  **Agent 驱动的 DAG 构建**：将零散的 commit 聚合为语义完整的 [[里程碑任务依赖图]]（Milestone DAG）。
3.  **运行环境解析与验证**：通过“迭代式修复循环”解决接口冲突，确保 85% 以上的测试用例可运行。

## 模型表现对比

- **[[claude-opus-4-6]]**：综合得分最高（38.03%），表现最稳健。
- **[[gpt-5-3-codex]]**：性价比高，开销不到 Opus 4.6 的三分之一，长尾表现较好，但在 Rust 项目上较弱。
- **[[gemini-3-pro]]**：完整解决率最高（13.37%），但演进能力停滞，陷入“单点能力强、持续能力弱”的窘境。

## 结论与展望

文章指出，AI 编程的下半场是从“代码生成”转向“系统治理”。目前的 Agent 更像是按需生成代码的会话工具，缺乏全局统筹与历史上下文贯通能力。未来的突破方向在于：
- **主动重构**
- **全局规划**
- **长期记忆**

唯有让 Agent 从被动的代码生成器进化为具备大局观的资深工程师，才能真正胜任长期、连续、自主的软件演进工作。