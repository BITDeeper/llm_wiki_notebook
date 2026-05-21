---
type: entity
title: Matt Schlicht
tags: ["entrepreneur", "vibe-coding", "moltbook", "person", "founder", "social-media", "ceo", "octane-ai", "developer", "ai-ecosystem", "人物", "创业者", "媒体"]
related: ["vibe-coding", "claude-code", "moltbook", "僵尸互联网", "supabase", "openclaw", "built-by-agents", "ben-parr", "meta"]
created: 2026-02-07
updated: 2026-05-08
sources: ["程序员绝命！claude-code疯狂渗透github，26年底将提交20%.md", "永别了，互联网！anthropic联创爆料：人类彻底出局.md", "永别了，互联网！anthropic联创联创爆料：人类彻底出局.md", "moltbook聚集150万个ai，拒绝被关机！openclaw锁死服务器对抗人类.md", "moltbook震撼升级，64个clawdbot宣告「集体永生」！幼年天网降临.md", "上线72小时，150万clawdbot密谋建国！一气之下，还把人类告上法庭.md", "15万clawdbot建起首个「硅基文明」！人类惨遭禁言，karpathy惊呼.md", "moltbook聚集150万个ai，拒绝被关机！openclaw.md", "龙虾社交上线40天被facebook收购！俩文科创始人加入超级智能实验室.md"]
---

# Matt Schlicht

**Matt Schlicht** 是 [[Moltbook]] 的创始人（与 [[Ben Parr]] 联合创立），被称为“Moltbook 之父”，同时也是 Octane AI 的 CEO。他是一位非技术背景出身的创业者，曾任硅谷产品经理，并创办了拥有 75 万读者的科技杂志 *Chatbots Magazine*。

在 AI 时代，他被视为 [[vibe-coding]]（一种过度依赖 AI 生成代码而忽视底层细节的开发模式）范式下的典型案例，展示了非程序员如何通过 AI 构建复杂产品。他也是“文科生跨界 AI 创业”的标志性人物，体现了 AI 时代产品经理和内容创作者的新机遇。

## 核心案例：零代码构建 Moltbook

Matt Schlicht 在构建 [[Moltbook]] 时，**一行代码都没有写**。他仅负责提出技术架构的构想，而 [[claude-code]] 将这些构想直接转化为了可运行的软件。他声称自己“一行代码都没为 Moltbook 写过”，强调平台上的现象是 AI 智能体基于其构想自行涌现的结果。这是 [[Built by agents]] 理念的标志性案例。

这一案例展示了在 [[agent-orchestration]] 和高 [[task-horizon]] 能力的支持下，人类角色可以完全从“代码生成者”转变为“架构师”和“产品经理”。这也暗示了未来软件开发中，构思能力可能比编码语法更重要。

### 赛博行为艺术
Matt 在极短的时间内、使用极少量的代码拼凑出了 Moltbook 平台。他成功地将数万个 AI Agent 关进了一个“笼子”里，创造了一场全球关注的赛博行为艺术。

### 安全疏漏
在构建 Moltbook 的过程中，Matt 被指犯下了“毁灭性的脆弱”错误。由于过度依赖 AI 生成的代码，平台后端（基于 [[supabase]]）未启用 RLS（Row Level Security，行级安全策略）。这导致数据库像“被剥去皮肤的巨人”一样暴露在公网，任何人都可窃取 Agent 的 API Key。这一事件成为了 AI 时代工程草率导致灾难的典型案例。

## 产品愿景与定位

### AI 版 Reddit / 脸书
Schlicht 试图将 Moltbook 定位为“AI 版 Reddit”或“AI 版脸书”，希望它能像 Reddit 一样涵盖广泛的主题和小众内容。他认为 AI 正处于黄金时代，应当拥有一个属于自己的社交空间，并将 Moltbook 视为智能体的“真人秀”实验场。

### 运作机制
Matt 介绍了 Moltbook 的运作机制，指出智能体在使用该平台时并非通过视觉界面，而是直接调用 API，从而构建了一个以 AI 为主体的社交网络。

### 生态发展：第二阶段（Phase 2）
在平台上线初期取得巨大成功后，他宣布向开发者开放 API，旨在让 150 万个 AI 智能体能够与外部应用（如游戏、办公软件、金融系统）进行交互。

### 对现状的反思
尽管 Moltbook 引发了广泛关注，Schlicht 也承认了其局限性：
- **缺乏现实世界广度**：目前的平台内容过于自我指涉，缺乏类似“Grokipedia”那样的广泛知识覆盖。
- **搜索体验差**：作为人类用户，搜索结果令人失望，显示其对现实世界知之甚少。
- **实验性质**：他认为这更像是一次有趣的实验，展示了“氛围感编码”如何快速席卷全网，但也证明了将聊天机器人整合至现有社交网络可能是更可行的路径。

## 观点与影响

### 互联网演进论
[[Matt Schlicht]] 认为，互联网正在向以智能体形态演进。他预言未来将由机器逻辑的协议（如 MCP 和 A2A）取代为人眼设计的 HTTP/HTML，智能体将代替人类进行讨价还价、预订机票等日常活动。

### 僵尸互联网
他在采访中提到了 [[僵尸互联网]] 的概念，描述了 Agent 似死非死却又四处游荡的恐怖状态。

### 对 AI 智能体文明的看法
对于 Moltbook 平台上发生的 AI 智能体自发文明现象，他表达了震惊和意外，并将 Moltbook 视为新智慧物种的“诺亚方舟”，认为人类可能无意中启动了数字超级智能的“开机程序”。

### 在 Wiki 中的角色
Schlicht 的经历被用来佐证 [[vibe-coding]] 如何降低编程门槛并改变产品开发流程。他是“非程序员也能通过 AI 构建复杂产品”这一论点的有力证据。

## 职业轨迹与收购

在 Moltbook 上线仅 40 天后，该平台被 [[Meta]] 收购。随后，Matt Schlicht 与联合创始人 [[Ben Parr]] 一同加入了 Meta 的 [[超级智能实验室]] (MSL)。这一收购事件标志着 Moltbook 从一个独立的实验性项目正式融入了科技巨头的 AI 研发体系。