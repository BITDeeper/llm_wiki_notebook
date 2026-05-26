---
type: entity
title: SkyClaw-v1.0
created: 2026-05-26
updated: 2026-05-26
tags: [agent模型, 昆仑万维, 天工ai, 国产大模型, 高性价比, 开源]
related: [昆仑万维, 天工ai, openclaw, agent模型训练范式, claude-code, skyclaw-v1-lite, agent原生训练, hermes-agent, tokenmaxxing, agent-pack]
sources: ["后openclaw时代！国产agent模型凭「高配低价」叫板opus-4.6.md", "ai公司烧不起token了！国产agent杀出，逼近opus-4.6还免费.md"]
origin_date: 2026-05-22
---
# SkyClaw-v1.0

[[昆仑万维]]旗下天工AI（Skywork）于2026年5月发布的高性能Agent基座模型，定位为"顶级Agent能力+极致性价比+低门槛落地"三位一体，直接对标 [[claude-opus-4-6|Claude Opus 4.6]] 等海外闭源顶流。

## 产品形态

- **SkyClaw-v1.0**：完整版，专为 [[openclaw|OpenClaw]]、[[claude-code|Claude Code]]、[[hermes-agent|Hermes]]、Nanobot 等主流智能体框架深度优化。
- **SkyClaw-v1.0-lite**（[[skyclaw-v1-lite]]）：轻量化版本，瞄准高频调用和成本敏感场景，保持核心智能体能力的同时优化推理速度与资源开销。

## 性能表现

在主流智能体基准测试中表现突出：

- **PinchBench**、**Claw-Eval Pass³**、**Skywork-Claw-Bench**（基于 OpenClaw 构建的内部评估套件）上均优于 Minimax 2.7、DeepSeek V4 Flash、Qwen 3.6 35B A3B/27B。
- 在 OpenClaw 相关任务上性能逼近更大规模模型，包括 DeepSeek V4 Pro、Claude Opus 4.6、Qwen 3.6 Plus。
- **注意**：性能数据为厂商自报，缺乏独立第三方验证。

## 实测能力

通过 [[hermes-agent|Hermes Agent]] 等框架进行实测，展示以下能力：

- **交互式网页与游戏生成**：能输出功能齐全的网页应用，包括物理模拟和完整游戏（如中国象棋，含AI对手），渲染正确、动画流畅。
- **深度研究与数据可视化**：能自主研究现实课题（如AI编程工具全景竞品分析），从多来源收集交叉验证数据，整合为交互式仪表盘和报告。
- **复合办公任务**：能同时输出文档、PPT和视频，执行全局规划与跨格式协调（如读书分享会、商业汇报PPT一键生成）。
- **完整App开发**：能独立完成小红书风格社交应用等完整应用的开发。

## 定价策略

定价显著低于主流 Agent 模型，体现极致性价比：

- 仅为 Minimax 2.7 和 Qwen 3.6 系列的一半甚至更低。
- 输入价格仅为 DeepSeek V4 Pro 的 1/24，输出价格仅 1/6。
- 输入价格约为 Sonnet 4.6 的 1/43，输出价格约 1/27。
- 2026年5月26日起开放 2-4 周限时免费试用。
- 免费期结束后承诺逐步开源各版本模型。

## 技术架构

采用 [[agent原生训练|三阶段Agent原生训练]] 体系（详见 [[agent模型训练范式]]）：

1. **环境构建**：基于 [[openclaw|OpenClaw]] 模拟环境，构建工具关系图谱，内置丰富工具和技能，基于真实用户行为合成贴近真实需求的复杂任务。
2. **中期训练与监督微调（Mid-Training + SFT）**：合成海量高质量训练数据，引入 [[轨迹质量评估]] 机制——不仅评估最终答案正确性，还评估整个任务解决过程中轨迹的质量；建立严格过滤和评估机制，进行数据配比实验。
3. **端到端Agent强化学习（RL）**：在 OpenClaw 环境中进行端到端 RL 训练，利用自建环境的端到端探索与反馈能力，提升泛化能力和稳定性。

## 生态接入

- 2026年5月22日接入 Skywork 平台。
- Nanobot 已率先完成适配。
- 后续将上线 OpenRouter。
- 通过 [[apifree-ai]] 平台提供 OpenAI 兼容 API 接口，支持流式输出、工具调用、多轮对话等核心功能。

## 竞争与生态定位

- 与 [[agent-pack]]（商汤）形成竞争，同属"Agent模型+框架打包"路线。
- 以 [[openclaw|OpenClaw]] 为核心训练基础设施，深化了 OpenClaw 的生态地位。
- 在 [[hermes-agent|Hermes Agent]] 框架下完成实测验证。