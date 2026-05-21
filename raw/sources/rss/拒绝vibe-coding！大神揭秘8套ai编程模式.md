---
title: "拒绝Vibe Coding！大神揭秘8套AI编程模式"
date: 2026-03-16
source: "新智元"
url: "https://mp.weixin.qq.com/s/DDTFjr-SRKmn_0gkQa5GQA"
rss_id: "2652683330_2"
---
新智元报道
编辑：倾倾
【新智元导读】
Datasette创始人Simon Willison公开了一套指南，专门教专业开发者如何用Claude Code等AI编程工具提效。他总结了8大实战模式，从测试驱动到交互式解释，每一条都在重构程序员的工作方式。
硅谷知名开发者Simon Willison最近发布了一份特殊的指南。
注意，只会vibe coding的程序员请回避！这是写给专业工程师的。
当Claude Code、OpenAI Codex这些AI工具能自己跑代码时，传统的工程习惯还适用吗？
生成几百行代码从一整天缩短到几分钟，过去所有关于「值不值得写」的判断标准，全部失效了。
当写代码的成本为零，会发生什么？
Simon Willison在开篇直言:
代码一直很昂贵。生产几百行干净代码，需要一整天或更长。而现，在这是从8小时到5分钟的
数量级跃迁
。
所有工程习惯都建立在写代码很贵这个前提上。
产品经理用开发成本衡量功能优先级，程序员写每段代码前都在掂量同一个问题——这值得花一个小时吗？
现在，这套逻辑崩了。
重构只需30秒，生成测试只需1分钟，创建调试界面只需2分钟——所有「值不值得」的判断都要重审。
Simon Willison建议:
直觉说不值得时，就发个提示词试试，最坏结果是10分钟后发现不值那几个token。
Simon Willison紧接着泼了一盆冷水：代码变便宜了，好代码仍然昂贵。
能跑、有测试、可维护、优雅地处理错误、文档同步、为未来留空间。
AI能生成代码，但不能保证这些。
8个模式重构工作流
模式1：写代码很便宜
。代码生成成本几乎为零，但交付好代码的成本仍然显著。
模式2：囤积已知技巧
。把所有解决过的问题存档。
Simon Willison的个人博客、TIL、上千个GitHub仓库，都是「技巧仓库」。
为什么要囤这些技巧？因为AI能把它们重新组合。
他举例：如果要做浏览器端OCR工具，并且能处理PDF，你会怎么做？
他之前分别研究过Tesseract.js(OCR库)和PDF.js(PDF转图片)，但没组合过。
于是他给Claude 3 Opus喂了两段代码，输入:「组合起来，拖拽PDF进去，每页转JPEG，然后OCR。」完美运行。
只要
AI
把技巧弄懂一次，它就可以查阅、复用、重组
。
模式3：使用红绿TDD
这四字的提示词浓缩了整套测试驱动:先写测试(失败/红)，确认失败，写实现(通过/绿)。
为什么对AI特别有效？因为AI最大风险是写出「能跑但不对」的代码，或「从不被用」的代码。
测试先强制AI先定义什么叫正确，再实现。
模式4：先跑测试
这是另一个四字提示词。
每次启动新会话，第一句话就是:先跑测试。
通过这句话告诉AI项目有测试，测试数量暗示项目规模，把AI带入测试心态。
模式5：线性演练。
让AI生成结构化代码讲解文档。
Simon Willison花40分钟用Claude Codevibe coding了一个SwiftUI幻灯片App，全程不看代码。
App确实能跑，但它自己完全不懂SwiftUI。
于是，Simon Willison让Agent配合Showboat工具生成演练文档，详细讲解所有
.swift
文件。他说:
我从中学到了大量SwiftUI和Swift知识。
在这个过程中，AI不但没有减少学习，反而成了
学习加速器
。
模式6：交互式解释。
当文字解释不够直观，要求AI生成可视化。
他遇到词云算法「Archimedean spiral placement」，看文档还是不懂。
于是，他让Claude生成动画演示页面，能看到每个词如何沿螺旋线找位置。
这个动画让算法原理真正通俗易懂了。
模式7：
GIF
优化案例。
用完整提示词示例，展示如何让Claude Code构建WebAssembly工具。
模式8：常用提示词库
「认知债务」才是真问题
Simon Willison提出了一个关键概念:
认知债务
——代码能跑，但你不懂原理。
这和技术债务不同。技术债务是代码质量差，将来要还；认知债务是你自己不懂，将来要学。
他用了40分钟vibe coding的SwiftUI App(对话记录)，能跑，但他一点都不了解这个App。
如果放到核心业务里，这是一个极大的隐患。
应用核心变黑盒，无法自信推理，规划新功能变难。
所以，要怎么还上债？答案是
：
用线性演练+交互式解释，提高理解
。
如果担心LLM减慢学习速度，我强烈建议采用这类模式。
Hacker News的分歧
Simon Willison的指南在Hacker News引发讨论。
开发者mohsen1分享实战：用AI做。
代码传送门：https://github.com/mohsen1/fesh
他总结分享了4条经验:
不要微观管理
AI
，
让AI自己探索
测试是一切，
没办法验证，循环会跑偏
让
AI
自由实验，
允许失败，失败也是知识
用.md做会话间记忆，
AI没跨会话记忆，用Markdown做外部记忆
另一个阵营「Dark Factory」则主张更激进的路线：往问题扔token，边验证边走，不必事事先写测试。
两派看似对立，其实可以互补——核心业务用严格TDD，原型探索用快速迭代。
但双方有一个共识：验证不能省。
Simon Willison表示，这套模式会持续更新，目标每周1-2个新章节。
这种情况下，我们不禁思考：当写代码不再昂贵，工程师的核心价值在哪？
可能是三个能力：知道该写什么，知道好代码长什么样，知道如何让AI不跑偏。
Simon Willison的8个模式，本质上都在训练第三种能力。
但前两种，依然需要深厚的工程经验才能撑起来。
代码变便宜了，
判断力变贵了
。
这可能是AI时代软件工程师的新价值所在。
参考资料：
https://news.ycombinator.com/item？id=47243272https://simonwillison.net/guides/agentic-engineering-patterns/https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/https://simonwillison.net/guides/agentic-engineering-patterns/interactive-explanations/https://simonwillison.net/guides/agentic-engineering-patterns/gif-optimization/https://simonwillison.net/guides/agentic-engineering-patterns/prompts/https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！