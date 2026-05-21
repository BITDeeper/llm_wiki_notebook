---
title: "Claude Code 源码泄露了，有人用Python复刻了一个极简版"
date: 2026-04-01
source: "机器之心"
url: "https://mp.weixin.qq.com/s/hMGcR9shwmtTUos4ZiVhYg"
rss_id: "2651025242_2"
---
2026 年 3 月，Anthropic 在 npm 发布时不小心把 source map 一起打包进了生产版本，导致 57MB 的
cli.js.map
文件公开暴露——里面直接包含了 1906 个 TypeScript 源文件的完整内容。不需要反编译，不需要反混淆，原始源码直接可读。
cc-mini 正是社区基于这批泄露源码，用 Python 还原的极简复刻版本。
项目地址：
github.com/e10nMa2k/cc-mini
觉得有意思，点个 Star 支持一下。
泄露了什么？
这次泄露不是黑客攻击，是 Anthropic 自己失误。
cli.js.map
本质上是一个 JSON 文件，里面有两个数组：文件路径列表和对应的完整源码内容——一一对应，写个脚本就能批量还原全部 4756 个文件。
消息一出，GitHub 上的镜像仓库一小时内冲到了 12k star、18k fork。Anthropic 随即删除了 source map，并对 GitHub 仓库发起 DMCA，但缓存早已扩散，覆水难收。
源码里除了架构实现，还挖出了几个 Anthropic 还没上线的东西：
卧底模式（Undercover Mode）
：
检测到内部员工操作公开 GitHub 仓库时自动激活，抹除 AI 生成代码的痕迹，并要求模型「不要暴露你的身份」。
情绪监控
：
遥测系统会专门追踪用户是否在终端里对 Claude 爆粗口，以及疯狂输入
continue
的频率。
神秘模型 Capybara
：
代码注释中多次出现未发布模型代号，即后来的 Claude Mythos，定位在 Opus 之上。
KAIROS 模块
：
被 Feature Flag 隐藏的后台守护进程，代表 Anthropic 下一代 Agent 的方向——永远在线，订阅 GitHub Webhook，自动处理报错，还有一个叫「dream」的空闲记忆整理机制。
这份源码现在是行业里公开的最佳实践参考书：
上下文压缩怎么做、Agent 长期记忆怎么管、MCP 协议怎么安全调度、Agent 怎么做到永远在线，
全在里面。
cc-mini 是什么？
原版 Claude Code 基于 TypeScript + React/Ink + Bun 运行时，整套环境很重，也是闭源的。
有开发者把泄露源码里的核心逻辑用 Python 重写了一遍，做成了开源项目
cc-mini
：一个可以在终端里运行的 AI 编程助手，接 Anthropic API，也支持自定义 proxy 端点。目标是把核心跑通，让任何人都能读懂、改动、二次开发。
基础功能：工具调用 + 可复用工作流
Claude Code 的核心是一个不断循环的
工具调用 Agent
。
输入一个问题，模型不会直接回答——它先判断需要用哪些工具，调用工具拿到结果，再根据结果继续推进，直到任务完成。这个过程可能来回好几轮，全部自动。cc-mini 完整复现了这套机制。
6 个内置工具：
Read
—— 读取文件内容
Write
—— 写入 / 新建文件
Edit
—— 精准修改文件片段
Glob
—— 按模式查找文件
Grep
—— 在文件中搜索内容
Bash
—— 执行终端命令
权限分级：
读操作（Read / Glob / Grep）：
自动放行
写操作（Write / Edit）：
需要确认
命令执行（Bash）：
需要确认
每次操作都明确告知，不会静默执行。
会话自动保存，随时输入
/resume
接着上次继续，上下文完整保留。
Skill 系统把高频操作固化成一行命令——每个 Skill 是一个
SKILL.md
文件，定义 AI 要执行的步骤序列：
支持追加自定义指令，也可以在
.cc-mini/skills/
下写项目专属
SKILL.md
，提交 git 后团队共用。
终端截图：完整工具调用流程 + 四步 Skill 连用（
review
→
simplify
→
test
→
commit
）
还支持最新的宠物模式，ClaudeCode 抽的宠物不喜欢?看看能不能在 cc-mini 抽到金色宠物!
进阶功能：官方还没上，社区跑起来了
泄露源码里有几个被 Feature Flag 隐藏的模块——
Anthropic 做了但没正式发布。cc-mini 把它们实现了。
KAIROS：自动记忆系统
这是泄露源码里最让人兴奋的部分，也是 Anthropic 下一步的方向。
用
/remember
随手记下的信息会存成日志，
/dream
命令把碎片整理成按话题分类的长期记忆文件，下次开新 session 自动加载。Dream 也会自动触发——默认累积 5 个 session 且间隔 24 小时后，后台静默整合一次。这正是源码里那个「sleep-consolidate memory」机制的直接复现。
memory
输出界面，展示按话题归类的长期记忆索引
Sandbox：安全执行终端命令
让 AI 跑 Bash 命令一直是个心理关。cc-mini 用 Linux 原生的
bubblewrap
给每条命令套了一层沙盒，这套机制直接来自原版源码的实现：
整个文件系统
只读挂载
，AI 写不了系统文件。
只有当前工作目录可写。
网络默认隔离。
配置文件受保护，不会被覆盖。
三种模式（auto-allow / regular / disabled）按需切换，Docker、npm 等不兼容命令可以单独加入排除列表。
sandbox status
状态界面
Coordinator：主从架构的智能编排引擎
它并非独立的复杂调度器，而是基于「Prompt 约束 + 权限限制 + 异步通知」的主从（Manager-Worker）架构。开启后，主线程化身「项目经理」，将容易污染上下文的脏活全权外包。核心逻辑极度纯粹：模型负责软调度，Worker 负责真干活：
权限硬隔离
：
主线程的工具池被严格过滤，被强行剥夺了 Bash、代码读写或搜索权限，只剩下 AgentTool 等编排工具；而 Worker 线程不受此限制，重新组装工具池，火力全开负责具体的 IO 和命令执行。
Prompt 软调度
：
调度算法并没有写死在 TypeScript 里，而是通过替换 System Prompt 规定了主线程的工作流（Research -> Synthesis -> Implementation -> Verification）。强制要求主线程先理解再委派，并支持对只读研究任务进行并发（Fan-out）。
异步任务回流
：
Worker 执行完毕后，不依赖主线程去轮询，而是由任务系统生成一段
<task-notification>
XML 消息主动回灌给主会话，主线程「看」到后台通知后再决定是继续指派、叫停还是综合输出。
这份源码的意义
Anthropic 这次把自己最核心的工程实践直接摆在了所有人面前：
上下文压缩
：对话超过指定长度时，把历史消息摘要成结构化文本，保留近期消息完整，Tool call 成对保护不拆散。
Agent 长期记忆
：不是简单存档，而是有整理、有合并、有话题分类，像人的记忆一样有层次。
MCP 工具调度
：工具池动态组装，每个 session 根据需要注册，静态工具和 MCP 工具混用，没有全局注册表。
Agent 怎么做到永远在线
：KAIROS 的 daemon 模式给出了一个完整的思路——订阅事件，后台处理，空闲整理记忆。
这些以前带着点机密色彩的东西，现在有了公开的参考实现。cc-mini 把它翻译成了可以直接跑起来、方便自定义的极简 Python 版，任何人都能在这个基础上了解 Claude Code 的完整设计逻辑，并继续做开发。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com