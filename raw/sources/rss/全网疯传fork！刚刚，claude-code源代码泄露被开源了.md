---
title: "全网疯传fork！刚刚，Claude Code源代码泄露被开源了"
date: 2026-03-31
source: "机器之心"
url: "https://mp.weixin.qq.com/s/G9Az9csTs6_WLKt6uu4q_Q"
rss_id: "2651024890_1"
---
机器之心编辑部
AI 社区已经疯狂！
刚刚，一个名为 Chaofan Shou 的 X 账号发帖称，「Claude Code 的源代码通过其 npm 注册表中的一个映射文件泄露了！」
短短时间内，该帖子已经引起了数百万的浏览。而一众网友已经迅速跟进，开始疯狂 fork 这个项目，并分析源码。
链接：https://github.com/sanbuphy/claude-code-source-code
有网友表示，「这应该是 Claude Code 官方不小心把 v2.1.88 的源码直接传到了 npm 包里，整体代码结构很成熟，整个 repo 分得很细，主流程包括 REPL 启动、QueryEngine、工具注册、Slash 命令、权限系统、任务系统，以及多层状态管理，非常典型的生产级 AI agent harness 设计。包括所有工具都可查看。」
链接：https://x.com/sanbuphy/status/2038912992457408838
根据更多推特用户的消息，此次「不是被黑客攻击，而是 Anthropic 自己在 npm 发布时，把 source map 一起打包进了生产版本。」
这次泄露源于一个体积约 57MB 的 cli.js.map 文件，文件中包含了 4756 个源文件的完整内容：其中 1906 个是 Claude Code 自身的 TypeScript/TSX 源码，其余 2850 个来自 node_modules 依赖。
更关键的是，提取方式几乎没有门槛。cli.js.map 本质上只是一个 JSON 文件，核心包含两个数组：
sources：文件路径列表
sourcesContent：对应的完整源代码
这两个数组一一对应、按索引匹配。也就是说，不需要反编译、不需要反混淆，sourcesContent 里已经直接保存了原始源码的逐字内容。只需简单脚本即可批量还原。
从这些恢复出来的代码中，可以清晰看到 Claude Code 的整体架构：
CLI 界面基于 React + Ink 构建
核心是一个支持自然语言输入和 slash 命令的 REPL 循环
底层通过一套 tool system 与大模型 API 交互
包括架构设计、system prompt、工具调用逻辑等关键实现细节，都完全暴露在外。
图源：https://x.com/chenchengpro/status/2038904406406476195
目前在 GitHub、Hacker News 和 Reddit 等社区上，人们都在仔细「鉴赏」这份代码，并挖出了不少 Anthropic 没打算公开的秘密。
比如
员工专属的「卧底模式」（Undercover Mode）
—— 当系统检测到使用者是 Anthropic 内部员工，且正在操作公开的 GitHub 仓库时，这个模式会自动激活。它的作用是抹除所有 AI 生成代码的痕迹和归属信息，并且在系统提示词里明确要求大模型「不要暴露你的身份」。更绝的是，代码中没有强制关闭该功能的开关。
「彩蛋」电子宠物（Buddy System）
—— 开发者在代码里埋了一个名叫 Buddy 的系统。它包含了 18 种不同的虚拟宠物（包括鸭子、龙、以及 Anthropic 内部非常喜欢的水豚 Capybara 等）。这些宠物甚至有 “1% 掉落率” 的稀有度设定、可装扮的帽子，以及五维属性（调试能力、耐心、混沌值、智慧、毒舌）。为了防止公司内部的 “防泄露扫描器” 发现他们在不务正业，开发者还故意使用了 String.fromCharCode () 来混淆宠物名字的字符串。
KAIROS 后台守护机制
—— 目前的 Claude Code 还是一个「你踢一脚，它动一下」的命令行工具，但泄露的代码暴露了 Anthropic 下一步的野心：让 Agent 永远在线。代码中包含了一个被 Feature Flag（构建标志）隐藏的功能模块，代号 KAIROS。这是一个自动化的后台守护进程（Daemon mode）。一旦激活，Agent 就具备了背景会话能力，可以直接订阅 GitHub 的 Webhook（比如一旦有新的报错，它在后台自己就开始修了）。更有意思的是，它包含一个名为 "dream"（做梦） 的内存整理机制，用于在空闲时压缩和巩固长期记忆。
神秘的「水豚」（Capybara）模型
—— 真的有卡皮巴拉模型，泄露的代码注释中多次出现了一个未发布的模型代号 "Capybara"（近期也有内部文档泄露称其正式名为 Claude Mythos，是定位在 Opus 之上的全新一代强大模型）。泄露的代码里包含了 capybara-fast 版本的信息，以及开发者针对该模型「产生幻觉（making false claims）」时的内部调试记录。
情绪监控
—— 代码底层的遥测（Telemetry）系统显示，Anthropic 非常在意开发者的「挫败感」。系统会专门追踪用户是否在终端里对 Claude 爆粗口，以及连续输入 continue（通常因为模型输出中断而导致的烦躁行为）的频率。
事后，Anthropic 已经意识到问题并移除了 source map；同时，GitHub 上用于提取源码的仓库也遭到了 DMCA 下架。但由于早期 npm 包已经被缓存和镜像，这些源码早已在社区中广泛传播，难以彻底回收。
还有网友表示，这已经是 Anthropic 第二次犯这样低级错误了。早在 2025 年 2 月，就泄露过一次，当时 Anthropic 紧急下架修复，结果这次又在同一个地方翻车。
目前，GitHub 上已经出现了多个完整镜像仓库（如 leeyeel、dnakov、ghuntley 等），源码被整理得井井有条，任何人都可以直接研究甚至 fork。
短短一个小时，其中一个 Claude Code「克隆」项目的 GitHub 项目星标已经突破了 12k，fork 量破 18k。
项目地址：https://github.com/instructkr/claude-code
对于此次 Claude Code 泄露，有人调侃道「这是有史以来最棒的生日礼物。」
这波 Claude Code 属实是被开源了，这家明星 AI 公司的重要产品被人们看了个底掉。对于业界来说，很多事也算或多或少有了参考。
现在，行业内最顶级的 AI 公司的「最佳实践」直接摆在了所有人面前。如何做上下文压缩？如何管理智能体长期记忆？如何安全地调度 MCP 协议？这些以前带着点机密的东西，现在有了公开的参考书。
或许过几天各家公司的 Agent 迎来大版本更新也不奇怪了。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com