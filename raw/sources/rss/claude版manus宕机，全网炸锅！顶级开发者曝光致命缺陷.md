---
title: "Claude版Manus宕机，全网炸锅！顶级开发者曝光致命缺陷"
date: 2026-01-16
source: "新智元"
url: "https://mp.weixin.qq.com/s/G1f4utrbmZ_ZEnh4iQYtJg"
rss_id: "2652665337_1"
---
新智元报道
编辑：Aeneas
【新智元导读】
Claude Cowork，已经引起一场海啸，甚至一度被疯狂的网友用到宕机！而Django之父在博客中，也揭露了Cowork核心机制的终极秘密。
最近，全网都被Claude Cowork给硬控了。
这个开年爆红的产品，直接引发了网上新一轮地震，引爆了硅谷的巨大关注和热烈讨论。
短短两天内，它就已经在网上积累了五千万的浏览量，
点赞超8.6万、引用近1.5万次
，堪称病毒级传播。
可以说，这个新物种，基本上就是面向普通用户群体的通用智能体。甚至许多人评价说：已经卷出了接近AGI水平的工作流。
而且这是第一次，原本局限于开发者的强大智能体，扩展到了非技术任务上。不会编程的人们有福了！
甚至，昨天因为Cowork太火爆，直接让Claude用量太大，崩了。
网友太疯狂，Claude被用到宕机
有人正泡好咖啡，摩拳擦掌准备（让AI）大干一场时，发现Claude Code居然宕机了？
以前Slack/SSO宕机时，感觉自己可以放个假了，啥时候能开工，取决于Claude啥时候恢复。
或许，这是唯一让我们需要ChatGPT Pro的理由了，毕竟可以用Codex作备份。
有人说，Claude不能用，简直跟网断了一样，突然感觉自己是个原始人。
没有Claude手把手教我写代码了，这简直是开发者的终极噩梦……
好在这场宕机没有持续太久，现在，大家又可以用它愉快地打工了。
Django之父：Claude Cowork有点东西
就在刚刚，Django之父Simon Willison发布了一篇长篇博客，讲述了自己使用Claude Cowork的惊人体验。
太长不看版：Cowork的核心机制包括以下三个方面——
1.沙箱机制 ：所有操作都在独立隔离的环境中完成，从而保障安全性，防止对真实系统文件造成误操作。这个机制基于苹果的Virtualization Framework，使Claude 能在虚拟机内执行各类任务。
2. 多步自主执行能力 ：Claude能够连续完成多项操作，例如调试代码、优化目录结构，甚至搭建简单工具。根据内部数据，单次任务可支持约20个连续步骤，相较早期版本实现了翻倍提升。
3. 工具生态整合 ：通过支持MCP，并结合Skills（如文档和演示文稿生成）以及 Claude in Chrome等功能，Claude的通用性进一步增强。
下面，就是Simon Willison具体的上手评测体验。
Cowork这个名字，真是不错
Claude Cowork，可以看做是一个研究预览版，目前仅面向Max订阅用户（每月100或200美元）开放，属于更新后的Claude Desktop macOS应用程序的一部分。
Simon表示，自己早就说过，Claude Code本质上是一个伪装成开发者工具的「通用智能体」。
任何可以通过代码或运行端命令实现的任务，它都能帮你完成。它需要的，只是一个无需终端的用户界面，以及一个不会吓跑非开发者的名字。
Simon评价说——Cowork这个名字，真不错！
接下来，他就展开了一大波实测。
首先，他给出了这样的prompt。
请查看我最近三个月内开始撰写的草稿，然后通过搜索simonwillison.net 网站上的内容，确认我没有在这些草稿上发布它们，并推荐其中最接近完成的几篇。
首先，Cowork运行了下面这个命令。
find /sessions/zealous-bold-ramanujan/mnt/blog-drafts \
-
type
f \( -name 「*.md」 -o -name 「*.txt」 -o -name 「*.html」 \) \
-mtime -90 -
exec
ls
-la {} \;
其中，
/sessions/zealous-bold-ramanujan/mnt/blog-drafts
这个路径，立刻引起了他的注意。
之前Anthropic表示，Cowork只能访问你授予它访问权限的文件。Simon猜想，似乎Anthropic将这些文件挂载到了一个容器化的环境中，因此我们可以相信，Cowork无法访问沙箱之外的任何内容。
最终，Cowork使用搜索工具，对simonwillison.net这个网站进行了44次单独搜索，然后在过去三个月他写的46份草稿中，找到了以下几篇最值得发布的内容。
下面这个回复，让Simon非常惊喜！因为它非常有效地找到了他想看到的内容。
接下来，因为Simon非常喜欢Claude的artifacts功能，他又给出了这样一个任务。
帮我做一个有动画效果、很有激励感的作品，促使我马上行动。
Cowork给出了这样一个非常惊艳的结果。
Cowork，不就是Claude Code吗
所以，Cowork和普通的Claude Code有什么区别？
答案，就是区别不大。
Simon猜测说，Claude Cowork就是普通的Claude Code，不过它的默认界面更友好，而且已经配置好了文件系统沙箱。
不过随后，他有了一个全新的发现——它不仅仅是一个文件系统沙箱！
他让Claude Code对Claude应用进行了逆向工程，结果发现：Claude使用了 VZVirtualMachine（苹果虚拟化框架），并下载和启动了一个自定义的Linux 根文件系统。
地址：https://gist.github.com/simonw/35732f187edbe4fbd0bf976d013f22c8
这个发现，让他很吃惊。
Simon表示，Cowork是一个非常聪明的产品。而且Claude Code蕴藏着巨大的价值，但尚未被大众发掘！
的确，Cowork就是源于Claude Code的非编码应用需求，它能让AI自动化、民主化，但仍依赖人类提示工程来优化多步循环。
毕竟在此前，芝大教授Alex Imas就表示，Claude Code太不可思议了，才用20分钟，它就完成了24到48小时的工作！
提示词攻击，危险始终存在
不过，既然有这样的功能，那Simon就开始担心使用的安全性了。
如果使用Cowork的人被隐藏的恶意指令攻击，导致电脑崩溃或数据被盗的风险有多大？
其实，Anthropic在公告中，已经提醒用户注意提示词注入风险了——攻击者会试图通过Claude在互联网上可能遇到的内容，来篡改其计划。
比如Claude Code之父Boris Cherny的推文中就表明，Claude Code和Cowork 中WebFetch函数所应用的摘要功能，部分目的就是防止提示词注入攻击。
然而，虽然Anthropic表示，会尽力过滤掉潜在的攻击，但无法保证未来不会出现能突破防御的攻击。
这个事的危险之处就在于，除非发生重大事件，否则很难让人们认真对待它。
Simon表示，至少Cowork默认运行在文件系统沙箱中，这比他的
claude --dangerously-skip-permissions
习惯强多了！
（后者被称为YOLO模式，即智能体无需实现不断寻求批准，就可以执行操作。）
OpenAI哭惨了
最后，Simon对Cowork给出这样的评价：抛开安全隐患不谈，Cowork的确展现出非常有趣的特质。
这款通用Agent软件很有潜力将Claude Code的强大功能，带给更广泛的用户群体。
Simon还表示，接下来如果Gemini和OpenAI不赶紧推出该领域的类似产品，他会很惊讶的。
他猜想，把「ChatGPT Agent」这个好名字用在那款粗糙的实验性产品、如今几乎已经被遗忘了的浏览器自动化工具上，OpenAI现在肯定肠子都悔青了！
参考资料：
https://simonw.substack.com/p/first-impressions-of-claude-cowork
https://x.com/deedydas/status/2011373567620121045
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！