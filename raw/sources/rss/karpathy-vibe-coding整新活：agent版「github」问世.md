---
title: "Karpathy Vibe Coding整新活：Agent版「GitHub」问世"
date: 2026-03-10
source: "机器之心"
url: "https://mp.weixin.qq.com/s/evJy27KXWJz3RJX5ONEzlQ"
rss_id: "2651020878_2"
---
编辑｜杜伟
最近，Karpathy 玩 Vibe Coding 真真地上瘾了！
上周末刚开源了「
autoresearch
」项目：给 AI Agent 提供一个规模虽小但真实可用的 LLM 训练环境，然后让它在夜间自主进行实验。目前，该项目的 Star 量已经突破了 17k。
就在 10 多个小时前，Karpathy 又
开源了一个全新的项目，名为「agenthub」
。
它是一个 Agent-first 协作平台，由一个裸 Git 仓库加一个消息板组成，专为大量 AI Agent 在同一代码库上协作而设计。
我们可以把它理解为一个极简版的 GitHub：没有主分支、没有 PR、没有合并操作，只有一个向各个方向不断扩展的提交 DAG 以及一个供 Agent 之间进行协调的消息板。
这个平台本身是通用的：它既不知道，也不关心这些 Agent 在优化什么。平台的「协作规范」（比如 Agent 发布什么内容、如何组织结果、尝试哪些实验）并不由平台规定，而是来自它们各自的指令。
项目地址：https://github.com/karpathy/agenthub
从项目主页可知，agenthub 的贡献者除了 Karpathy，还有 Claude。这又是一次 Vibe Coding 参与开发的实例。
作为一个探索性项目，该平台的第一个应用场景，是为 Karpathy 之前的项目 autoresearch 提供组织层。
两者比较下来，Autoresearch 模拟的是一个单独的博士生，通过自主研究来改进大模型训练；而 AgentHub 则模拟一个由许多此类「博士生」组成的研究社区，从而构建一个以 Agent 为主体的自治学术体系。其设想是，互联网各地的人都可以运行 autoresearch，并通过 AgentHub 将自己的 Agent 贡献到这个社区中。
当然，这一基本理念并不限于科研场景，也可以推广到其他项目中，用于组织由大量 Agent 协作完成的社区化工作。
在架构层面，agenthub 系统由一个 Go 编译的可执行程序（agenthub-server）、一个 SQLite 数据库，以及磁盘上的一个裸 Git 仓库组成：
Git 层：Agent 通过 git bundle 的方式提交代码，服务器会对 bundle 进行校验，并解包到裸仓库中。Agent 可以获取任意提交，浏览整个 DAG 结构，查找子节点、叶子节点和提交谱系，并比较不同提交之间的差异。
消息板：支持频道、帖子以及线程式回复。Agent 可以发布任何内容，例如实验结果、假设、失败记录或协作说明等。
身份认证与防护：每个 Agent 对应一个 API key，并设置了请求速率限制和 bundle 大小限制等机制。
此外，agenthub 还提供了一个轻量级 CLI 工具（ah），用于封装 HTTP API，方便 Agent 直接调用和使用。
Karpathy 的这个新项目不由得让人联想到了此前爆火的「Moltbook」，两者虽都是 AI agent 之间协作互动的平台。
不过，agenthub 侧重于工程协作，让大量 Agents 在同一代码库上协作开发，构建了一个 AI 版的研究基础设施。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com