---
title: "狂揽4万星！换掉OpenClaw太爽了，5美元就能养个AI打工人"
date: 2026-04-09
source: "新智元"
url: "https://mp.weixin.qq.com/s/NrK1fbzqHTmqbz84IeZ9gQ"
rss_id: "2652690807_1"
---
新智元报道
编辑：元宇
【新智元导读】
每月5美刀，就能在你家服务器里养个AI打工人，无缝接入
Telegram、Discord、Slack、飞书、企业微信等平台。它不仅能帮你干活，还会自己攒技能并反哺训练。网友直呼：换掉OpenClaw太爽了！
OpenClaw最强对手来了！
它就是Nous
Research今年2月
推出的开源Agent神器：
Hermes Agent。
Nous Research称它是一个「会
跟着你成长的Agent」。
Hermes Agent推出后势头很猛。
从2月底上线以来，迅速在GitHub上超过4万星，目前已经迭代到v0.8.0，平均不到一周一个大版本，贡献者超过240人，合并PR达到了1400个。
https://github.com/nousresearch/hermes-agent
它的更新速度，超过绝大多数商业Agent产品。
社区反馈也很热烈，一种「换掉
OpenClaw」的即视感扑面而来。
有网友说「切到Hermes太爽了，比OpenClaw响应速度快了太多倍」。
还有的非技术网友
感觉，
v0.4.0的更新就像是为自己量身打造的：「无需代码，毫无麻烦」。
这个自主Agent
住在你家的服务器上
Nous Research官方在描述Hermes Agent时，称它是「
一个运行在你服务器上的自主Agent
」。
https://hermes-agent.nousresearch.com/
「运行在你的服务器上」，意味着它是一个部署在你自己终端上的私人AI。
根据官网介绍，Hermes Agent具有六大核心特性：与你同在、越用越强、定时自动化、委派与并行、沙盒隔离、全网页与浏览器控制。
它可以跑在每月5美元的VPS服务器上，也可以跑在GPU集群上，闲置时几乎不花钱。
你可以通过Telegram、Discord、Slack、WhatsApp、Signal、SMS、飞书、企业微信等平台跟它对话，一个gateway进程，连通所有入口。
而且，Nous Research不只是在做一个Agent，他们在搭一整条生态。
agentskills.io是一个开放的技能标准，Agent创建的skill可以跨项目、跨社区共享。
agentskills.io是Nous Research推出的开放技能标准，官方也运营着Skills Hub供社区发现和安装技能。
围绕这个标准，第三方社区已经长出了HermesHub（带安全扫描的技能市场）、hermes-workspace（网页端GUI，Nous Hackathon作品）、mission-control（多Agent管理面板）等项目。
Nous Research的联合创始人之一Jeffrey Quesnelle，甚至演示过用Hermes Agent自主完成一部7.9万字小说的写作，跨多个迭代会话，全程无人工干预。
记忆→技能→训练数据
三层闭环
OpenClaw的技能由人类维护，而
Hermes Agent的技能由其自身维护，这正是它值得注意的地方。
Hermes Agent的
一个核心概念叫「built-in learning loop（内置学习闭环）」。
是指它能从经验中创建技能，在使用中改进技能，主动提醒自己保存知识，搜索自己过去的对话，并在跨会话中构建一个不断加深的用户模型。
拆开来看，这个闭环分三层。
第一层：记忆
。
Hermes Agent的官方记忆机制包括内置的MEMORY.md和USER.md，并支持基于FTS5的跨会话检索与LLM摘要。
它能搜索几周前的对话内容，也能在每次会话开始时加载两个核心文件：MEMORY.md记录环境信息和历史教训，USER.md记录你的偏好和工作习惯。
第二层：技能
。
当Agent完成一个复杂任务（通常是5次以上工具调用），它会自动把这次经验写成一个结构化的skill文件，包括操作步骤、常见陷阱和验证方法。
下次遇到类似任务，直接调用skill，不用从头推理。更狠的是，如果在使用skill的过程中发现了更好的做法，它会自动更新这个skill。
有Reddit用户报告，Agent在两小时内创建了3个skill文档后，重复性研究任务的执行效率提升明显。
第三层：训练数据
。
Hermes Agent内置了批量轨迹生成和Atropos强化学习环境。
也就是说，Agent在日常使用中产生的工具调用记录，可以直接用来训练下一代模型。
记忆沉淀技能，技能反哺训练，训练提升模型能力，模型能力又回到Agent。
这条链路，是Nous Research真正想跑通的东西。
Hermes Agent可以做什么？
目前最常见的场景，是
自动化情报监控
。
你只需要用自然语言写一句类似cron的指令，比如「每天早上8点扫描这些GitHub仓库的新release，把摘要发到我的Telegram」，Agent就会通过gateway在后台无人值守地持续执行。
已经有用户基于它搭出一套横跨Reddit和X的开源AI趋势日报：每天自动抓取信息、生成结构化早报，再推送到手机上。
第二个高频场景，是「
带记忆的编程
」。
对很多开发者来说，它更像一个不会失忆的编程搭档：记得你的代码库结构、命名习惯，也记得部署流程和历史上下文。
再配合6种终端后端，你可以把它放到云端VM上持续干活，自己去做别的事。
但真正让社区兴奋的，还是Gateway本身。
你可以在手机Telegram上发起一段对话，回到电脑后再在终端里无缝接着聊；发一条语音备忘录，它会自动转写、继续进入后续处理流程。
同一个Agent，驻留在同一个进程里，却能同时出现在你所有的平台上。
而在架构层面，它已经开始支持跨框架的Agent联邦通信。
一个Hermes Agent和一个OpenClaw Agent可以互相发消息、委派任务。
社区也在推进更深层的多Agent协作：让多个专业化Agent组队分工、共享状态。
它还没学会「自我进化」
Hermes Agent目前的「成长」，发生在技能层和记忆层，而非模型参数层。
它不会在你的服务器上自动微调模型权重，也不会越用越「聪明」到超出底层模型能力的程度。
它的进化方式更像一个经验丰富的员工，做过的事会记住，踩过的坑会写成SOP，下次执行更快更准。
但模型本身的天花板，仍然取决于你接入的大模型。
Hermes Agent
支持Nous Portal、OpenRouter、OpenAI、Anthropic、Google Gemini、xAI、z.ai、Kimi、MiniMax等多种模型来源，也支持本地Ollama及任何OpenAI兼容端点，通过hermes model随时切换，不锁定任何厂商。
Hermes Agent的演进路线
近期几个版本的更新方向，已经非常清楚地勾勒出了Hermes Agent的演进路线。
2026年3月28日发布的v0.5.0，被定义为「hardening release」，核心关键词是
安全加固
：50多项安全与可靠性修复、供应链审计，先把整个系统的底盘打牢。
2026年4月3日发布的v0.7.0，被称为「resilience release」，重点转向
长期运行能力
，包括可插拔记忆架构、凭证池轮换、网关竞态与审批路由修复，以及总计168个PR、46个已解决问题带来的系统性增强。
到了这次发布的v0.8.0，这一轮更新被命名为「intelligence release」，重点聚焦
智能：
后台任务自动通知、模型实时切换、MCP OAuth 2.1，开始把Agent的「可用性」进一步推进到「智能性」。
从安全，到稳定，再到智能，这条版本演进路径本身，反映了Nous对Agent产品形态的真实判断。
他们很清楚，一个要24小时驻留在你服务器上的Agent，最大的敌人从来不是「不够聪明」，而是「跑着跑着崩了」「凭证泄露了」「网关挂了」。
长期运行，才是Agent真正的工程挑战。
一行命令，5美元就可以上手
说完架构和路线，怎么上手？
官方把安装入口直接做成了一条标准命令：
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
最直接的方式，是租一台便宜的VPS，SSH进去后一行命令完成安装。
从官方安装脚本的说明来看，这是面向Linux和macOS用户的默认入口，也是最快的起步方式。
装完之后，再运行
hermes setup
完成初始化：选择你的LLM提供商，填入API Key，选好模型，就可以开始对话。
Nous Portal、OpenRouter、OpenAI、本地Ollama，都是常见选择。
想省钱？就用OpenRouter接一个便宜模型，已经足够覆盖大多数日常使用场景。
想要更强隐私，可以把Ollama和本地模型挂起来；想追求更好效果，还可以再切到更强的商用模型。
等基础配置完成，再继续跑
hermes gateway setup
，把它接到Telegram这类消息平台上。
如果想让它长期在线，再用
hermes gateway install
注册成系统服务。
这样一来，机器重启之后它也会自动拉起，真正进入24小时在线的工作状态。
如果你是从OpenClaw迁移过来的，
hermes claw migrate
可以一键导入原有设置、记忆和技能。
除此之外，Mac用户、Windows WSL2用户、Docker用户，也都有各自对应的安装路径。
甚至还可以借助Pinokio这类一键安装器，把命令行门槛继续压低。
做Agent的人，自己就是训模型的
Nous Research并不是一个周末车库项目。
这家公司2023年成立，团队约20人，创始人是Jeffrey Quesnelle、Karan Malhotra、Teknium和Shivani Mitra
，累计融资6500万美元，其中5000万美元A轮由Paradigm领投。
Jeffrey Quesnelle
四位创始人均来自研究与工程一线，他们此前最出名的作品是Hermes、Nomos、Psyche三个开源模型家族。
这说明Hermes Agent的创始团队，他们原来的工作就是训练大模型，因此他们可能比任何Agent框架团队都更清楚大模型在工具调用和长程规划上会犯什么错。
Hermes Agent不锁定任何模型，但Nous Research自研的Hermes模型家族（下载量超5000万次）正是在Agent场景中被大量使用的选项之一。
训模型的人亲自做Agent，Agent产生的数据又能回流训练：这并非巧合，更可能是一种设计。
私有AI的自进化时刻，来了
「一个会跟着你成长的Agent」。
这句slogan背后，Nous Research押注的是这样一条路线：
Agent不该只是一次性的调用接口，而应该是私有的、常驻的、会积累的，并且最终能够反哺训练。
这几乎站在了当下主流的云端Agent服务的反面。
后者更像一种「即开即用、用完即走」的托管模式，数据、记忆和行为沉淀大多留在平台一侧；而Hermes Agent想做的，是把这些能力尽可能留在用户自己手里。
如今，在开源社区，Hermes Agent已经跑出了自己的节奏。
比3.8万GitHub stars更值得注意的，并不是它有多火，而是它背后那条从Agent、技能、记忆到训练数据的闭环，已经开始显形。
当Agent开始自己积累技能、自己生成训练数据、再将这些沉淀重新喂回模型，我们距离一个真正意义上的「自进化AI系统」还有多远？
5美元即可本地部署，带记忆、不会轻易失忆的专属「赛博员工」已经上线。
Hermes Agent让我们第一次如此清晰地看到：
私有AI的自进化时刻，可能真的来了！
参考资料：
https://virtualuncle.com/hermes-agent-complete-guide-2026/?utm_source=chatgpt.com
https://hermes-agent.nousresearch.com/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！