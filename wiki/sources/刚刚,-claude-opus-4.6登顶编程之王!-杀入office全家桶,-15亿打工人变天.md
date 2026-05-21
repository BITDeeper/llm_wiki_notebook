---
type: source
title: "刚刚, Claude Opus 4.6登顶编程之王! 杀入Office全家桶, 15亿打工人变天"
tags: [anthropic, claude-opus-4.6, office, agent-swarms, 编程]
related: [claude-opus-4.6, 智能体群, claude-code, 上下文衰减, 自适应思考]
created: 2026-02-06
updated: 2026-02-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/ye1wgqEk9WmsO_u6NOkf4Q"
venue: "新智元"
sources: ["刚刚,-claude-opus-4.6登顶编程之王!-杀入office全家桶,-15亿打工人变天.md"]
---

# 刚刚, Claude Opus 4.6登顶编程之王! 杀入Office全家桶, 15亿打工人变天

## 摘要
Anthropic 发布 [[claude-opus-4.6]]，在多项编程基准测试中超越 [[Gemini 3 Pro]] 和 [[GPT-5.2]]，成为新的“编程之王”。该模型支持 100 万 Token 上下文，并深度集成至 Office 全家桶（Excel、PPT、Word），旨在重塑 15 亿知识工作者的工作方式。同时，[[claude-code]] 引入 [[智能体群]] 功能，通过多智能体协作完成复杂任务。

## 核心要点

### 模型性能与基准
- **编程能力登顶**：在 Terminal-Bench 2.0 拿下 65.4 分，在 GDPval-AA 中比 GPT-5.2 高出约 144 Elo 分。
- **ARC-AGI-2**：得分 68.8%，超越 GPT-5.2-xhigh。
- **长上下文能力**：首款支持 100 万 Token 输入和 128k Token 输出的 Opus 级模型。
- **抗衰减能力**：在 MRCR v2 的“大海捞针”测试中得分 76%（Sonnet 4.5 仅为 18.5%），显著缓解了 [[上下文衰减]] 问题。

### 办公集成与知识工作重塑
- **Office 全家桶集成**：Opus 4.6 同步上线 Excel、PPT 和 Word。
    - **Excel**：遍历文件夹抓取数据差错，同步绘制图表。
    - **PPT**：实时调用，确保布局、字体符合品牌规范。
- **效率提升**：在真实金融任务测试中，比 Sonnet 4.5 提升了 23% 以上。
- **影响范围**：针对全球约 15 亿 Office 用户，引发深层办公效率变革。

### 智能体群与工程突破
- **Agent Swarms**：[[claude-code]] 新增“团队编排”功能，允许一个主智能体统筹多个子智能体并行处理任务。
- **C 编译器实验**：Anthropic 进行了极端测试，让 16 个 [[claude-opus-4.6]] 在无人类干预下协作编写 C 编译器。
    - **消耗**：近 20 亿输入 Token，约 2 万美元 API 成本。
    - **成果**：产出 10 万行代码，成功编译 Linux 6.9 内核及运行 Doom、PostgreSQL 等项目。

### 新特性与安全
- **自适应思考**：模型能根据上下文线索自动判断何时使用扩展思考。
- **Effort 控制**：允许开发者调节思考力度（高/中），以平衡智能、速度和成本。
- **安全性**：保持了低过度拒绝率，在提升能力的同时未牺牲安全性。

## 关键引述
- **Alex Albert** (Anthropic): "Claude 在 2025 颠覆了编程，在 2026 年将彻底重塑知识型工作。"
- **Boris Cherny** (Claude Code 之父): 警告智能体群功能尚在实验阶段，可能会消耗大量 Token。

## 竞争格局
- **OpenAI**：在 Opus 4.6 发布后紧急推出 GPT-5.3-Codex 应战。
- **Google**：Gemini 3 Pro 在多项基准中被全面超越。

## 来源
- [新智元原文](https://mp.weixin.qq.com/s/ye1wgqEk9WmsO_u6NOkf4Q)
- [Anthropic 官方公告](https://www.anthropic.com/news/claude-opus-4-6)