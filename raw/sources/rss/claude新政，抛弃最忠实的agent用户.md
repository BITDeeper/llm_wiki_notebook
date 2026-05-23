---
title: "Claude新政，抛弃最忠实的Agent用户"
date: 2026-05-14
source: "新智元"
url: "https://mp.weixin.qq.com/s/uJjDf24dwRfPguaY-_i3fQ"
rss_id: "2652700491_1"
---
新智元报道
编辑：艾伦
【新智元导读】
Anthropic 将 Agent SDK 用量从订阅中剥离，按 API 零售价另给固定额度。重度用户的可用量缩水近十倍。同一周，OpenAI 向企业用户推出 Codex 两个月免费迁移。ASI 决赛圈的第一场定价战，开打了。
Anthropic 把程序化调用从「自助餐」改成了「定量配给」。
6 月 15 日起，claude -p、Agent SDK、GitHub Actions，以及 OpenClaw、Hermes 等第三方工具的调用，全部从订阅限额中剥离。
https://x.com/ClaudeDevs/status/2054610152817619388
取而代之的是一笔按 API 零售价计费的月度 Credit，Pro 给 20 美元，Max 5x 给 100 美元，Max 20x 给 200 美元。
原来的订阅限额保持不变，专供 Claude Code 交互式使用和 claude.ai 聊天。两个池子互不干扰。
Credit 需要手动领取，6 月 8 日发邮件通知，6 月 15 日生效，每月重置，不累积。
预料到用户的愤怒，Claude Code 限额连升两次，安抚用户。
上周 5 小时滚动窗口翻倍，本周每周总额再加 50%，叠加生效，截止 7 月 14 日。
https://x.com/ClaudeDevs/status/2054639777685934564
所有付费用户自动调整，不用操作。
最大竞争对手 OpenAI 迅速抓住这个时机，立刻推出 Codex 企业免费迁移。
https://x.com/OpenAIDevs/status/2054586214112780518
30 天内申请，2 个月免费，内置一键迁移工具，可直接搬运 Claude Code 的系统提示词、Skills、MCP 配置。
Codex 不区分交互式和程序化调用，订阅用户想怎么用都行。
三件事同时发生，绝不是巧合。
为什么要拆
Anthropic 的订阅模式里有一个结构性漏洞。即将上市的 Anthropic 在 ASI 冲刺前夜，已经不能再忍这个漏洞了。
订阅的经济模型建立在一个前提上，人类打字速度有限。
一个 200 美元/月的 Max 20x 用户，手动交互能消耗的 Token 量折算成 API 零售价约在 2000-5000 美元之间。
Anthropic 愿意补贴这个差额，因为交互数据对模型训练有价值。
Agent SDK 和 claude -p 打破了这个前提。
机器 24 小时不停调用，一个 for 循环几小时就能吃完一个月的额度，而且程序化调用几乎没有用户行为数据的训练价值。
用户基数小的时候还能忍。
但 SpaceX 刚租给 Anthropic 22 万块 GPU，谷歌追加了最高 400 亿美元投资，亚马逊签了 250 亿美元容量协议。
拓展阅读：
突发，马斯克xAI解散了！22万张GPU忍痛全给Claude
算力到位，用户量即将爆发，补贴失血会指数级放大。
Anthropic 帮助文档里也挑明了立场，团队跑生产级自动化的，应该转去开发者平台用 API Key 按量付费。
这是一次定价漏洞修补，时机由 ASI 竞赛的节奏决定。
代价有多大
面值相等，实际缩水近十倍。
Max 20x 用户月费 200 美元，拿到的 Credit 也是 200 美元。
但之前共享的是订阅限额，订阅限额按 API 零售价折算约值 2000-5000 美元。
现在换成了按 API 零售价计费的 200 美元固定额度。
https://x.com/anakin/status/2054643675590807884
Pro 用户处境更尴尬，20 美元用 Sonnet 只够约六七百万 Token 输入或一百多万 Token 输出，几轮密集的 Agent 循环就见底。
https://x.com/alexgreensh/status/2054619241811169402
受冲击最大的是第三方工具用户。
之前用 OpenClaw、Hermes 这些 Agent 工具，相当于用订阅价跑高频自动化。
新政下这条路只剩 Credit 那一点额度，烧完要么开 Extra Usage 按 API 价继续跑，要么停到下个月。
唯一的好消息是，第三方工具终于拿到了「官方身份证」。
两个月前 Anthropic 还把 OpenClaw 视为薅羊毛的手段，现在公告里直接点名承认了它们的合法性。
算力和开发者的错配
Anthropic 在算力最充沛的时刻，用定价政策把重度开发者推向了对手。
SpaceX 的 22 万块 GPU 是目前唯一能立刻上线的算力合作，其他伙伴的产能全要等到 2026 年底甚至 2027 年。
有了这批现货算力撑腰，Claude Code 限额才能连续拉升。
但 Claude Code 限额提升和 SDK Credit 封顶打的是两群人。
交互式用户和程序化调用用户的重叠度有限，前者的体验改善并不能对冲后者的损失。
OpenAI 精准踩在了这个裂缝上。
Codex 不做用量分家，不区分调用方式，零座位费，按 Token 计费，还内置了从 Claude Code 一键搬家的工具。
Anthropic 刚制造的痛点，OpenAI 立刻拿来当卖点。
https://x.com/brodieferguson/status/2054653995864707344
两个月免费期刚好够企业把自动化流水线跑起来形成肌肉记忆。
免费期结束后，迁移成本已经高到不愿意再搬回去了。
这件事跟每个人有关
AI 订阅的「无限量自助餐」时代正在结束。
Anthropic 这次修补漏洞只是开始。
随着 Agent 能力越来越强、自动化调用越来越频繁，所有 AI 公司都将面临同样的经济压力。
AI 付费方式将从月费包干逐渐转向按实际消耗计费，就像云计算走过的路一样。
开发者生态的归属决定了普通用户未来用什么 AI。
谁赢得开发者，谁的工具生态就更丰富。
今天 Claude Code 和 Codex 的争夺战，三到五年后会直接反映在每个人手机里能用到的 AI 应用的质量上。
ASI 竞赛的终局是模型能力之争，更是生态之争。
ASI 竞赛的最终决赛，选手已经基本锁定，一边是 OpenAI + 微软 + Stargate（甲骨文 + 软银），一边是 Anthropic + 谷歌 + 亚马逊 + SpaceX。
模型能力正在趋同，真正的护城河在于谁的基础设施最强、开发者最多、企业客户最牢固。
这周的定价暗战，是决赛圈的第一枪。
接下来要看三件事，5 月中旬马斯克 vs 奥特曼的判决，6 月 Anthropic IPO 的定价，7 月 14 日 Claude Code 临时限额到期后是否转为永久政策。
这三件事的走向，将直接决定 ASI 竞赛中开发者生态的天平往哪边倾斜。
6 月 8 日记得去领 Credit。不领是 0 美元，领了至少还有 200 美元。
附录：完整公告
在您的 Claude 计划中使用 Claude Agent SDK
更新于今天
Claude 订阅计划现在有资格每月获得 Agent SDK 额度。此额度涵盖 Claude Agent SDK 使用、claude -p 命令和基于 Agent SDK 构建的第三方应用。本文介绍了该额度涵盖的内容、工作原理以及如何申领。
从 2026 年 6 月 15 日起，在 Pro、Max、Team 和 Enterprise 计划中可用。使用 API 密钥的 Claude 开发者平台账户不会获得额度。按使用量付费的计费方式保持不变。
有什么变化
从
2026 年 6 月 15 日
起，Claude Agent SDK 和 claude -p 的使用不再计入您的 Claude 计划的使用限制。您的订阅使用限制保持不变，并保留用于 Claude Code、Claude Cowork 和 Claude 的交互式使用。
为了支持 Agent SDK 的使用，符合条件的 Pro、Max、Team 和 Enterprise 计划用户可以申领单独的月度额度。该额度仅适用于 Agent SDK 使用，并随您的计费周期刷新。
按计划的月度额度
*基于席位的 Enterprise 计划中使用标准席位的成员无资格申领 Agent SDK 月度额度。
额度涵盖的内容
Agent SDK 月度额度适用于：
您自己项目中的 Claude Agent SDK 使用（Python 或 TypeScript）
Claude Code 中的
claude -p
命令（非交互模式）
Claude Code GitHub Actions 集成
通过 Agent SDK 使用您的 Claude 订阅进行身份验证的第三方应用
额度不适用于：
终端或 IDE 中的交互式 Claude Code
Web、桌面或移动应用上的 Claude 对话
Claude Cowork
从额外使用中扣除的其他功能
额度如何工作
按用户，不共享。
额度属于个人账户。它们不能在团队成员之间共享或汇总。
每月刷新。
您的额度在每个计费周期开始时重置。未使用的额度不会结转到下一个计费周期。
一次性选择加入。
您通过 Claude 账户申领一次额度。之后，它会在每个周期自动刷新。
优先扣除。
Agent SDK 使用首先从您的月度额度中扣除，然后才是其他来源。
超过额度后，使用转移到额外使用。
当您的月度额度用尽时，额外的 Agent SDK 使用按标准 API 费率流向额外使用——但仅当您启用了额外使用时。如果未启用额外使用，Agent SDK 请求将停止，直到您的额度刷新。
保持不变的内容
此更改不影响：
订阅使用限制。
作为此更新的一部分，您的计划使用限制未发生变化。
交互式 Claude Code。
在终端或 IDE 中使用 Claude Code 继续完全按照之前的方式使用您的订阅使用限制。
Claude 对话。
Web、桌面和移动聊天继续使用订阅使用限制。
API
密钥用户。
如果您使用来自 Claude 开发者平台的 API 密钥使用 Agent SDK，则没有任何变化。按使用量付费的计费方式继续进行，您不会获得 Agent SDK 月度额度。
对于 Team 和 Enterprise 管理员
如果您管理 Team 或 Enterprise 账户，以下是您需要了解的内容：
额度按用户计算。
您团队中的每个符合条件的用户申领自己的额度。额度不能在整个组织中汇总、转移或共享。
大规模生产自动化。
Agent SDK 月度额度的规模适合个人实验和自动化。运行共享生产自动化的团队应使用 Claude 开发者平台和 API 密钥，以获得可预测的按使用量付费计费。
您需要做什么。
现在无需做任何事情。您团队中符合条件的用户将在 2026 年 6 月 15 日之前收到一封电子邮件，其中包含申领额度的详细信息和说明。
参考资料：
https://support.claude.com/zh-CN/articles/15036540-%E5%9C%A8%E6%82%A8%E7%9A%84-claude-%E8%AE%A1%E5%88%92%E4%B8%AD%E4%BD%BF%E7%94%A8-claude-agent-sdk
https://x.com/ClaudeDevs/status/2054610152817619388
https://x.com/ClaudeDevs/status/2054639777685934564
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！