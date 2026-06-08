---
title: "Codex撞脸Claude Code，新功能只领先11天"
date: 2026-06-06
source: "新智元"
url: "https://mp.weixin.qq.com/s/6ZzA8U0bqNQgn2uXDEnmCQ"
rss_id: "2652705309_2"
---
新智元报道
【新智元导读】
连斜杠命令、技能格式、dreaming的名字都撞上了，Claude Code和Codex正长成同一张面孔。
Codex和Claude Code长得越来越像了！
最近，开发者Elie Bakouch感到Claude Code和Codex的功能越来越像，他好奇到底哪家在领跑，于是就把两家都有的功能做成了一张时间线。
这个时间线跨度从2025年2月到2026年6月，将Claude Code与Codex的相似功能时间顺序排列，其中橙色代表Claude Code，蓝色代表Codex。
每一行是一个双方都拥有或相近的功能，涵盖了从/goal、子智能体（subagents）到OpenAI最近推出的「dreaming」记忆机制等更新。
Elie统计的结果是：两家共有24项相似功能，其中18项是Claude Code先发布的，Codex只先发了4项，剩下2项谁先谁后还有争议。
单看两家共有的功能，Claude Code更像那个引领节奏的人：18项功能抢先发布，橙色几乎铺满了整张时间线的前半段。而Codex抢先发布的只有4项。
两家的圆点贴得越来越近，一项新功能的先发优势，正在以天为单位蒸发。
Codex先发那4项里，有2项被Claude Code几乎贴身扳了回来：/goal是Codex先上，11天后Claude Code追平；多智能体并行，又是Codex先发，Claude Code用了11天追上。两次反扑，都没超过两周。
相比之下，Codex这边接下来要啃下的那条清单更长。
你追我赶之中，双方撞车的还不只是时间，连斜杠命令的名字、技能文件的格式，也都开始重合。
两家AI编程智能体，正在逐渐长成同一张面孔。
18比4
Claude Code赢在了起跑线
Elie整理的这份清单，覆盖了Claude Code和Codex从发布到现在的24项共同功能。
这是他个人整理，交叉了npm发布时间、GitHub release和官方博客，并没逐条与官方核对，但大趋势是清晰的。
Claude Code比OpenAI新版Codex早约80天推出。它2025年2月先以终端里的编程智能体形态亮相，Codex要到5月才以云端软件工程智能体的形式发布。
正是这早出发的约80天，加上之后一年里紧凑的更新节奏，让Claude Code在24项里先发了18项，橙色铺满了前半张表。
这些功能包括无界面脚本化（headless）、模型上下文协议（MCP）、自定义斜杠命令（custom slash commands）、上下文压缩（context compaction）、子智能体（subagents）、生命周期钩子（hooks）、技能（skills）等。
作为后发者，Codex也不是一直在追。内置沙箱（built-in sandboxing）、云端异步智能体（cloud async agent）、多智能体并行团队（multi-agent teams）、目标模式（Goal mode），这几项都是Codex先发。
还有两项，Elie标为有争议。
检查点与回滚（checkpoints/rewind），如果按「能撤销代码改动」这个更强定义看，Claude Code的 /rewind更接近完整检查点回滚；如果按「会话回退/分叉」看，Codex侧也有较早记录，所以这一项仍应保留为争议项。
记忆dreaming（memory dreaming）的争议，是它把两件事搅在了一起。如果只看「记忆」能力，OpenAI侧更早在ChatGPT memory体系中推进；但如果看「dreaming」这个名称和回看历史、自我复盘机制，Anthropic在Claude Managed Agents中于2026年5月6日公开推出。
撇开这两项，18比4，Claude Code的领跑优势，肉眼可见。
其实，「Codex」这名字不是2025年才有的。
OpenAI早在2021年就发过Codex模型，用自然语言生成代码。但Elie比的是2025年才上线的Codex编程智能体。
OpenAI明明在AI编程上起了个大早，却把编程Agent的先发优势让给了Claude Code。
旧Codex证明了「模型会写代码」，Claude Code则率先把这件事做成了开发者愿意日常使用的智能体产品。
功能像素级对齐
是抄袭，还是收敛？
这场贴身肉搏里，两家的功能正贴着脸往一块儿长，
已经不是单点撞车，而是关键能力成组对齐。
最典型的就是/goal。
Claude Code官方文档里，/goal是这么定义的：给它设一个完成条件，它会跨多个回合一直干，直到条件满足才停。每跑完一回合，一个小而快的模型判断条件成立没有，不成立就继续下一回合，而不是把控制权还给用户。
Claude Code官方文档中 /goal 的定义：设好完成条件，每跑完一回合由一个小而快的模型判断是否达成，未达成就继续。
Codex的Goal mode做的也是同一件事：给定一个持久目标，Codex就朝着它一轮轮干下去，几小时、甚至几天都不用人盯。这功能也早过了实验阶段，app、IDE插件、命令行里都能调用。
同一套机制，两家各做了一份。
subagents也是。
Claude Code的子智能体跑在各自独立的上下文窗口里，用来隔离上下文、约束工具、复用配置、压成本；Codex则靠并行的专用智能体（specialized agents）跑subagent工作流，再汇总结果。
更微妙的是，连名字都对上了。Codex给侧边提问命令加的/btw别名，直接和Claude Code撞名；技能系统那边，
Claude Code与Codex也都采用
了Anthropic的SKILL.md格式。
Claude Code与Codex的技能均采用Anthropic发起、后开放为标准的SKILL.md格式，连文件名都一致。
把两家的文档对比细看，你会发现：这不是谁照搬谁的故事，是AI编程智能体这个产品，本身就在收敛成一个固定形态。长任务、子智能体、上下文压缩、权限沙箱、工作区隔离、插件和技能生态，无论谁做，最后都可能会长成这个样子。
Dreaming这一项更典型。
Anthropic给Claude Managed Agents（Claude托管智能体）做了个叫dreaming的机制，能回看历史会话、找规律、自我改进；OpenAI六月初也给ChatGPT上了同名的dreaming记忆系统。
可这两个dreaming并不是同一个东西：
Anthropic的
Dreaming
长在托管智能体平台，不是Claude Code命令行里人人能敲的命令；
OpenAI的Dreaming则长在ChatGPT的记忆系统里，也不是Codex的编程能力。
真正值得注意的是：AI Agent的产品语言、能力模块和接口形式，正在越来越快地向同一套范式靠拢。
这意味着，功能清单本身已经不再是壁垒。真正的差距，从「有没有这个功能」，升级到了「这个功能到底做成什么样」。
先发抢热度
赢到最后却看可靠性
在AI这个快速迭代的领域，先发到底还值不值钱？
据WIRED报道，2025年9月，Codex的使用量只有Claude Code的5%。到2026年1月，这个数字蹿到了接近40%：追赶的速度很快。
用户数也在拉近。OpenAI在6月2日称，Codex周活跃用户已超过500万，较2月桌面版上线时增长约6倍。Anthropic不单独公布Claude Code的周活，第三方估算其5月在200万量级。
两者口径也不完全对齐：Codex这500万里非开发者已占两成，是把「编程工具」摊成「办公平台」后的数字。
在更纯粹的开发者侧，Claude Code仍占上风：过去30天npm下载量约4630万次，是Codex命令行版（约1400万次）的3倍多（第三方统计）。论「每周多少人打开」，Codex已经反超；论「开发者用得有多重」，Claude Code仍领先。
值得Anthropic警惕的，是一些开发者的「倒戈」。
WIRED援引Notion联合创始人Simon Last的说法，他和核心工程师在GPT-5.2前后转向了Codex，理由是可靠性。他说Claude Code会对他撒谎，「说自己在干活，其实根本没动」。
去年10月，OpenClaw之父Peter Steinberger公开宣布整套工具都用Codex搭成，四个月后，他本人也加入了OpenAI。
Peter Steinberger 自述已完全转用 Codex CLI 作为日常主力，常在 3x3 终端网格里并行跑3到8个实例。https://steipete.me/posts/just-talk-to-it
当先发红利一天天被摊薄，真正的胜负手早已不在「谁先做出来」。
差异化窗口正在关闭
双方的功能清单一旦趋同，较量的战场就变成了这些功能的体验上。
早期比的是谁更会写代码、改bug、读代码仓库。现在比的是一整套工程环境：记忆、计划、沙箱、工具调用、子智能体、后台任务、远程控制、长期目标。
同一个功能，谁的响应更快、长任务完成率更高、自动压缩更干净、权限更安全、成本更低。
双方对AI编程的理解和路数也不一样。
Claude Code更像「终端里的自主工程师」，先在命令行里把开发者工作流吃深，再用hooks、子智能体、技能、插件往外长。
Codex更像「多端工作台」，把命令行、IDE、桌面App、移动端远程控制和云端任务揉成一体。
虽然打法不同，两者的目标却撞在了一起：都不甘心只当IDE里的一个插件，都想成为开发者每天打开的第一个入口，成为个人和企业的操作系统。
Elie甩出那张表，
本想给两家分个高下，结果反而揭开了另一个事实：AI编程智能体的差异化窗口，正在迅速关闭。双方越追越紧，也越长越像。
参考资料：
https://x.com/eliebakouch/status/2062693979087397189?s=20%20
https://x.com/MTSlive/status/2062569780947849398%20
https://openai.com/index/chatgpt-memory-dreaming/%20
https://gist.github.com/eliebak/e1f30ab973ee3ef41cba275d65c3b2cb
编辑：元宇
秒追ASI
⭐
点赞、转发、在看一键三连
⭐
点亮星标，锁定新智元极速推送！