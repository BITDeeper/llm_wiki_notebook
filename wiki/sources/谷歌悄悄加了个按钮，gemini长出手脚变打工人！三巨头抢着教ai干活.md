---
type: source
title: "谷歌悄悄加了个按钮，Gemini长出手脚变打工人！三巨头抢着教AI干活"
tags: [google, gemini, agent, anthropic, openai, orchestration]
related: [gemini, agent-designer, claude-cowork, 编排层, 任务执行范式]
created: 2026-04-16
updated: 2026-04-16
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/1Z2H_SA0Hkv2yv8kxyiG2Q"
venue: "新智元"
sources: ["谷歌悄悄加了个按钮，gemini长出手脚变打工人！三巨头抢着教ai干活.md"]
---

# 摘要

本文报道了谷歌在 Gemini 平台上的重大战略转型，通过引入“Agents”一级入口和 [[Agent Designer]] 工具，将 Gemini 从单纯的聊天助手升级为 Agent 运行平台。文章对比了谷歌、Anthropic 和 OpenAI 在 [[编排层]] 上的不同路线（平台化 vs 工具化），指出 AI 竞争焦点已从模型智商转向工程落地与分发规模。

# 核心内容

## Gemini 的 Agent 化转型
- **界面变革**：TestingCatalog 抓取的截图显示，Gemini 新增了与 Chat、Gems 并列的“Agents”标签页。
- **功能升级**：新界面包含“新建任务”、“目标”、“已连接的应用”和“人工审核”开关，标志着从“你问我答”到“你下任务、它来执行”的范式转移。
- **产品整合**：[[Agentspace]] 并入 [[Gemini Enterprise]] 成为核心引擎，NotebookLM 增加音频/视频处理能力，Chrome 上线 Auto Browse。

## Agent Designer：无代码构建工具
- **定位**：交互式的无代码/低代码平台，用于创建、管理和发布单步及多步 Agent。
- **关键能力**：
  1. **多步骤编排**：支持 Agent 嵌套子 Agent 形成工作流。
  2. **连接真实工具**：集成 Gmail、Drive、Jira、GitHub 等企业应用。
  3. **定时执行**：支持后台自动运行任务。

## 编排层三国杀
文章详细对比了三巨头在 Agent 编排层的战略差异：

| 公司 | 路线 | 核心逻辑 | 优势 | 短板 |
| :--- | :--- | :--- | :--- | :--- |
| **谷歌** | **平台化** | 将 Agent 能力嵌入 Workspace、Search 等既有产品矩阵。 | 依托 20 亿+用户的触达能力和分发网络。 | 依赖生态，创新可能受限于旧有产品形态。 |
| **Anthropic** | **工具化** | 通过 [[Claude Cowork]] 直接操作本地文件和应用，模型原生支持工具调用。 | 执行力强，上限高，不依赖特定平台生态。 | 缺乏消费级产品矩阵，大规模分发能力较弱。 |
| **OpenAI** | **生态并举** | 通过 GPTs/GPT Store 扩大供给，API 侧提供 Agents SDK。 | 平衡了开发者需求与 C端分发。 | 生态活跃度与分发效率仍需验证。 |

# 关键论点

1. **大脑与手脚**：大模型只是“大脑”，[[编排层]] 才是让 AI 长出“手脚”的关键。
2. **竞争焦点转移**：决定胜负的关键不再是“谁的模型更聪明”，而是“编排层的易用性”和“分发规模”。
3. **分发即胜利**：在 Agent 时代，将技术触达最终用户的能力（分发能力）的重要性正在超过模型跑分。

# 亮点引用

> “Gemini Enterprise 让团队在一个安全平台上发现、创建、分享和运行 AI Agent。” — 谷歌官网定义变更

> “谷歌的竞争力，从来不只是某一个模型版本，而在于它背后那套完整的全栈能力。” — Sundar Pichai