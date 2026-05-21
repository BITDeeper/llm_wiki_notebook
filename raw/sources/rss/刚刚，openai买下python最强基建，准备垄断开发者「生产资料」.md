---
title: "刚刚，OpenAI买下Python最强基建，准备垄断开发者「生产资料」"
date: 2026-03-20
source: "机器之心"
url: "https://mp.weixin.qq.com/s/Zxz-pwQk8Dk7qLcLPQ41uA"
rss_id: "2651022460_1"
---
机器之心编辑部
AI 编码的竞争，已经进入了新的高度。
本周四，OpenAI 宣布将收购为软件开发者构建开源工具的明星初创公司 Astral。交易完成后，
Astral 团队将加入 OpenAI 的 Codex 团队
。
OpenAI 收购 Astral 是标志着 AI 大模型之战，特别是编程领域已经从单纯的「生成代码」正式进入了「接管底层」的深水区。
Astral 团队：用 Rust 重写 Python 基建
Astral 是一家专注于为 Python 生态系统构建高性能开发工具的初创公司，成立于 2022 年底，其核心使命是「让 Python 生态系统变得更加高效」。他们坚信提高开发者工具的速度可以产生巨大的复利效应，并专注于利用 Rust 语言的底层性能优势，重写并颠覆传统且缓慢的 Python 基础设施。
目前，Astral 已经打造了一系列重要的开源工具：
Ruff
：一个快速 Python 代码检查器（Linter）和格式化工具。由于完全由 Rust 编写，运行速度比现有的 Flake8、Black 等传统工具快 10-100 倍。
uv
：一个快速 Python 虚拟环境包和依赖管理工具，可以直接替代 pip、poetry、virtualenv 等大量工具。它内置了并行的 SAT 求解器，能在毫秒级解决复杂的包依赖冲突。
ty
（此前代号为 Rednot）：Astral 近期推出的快速 Python 类型安全检查器（Type Checker）。
它们可以说是现代 Python 开发的标配，让 Astral 在开发者社区享有极高的声誉。
仅在过去的一个月里，uv 的下载量就超过了 1.26 亿次
，数以百万计的开发者每天都在高频使用他们的工具。
开源社区恐慌
以至于尽管 OpenAI 和 Astral 创始人 Charlie Marsh 均承诺原团队会继续支持开源产品，大量开发者已经开始担心，这样一个核心开源基础设施队伍被科技大厂掌控后，未来的 Python 开发环境是否会受到影响。
在 HackerNews 上有网友表示，越来越明显的是，OpenAI 和 Anthropic 正在试图掌控软件领域的「生产资料」。随着他们不断吞并之前开放的软件栈，这些工具能否继续开放将会是个未知数。当工具作者是某个科技公司的员工时，可以肯定的是，这些公司至少会比公开发布的构建工具领先几个版本，并且会在其管道中受益。
OpenAI 表示，通过将 Astral 的工具和工程技术专长引入 OpenAI，Codex 的进化将持续加速，AI 在软件开发生命周期中的应用范围还将扩大。
自年初以来，Codex 的用户数量已经增长了 3 倍，使用量增长了 5 倍，每周活跃用户超过 200 万。
Codex 已经可以编写函数、修复 bug 和运行测试。但它无法安装正确的 Python 版本、解决依赖冲突、检查自身的输出代码或强制执行类型安全，后面这些任务已经显得比编写代码更耗费开发人员的时间。
Astral 可以解决这些问题：Ruff 仅需 0.4 秒即可检查 25 万行代码。uv 安装软件包的速度比 pip 快 10 到 100 倍。ty 的类型检查速度比 Mypy 快几个数量级。uv 在 GitHub 上拥有 8.1 万颗星，Ruff 拥有 4.6 万颗星。
OpenAI 希望让 Codex 能够成为参与整个开发流程的系统 —— 帮助规划变更、修改代码库、运行工具、验证结果并长期维护软件。Astral 的开发者工具可以直接融入到这个流程中。按照 OpenAI 的设想，通过将这些系统与 Codex 深度集成，未来的 AI 智能体将能够更直接、自主地调用开发者日常使用的底层工具协同工作。
狙击 Anthropic
收购 Astral 是 OpenAI 近期一系列收购案中的最新一笔。本月，OpenAI 还宣布收购 AI 安全初创公司 Promptfoo ，为其增添了在部署前测试和保护智能体的工具。去年年底，OpenAI 收购了 Software Applications Inc. 和 Neptune 等初创公司。
在 AI 代码工具上，OpenAI 目前正与 Anthropic、Cursor 等公司展开激烈竞争。据彭博社报道，Cursor 目前正在与投资者洽谈融资，目标是达到 500 亿美元的估值。与此同时，Anthropic 的年收入也即将达到 200 亿美元。
最后，Astral 被收购对于 Anthropic 来说也有直接的打击：有人发现在 Astral 主导的一些开源工具上，Claude 已经是重要的代码贡献者了。
这也告诉了我们一个有趣的事实：Claude Code 会在每次 git 提交时自动将自己添加为共同作者，而 Codex 则不会。这就是你在 GitHub 上到处都能看到 Claude 的原因。
那么当 Astral 被 OpenAI 买下以后，未来，Claude 的 AI 会不会被禁止用于开发 Astral 旗下的开源项目呢？
参考内容：
https://openai.com/index/openai-to-acquire-astral/
https://astral.sh/blog/openai
https://www.bloomberg.com/news/articles/2026-03-19/openai-to-acquire-python-startup-astral-expanding-push-into-coding
https://x.com/Yuchenj_UW/status/2034677095327310108
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com