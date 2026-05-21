---
title: "「生化危机」女主用Claude手搓满分AI，一年0.7美元反杀大厂！"
date: 2026-04-08
source: "新智元"
url: "https://mp.weixin.qq.com/s/u62jctQQaprCASQKXE9i_g"
rss_id: "2652690440_1"
---
新智元报道
编辑：桃子 好困
【新智元导读】
全网震撼！《生化危机》女主跨界撸码，用Claude造出地表最强AI记忆系统，斩获全球首个满分。一年仅0.7美元，就能让大模型拥有永久记忆。
活久见！好莱坞巨星，也在撸代码了。
这几天，
全网被一个开源「AI记忆系统」MemPalace彻底刷屏
，这还是全球首个最强记忆AI。
万万没想到，背后核心开发者名单中，居然藏着一位顶流巨星——
那个曾参演过《第五元素》、《生化危机》的女主角Milla Jovovich。
白天，片场收工、走完Miu Miu时装秀、安顿好孩子；深夜，她便潜心于「氛围编程」。
她和工程师好友Ben Sigman一起，与Claude协作，开源了这款明星项目。
在公认最严苛的长期记忆基准
LongMemEval中，它以
500题全对
的史无前例战绩，斩获全球首个满分
。
如今，在GitHub上，MemPalace已狂揽17.9k星，Fork高到2k。
GitHub地址：https://github.com/milla-jovovich/mempalace
顶流巨星跨界，转型成功！
顶流女星跨界，用Claude造爆火AI
MemPalace的诞生，带有一丝偶然。
半年前，20多年的老友、老牌工程师Ben Sigman向Milla首次介绍了Claude Code。
作为一个热爱写作的创作者，她立刻意识到：CC能将自己脑海中天马行空的文字，转化为真实运行的代码。
然而， 在尝试构建一款大型游戏的过程中，她撞上了一堵「无形的墙」。
Milla发现，AI虽然强大，
却缺乏「灵魂」与「积累」
——
AI只能掌握那些已经做过的事情。真正创造出独一无二、与众不同的东西的，是使用它的人类。
如果没有我们的想象力和永不满足的好奇心，AI就仅仅是个搜索引擎而已。
这句话并非空谈，而是她在开发中遇到的非常具体的痛点：
每次和AI开新会话，之前讨论过的设计、推翻过的方案、试过又失败过的思路，全部清零。
于是，Milla敏锐地察觉到，解决AI长期记忆的问题，甚至比游戏项目本身还要重要。
她与Ben Sigman决定调转航向，把这件「挡路的事」做成了一个独立项目。
Milla以「架构师」的身份重塑逻辑，Ben则用代码将蓝图落地。
两人联手打磨了6个月，最终这套名为「记忆宫殿」的系统——MemPalace，正式破壳而出。
那么，MemPalace到底是什么？
「记忆宫殿」出世，100%刷爆SOTA
这个名字的灵感，来源于两千年前的古希腊。
那时，古希腊的演说家会用一种叫
「记忆术」（Method of Loci）
的方法背诵长篇演讲——
把每一段内容「放置」在不同的房间里，演讲时只需在脑海里走一遍宫殿，内容就会被一一调出。
于是，MemPalace借鉴了《记忆宫殿》的技巧，直接将数据「结构化」，并构建出一个虚拟的空间：
每个项目、每个人、每个主题，都是宫殿里的一个「翼楼」（Wing）。
翼楼里有「房间」（Room），按主题分类：认证系统一间、数据库选型一间、部署流程一间，数量不限。
房间之间有「走廊」（Hall）串联，走廊按记忆类型划分：决策、里程碑、偏好、建议、发现，五条固定通道。
跨翼楼的同名房间之间，系统会自动生成「隧道」（Tunnel）。
比如，「Kai」这个人的翼楼里有一间「auth迁移」，「Driftwood」这个项目的翼楼里也有一间「auth迁移」——隧道自动打通，同一件事在不同视角下的记忆，瞬间关联。
每个房间配一个「衣柜」（Closet），存的是摘要索引；衣柜里的「抽屉」（Drawer），存的是原始对话全文，一个字都不删。
搜索时，AI不需要翻遍所有数据。
它先定位翼楼，再进房间，再开抽屉——范围从全库缩小到精确命中。
官方在22,000+条真实对话记忆上测试，全库搜索召回率60.9%，加上翼楼+房间过滤后直接拉到94.8%，提升34个百分点。
换句话说，结构本身就是检索能力。
而且，所有数据全部存在本地ChromaDB里，不调API，不上云，不花钱。
一年只要0.7美元，记住所有事
再来看一个让人有点窒息的对比表——
按照Milla的算法，把所有对话粘进去，一个重度AI用户半年下来，大概会累积1950万token的对话历史。
只让大模型做摘要，一年要花约507美元，关键是摘要会丢失关键的推理过程。
若要用MemPalace，每次AI启动只加载170个token的关键事实——你的团队、项目、偏好....只在需要的时候才检索。
AAAK：写给AI看的「速记法」
MemPalace 里还有一个让人眼前一亮的设计，叫
AAAK。
这是一种专门写给 AI 读、不是写给人看的压缩方言。
举个栗子，下面这段英文大约1000个token：
Priya 是 Driftwood 团队的负责人：Kai（后端，3 年）、Soren（前端）、Maya（基础设施）和 Leo（初级，上个月刚入职）。他们正在做一个 SaaS 数据分析平台。当前 sprint 是把鉴权迁移到 Clerk。Kai 基于价格和开发体验推荐了 Clerk 而非 Auth0。
压缩成AAAK后，只有约120个token：
TEAM:
PRI
(lead) |
KAI
(backend,
3
yr)
SOR
(frontend)
MAY
(infra)
LEO
(junior,new)
PROJ:
DRIFTWOOD
(saas.analytics) | SPRINT: auth.migration→clerk
DECISION: KAI.rec:clerk>
auth0
(pricing+dx) | ★★★★
信息无损，token减少8倍。
最妙的是，AAAK本质就是结构化文本，任何能读文本的大模型——Claude、GPT、Gemini——都能直接理解，不需要解码器、不需要微调。
48小时，社区扒了个底朝天
但故事还没完。
MemPalace上线不到48小时，开源社区就把项目里的水分挤了个干净。
第一刀砍在AAAK上。
AAAK是MemPalace自研的一套「缩写方言」，官方最初声称可以实现「30倍无损压缩」。
社区拿真正的tokenizer一跑，发现项目里的示例根本不省token——英文原文66个token，AAAK编码后反而变成了73个。
而且AAAK是有损的，不是无损的。在LongMemEval上，AAAK模式只拿到84.2%，比raw模式的96.6%低了12.4个百分点。
第二刀砍在「+34%宫殿增益」上。
这个数字对比的是「不过滤直接搜」和「用翼楼+房间做元数据过滤后搜」。元数据过滤是ChromaDB的标准功能，不是MemPalace的独创机制。有用，但不是护城河。
第三刀砍在矛盾检测上。
项目里写得好像知识图谱会自动做事实校验，实际上fact_checker.py是一个独立脚本，根本没有接入知识图谱的操作流程。
然后Milla和Ben做了一件在开源圈相当少见的事。他们没有删评论，没有辩解，而是直接在项目顶部贴了一封公开信，逐条认错。
AAAK的token示例，承认用了粗糙的启发式算法，没跑真tokenizer。
「30倍无损压缩」，承认夸大改口为「有损缩写系统」。「+34%宫殿增益」承认措辞误导，补充说明是标准元数据过滤。
矛盾检测，承认没接入，列出了修复的Issue编号。
公开信最后一句：「我们宁愿正确，也不愿看起来厉害」。
开源社区的反应也很有意思。骂完之后，反而有更多人开始认真审视这个项目——96.6%的raw模式成绩是实打实的，本地免费也是实打实的。
扒皮没有杀死MemPalace，反而给它做了一次免费的信任审计。
三步上手，开发时代真的变了
pip install mempalace
# Set up your world — who you work with, what your projects are
mempalace init ~
/projects/m
yapp
# Mine your data
mempalace mine ~
/projects/m
yapp
# projects — code, docs, notes
mempalace mine ~
/chats/
--mode convos
# convos — Claude, ChatGPT, Slack exports
mempalace mine ~
/chats/
--mode convos --extract general
# general — classifies into decisions, milestones, problems
# Search anything you've ever discussed
mempalace search
"why did we switch to GraphQL"
# Your AI remembers
mempalace status
接Claude/ChatGPT/Cursor这类支持MCP的工具，只要一行命令：
#
Connect
MemPalace once
claude mcp
add
mempalace
-- python -m mempalace.mcp_server
之后19个工具就接好了，AI会自己调用。你再也不用手动敲
mempalace search
。
这个项目最让人感慨的地方，不一定是那个100%的分数，也不一定是30倍的压缩比。
而是它再一次提醒我们：AI时代的「开发者」的边界正在消失。
一个以《第五元素》《生化危机》闻名的巨星，和一个工程师朋友，借助Claude，便拿下了一项被大厂刷了一年多的行业SOTA。
关键还是，开源、免费、本地运行的版本。
Ben最新一条帖子中，还做了一个双关：Mempalace -> Multipass。
——熟悉《第五元素》的人都知道，那是Leeloo全片最经典的一句台词「通行无阻」。
看来这次，是真的「通行无阻」了。
参考资料：
https://x.com/bensig/status/2041236952998171118?s=20
https://x.com/wangray/status/2041411785442710008?s=20
github.com/milla-jovovich/mempalace
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！