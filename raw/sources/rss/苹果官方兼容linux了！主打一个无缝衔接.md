---
title: "苹果官方兼容Linux了！主打一个无缝衔接"
date: 2026-06-12
source: "量子位"
url: "https://mp.weixin.qq.com/s/1YCOhrgbrMSplYWxfevncA"
rss_id: "2247897146_2"
---
鱼羊 发自 凹非寺
量子位 | 公众号 QbitAI
Coding这事儿上，macOS和Linux各有特长：
一个胜在顺手、工具精致，写代码爽；一个胜在标准、生态完善，跑代码爽。
不过现在，程序员们可以不用取舍，
直接在苹果电脑里丝滑跑Linux了
。
WWDC上，苹果最新开源了
Container machine
：一个高度集成的Linux环境，可以在苹果电脑上无缝运行。
苹果官方设定的工作流是酱婶的：
Mac上编辑，Linux环境里构建和运行。让开发者家人们从写代码到跑代码都能体验拉满。
嗯，目的挺明确的，就是要用原生容器，
把Mac打造成更具吸引力的开发者主力机
。
还真别说，苹果这下真是抓住了开发者们的心，相关讨论在Hacker News上的热度，仅次于Claude Fable 5。
苹果原生Linux容器
去年的WWDC上，苹果开源了Containerization——用来在macOS上运行Linux容器的Swift框架。
Container machine基于这个框架打造，主打一个快速、轻量化、好管理，让macOS到Linux之间的切换变得简单丝滑。
与普通容器不同的是，
普通容器更偏向一次性跑应用
，状态不一定长期保留。而
Container machine更像是一个可以反复进入的「Linux工作间」
，工具、环境……今天用完了明天还能从停下来的地方接着用。
官方介绍，Container machine是一个运行在独立轻量虚拟机里的Linux环境，并使用与容器相同的OCI镜像。
它既保留了容器的轻量和镜像生态，又补上了虚拟机的状态持久化。
体验上是这样的：
从macOS到Linux，工作目录是共享的。比如，代码仓库在macOS的$HOME，在container machine里也能访问。
macOS原生工具，比如性能分析器、截图工具、浏览器，也可以直接查看Linux上构建出来的东西，不需要复制文件。
苹果向开发者抛出橄榄枝
苹果这一波操作，还真有点当初微软把WSL捧出来的意思了。
不少网友的第一反应也是，这不就是WSL for macOS？
问题当然还有不少，比如初始版本仍缺少很多常见容器化能力、内存释放到macOS还有限制……以及，开发者用惯了Docker，真的还需要一个container machine吗？
但甭管怎么说，Container machine可以说是苹果向开发者们抛出的一枝橄榄枝，并且确实戳中了大家伙的心：
写代码，Mac确实舒服，但跑服务、做部署、对齐线上环境，Linux依然是标准答案。
虽说现在可能也没几行代码是自己写的了，但编程这事儿，开发体验还是很重要的（doge）。
参考链接：
[1]https://github.com/apple/container/blob/main/docs/container-machine.md
[2]https://developer.apple.com/cn/videos/play/wwdc2026/389/
—
欢迎AI产品从业者共建
—
📚
「AI产品知识库」
是量子位智库基于长期产品库追踪和用户行为数据推出的飞书知识库，旨在成为AI行业从业者、投资者、研究者的核心信息枢纽与决策支持平台。
一键关注 👇 点亮星标
科技前沿进展每日见