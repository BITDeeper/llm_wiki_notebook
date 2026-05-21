---
title: "Claude Opus 4.7刚刚曝光！Claude Code一夜重构，7x24小时替你打工"
date: 2026-04-15
source: "新智元"
url: "https://mp.weixin.qq.com/s/ZeQ8VOEC53rmXB4jPSfPDw"
rss_id: "2652692134_1"
---
新智元报道
编辑：好困 桃子
【新智元导读】
太疯狂了！Anthropic刚刚发布Claude Code新版，上线神秘功能Routine：支持定时、API、GitHub三路触发，直接变身「云端员工」。更刺激的是，Opus 4.7即将本周闪电发布，直接跨界硬刚Adobe、Figma。
Claude Code一夜重构！
就在刚刚，Anthropic重磅官宣：桌面端Claude Code已经过彻底重构。
这一次，它可以在同一窗口，并行跑多个并行Claude，速度也大幅提升了。
CC还引入了全新侧边栏， 便于高效管理任务。
它集成了终端窗口，支持直接在应用内进行文件编辑，并拥有一个重新设计的差异查看器（diff viewer）。
同在今天，Claude Code上线了Routines新功能，直接变身「云端员工」，合上电脑也能照常上班。
定时、API、GitHub事件三路触发同时上线。
目前，研究预览阶段，Pro/Max/Team/Enterprise用户全量可用。
每天运行次数上限：Pro 5个，Max 15个，Team和Enterprise 25个；再多，就得加钱了
更刺激的是，Claude Opus 4.7即将在本周上线！
据称，
同步上线的，还有一款全新的「设计工具」，直接跨界挑战Adobe、Figma等设计领域巨头。
看来，Anthropic又要上大分了！
Claude Code一夜重构，编程爽到飞
Claude Code桌面端彻底进化，一时间登上了热搜。
它不仅仅是一个简单的版本更新，更标志着AI编程工具向「全能IDE体验」迈出了一大步。
对于大多数开发者来说，一定厌倦了在「命令行」和「编辑器」之间频繁切窗口。
这一次，Claude Code的升级将会彻底改变开发的工作流。
核心升级：为并行而生
新版Claude Code桌面端最引人注目的变化，莫过于侧边栏管理系统的引入。
开发者可以在同一个窗口内同时运行多个Claude，还能并排显示。
这意味着，你可以一边让Claude修Bug，一边在另一个窗口同步生成测试用例。
而且，整个界面支持高度自定义，简单「拖拽」即可自由排列布局。
不仅如此，Claude Code还深度集成了多项功能，让开发彻底告别碎片化操作。
它内置了「终端」，直接在Claude桌面端中运行脚本和命令，无需在iTerm、VS Code之间反复横跳。
而且，CC还支持原生修改代码文件，配合重新构建的Diff查看器，代码变更一目了然，速度极快。
无论是复杂的HTML，还是技术规格说明的PDF，现在都能在CC内直接预览。
不仅如此，它还支持连接SSH远程服务器，云端开发也能享受本地般的丝滑感。
担心之前的习惯被打乱？大可不必。
命令行中使用的所有CLI插件，可在Claude Code中无缝衔接。它不仅保留了命令行的强大功能，同时赋予了GUI的高效操作感。
Anthropic研究员Alex Albert激动表示，「说实话，有了Cowork和Code配合，我现在干大部分活儿基本都不用开别的App了，甚至连终端都省了」。
睡一觉，Claude Code把活都干了
更炸的是，Claude Code放出的Routines功能。一次配置，CC就能按计划，24h全自动干活。
简单来，Routine就是一份写好的Claude Code「工作说明书」。
你提前配好三样东西，提示词（prompt）、代码库、连接器（connectors），然后塞给它一个或多个触发器。
触发器一响，Claude Code就在Anthropic的云端基础设施上自己开一个新会话，按说明书办事。
关键词是「
云端
」
。
过去你要让Claude Code自动化地干活，得自己折腾一堆东西，cron定时任务、MCP服务器、基础设施。
你的电脑得开着，进程得活着，一断网一睡眠就全完蛋。
Routines把这层烦恼一次性端走，全部搬到Claude Code的云端跑，不依赖你的电脑开不开着。
每个Routine还能跑在一个你自己定的「云端环境」里。
网络权限开不开、要不要塞进去一组环境变量和API Key、跑之前要不要先执行一段初始化脚本装依赖，在界面里点一点就能配好。
这层东西过去得自己搭Docker镜像才能管，现在变成了表单里的一个选项。
不久前，Boris Cherny那条「我在本地开5个Claude、在claude.ai/code上再开5到10个Claude并行干活」的爆火帖子，现在读起来像一个前时代的证词。
因为从今天起，Claude Code本身就变成了那个「并行帮你开会话的人」。
三路触发器，一次上线
先说最基础的，
定时触发（Scheduled）
。
给Claude Code一段提示词加一个频率，每小时、每晚或者每周，它就老老实实按表干活。
每天凌晨2点：从Linear拉优先级最高的bug，尝试修复，然后开一个草稿PR。
这个用法其实已经在CLI里以/schedule命令存在了一阵子了。
本次更新做的事是把它重新命名为Routine，并且统一到同一个配置界面下。所有你此前用/schedule建过的任务，现在自动变成了「定时Routine」，不需要迁移。
定时这一路能干的活大体是这几类。
每晚对新开的Issue做自动triage、打标签、分配owner，然后往Slack丢一份摘要。
每周扫一遍合进去的PR，如果发现有文档还在引用已经改过的API，自动提一个更新文档的PR。
但这还不是最炸的。
把Claude Code接进告警系统，只要一个POST
每个Routine从今天起会分到一个
独立的HTTP端点
，以及一个专属的Bearer Token。
带着Token往这个端点POST一下，Claude Code就立马启一个新会话，POST的body里可以塞一段text字段，作为用户追加的提示词拼进Routine原本的prompt。
接口会返回一个session URL，点开就能看Claude在云端的直播。
curl
-X POST https://api.anthropic.com/v1/claude_code/routines/trig_xxx/fire
\
-H
"Authorization: Bearer sk-ant-oat01-xxxxx"
\
-H
"Content-Type: application/json"
\
-d '{
"text"
:
"Sentry告警SEN-4521在生产环境触发,stack trace在附件。"
}'
这东西最直接的用法，
就是把Claude Code接进你家的告警系统
。
Datadog报错超过阈值？监控直接调Routine的API，把告警详情塞进text。Claude拉trace、关联最近的部署记录、定位问题、起草一个修复方案PR，这些事在值班同事打开笔记本之前就已经做完了。
再比如，CD流水线每次部署完调一次Routine的API。Claude对着新版本跑一遍冒烟测试，扫错误日志看有没有退化，在发布窗口关闭前敲定go/no-go。
任何能发HTTP请求的地方，现在都能接进Claude Code。内部工单系统、文档站的反馈按钮、Slack里的slash command、你家土法炼钢的bash脚本，随你折腾。
GitHub里开一个PR，Claude就开一个会话跟进
最后一路，是
GitHub Webhook触发
。
给Routine配一个GitHub事件订阅，支持的事件有一长串，pull_request.opened、pull_request.review_comment、push、issues、workflow_run、discussion等等，几乎涵盖了GitHub活动的全部类目。
匹配到事件？Claude Code立刻开一个新会话干活。
这里有个细节值得单独拎出来说，
一
PR
一session
。
对每一个符合过滤条件的PR，Claude会开一个
专属
的会话，并且持续把这个PR的后续动态，包括新提交的代码、新评论、CI挂掉的日志，全部feed回同一个会话里。
也就是说这个会话不是干完这一票就完事，它是跟着这个PR长期活着的。
PR过滤器也给得足够细，按作者、标题、body正则、base branch、head branch、labels、是否草稿、是否已合并、是否来自fork都行。
最狠的一个例子来自Anthropic自己给的文档，
跨库移植
。
每当一个PR合进Python SDK，Routine就自动触发，把这次改动平移到平行的Go SDK代码库，顺手开一个对应的PR。两个库保持同步，再也不用人工肉眼翻译代码了。
两周前泄露的「KAIROS」，就是它？
还记得3月底Claude Code源码泄露那档子事吗？
当时网友从.map文件里扒出来的那些功能，除了Undercover Mode以外，最引人注目的一个代号叫
KAIROS
。
一个可以作为持久化的后台Agent运行的功能，能够周期性地自行修复错误、跑任务，不需要等人类输入，甚至可以给用户发push通知。
对照一下Routines的产品页，你会发现几乎是一一对应。
「持久化的后台Agent」→ 云端托管模式，合上电脑也在跑；
「周期性自行修复错误」→ Scheduled触发器，每晚拉最高优先级bug；
「不需要等人类输入」→ API触发器，监控系统直接喂；
「push通知」→ 每次运行返回session URL。
泄露文件里那个被网友讨论了两周的代号，今天以Routines的名字，正式上线了。
Anthropic从没公开承认过KAIROS就是Routines的代号，但技术描述几乎严丝合缝。这大概是过去一年泄露和产品路线图之间最干净的一次重合。
从源码意外曝光到正式发布，中间只隔了两周。
Opus 4.7本周突袭，一刀直捅Adobe心脏
这一周，AI圈或许又要被「OpenAI头号劲敌」搅得天翻地覆了。
Information独家爆料称，Anthropic准备祭出双重「杀招」——
一是，备受全网期待的「旗舰级」Claude Opus 4.7将在本周闪电发布。
在泄露代码中，Opus 4.7以capybara-v2的名字现身，已在内部API注册。
对此，还有网友称，Claude最近降智的主要原因，就是新模型即将要发布了。
二是，一款直接生成网页和演示文稿的全新Vibe的设计工具即将亮相。
只需一句话，即可完成演示文稿、网站、落地页，以及各类产品视觉设计，极大地简化了创作门槛。
Anthropic此举，直接向设计文稿 Gamma、AI设计工具Figma等初创公司的「核心腹地」发起挑战。
消息一出，随即引发了创意软件板块股市的剧烈波动——
Adobe、Wix、Figma的股价跌幅均超2%。
据传，OpenAI代号「土豆」模型也将在本周亮相。
硅谷「神仙打架」的好戏即将上演。
参考资料：
https://claude.com/blog/introducing-routines-in-claude-code
https://x.com/felixrieseberg/status/2044128194647994585?s=20
https://www.theinformation.com/briefings/exclusive-anthropic-preps-opus-4-7-model-ai-design-tool
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！