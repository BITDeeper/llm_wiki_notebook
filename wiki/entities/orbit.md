---
type: entity
title: Orbit
tags: [anthropic, mobile, agent, leak, 主动式助手, claude-cowork, 产品功能]
related: [claude-code, anthropic, 手机使用, claude-cowork, chatgpt-pulse, google-gemini-proactive-assistance, 主动式简报]
sources: ["claude深夜彻底「虾化」！一句话接管电脑打工，手机指挥7×24小时不停.md", "claude最新功能泄露！主动助手orbit接管一切工作.md"]
created: 2026-03-24
updated: 2026-05-08
---

# Orbit

**Orbit** 是 [[Anthropic]] 正在研发的下一代 AI 功能体系，包含**移动端控制**与**主动式助手**两大核心方向。该功能预计于 2026 年 5 月 6 日在 Code with Claude 开发者大会上正式发布，标志着 Claude 从“被动响应工具”向“主动服务助手”的关键演进。

## 移动端控制能力

尽管尚未正式发布，但开发者已在 Claude 移动端设置页面中发现了一个标注为“Beta”的 **Orbit** 开关。泄露的代码变更记录中新增了 `phone_use` 和 `phone_call_completed` 两个工具字段，预示着 Claude 将具备直接操作智能手机的能力。

### 潜在能力
- **读屏**：识别并理解手机屏幕上的内容。
- **APP 操作**：在复杂的移动应用界面间丝滑切换。
- **系统级操作**：拨打电话、预约餐厅等。

### 意义
Orbit 的出现标志着 [[claude-code]] 的能力边界从桌面端扩展到了移动端，实现了真正的全场景覆盖。结合 [[电脑使用]] 功能，Claude 正在成为一个能够控制用户所有屏幕的通用 Agent。

## 主动式助手系统

Orbit 同时也是一个跨平台的主动式简报与洞察系统，运行于 Web、Mobile 和 [[Claude Code]] 三个平台。

### 核心功能
- **主动式简报**：无需用户指令，自动整合多源信息生成每日摘要和行动建议。
- **多源数据集成**：通过连接器访问 Gmail, Slack, GitHub, Calendar, Drive, Figma 等工作工具。
- **个性化洞察**：基于用户工作流和时区，提供可操作的任务优先级建议。
- **Orbit Apps**：支持可部署、可收藏的应用形态。

### 技术实现
- **触发机制**：Opt-in（用户主动开启）+ 时区识别。
- **后台运行**：需要 7×24 小时持续推理，对基础设施成本要求极高。
- **代码证据**：功能标志位为 `tibro_enabled`（Orbit 的反向拼写），表明已准备好灰度部署。

## 差异化竞争

与 [[ChatGPT Pulse]] 和 [[Google Gemini Proactive Assistance]] 不同，Orbit 显式集成了 **GitHub** 和 **Figma**。这一设计使其目标用户从传统的邮件/日历办公人群（高管），扩展至产品研发团队（开发者、设计师、产品经理）。

## 商业策略

Orbit 预计将仅限 **Max 订阅用户**使用，这与 [[Claude Code]] 和 [[Claude Cowork]] 的高端功能策略一致。这种分层定价反映了主动助手的高昂算力成本。

## 行业意义

Orbit 的发布标志着 AI 行业从“工具”向“助手”进化的明确信号。它不再等待用户提问，而是主动替用户“看完今天该看的东西”，直接给出结论和建议。这要求 AI 具备极高的产品判断力（推什么、何时推），而不仅仅是模型能力。