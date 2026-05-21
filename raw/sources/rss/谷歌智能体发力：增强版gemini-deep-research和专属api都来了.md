---
title: "谷歌智能体发力：增强版Gemini Deep Research和专属API都来了"
date: 2025-12-12
source: "量子位"
url: "https://mp.weixin.qq.com/s/wFCkIiXds6VUkVgsiExsbA"
rss_id: "2247853596_4"
---
闻乐 发自 凹非寺
量子位 | 公众号 QbitAI
OpenAI强势更新，谷歌也没闲着。
正式发布增强版的
Gemini Deep Research
，基于Gemini 3 Pro构建，专门减少幻觉，在复杂信息检索与分析任务上表现领先，很快将被集成到谷歌搜索、NotebookLM、Google Finance以及升级版的Gemini App中。
谷歌还配套推出了
DeepSearchQA基准测试集
，为深度搜索与研究任务提供了更全面的评估标准。
同时发布了
Interactions API
，为开发者提供了与Gemini 3 Pro和Deep Research智能体交互的统一接口。
原来这次不仅是Deep Research升级，还是Gemini生态的大升级。
更强大的Gemini生态
有网友已经迫不及待上手一试，用新的智能体做了一个论文生成器来生成论文，看起来效果不错。
增强版的Gemini Deep Research能够实现
迭代式推理
，它不仅能提出查询需求，还能读取和整合搜索结果，发现哪些知识还存在空白，然后再针对性地开展新一轮搜索。
通过这种循环式操作，它大幅提升了网络搜索能力，能够深入网站抓取精确信息。
这种能力也让该智能体在复杂研究任务中表现出色。比如在人类最后的考试HLE、BrowseComp、和DeepSearchQA等测试中刷新了SOTA成绩。
DeepSearchQA是谷歌开源的基准测试集。它的发布主要是因为现有基准往往难以体现出真实场景下多步骤网络研究的复杂特性。
它包含了来自
17个领域的900个手工设计的因果链任务
，要求必须生成详尽的答案集合，这样比传统的事实检索测试更能衡量智能体在多步推理与信息融合中的综合能力。
另一方面，谷歌还发布了
Interactions API
，这是一个为构建智能应用而设计的全新交互接口。
模型功能不断拓展，能力也逐渐从单纯的无状态文本生成转向思考和高级工具使用，原来的generate Content面对新的复杂交互模式逐渐显得力不从心。
如果强行将新功能融入其中，会使API变得过于脆弱。
于是谷歌推出了Interactions API，它设计了原生接口，提供了一个统一的RESTful端点，通过指定模型或智能体参数，就能与模型和智能体进行复杂上下文的交互。
特别适合需要多步骤推理、工具调用以及长程任务执行的场景。
它还扩展了generate Content的核心能力，具备服务器端状态可选、可解释且可组合的数据模型、后台执行以及远程MCP工具支持等特性，这样一来，Interactions API就简化了工作流，更加适配开发者环境。
那边更新模型，这边更新智能体、发力API，谷歌和OpenAI，这是battle又battle啊……
参考链接：
[1]https://x.com/googledeepmind/status/1999165708639302079
[2]https://blog.google/technology/developers/deep-research-agent-gemini-api/
[3]https://x.com/officiallogank/status/1999163355525956020
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🌟 点亮星标 🌟
科技前沿进展每日见