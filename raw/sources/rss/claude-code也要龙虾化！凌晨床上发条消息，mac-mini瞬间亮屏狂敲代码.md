---
title: "Claude Code也要龙虾化！凌晨床上发条消息，Mac Mini瞬间亮屏狂敲代码"
date: 2026-03-20
source: "新智元"
url: "https://mp.weixin.qq.com/s/6voldVUBJH6M9Oi6K63XVQ"
rss_id: "2652685243_2"
---
新智元报道
编辑：KingHZ 好困
【新智元导读】
Claude Code又上杀手锏！新增Channels功能，Telegram/Discord直连编程会话，手机直接遥控AI写代码。
Claude Code也要龙虾化！
刚刚，Claude Code团队的工程师Thariq Shihipar宣布：「
Claude Code新增Channels功能，手机可以远程控制会话了。
」
这一新功能让你能够通过特定的MCP（模型上下文协议）来控制Claude Code会话，首批支持的是Telegram和Discord。
想象一下：凌晨两点，你窝在沙发上刷手机，突然灵感闪过。
你懒得爬回电脑前，只是随手在手机IM软件里敲下一句：「嘿，帮我把那个支付流程重构一下，加个风控模块，顺便跑个单元测试。」
几秒后，家里的Mac Mini悄无声息地亮起屏幕。
你那永不睡觉的赛博忠犬Claude Code立即收到召唤，开始翻阅项目文件、分析依赖、敲下优雅的代码行。
等你早上醒来，pull request已经躺在GitHub里，注释清晰，测试全部通过。
现在，用手机也能氛围编程了！
在过去7天里，Anthropic发布了Dispatch、Channels、语音模式、/loop、100万上下文正式版、MCP引导功能、移动端持久化Cowork、Excel和PowerPoint跨应用上下文、内联图表等等。
现在，Anthropic迈出龙虾化更深一步了。
目前，此功能已灰度测试，可在Claude配置文件查看相关状态。
Channels
Telegram一句话，终端自己动
本质上，Channel是一个MCP server，它能把外部事件主动推送进Claude Code会话，让Claude对终端之外发生的事情作出反应。
目前开放了Telegram和Discord两条通道。
上手并不复杂，核心就三步：
用/plugin install telegram@claude-plugins-official安装官方插件；
配置bot，做一次安全配对（白名单机制，只有你授权的账号能发消息）；
启动命令加个--channels plugin:telegram@claude-plugins-official。
然后……就行了！
Discord流程大同小异，只是多了一步在开发者后台配权限和拉Bot进服务器。
真正有意思的，是它已经有了一点「远程助手」的「龙虾味」。
你发出消息后，Telegram 会立刻显示「正在输入…」，提示 Claude 已经开始处理。
它支持附件回传，图片会直接内联预览，单个文件最大50MB，长文本还会自动分段。
如果任务还没做完，Claude Code甚至可以先回一条「处理中…」，再直接编辑那条消息，把结果补上，而不是连续刷屏。
有一个绕不开的前提：你的终端上必须有一个活跃的Claude Code会话在跑，会话关了通道就断。
实际使用姿势就是，出门前让Claude Code在后台挂着，人在外面通过手机远程投喂任务。这一点和各种龙虾几乎一模一样。
但Claude Code这次更安全，每条通道维护独立的发送者白名单，只认配对过的用户ID。
验证粒度到人不到群，即使在同一个Discord服务器里，没配对的成员发的消息Claude直接忽略。
功能目前是研究预览状态，需要v2.1.80以上版本，只支持claude.ai账号登录。
企业和团队版默认关闭，管理员需要到后台手动打开。Anthropic说接下来几周会持续迭代。
龙虾化，但没完全龙虾化
此前，Claude已发布Dispatch，让沃顿商学院研究AI+创业的Ethan Mollick教授直呼：
Dispatch已能满足OpenClaw的90%的需求。
Channels加Dispatch，Anthropic的牌面已经摊开：
它要把Claude从一个「坐下来才能用的工具」改造成「随时能找到的搭档」。
这条路，OpenClaw已经趟过了。
聊天App当主入口，本地跑Agent，7×24不下线，100多个社区技能插件，全球开发者和用户同时上头。
只不过，野路子的安全隐患有点多。
但安全可以慢慢补，真正拉开差距的是「时刻待命」这件事。
OpenClaw靠本地守护进程实现全天候运行，Claude的两个功能都还依赖会话存活。
也就是说，终端关了Channels就断，电脑睡了Dispatch就停。这只龙虾目前还得靠你帮它保持呼吸。
可以肯定的是，整个行业的趋势已经很清楚了。
后续，Anthropic可能还会接入更多消息平台，Dispatch把Cowork的能力从书桌延伸到了口袋。
AI的交互方式正在从「打开App写Prompt」变成「给搭档发条消息」。
OpenAI的Codex去年就在跑云端异步任务，Google的Jules也在云端VM里搞异步Agent，OpenClaw用聊天App当主入口把这个模式彻底带火，现在Anthropic带着企业级框架追上来。
当用户习惯了「发条消息就有人干活」，没有哪家AI公司还能靠一个聊天窗口守住阵地。
龙虾化不是一个功能，是一张入场券。
接下来的问题不是谁要不要做，而是谁先把它做到好用。
参考资料：
https://code.claude.com/docs/en/channels
https://www.reddit.com/r/ClaudeCode/comments/1ryf2pd/introducing_claude_code_channels/
https://x.com/trq212/status/2034761016320696565
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！