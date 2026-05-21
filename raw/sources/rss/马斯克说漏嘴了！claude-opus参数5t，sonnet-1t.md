---
title: "马斯克说漏嘴了！Claude Opus参数5T，Sonnet 1T"
date: 2026-04-10
source: "量子位"
url: "https://mp.weixin.qq.com/s/4z3RmSaXcsTtobQM6F6vyg"
rss_id: "2247882205_2"
---
西风 发自 凹非寺
量子位 | 公众号 QbitAI
哦豁，马斯克一个“不小心”，把Claude参数抖出来了？？？
长话短说：Sonnet 1T、Opu
s 5T。
起因
是老马发帖表示，xAI的
Colossus 2超算正在训练7个模型
，其中
最大
的一款，参
数量直接
冲
到了10
万
亿
。
完整清单：
Imagine V2
2个1万亿（1T）参数的变体模型
2个1.5 万亿（1.5T）参数的变体模型
6万亿（6T）参数模型
10万亿（10T）参数模型
P.S. Colossus 2，就是老马巨硬计划（Macrohard）的一部分。据2025年8月披露的信息，Colossus 2已经安装了119台风冷式冷水机组，提供约200MW的冷却能力，足以支持约11万个GB200 NVL72 GPU。
按照当时规划，Colossus 2第一阶段部署11万个英伟达GB200 GPU，最终目标是超过55万个GPU，峰值功率需求预计超过1.1GW。
这次发推文，也是马斯克为数不多地对外公开Colossus超算的具体训练计划。
消息一出，网友
开启好奇宝宝模式，马斯克也是心情不错的样子，看到提问也回复了不少。
比如有人问“
训练
一个10T模型
，大概要花多久？
”，马斯克说
预训练阶段大约需要2个月
。
哎，就有这么一段对话出现了。
Grok 4.2的参数量，仅为xAI目前在训最大模型的5%。也就是5000亿（500B）对比10万亿（10T），后者是前者20倍。
Grok 4.2真的是总参数量500B吗？还是说只是在一个更大的MoE里，激活的参数量是500B亿？
面对疑问，老马又亲自回应了：
总参数量就是0.5T（5000亿）。现在的Grok，参数量是Sonnet的一半、Opus的十分之一。
以它的规模来说，是非常强的模型。
网友一眼瞄到显眼信息，这不就是说Sonnet是1T，Opus是5T。
于是有人追问：
纯好奇，你（马斯克）怎么知道Sonnet、Opus大小？
对此老马闭麦了，网友提出的点倒不无道理，“顶尖人才在这么几家公司间流动，似乎也没什么秘密能藏太久”。
Claude各版本参数，来自网友推测
自打Claude系列模型问世，Anthropic就一直严格保密参数规模，不管是Opus还是Sonnet，愣是一点没披露。
越不说，网友讨论得越起劲。
我们用AI总结了一下网友们分析讨论的不同版本的Claude参数规模。
你还别说，你还真别说。最新模型Claude 4.6 Sonnet ~1-2T、Claude 4.6 Opus ~1.5-2.5T/2-5T，还真和老马手滑泄露的“Sonnet1T、Opus5T”对上了。
具体来看网友都讨论出来了啥。
目前主流推测方法有四类：
推理成本与吞吐量反推法：模型推理成本与激活参数量呈近似线性关系，而总参数量则可通过架构类型和行业经验系数推算。
性能基准对标法：通过与已知参数的开源模型在标准化基准上的表现对比，推断闭源模型的参数规模。
内部文件泄露与传闻分析法：官方意外暴露的信息&一些小道消息。
架构特性分析法：通过对模型行为特性的观察，推断其采用的架构类型，进而缩小参数估计范围。
首先来看
Claude 3
系列，2024年3月发布，这是首个形成清晰产品矩阵的Claude系列，包含三个定位不同的版本。
小杯Haiku、中杯Sonnet以及大杯Opus，成本和性能依次递增。
对于它们的参数规模，LifeArchitect.ai创始人Alan D. Thompson曾给出估算：
Claude 3 Haiku (~20B)、Claude 3 Sonnet (~70B)、Claude 3 Opus (~2T)。
对于Claude 3 Sonnet，Reddit社区后续也展开了持续讨论，也有网友基于性能等推测Claude 3 Sonnet参数量在150-250B之间。
再来看
Claude 3.5
，这是Claude的一次重大升级，多个关键指标吊打GPT-4o。
不过，Anthropic最初只发布了独苗Claude 3.5 Sonnet。
其速度是Claude 3 Opus的两倍，成本却仅为后者的1/5。
关于模型参数量，微软等曾发布了一篇论文。
其中指出据行业估算，Claude 3.5 Sonnet参数约175B。
顺带附上其它模型估算参数：ChatGPT约175B、GPT-4约1.76T、GPT-4o约200B、o1-mini约100B、o1-preview约300B。
之后，Anthropic跳过了3.5命名，未发布3.5 Opus，在
Claude Sonnet 3.7后
直接进入4系列，发布了两个模型：
Claude Opus 4和Claude Sonnet 4
。
圈内对于Claude 4的参数估计，存在较大分歧。
行业估算Claude Opus 4参数约在300–500B之间，Claude Sonnet 4约在50B-100B之间。
接下来
Clau
de Opu
s 4.1
发布。
其编程性能再次突破，超越Claude Opus 4，在Agent任务和推理方面也进一步升级。
不过发布时，官方表示计划在未来几周对模型进行更大规模升级与改进，看来4.1真就只是一次小更新，替代Opus 4。
甚至网友讨论，Anthropic可能本来不想发模型，但是奈何GPT-5/Gemini-3的消息太多，为了保持市场竞争力所以先更新一波。
这可能也是关于其参数讨论并不多的原因之一。
Hacker News有网友认为，其可能是Anthropic尝试超大参数规模的实验性产品，后续4.5版本反而缩小了参数规模以优化效率。
Anthropic对Opus 4/4.1进行了蒸馏，得到了Opus 4.5。这也是该模型的运行速度比Opus 4快约3倍，同时API调用成本仅为后者的三分之一的核心原因。
整个AI行业的发展方向，正在摒弃万亿参数规模的超大模型。当下的核心命题是提升现有参数规模的利用效率。
Opus 4.5参数量撑死也就在2T左右。Opus 4/4.1的参数量或许能达到约6T（MoE架构）。
再往下就是
4.5
系列
了。
Claude Sonnet 4.5先发布，计算机操作方面，在OSWorld测试中取得了60.2分的SOTA成绩，比Sonnet 4提升了近一半。
Claude Opus 4.5后脚跟上，前端开发、视觉能力显著提升，更擅长使用电脑；在深度研究、PPT制作与电子表格处理等日常任务方面的表现也全面升级。
今年2月刚发布的最新
4.6系列
，各项能力再上一个台阶。
Anthropic表示，对填写复杂Excel、网页清单等计算机操作任务，Sonnet 4.6已经接近人类水平。
而Opus 4.6，在GDPval-AA（一项评估金融、法律和其他领域经济价值知识工作任务的性能指标）上，比GPT-5.2高出144Elo；编程依旧独领风骚，在Agent编程评估Terminal-Bench 2.0中取得了最高分，并在“人类最后考试”中领先所有其它前沿模型。
越往后，技术迭代步入深水区，底层技术和模型架构还一个劲地搞创新，想估算模型参数量，越来越难了。
最近，一篇发表在Substack的技术逆向工程分析，通过OpenRouter在Google Vertex和Amazon Bedrock上的Token吞吐数据，估算了Claude Opus 4.5和4.6的激活参数量。
作者署名unexcitedneurons，他以3个开源MoE模型为校准基准，推算出Vertex平台的有效内存带宽约为4.0–4.5TB/s，进而得出：
Opus 4.6在FP8精度下的激活参数量为93–105B。
若假设模型采用FP8精度稠密层+FP4精度混合专家层的配置，Opus 4.6的激活参数量约为127–154B。
结合不同专家稀疏度方案，最终他认为，Opus 4.5绝非网传的10T+规模，它是一款体量小得多的模型，由Claude Opus 4/4.1蒸馏而来，参数量规模应落在1.5T-2T之间。
这一点也能从API定价中得到印证，Claude Opus 4.1的输入/输出定价为每百万Token 15美元/75美元，而Claude Opus 4.5/4.6目前的定价仅为每百万Token 5美元/25美元，价格直接降至原先的三分之一。
作者也提到，Claude Opus 4/4.1参数量大概率在5T-6T左右。
除了已发布模型的模型外，前几天Anthropic团队因权限配置失误，把自家未发布模型泄露了。
模型
Claude My
tho
s
（内部代号Capybara）。
泄露文件中，曾多次使用质的飞跃这种说法来形容Mythos，在具体能力上，相较于Claude Opus 4.6，Mythos在软件编码、学术推理和网络安全等测试中的得分显著更高。
Claude Mythos，被称为是迄今为止公司开发过的最强大的AI模型。
传言称模型参数达10T。
参考链接：
[1]https://x.com/lifetimization/status/2042285703162397167
[2]https://www.reddit.com/r/ClaudeAI/comments/1ixuxln/estimate_of_model_size_for_claude_37/
[3]https://lifearchitect.substack.com/p/the-memo-special-edition-claude-3
[4]https://arxiv.org/pdf/2412.19260v1
[5]https://medium.com/@bob.mashouf/claude-4-vs-llama-4-benchmarking-55b99c17d3f7
[6]https://news.ycombinator.com/item?id=47319205
[7]https://unexcitedneurons.substack.com/p/estimating-the-size-of-claude-opus
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
🔹 谁会代表2026年的AI？
龙虾爆火，带动一波Agent与衍生产品浪潮。
但真正值得长期关注的AI公司和产品，或许不止于此。
如果你正在做，或见证着这些变化，欢迎申报。
让更多人看见你。
👉 https://wj.qq.com/s2/25829730/09xz/
一键关注 👇 点亮星标
科技前沿进展每日见