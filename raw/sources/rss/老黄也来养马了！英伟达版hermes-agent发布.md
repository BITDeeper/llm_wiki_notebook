---
title: "老黄也来养马了！英伟达版Hermes Agent发布"
date: 2026-06-03
source: "量子位"
url: "https://mp.weixin.qq.com/s/rnba1mOLGfv5IoTukMGTbg"
rss_id: "2247894633_2"
---
听雨 发自 凹非寺
量子位 | 公众号 QbitAI
英伟达版Hermes Agent
也来了！
今天凌晨，英伟达官方连发两条帖子，力推
Hermes Agent+NemoClaw方案
。
这咋说呢…老黄你最终还是对Hermes下手了哈。
直接哐哐两支视频，教你把Hermes配上英伟达自家的部署方案，做一个“会自我进化、还跑得安全”的企业级AI。
官方X上发的那条视频，长达55分钟，技术博客、代码仓库什么的，也都一应俱全了。
由于视频太长，实在是看不完。
于是我总结了一下，英伟达版Hermes Agent的核心主要有三件事：
越用越聪明、数据不出本地、学到的技能重装系统都忘不掉
。
英伟达版Hermes Agent，有啥特别？
这次发布的主角呢，就是大名鼎鼎的
Hermes
。
如果你要问Hermes是什么，我只能说…
不会吧不会吧，不会还有人不知道Hermes是什么吧？？
咳咳，正经解释一下，Hermes是Nous Research开源的agent框架，MIT协议，代码完全公开。
目前在github上也是跑到17万星了。
自从Hermes释出之后，不少人觉得它比OpenClaw更加稳定，所以热度一直只增不减。
在最近的GTC Taipei上，老黄在发布RTXSpark时，也把Hermes和OpenClaw并列提及。
Hermes最核心的设计，是一套
内置的学习闭环
。
完成一个复杂任务之后，它会把自己的做法总结成一个技能存下来，下次遇到类似的事直接调用，不用再从头摸索。
用的时间越长，积累的技能越多，越趁手。
更厉害的是，Hermes还会随着时间建立一个“你是谁、你习惯怎么工作”的用户模型。
版本较新的Hermes还有一个自主运行的Curator，会按周期给技能库打分、合并重复的、归档过时的，让整个库保持干净。相当于agent自己在给自己做性能调优。
那么这次，英伟达给它配了一套完整的企业级装备：
NemoClaw
作为整体部署蓝图，
OpenShell
在里面负责安全沙箱，底层推理默认跑
Nemotron3Super
模型。
从消费级的RTXPC到企业级的DGXSpark，整套方案主打全本地运行。
整个架构主要分为三层：
模型层
（Nemotron 3 Super 120B-A12B）
：负责推理、选工具、起草回复；
Harness层
（Hermes）
：负责技能、记忆、会话管理、消息桥接；
运行时层
（OpenShell）
：负责文件和网络策略、凭证代理、沙箱隔离。
使用场景上，英伟达特意出了个官方视频，来演示如何把它接入Slack、Outlook、GitHub和NVIDIA开发者论坛。
大家可以看看：
里面也演示了Hermes的
自我进化能力
：
比如你让agent每天拉一份GitHub issue日报，它回了一堆散装文字，格式太乱。
你说：
我只要5个issue加3个讨论，每条带编号、标题、状态、链接和一句话说明。
它给的格式对了，你就顺口夸一句：
对，以后都这样。
就这一句夸，Hermes自己就写了个SKILL.md文件存了下来。
第二天换个全新的对话窗口，同样的问题问下去，格式直接对了，数据是最新的，完全不需要重说之前的要求。
因为它存进了
技能文件
，而不是那次对话的记忆里。就算把沙箱整个删掉、重建、恢复，但技能还在。
那么，如何部署呢？
官网给出了一行命令：
curl -fsSL https://www.nvidia.com/nemoclaw.sh | NEMOCLAW_AGENT=hermes bash
如果你实在懒得打命令行，官网也提供了其他方式：
Help me install nvidia.com/nemoclaw
直接把这行命令复制给你的AI助手，让它帮你装上。
这行命令能拉起Hermes+NemoClaw的基础环境，但要复现演示里的四路数据源接入，还需要额外的配置步骤，具体可以参考技术博客。
演示的视频里接的是四个数据源
（Slack、Outlook、GitHub、英伟达开发者论坛）
，但社区仓库里能接的远不止这些：
Google Workspace全家桶
（Gmail、日历、Drive、Docs、Sheets）
、实时航班追踪、卫星图像
（Planet）
、定时唤醒任务……
还有一个多模态版本，把Hermes接上Nemotron Omni，直接能处理视频、音频、图片和PDF。
基本上，你想接什么数据源，自己加集成就行。
主打一手安全牌
讲真，“越用越聪明”这件事对企业来说不是最大的顾虑。
他们担心的主要问题是：这玩意儿能不能别把内部数据传出去？
英伟达这套方案在安全上做了几层设计，而且有意思的地方在于，
它的安全靠的是策略代码，而非靠模型自觉
。
这部分在技术博客中也有详细说明。
首先，
agent根本看不到你的Slack或Outlook令牌
。
鉴权发生在沙箱代理的出口，token压根不会进入agent的视野。agent只管发出请求，真正的凭证由外面的代理注入，两者隔离。
其次，
能接触内部敏感数据的agent，被硬性禁止访问公网
。
就算这个agent哪天出了什么问题被人钻了空子，它也没有路径把数据发出去。
演示里的GitHub数据和论坛数据，是另走ETL流程同步好存下来，agent只有只读权限，不能主动拉取外部信息。
△
图片由AI生成
第三，
网络策略写在一个policy.yaml文件里
：哪些主机、哪些端口、哪些HTTP方法——全部列死。
agent想碰白名单以外的目标，代理会直接返回403，Hermes把它当成一次普通的工具报错处理，连闹幺蛾子的机会都没有。
最后是
可观测性
。
agent每一步的决策——用了哪个技能、调了哪个工具、传了什么参数、回了什么——都会以轨迹的形式记录下来，通过NeMo Relay和Arize Phoenix查看。
出了问题不是黑盒，有迹可查。
英伟达盯上Hermes，不是一天两天了
本来文章到这里就差不多结束了。
但经过一番深扒，我发现英伟达早就对Hermes Agent有想法了。
如果把时间线往前翻一翻，会发现英伟达在5月13日发布了一篇博客。
这篇博客的内容是，
把Hermes优化适配到了RTX PC和DGX Spark上
，走的是面向个人开发者的消费侧路线，配的模型是阿里的Qwen 3.6。
而在5月31日的GTC Taipei，英伟达又来了一波：
发布了面向个人agent的Windows PC新品
RTX Spark
，把OpenShell运行时带上Windows，NemoClaw蓝图扩展到全线RTX和DGX产品。
同时，也宣布
Hermes Agent和OpenClaw都将把OpenShell集成进各自即将推出的Windows原生应用
。
这背后反映出一个大的趋势：
英伟达也在抢agent入口
。
从“卖芯片、扔个模型权重让你自己折腾”，一路往上做到了模型+蓝图+安全运行时+技能库这一层。
谁掌握了好用又安全的部署层，谁就掌握了agent时代真正的入口。
但说到底，当agent从一次性的问答工具变成常驻的、会越来越了解你工作习惯的“同事”——
企业敢不敢把数据交给会自己写技能的agent，才是真考验
。
参考链接：
[1]https://x.com/NVIDIAAI/status/2061870499232190967
[2]https://x.com/NVIDIAAI/status/2061858457519575280
[3]https://developer.nvidia.com/blog/deploy-self-evolving-agents-for-faster-more-secure-research-with-a-hermes-agent-and-nvidia-nemoclaw
[4]https://github.com/NVIDIA/nemoclaw-community
—
欢迎AI产品从业者共建
—
📚
「AI产品知识库」
是量子位智库基于长期产品库追踪和用户行为数据推出的飞书知识库，旨在成为AI行业从业者、投资者、研究者的核心信息枢纽与决策支持平台。
一键关注 👇 点亮星标
科技前沿进展每日见