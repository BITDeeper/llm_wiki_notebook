---
title: "龙虾最大痛点被官方插件升级！对话永不忘记，GPT和Gemini最强模型都可接入"
date: 2026-03-09
source: "量子位"
url: "https://mp.weixin.qq.com/s/s_8yqfuwh_hhiey7pYB-aQ"
rss_id: "2247873059_2"
---
henry 发自 凹非寺
量子位 | 公众号 QbitAI
报！龙虾更新了！
刚刚，新的OpenClaw测试版（2026.3.7）已经推出，并光速上线OA两家最新模型
GPT-5.4
和
Gemini Flash 3.1
。
与此同时，一并更新的还有：
ACP绑定在重启后依然可保留
精简版Docker多阶段构建
用于网关认证的SecretRef
可插拔的上下文引擎
支持HEIF图像格式
修复Zalo渠道问题
其中，
可插拔的上下文引擎（pluggable context engine）
可谓是这次更新的重点，不少网友纷纷表示：
相比于跑那个模型，上下文才是关键。
细心的你甚至还发现了，在官方的changelog上直接点名了一个插件例子
lossless-claw
。
那么，这个上下文插件是怎么一回事？有啥用？
上下文管理插件化
总体来看，这次OpenClaw更新可以归纳为三个方面：
上下文管理插件化
、
Agent路由能力升级
（频道、topic、独立 session）以及
部署与插件工程化
（Docker multi-stage、SecretRef、安全策略）。
其中，最值得关注的，就是
上下文管理插件化
。
根据官方的changelog，这次更新新增了ContextEngine插件插槽。
该接口提供了完整的生命周期钩子，包括：bootstrap、ingest、assemble、compact、afterTurn、prepareSubagentSpawn、onSubagentEnded。
这意味着
插件可以在上下文生成、压缩、拼接以及子Agent生命周期管理的各个阶段介入，从而实现完全不同的上下文策略
。
用PR作者Josh Lehman的一句话总结：
你其实不需要一个Agent记忆系统，你需要的是不会被重置的上下文。
过去在OpenClaw中，
上下文管理逻辑是写死的
。
例如对话过长时如何压缩历史、如何拼接上下文、何时丢弃旧信息，这些都由系统内部固定实现，插件几乎无法介入。
而这次更新之后，情况发生了改变。
简单来说，上下文插件化意味着：
不同插件可以实现
不同的上下文管理策略
系统核心不再写死上下文压缩逻辑
插件可以控制
上下文压缩、上下文组装，以及子Agent的生命周期
翻译成最直观的体验就是：
当你和“龙虾”进行长时间、多轮对话时，它的“记性”会明显变好。
以往龙虾对话常见的情况是：
对话变长后，系统开始压缩上下文，比如不按要求写，只列bullet point
Agent逐渐忘记之前的计划
甚至忘记自己修改过哪些文件
任务运行到后期，模型突然变得“变笨”
而新的上下文插件机制，正是为了解决这些问题。
随着定制化上下文策略的开放，未来针对不同场景的记忆方案也将不断出现，让“龙虾”在执行不同任务时变得更加高效，也更加经济。
lossless-claw：一种“不会丢失上下文”的方案
举例来说，官方重点推荐的插件
lossless-claw
，就展示了一种新的上下文管理思路。
在传统Agent系统中，一旦对话过长，系统通常会：直接丢弃旧内容。
而在lossless-claw中，旧对话不会被删除，而是：
持久化到SQLite数据库，按对话组织
对旧消息块生成摘要，使用配置的LLM
将摘要压缩为更高层级节点，形成DAG（有向无环图）
每轮对话时，将摘要 + 最近原始消息组合成上下文
提供工具（lcm_grep、lcm_describe、lcm_expand）让Agent可搜索、回溯历史
也就是说，在多轮对话中，原始消息会被完整保留，系统根据摘要与原始消息保持关联，而Agent随时可以展开摘要查看原文。
理论上，
上下文“永远不会丢失”
。
（By the way，据作者透露，这一思路来自《LCM: Lossless Context Management》，感兴趣的同学可以进一步阅读。）
在
OOLONG benchmark
的测试中，使用同一模型时，lossless-claw得分
74.8
，打败Claude Code
70.3
。
更关键的是，
上下文越长，差距越大
。在测试的所有上下文长度下，lossless-claw的得分都高于Claude Code。
PR作者Josh Lehman表示，他已经在OpenClaw上实际运行了一周：
说它表现很好，都算是低估了。
其他更新
除上下文插件以外，这次龙虾的更新还有两大重点：
首先是强化了Agent的路由系统
。
针对Discord、Telegram、Slack、Mattermost等平台，OpenClaw引入了持久化线程绑定机制，即使系统重启，Agent与频道或话题的绑定关系依然能够保持。
同时还支持按主题路由 Agent：例如在Telegram中，每个topic都可以运行一个独立的Agent，因此在同一个论坛群里，也可以同时存在多个各自执行不同任务的Agent。
其次是在部署与工程化层面的优化
。
例如官方已经开始为iOS App Store发布做准备，移动端版本也正在筹备中。
与此同时，Docker构建也进行了精简，新增bookworm-slim版本，通过Slim镜像减少不必要的依赖，使容器体积更小、启动速度更快，也更适合在服务器环境中大规模部署。
参考链接
[1]https://github.com/openclaw/openclaw/releases/tag/v2026.3.7
[2]https://x.com/steipete/status/2030508141419372667
[3]https://x.com/jlehman_
[4]https://github.com/Martian-Engineering/lossless-claw
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🦞
今天，你养虾了吗？
欢迎加入【龙虾养成讨论组】，一起交流养虾经验！扫码添加小助手加入社群，记得备注【OPENCLAW】哦～
一键关注 👇 点亮星标
科技前沿进展每日见