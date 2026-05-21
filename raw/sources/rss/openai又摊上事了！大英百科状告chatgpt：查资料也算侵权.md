---
title: "OpenAI又摊上事了！大英百科状告ChatGPT：查资料也算侵权"
date: 2026-03-22
source: "新智元"
url: "https://mp.weixin.qq.com/s/6xwBzn40KFm__GdO1sBc2w"
rss_id: "2652685570_3"
---
新智元报道
编辑：倾倾
【新智元导读】
3月16日，大英百科全书联合韦氏词典，起诉了OpenAI，并且罗列了ChatGPT的「四宗罪」。不要觉得Britannica心狠，此前ChatGPT编造错误信息，却把来源伪托给Britannica。OpenAI未作回应。
OpenAI又被起诉了。
3月16日，大英百科全书联合旗下的韦氏词典，对OpenAI提起诉讼。
原因是，它认为ChatGPT进行了大规模的版权侵权。
Britannica比所有原告准备得更充分：它紧抓训练数据抓取、模型记忆输出、RAG实时检索，同时追加《兰纳姆法》商标侵权。
这是AI版权诉讼史上，第一次有人试图把整条生成链路一锅端。
GPT-4能逐字默写大英百科
根据TechCrunch报道，Britannica直接点名GPT-4，认为它已经记住了其大量版权内容，能够按需输出近乎逐字逐句的复制品。
不是相似，不是接近，是逐、字、复、制。
这背后有一定的技术依据。斯坦福和耶鲁的研究团队曾做过实验，从主流大模型中提取《哈利·波特》原文，最高提取率达到96%。
也就是说，训练数据里的内容，有相当一部分被记在了模型权重里，在特定提示词下可以几乎原样还原。
Britannica持有的版权内容规模并不小。它旗下近
10万篇
在线文章、百科条目和词典释义，覆盖从科学、历史到文学的几乎所有主要知识领域。
这些内容由专业编辑和学科专家历经数十年积累而成。在维基百科崛起之前，这套体系就是人类知识的标准索引。
而OpenAI一直在灰色地带游走。
查一次资料，也算侵权
此前，各方一直在争论：用我的内容训练模型，算不算版权侵权？
Britannica这次的指控更进一步。他的指控分三层：
第一层
，未经许可抓取近10万篇内容用于大模型训练。
第二层
，ChatGPT在生成回答时，输出了Britannica内容的完整或部分逐字复制，这构成直接侵权。
第三层
，也是最具争议的一层。OpenAI在ChatGPT的RAG工作流中使用了Britannica文章。
RAG是ChatGPT扫描外部数据库、获取最新信息的机制。
Britannica认为，即便它的内容没有进入训练集，但只要它出现在实时检索里，就被视为侵权。
这种想法前所未有，它意味着不管是静态训练还是动态检索，只要调用了版权内容而未获授权，都要负责。
更有意思的是第四条指控：Lanham Act商标侵权。
Britannica认为，ChatGPT有时会产生幻觉，然后把这些错误内容归因于Britannica，制造Britannica生成了错误信息的假象。
这不单单是侵权，Britannica的品牌信誉都要替OpenAI的错误买单。
这危及公众持续获取高质量、可信赖在线信息的能力。
同一个问题：德国说侵权，英国说没有
这是整场官司的核心，也是目前全球司法界争论最激烈的问题之一。
德国慕尼黑法院在GEMA诉OpenAI案中认定：GPT-4和GPT-4o的模型权重中确实嵌入了歌词，这构成版权意义上的复制，可以提出禁令和赔偿请求。
模型权重是AI在训练过程中学到的数值参数，它决定了模型会输出什么。在慕尼黑法院看来，只要能从这些参数里还原出作品就足以构成侵权。
英国高等法院在Getty Images诉Stability AI案中得出了完全相反的结论。
AI模型不是侵权副本，因为其权重既不包含也不复制版权作品本身，只存储了学习到的规律性模式。
美国这边，Anthropic曾在版权诉讼中说服联邦法官William Alsup，认定将内容用作训练数据具有足够的转化性，可以适用合理使用原则。
但Alsup同时认定Anthropic非法下载了数百万本书而非付费获取，这一点构成违法，最终促成了
1.5亿美元
的集体和解。
Britannica这起案子在纽约提起，适用的是美国联邦法律。
但目前没有确立性先例明确说明用版权内容训练LLM究竟算不算侵权，每起案子的结果，在相当程度上仍取决于具体法官的认定逻辑。
如果法院认可实时检索也构成侵权，那对整个AI行业的影响将远超任何一起训练数据纠纷。
告Perplexity，是在给OpenAI热身
这不是Britannica第一次出手。
早在2025年9月，Britannica就对Perplexity提起了类似的版权和商标侵权诉讼，该案目前仍在审理中。
Perplexity是一家以RAG为核心产品逻辑的AI搜索公司。
Britannica选择先打Perplexity，像是在做法律预演，摸清RAG侵权这条路的可行性，然后再把同样的逻辑复制到OpenAI身上。
与此同时，行业里的版权战场正在全面升温。
《纽约时报》、Ziff Davis、美国和加拿大十余家报纸先后起诉OpenAI。
The Intercept和US News & World Report也已加入原告队伍。
截至目前，专门追踪AI版权诉讼的网站ChatGPT Is Eating The World统计显示，这已是针对OpenAI的
第63起
版权诉讼。
OpenAI对TechCrunch的置评请求未作回应。
被维基百科打残，又被ChatGPT截流
退一步看，有些事情比赔偿金额更值得关注。
Britannica创立于1768年，是英文世界里持续时间最长的百科全书品牌，它代表的是几百年人类知识整理传统的某种象征。
当这样一个机构出现在AI版权诉讼的原告席上，传递的信号很清晰：知识权威这个概念，正在试图通过法律手段，重新在AI生态里划定自己的边界。
Britannica曾是纸质百科时代的绝对权威，被维基百科打得几乎找不到存在感。
后来转型为数字订阅平台，靠着内容的可信度和专业性重新站稳脚跟。
如今，ChatGPT的出现让它又一次面临被替代的威胁——但不是被更好的百科替代，而是被一个用它内容训练出来、但不分给它一分钱的模型替代。
诉状里有一句话：
ChatGPT通过生成替代出版商内容的回复，抢走了出版商的流量。
这是商业模式的正面冲突。RAG这条指控是否能站住脚，目前没有人能给出确定答案。
但如果法院哪天认可了这个逻辑，整个行业的实时检索管道都需要重新谈授权。
所有以联网搜索+AI生成为核心产品的公司，都要面临这样的问题。
250年的老牌百科，正在用一份诉状，尝试给AI的边界划一条线。
这条线最终画在哪里？2026年，大概会有答案。
参考资料：
https://www.reuters.com/legal/litigation/encyclopedia-britannica-sues-openai-over-ai-training-2026-03-16/
https://techcrunch.com/2026/03/16/merriam-webster-openai-encyclopedia-brittanica-lawsuit/
https://the-decoder.com/encyclopedia-britannica-sues-openai-for-training-on-nearly-100000-articles-without-permission/
https://gizmodo.com/encyclopedia-britannica-sues-openai-over-ai-training-data-2000607770
https://news.bloomberglaw.com/ip-law/britannica-merriam-webster-accuse-openai-of-copying-their-works
https://chatgptiseatingtheworld.com/wp-content/uploads/2026/03/Encyclopedia_Britannica_Inc-v-OpenAI-COMPLAINT-Mar-13-2026.pdf
https://www.aol.com/articles/encyclopedia-britannica-sues-openai-over-141324436.html
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！