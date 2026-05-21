---
title: "Anthropic封号OpenClaw之父！复刻、改价、拉黑，24天三连杀"
date: 2026-04-11
source: "新智元"
url: "https://mp.weixin.qq.com/s/lrwdz5rOcoU-89XjI99xpQ"
rss_id: "2652691273_2"
---
新智元报道
编辑：元宇 好困
【新智元导读】
「一家欢迎我，一家发来律师函。」OpenClaw之父被Claude封号后的这句话，撕开了AI平台与开源agent生态最深的裂痕。
OpenClaw创始人的Claude账号被封！
就在刚刚，OpenClaw作者Peter Steinberger在X上晒出一张来自Anthropic的封号邮件。
抬头「你好」，罪名「可疑信号」，签名「Anthropic安全团队」。
几小时内，超过100万阅读！
一个GitHub 24.7万星的开源项目，它的创始人，被模型提供商一刀封号。
而这个创始人，一个月前才被OpenAI挖走。
这难道是公开报复？
两个多小时后，Steinberger又发一条：
我的账户已经恢复了。谢谢大家！
但Anthropic到现在，一句官方解释都没给。
一家欢迎我
一家发来律师函
一位网友揶揄道：你本来有选择的，但你去了那个错误的公司。
潜台词是，既然站队OpenAI，被Anthropic冷处理也不算冤枉。
Steinberger没有解释，只回复了一行字：
一家欢迎我，一家发来律师函。
这句话一发出去，评论区当场炸锅：它背后藏着OpenClaw与Anthropic之间的一笔「旧账」。
OpenClaw项目刚火的时候，原名叫Clawdbot，跟Anthropic的Claude发音太近。
Anthropic发了一封邮件过来，语气客气，但态度明确：改名，尽快。
Steinberger要了两天时间，因为改一个名字不是改一行代码，Twitter账号、GitHub、NPM包、Docker镜像、域名，全套都要同步迁移。
他没料到的是，crypto圈的投机者一直在盯着他。
就在他两个浏览器窗口之间切换、点完「重命名」，鼠标滑向另一个标签页的5秒钟里，「黄牛」脚本抢走了他的旧账号。
紧接着是Telegram和Discord上一轮人肉骚扰，旧账号被用来挂恶意链接和诈骗代币。
他在Lex Fridman的播客里承认，当时曾一度想到要直接删掉整个项目。
从Clawdbot到Moltbot再到OpenClaw，三天改了两次名。
为了拿到@openclaw的Twitter账号，他花了1万美元买了一个企业认证号。
这时，Anthropic那边又发来了第二封邮件，说「律师们开始坐不住了」。
Steinberger后来回忆，那封邮件语气依然友善，但压力已经加到了他最崩溃的时候。
相比之下，OpenAI那边的画面，就像是另一个世界。
奥特曼在X上公开称他是「一个有无数好点子的天才」。
今年2月，Steinberger告诉OpenAI：「我不是为了钱做这件事，我要的是好玩和影响力。」
奥特曼对Steinberger的回应则是公开称他为「一个有无数好点子的天才」，把
OpenClaw移交给独立的开源基金会，承诺持续支持，让他来「推动下一代个人agent」。
一家给你发合同，一家给你发律师函。换做是你怎么选？
在AI行业最缺agent人才的2026年，Anthropic用律师函送走了一个人，OpenAI用合同接住了他。
一天通知
半年铺垫
这次封号并非孤立事件。
时间拉回一周前，4月3日，周五晚间。
Claude Code负责人Boris Cherny在X上发了一条推：
明天中午12点（太平洋时间）起，Claude订阅将不再覆盖OpenClaw等第三方工具的使用。
很快，订阅用户的邮箱里收到了正式通知。
从通知到生效，Anthropic给了用户多少时间？
一天。
Boris Cherny在X上给出了Anthropic的官方理由：
订阅本来就不是为第三方工具的使用模式设计的，Anthropic需要谨慎管理算力，把产能留给自家产品和API的用户。
这个理由其实不是完全没道理，业内已经算过一笔账。
一个OpenClaw实例如果24小时不间断地跑，一天烧掉的token价值1000到5000美元。而用户这边每个月只要付200美元订阅Max版。
公告发出当天，全球正在运行的OpenClaw实例数，是13.5万个。
换句话说，Anthropic可能每个月在默默补贴几千万美元的算力，给一群自己控制不了的第三方客户端。
Steinberger和OpenClaw董事会成员Dave Morin试图跟Anthropic谈判。
谈了一圈的结果是，改价延后了一周，仅此而已。
然后他在X上发了那条后来被反复引用的帖子：
时间点真是巧。先把一些热门功能抄进自家闭源harness，然后把开源锁在门外。
先抄功能
再锁门
Steinberger口中说的「热门功能」指什么？
我们来捋一下时间线。
先看老黄的一句话。
今年2月，英伟达GTC的主题演讲结束后，老黄在一次圆桌里甩出一句话，「
现在每家公司都需要一套OpenClaw战略
」。
一个挂了24.7万星的开源项目，第一次被正式抬到「巨头必答题」的高度。
而Anthropic的动作，比老黄那句话还要早。
1月，Claude Cowork作为research preview悄悄上线，功能是把Claude接进本地文件，让它像个数字同事一样读写、编辑、组织。
这是OpenClaw最基础的那一套能力。
2月24日，Cowork从research preview整体升级成企业级产品。
20多个原生插件一次性铺开，Google Calendar、Drive、Gmail、Slack、DocuSign、Outreach、Apollo、S&P Global全部接进来，公司可以搭自己的内部插件市场，把agent按角色分配给员工。
一天后，2月25日，Anthropic宣布完成对初创公司Vercept的收购。
四个星期后的3月17日，Vercept团队交出了一个叫Dispatch的research preview：从手机发一条任务，Claude会在你的Mac上接过指令，自动完成。
这看起来很眼熟，因为它正是OpenClaw赖以走红的核心卖点。
24小时自动化agent、跨设备任务派发、连上本地文件和应用，OpenClaw过去大半年就在干这件事。
接下来的节奏更密。
3月19日，Claude Code上线Channels功能，用户可以直接通过Telegram和Discord给Claude发任务，直击OpenClaw最核心的使用场景。
当天，一位花钱买了Mac Mini专门跑OpenClaw的用户写道：
Claude这次更新直接杀死了OpenClaw。你不再需要买Mac Mini了。我说这话的时候，手边就放着一台。
3月24日，Cowork上线macOS桌面控制。Claude可以直接打开应用、填表单、在网页上点选操作。
4月3日，Boris Cherny发推宣布改价，同一天Cowork把桌面控制扩展到Windows、Dispatch功能同步升级。
把Cowork这半年的动作拉成一条线：
1月，research preview上线，覆盖OpenClaw的基础能力；
2月24日，企业级升级，20+插件对标OpenClaw的集成生态；
2月25日，收购Vercept，为跨设备调度铺路；
3月17日，Dispatch发布，对标OpenClaw的24小时agent；
3月24日，桌面控制上线，对标OpenClaw的本地执行；
4月3日，桌面控制扩展Windows，同日宣布改价；
4月10日，Steinberger账号被封，两个多小时后恢复。
半年里，Cowork把OpenClaw从基础能力、集成生态、跨设备调度到本地执行的每一块核心拼图，都挨个对标了一遍。
没有人能替Anthropic下「蓄意打压」的定性，但这几件事按这个顺序发生，本身就已经是最锋利的叙事。
OpenAI员工
还在给Claude送钱
回头再看Steinberger，他在这场Agent生态之争中的位置耐人寻味。
一个OpenAI员工，为什么还在每天用Anthropic的模型？
很多人在这条推下面追问。
他的回答分成两层。
你得分清楚两件事。我在OpenClaw基金会的工作，是让OpenClaw可以很好地配合任何一个模型提供商。我在OpenAI的本职工作，是帮他们想清楚未来的产品策略。
这是官方说法。
更实际的理由藏在后面：Claude至今仍然是OpenClaw用户最常选的模型，而不是OpenAI自家的ChatGPT。
Steinberger自己每次更新OpenClaw，都得先跑一轮Claude的兼容性测试，确保不把最大的那批用户给坑了。
于是，整个画面因此变得非常微妙。
一个已经离开Anthropic生态、被Anthropic发过律师函、刚刚被Anthropic封号的开源作者，为了不让Anthropic的用户体验退步，每天都在买Anthropic的API做测试。
还有一个细节。
改价公告发出当天，一位用户在推文下面抱怨：自己的OpenClaw配置是围绕Claude Opus设计的，ChatGPT 5.4跑起来远不如Opus，想请教怎么迁移。
Steinberger回了两个字：「正在处理。」
也就是说，他在OpenAI的核心任务之一，很可能就是让ChatGPT成为OpenClaw用户离开Claude之后的下一站。
Anthropic用律师函送走的那个人，现在正坐在OpenAI的办公室里，帮对手接住他留下的用户。
想道歉
但为时已晚
按Anthropic的说法，这从头到尾是一次误伤，而Anthropic内部确实有人想修复关系。
封号帖发出后，一位Anthropic工程师在评论区公开下场，表示从未因使用OpenClaw封过任何人，并主动提出帮忙处理。
而Boris Cherny更是早在改价生效之前，他就亲手给OpenClaw提交过几个PR，专门优化prompt cache效率，试图从技术层面降低第三方调用的成本压力。
改价公告当天，他在X上回复质疑时说：「我们是开源的忠实粉丝。这更多是工程层面的约束。」
但Steinberger那句话已经丢出去了。
一家欢迎我，一家发来律师函。
PR修得了bug，修不了印象。
当24.7万星、13.5万活跃实例的开源项目创始人站到竞争对手那边，Anthropic失去的远不止一个开发者。
20美元包月的时代结束了
如果把视角从Steinberger身上移开，这件事指向一个比个人封号、OpenClaw遭封杀大得多的问题。
过去两年，AI行业的商业模式是：包月订阅，随便用。20美元一个月，对话不限量。
这个模式在ChatGPT-3.5时代跑得通，因为人类聊天有天花板。你一天能问AI多少个问题？
但Agent没有天花板。
一个OpenClaw实例跑起来，一天调用模型几百次、上千次。不累，不睡觉，不需要「想想再问」。
一个重度实例一天烧掉的token按API定价值1000到5000美元，用户每月只付200美元。
这样的实例，全球同时在跑大约是13.5万个。
包月模型并没被质疑，只
是它被
Agent狂飙的算力需求击穿
了
。
Anthropic并不是第一个意识到这一点的。
谷歌2月已经对Gemini CLI的第三方OAuth做了类似限制。Boris Cherny也说了，这个政策会「很快推广到更多第三方harness」。
对开发者来说，比多付几百美元更让他们担心的是：
当你的整个产品建立在别人的模型之上，平台方可以提前一天通知你改规则，你除了接受没有第二个选项。
从ChatGPT发布到开放第三方生态，用了三年。从开放到收费，只用了几个月。
如果你正在用任何一家大模型的API构建产品，今天发生在OpenClaw身上的事，明天就可能发生在你身上。
参考资料：
https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/
https://www.businessinsider.com/anthropic-cuts-off-openclaw-support-claude-subscriptions-2026-4
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！