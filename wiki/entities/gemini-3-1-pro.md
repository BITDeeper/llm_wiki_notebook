---
type: entity
title: Gemini 3.1 Pro
tags: [google, llm, agent, model, gemini, multimodal, ai-model, code-generation, benchmark, reasoning, computer-use, 大语言模型, 推理模型]
related: ["google-deepmind", "deep-research-max", "test-time-compute", "gpt-5.4", "claude-opus-4-6", "arc-agi-2", "gpt-5-2", "姚顺宇", "svg-生成", "原生全模态输入", "qwen3-5-omni", "gpt-5.2", "google", "programbench", "claude-opus-4-7", "gpt-5-4", "gemini", "pareto-front", "saas-bench", "computer-use-agent", "alphaproof-nexus", "gemini-3-0-flash"]
sources: ["谷歌掀桌：深度研究智能体进入自动驾驶时代.md", "openai深夜祭出gpt-5.4，暴击claude！原生操控电脑，打工人悬了.md", "谷歌gemini-3.1-pro屠榜封神，清华姚顺宇出手！claude和gpt被逼入死角.md", "实测拿215项sota的qwen3.5-omni：摄像头一开，ai给我现场讲论文、撸代码.md", "刷榜ai全挂了！meta斯坦福地狱级测试，gptclaudegemini交出0分.md", "谷歌突发gemini-3.1-pro！首次采用「.1」版本号，推理性能×2的那种.md", "claude-通过率不到-4%，saas-bench-撕碎了-computer-use-的「全自动办公」幻想.md", "谷歌掀桌：深度研究研究智能体进入自动驾驶时代.md", "一个问题几百美元，deepmind智能体一次搞定了9个erdős问题.md"]
created: 2026-04-30
updated: 2026-05-25
---

# Gemini 3.1 Pro

[[Gemini 3.1 Pro]] 是由 [[google-deepmind]] 于 2026 年 2 月 20 日发布的大语言模型，作为 [[Gemini]] 3 Pro 的继任者。这是谷歌首次在模型命名中采用".1"版本号，标志着模型迭代速度的加快。它不仅是企业级 AI 工作流的关键底座，也是驱动 Deep Research 和 Deep Research Max 两款研究智能体的核心引擎，同时在 [[alphaproof-nexus]] 框架中担任基础智能体的底层推理引擎。

## 核心特性

### 推理能力飞跃
官方宣称其核心推理性能是前代 3 Pro 的 **2 倍**。在 [[ARC-AGI-2]] 抽象推理基准测试中取得了 **77.1%** 的成绩，性能达到上一代（3.0 Pro）的两倍以上。

### 原生全模态输入
模型原生支持图像、视频、音频等多种模态数据的输入处理，无需依赖外挂插件。这一特性使其在处理复杂的多模态任务时具备天然优势。

### 超长上下文窗口
支持高达 **100 万 Token** 的超长上下文输入，这是当时业界领先的指标。在 128k 长上下文测试（MRCR v2）中取得了 84.9% 的成绩。模型知识截止至 2025 年 1 月。

### 编程与生成能力
显著增强了 [[vibe-coding]] 体验，能够根据模糊提示生成复杂的代码（如《我的世界》生成器）。同时支持原生图表生成（通过 HTML 或 Nano Banana 技术），并能通过 [[mcp-协议]] 调用外部工具和数据源。

## 角色与定位

Gemini 3.1 Pro 在企业级 AI 工作流中扮演关键底座角色，支撑了从实时交互到异步重度任务处理的多种应用场景。

### 驱动双智能体
- **Deep Research**：利用 Gemini 3.1 Pro 的低延迟特性，提供快速的交互式研究体验。
- **Deep Research Max**：利用模型的扩展推理能力，配合 [[test-time-compute]]（测试时计算），实现高精度的复杂分析。

### 在 AlphaProof Nexus 中的角色
在 [[alphaproof-nexus]] 框架中，Gemini 3.1 Pro 担任基础智能体的底层推理引擎，具体职责包括：
- 通过"思考链"推理进行数学证明的宏观规划与微观推导
- 调用搜索和替换工具修改代码草图
- 利用 Lean 编译器的报错信息进行自我反思和修正
- 在多轮交互循环中不断迭代直至填补所有证明漏洞

实验表明，仅依赖 Gemini 3.1 Pro + Lean 编译器反馈循环的极简架构，就能解决所有 9 个 [[erdős问题]]。这证明了该模型的原生推理能力已达到研究级数学问题求解的水平，且在绝对客观的编译器反馈锚定下，通用大模型的推理效能正在展现出惊人表现。

### 成本效益（帕累托前沿）
该模型被视为推进了 [[pareto-front]]（帕累托前沿）。在保持高性能的同时，大幅降低了智能成本。完成一次 ARC-AGI-2 任务仅需约 **0.96 美元**，而 Gemini 3 Deep Think 的成本是其 10 倍，性能差异却极小。此外，其 API 调用成本仅为 Claude Opus 4.6 的一半不到，展现了极高的性价比。

## 性能基准

### 对比竞争对手
在 [[GPT-5.4]] 发布前，Gemini 3.1 Pro 曾被视为强有力的竞争者，并在多项关键指标上实现了对当时顶级模型（如 [[Claude Opus 4.6]] 和 [[GPT-5.2]]）的"断层领先"。然而，随着 GPT-5.4 的推出，Gemini 3.1 Pro 在计算机操控和综合办公能力方面的相对劣势逐渐显现。

在与 [[Qwen3.5-Omni]] 的实测对比中，Qwen3.5-Omni 在通用音频理解、推理、识别、翻译和对话方面超越了 Gemini 3.1 Pro，而在音视频理解能力方面总体达到 Gemini 3.1 Pro 水平。

| 基准测试 | Gemini 3.1 Pro | Claude Opus 4.6 | GPT-5.2 / GPT-5.3 | GPT-5.4 |
| :--- | :--- | :--- | :--- | :--- |
| **ARC-AGI-2** | **77.1%** | 68.8% | (未提及) | **83.3%** |
| **HLE (人类最后考试)** | **44.4%** | 40.0% | 34.5% | - |
| **LiveCodeBench Pro** | **2887 Elo** | (较低) | (较低) | - |
| **Terminal-Bench 2.0** | **68.5%** | - | 64.7% (GPT-5.3-Codex) | - |
| **APEX-Agents** | **33.5%** | 29.8% | 23.0% | - |

### 代码生成与开发风格
在 [[ProgramBench]] 测试中，Gemini 3.1 Pro 的平均通过率为 **36.6%**。分析显示其代码生成具有以下特征：
- **观察者模式**：使用了最多的 API 调用（94 次），其中 34.1% 的操作都在运行原版程序、观察输入输出行为。
- **函数长度**：生成的函数平均比人类长 62%，显示出逻辑堆砌而非模块化设计的倾向。

### SaaS-Bench 评测（Computer-Use 场景）
在 [[saas-bench|SaaS-Bench]] 评测中，Gemini 3.1 Pro 的完全通过分数（Resolved Score）为 **0%**——在 106 个真实办公任务中，没有一个任务能够完整走完全部检查点。这一结果补充了其在 [[computer-use-agent|Computer-Use Agent]] 场景中的能力画像，表明当前模型在真实 GUI 操作场景中仍面临巨大挑战。与 [[Gemini]] 在编程能力上追赶 [[claude-code|Claude Code]] 的叙事形成对比——编程场景的进展并未迁移到通用办公场景。

### 应用场景表现
在 Gemini 3.1 Pro 的驱动下，Deep Research Max 在 DeepSearchQA 基准测试中取得了 93.3% 的历史最高分，展示了其在长链推理和信息综合方面的强大能力。

## 应用能力展示

### SVG 生成与代码能力
模型在 [[svg-生成]] 方面表现出了惊人的能力，能够通过简单的文本提示生成复杂的可缩放矢量图形动画。这些动画不仅体积小、清晰度高，而且可直接嵌入网页。

### 复杂任务处理
- **实时数据看板**：能够整合公开 API（如国际空间站遥测数据）构建实时可视化界面。
- **3D 交互**：编写复杂的 3D 粒子特效（如椋鸟群舞），并结合手势追踪技术。
- **创意设计**：将抽象概念或文学作品转化为具体的代码实现（如《呼啸山庄》主题主页）。

## 可用性
目前已在 [[Gemini]] 应用和 API 中上线，Google AI Pro 和 Ultra 用户可在 [[NotebookLM]] 中使用。

## 研发团队
该模型的研发团队包括清华校友、Deep Think 团队成员 [[姚顺宇]]。