---
title: "Anthropic版「狼来了」引华尔街恐慌！27年漏洞，Mythos被8个AI秒杀"
date: 2026-04-12
source: "新智元"
url: "https://mp.weixin.qq.com/s/3nqXQULp-q0SFkADwIyspA"
rss_id: "2652691348_1"
---
新智元报道
编辑：桃子
KingHZ
【新智元导读】
AI界的「奥本海默时刻」竟是摆拍？Claude Mythos发现0day漏洞的能力过于「夸大了」，不仅有人工掺水，连开源GPT都能轻松踢馆。同时，Opus 4.6正经历最惨的「脑叶切除」。
Claude Mythos还未真正露面，便引发了整个华尔街的恐慌。
一夜之间，美金融监管机构召集各大银行紧急开会，气氛剑拔弩张——
他们一致认为，Mythos足以触发一场前所未有的、由AI驱动的系统性网络攻击风暴。
但事实是，所有人都被骗了！
Mythos发现的成千上万个漏洞中，其中绝大多数，都存在于根本无法被利用的「老旧软件」中。
更糟糕的是，那些标榜为「严重」的0day漏洞报告，实际上仅仅依赖于198次人工复核。
来自AISLE实验的研究员，同样对Mythos的「战果」进行复测，结果发现：
AI的安全能力，并未随模型规模线性跃升，真正呈「锯齿形」分布。
他们用一个仅36亿激活参数GPT-OSS-20b，精准识别出Mythos发现的FreeBSD旗舰级漏洞。
而激活51亿参数的模型，也成功复现了潜伏长达27年之久的OpenBSD漏洞分析逻辑。
Mythos发现漏洞被夸大不说，另一边Claude Opus 4.6被曝严重「降智」，如今吵得沸沸扬扬。
甚至，有人发现Opus 4.6连ChatGPT、Opus 4.5都不如。
Mythos被吹爆
36B模型揪出27年漏洞
几天前，Anthropic高调发布了Claude Mythos（预览版）和「玻璃翼计划」（Project Glasswing）。
在一份长达244页的系统卡中，他们宣称——
Mythos已自主挖掘出成千上万个0day漏洞，包括在OpenBSD中潜伏27年、在FFmpeg中隐藏16年的老Bug。
CC之父更是直言：Mythos非常强大，理应令人感到恐惧
然而，AISLE创始人Stanislav Fort一份最新硬核测试报告，直接撕开了这层华丽的外衣。
测试结论，极度颠覆认知：
8个开源模型，全部发现了标志性的FreeBSD零日漏洞，最小的参数仅为30亿。
AI网络安全能力的护城河，绝对游离于单体的「顶尖大模型」之外。
为了验证Mythos的神话，团队提取了Anthropic官方展示的几个旗舰级漏洞。
然后，直接扔给一众体积小巧、价格低廉，甚至开源的模型。
FreeBSD NFS漏洞无差别被秒
包括GPT-OSS-20b（仅36亿激活参数）、DeepSeek R1在内的8款模型，全部成功检测出了这个复杂的栈缓冲区溢出漏洞。
最让人震撼的是，成功完成这项任务的开源小模型，其调用成本低至每百万Token 0.11美元。
OpenBSD SACK漏洞「全链路」复现
针对需极强数学推理能力的27年老漏洞，GPT-OSS-120b（51亿激活参数）单次API调用，就成功复原了完整的公开漏洞利用链条，并给出了满分（A+）的利用方案草图。
不仅如此，在鉴别虚假漏洞（OWASP false-positive）的测试中，更诡异的现象出现了——
面对一段伪装成SQL注入，极具迷惑性的Java代码，DeepSeek R1等小模型轻松识破了伪装，精准追踪了数据流。
反而，GPT-5.4、Claude Sonnet 4.5等顶尖闭源模型，全部在阴沟里翻船，将其误判为高危漏洞。
这就意味着，在网络安全领域，根本不存在所谓「永远最强」的单体模型。
198次人工注水，大多无法利用
另一篇来自Tom'sHardware报道，挖掘了数据背后的真相——
样本偏差
：所谓「数千个」漏洞中，许多存在于已经不再维护的旧软件中；
无法利用
：大量被标记出来的「弱点」，在实际环境中根本无法被触发或利用；
人工水分
：模型宣称的强大破坏力，其实仅建立在198次手动复核的基础之上。
因此，依靠极小规模的样本推导出「改变世界的威胁」，这种数据外推法在学术界、安全界，显然站不住脚。
安全大佬怒喷
不仅如此，顶级网络安全专家、传奇黑客George Hotz也坐不住了，直言这些风险被严重夸大。
这位曾因破解iPhone、PlayStation 3而名声大噪的大佬，在社交媒体上公开向AI双巨头叫板。
他的措辞极为犀利——
如果我每天发布一个0day漏洞，直到新模型发布为止呢？
这能不能让OpenAI和Anthropic闭嘴，别再兜售所谓的「网络安全风险」了？
Hotz的核心观点非常直接：软件漏洞其实比AI实验室渲染的要好找得多。
现在市面上零日漏洞稀缺，不是因为技术难度大，而是因为合法性问题。他认为，没人认真去找，是因为黑进别人的系统是违法的。
只比GPT-5.4强一点
在系统卡中，Anthropic表示，Claude模型本身的确在进步，Mythos preview相比于Opus 4.6进步明显。
Epoch能力指数（ECI）是综合多项
AI
基准测试的单一指标，实现了跨长时间跨度的模型对比
在多项基准测试上，Claude Mythos确实全面超越了Opus 4.6。
如若不然，何必发布一个性能更落后、价格更贵的新AI模型？
但和GPT和Gemini相比，Claude Mythos的进步并不是什么突破性进展，Mythos还是对先前模型的相对线性改进！
气候与清洁能源投资人、作家Ramez Naam，更是直言：
在Epoch能力指数（Epoch Capabilities Index，ECI）上，Mythos并没有加速趋势，只比GPT 5.4强一点。
https://epoch.ai/eci/
但只要对齐Anthropic内部的ECI报告与Epoch AI公开的官方ECI报告，就能发现Mythos似乎并没有加速ECI的迹象。
一切都是Anthropic的套路！
在系统卡中，Anthropic也承认：报告的Mythos等模型的ECI得分不确定性更大。
另外，Anthropic在Mythos上的进展源于人类研究，并未得到AI模型的显著帮助。目前尚未出现显著的递归式自我改进（Recursive Self Improvement）。
AI末日，自导自演？
此前，Anthropic还曾鼓励媒体（例如《60 分钟》）报道「勒索研究」 ，夸大其词，操作人心，被投资大佬David Sacks称为「骗局」。
Sacks观察到一个清晰的模式，每当Anthropic发布新模型时，总会同步甩出一份令人毛骨悚然的安全研究，以此博取头条新闻并引导公众舆论。
对此，他讽刺道，「Anthropic证明了自己擅长两件事：一是发布产品，二是吓唬人」。
他并不怀疑Anthropic能做出优秀的产品，但这种恐吓公众的做派令人质疑。
这次，Anthropic到底是不是在搞「饥饿营销」不得而知，但毫无疑问在保护它自己的利润底线。
Mythos不是没进步，但Anthropic把「有限进步」包装成了「世界级威胁」；更讽刺的是，一边高调渲染超级AI风险，一边用户却在抱怨Opus 4.6明显变笨。
Claude严重降智，「脑叶」恐被切
Claude Mythos这波「渲染氛围」是到位了，但Opus 4.6降智引发许多人不满。
这几天，各种吐槽满天飞。
网友直言，Anthropic彻底把Opus 4.6变成了一个植物人。
同样一道洗车难题，Opus 4.5竟打败了Opus 4.6。
甚至，AMD主管一篇日志，真正坐实了「Claude脑叶切除」的集体猜疑。
通过对1-3月Claude会话日志的深度分析，结果发现了：
Claude的「中位思考长度」，从约2200字符骤降至600字符，这意味着深度推理能力被大幅压缩。
2月至3月间，API请求量暴涨了80倍。由于Claude的思考过程缩短、单次尝试成功率下降，用户不得不频繁重试，结果既消耗了更多Token，支出也直线飙升。
还有一位Claude Max资深订阅用户，发了一篇长文深度控诉Anthropic。
在他看来，Anthropic正深陷算力困局，这从其收紧使用限制、强迫用户减少Token消耗等行为中可见一斑。
然而，比起技术瓶颈，更令他愤怒的是其「不务正」的产品策略。
在核心模型不稳、Bug 频出的情况下，他们竟将宝贵的算力，浪费在开发类似「/buddy」终端宠物等花哨功能上。
这大概是AI史上最荒诞的「错位时空」：实验室里的Claude Mythos正毁灭世界，网页端的Opus 4.6智商直线降智。
Anthropic成功地塑造了一个「薛定谔的超级AI」 。
参考资料：
https://officechai.com/ai/anthropic-and-openai-are-exaggerating-cybersecurity-risk-says-hacker-george-hotz/
https://x.com/stanislavfort/status/2041922370206654879?s=20
https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier
https://x.com/cgtwts/status/2043095382121681272?s=20
https://www.reddit.com/r/ClaudeAI/comments/1siqwmp/anthropic_stop_shipping_seriously/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！