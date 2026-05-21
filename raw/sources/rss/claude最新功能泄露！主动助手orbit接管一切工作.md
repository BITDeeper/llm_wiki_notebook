---
title: "Claude最新功能泄露！主动助手Orbit接管一切工作"
date: 2026-05-06
source: "新智元"
url: "https://mp.weixin.qq.com/s/ZlMjAf1jGrCMWAvNjgNXiw"
rss_id: "2652697869_1"
---
新智元报道
编辑：定慧 大卫
【新智元导读】
2026年5月4日，testingcatalog在Anthropic的Web/Mobile客户端里挖出隐藏功能Orbit。5月6日，Code with Claude大会在旧金山开幕。Orbit不等你开口就从Gmail、Slack、GitHub里替你干活了。
Claude又出重磅新功能，一个主动AI助手！
就在Code with Claude开发者大会开幕前夜，有人在Claude Cowork的最新构建中挖出了一个
尚未发布的功能模块
。
名字叫
Orbit
。
反过来拼的内部代号
5月4日，技术情报站testingcatalog发表报道《Anthropic is working on
Orbit
, its upcoming proactive assistant》。
这条情报最初被发现的方式很典型——有人在Anthropic最新Web和Mobile客户端的设置面板里，看到一个新出现的toggle开关，没有功能描述，没有按钮。
Threads上的研究者@btibor91进一步扒出，这个feature的隐藏标志位叫tibro enabled——orbit反过来拼。
这种内部命名梗（feature flag取反向名字）在硅谷不算稀奇，但通常意味着：
这是个真实在研、即将发布的功能，开发团队已经准备好了灰度部署的开关，只等大会按下发布键
。
5月6日，就是Anthropic的Code with Claude年度开发者大会旧金山首站（伦敦5月19日，东京6月10日）。
Orbit大概率会在那一天正式登场。
Orbit是什么
把testingcatalog文章里的细节铺开，我们可以提前窥探一下这个新功能。
Orbit的功能定位是
主动式简报+洞察系统，跨Claude和Claude Code两个平台。
意思是，不论你是普通知识工作者还是程序员，都会用上同一个Orbit。
其中，集成连接器包含
Gmail、Slack、GitHub、Calendar、Drive、Figma。这是初始连接器列表。
机制是
opt-in（用户主动开启）+ 时区识别。
输出形态是
个性化简报，含从已连接工作工具中提取的可操作洞察.
Orbit Apps
：可部署、可pin收藏。
原文那段简介意味着Orbit不只是一个简报推送器，背后可能有一个应用生态。
简单说：你不再需要打开Claude敲帮我看下今天Gmail有哪些重要邮件。
Orbit每天自动给你生成一份基于多个工具的简报。
它知道你今天有什么会、Slack里有几条@你的消息、GitHub上有几个PR等你review、Figma上设计师改了哪些稿、Drive里某份文档昨晚被同事改了哪几段。
如果你是产品经理，早上9点打开Claude，看到的可能是这样的简报——今天10:00有sprint review，PR
#2371
等你审；Marie在Figma上改了登录页第二版，需要你给一个yes/no；CFO昨晚回复了你周二发出的预算确认邮件，倾向同意。
三件事，三种系统，一份简报。
这是一个
从被动prompt转向主动推送
的产品形态切换。
它的难度不在模型，在产品判断——什么该推、什么该藏、什么时候推、推到哪里。
Anthropic过去一年在Cowork上铺的所有连接器、调度器、计算控制能力，本质上都是为了准备好这一刻。
Claude Cowork的四个月
要理解Orbit在Anthropic产品序列里的位置，得先理清Claude Cowork本身的演进。
这个功能从立项到准备装上Orbit，只用了4个月。
需要重点提一下2月那场SaaS抛售。
Cowork正式发布企业版当天和此后几个交易日，市场担心Anthropic做出来的这种通用AI协作工具，会替代掉一大批专业SaaS——Salesforce、ServiceNow、Workday这些股价集体走低，市值蒸发约2850亿美元。
这件事是Cowork真正进入主流商业视野的转折点。
而
从Cowork的功能演进路径看，Orbit是合乎逻辑的下一步
——
Connectors（拉数据）
Plugins（接入第三方）
Scheduled Tasks（按时间触发）
Dispatch（任务派发）
Projects（多任务编排）
Computer Use（自动操作电脑）
→ Orbit（主动简报+洞察）
Anthropic把读、写、接入、调度、操作这些基础能力一个个铺好后，把它们组合起来变成一个你不再需要prompt的产品形态。
值得一提的是，这种产品节奏在Anthropic过去一年是常态。
Claude Code从2025年5月对外发布到2026年4月，年化收入跨过25亿美元。
Cowork对外只用了4个月就从research preview走到企业版+Orbit。
Anthropic 2026年初完成了300亿美元的G轮融资，估值3800亿美元——这个节奏背后是充足弹药支撑下的产品扩张。
主动AI赛道：Pulse、Gemini、Orbit
Orbit不是孤品。
它在一条已经热起来的赛道上。
ChatGPT Pulse
——OpenAI 2025年9月发布，是其首个主动式异步助手。Pulse会基于你和ChatGPT的最近对话内容，配合Gmail和Calendar连接器，每天早上推送一份个性化简报。当时被定位为OpenAI首次让ChatGPT主动找你说话。
Google Gemini Proactive Assistance：
计划在5月15日Google I/O大会展示，思路是利用个人数据在合适时间提供建议。
Perplexity同类产品：
业内消息多家媒体提及，但具体形态尚未公布。
Orbit的差异化
，testingcatalog分析得很到位：
OpenAI Pulse和Google Gemini的连接器主要是Gmail+Calendar+Memory这种邮件日历型组合，
Orbit显式包含GitHub和Figma
。
这意味着它的目标用户不是只读邮件的高管，而是做产品的人——开发者+设计师+产品经理。
Anthropic的差异化做法是显式包含GitHub和Figma，配合其面向开发者和创意工作流的产品定位。
这条差异化和Anthropic整体的产品定位一致。
Claude Code在2026年初的年化收入已经超过25亿美元，Anthropic在开发者群体里的mindshare本来就比另外两家强。
Orbit加入GitHub和Figma，等于在Cowork这个知识工作者通用工具上面，再叠一层做产品的人专用的工作流感知层。
被动prompt时代正在结束
把这些拼起来——
三家头部AI公司在半年时间里，几乎同步切换到了主动助手这个新形态。
这意味着AI产品的下一个战场，不再是我能更好地回答你的问题，而是我已经替你看完了今天该看的东西，下面是结论和建议。
从用户体感上讲，被动prompt和主动简报是两种完全不同的产品——前者是工具，后者是助手。
前者每次使用都需要你先想清楚问题，后者每天早上推到你面前的是已经处理好的信息。
Orbit如果5月6日如期发布，那将是Anthropic对ChatGPT Pulse的正面回应，也是Cowork从工具向助手演进的关键一步。
这条曲线之前用了四个月走完了工具那段，接下来的4个月里，
助手这一块大概会被各家用同样的速度填上。
后面的事，看大会。
还有几个细节不能忽略
第一，Orbit大概率先限Max订阅用户。
这和Claude Code、Cowork的商业化策略一致——高端功能先给付费最高的用户群，跑通之后再下放。
第二，发现时间点太巧了。
代码5月4日被挖出来，Code with Claude大会5月6日开。泄露和正式发布之间只差48小时。这要么是真泄露，要么是精心设计的预热。
第三，Orbit的技术实现路径值得关注。
主动生成个性化insights意味着Claude需要在后台持续运行、持续读取用户数据、持续做推理。这对Anthropic的基础设施是一个量级的考验——不再是用户发一条消息跑一次推理，而是7×24小时不间断地替每个用户「思考」。
成本结构和以前完全不同了。
参考资料：
https://x.com/testingcatalog/status/2051450201668256051?s=20
https://www.testingcatalog.com/anthropic-is-working-on-orbit-its-upcoming-proactive-assistant/
https://www.pcworld.com/article/3131926/personal-ai-assistants-were-big-proactive-ai-could-be-bigger.html
https://www.threads.com/@btibor91/post/DX8qaPTgiKw/fun-fact-orbit-appears-to-be-anthropics-upcoming-claude-cowork-feature-that/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！