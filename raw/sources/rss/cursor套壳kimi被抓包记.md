---
title: "Cursor套壳Kimi被抓包记"
date: 2026-03-21
source: "机器之心"
url: "https://mp.weixin.qq.com/s/fNKJxnGD-MT61TDH-ATyJg"
rss_id: "2651022939_1"
---
编辑｜Panda
昨天，明星 AI 编程创企 Cursor 发布了自家的新一代模型 Composer 2，其在 CursorBench 基准上的性价比表现明显超过了 Claude Opus 4.6 (high) 以及 GPT-5.4 (high)。
然而，就在 Composer 2 公开问世后不到 3 小时，就有 X 网友发现 Composer 2 的模型 ID 是 kimi-k2p5-rl-0317-s515-fast，他得出结论说：「
所以 Composer 2 其实就是经过强化学习的 Kimi K2.5
」。
来自 X @fynnso
此事引发了 AI 社区的高度关注，一时之间，梗图与迷因齐飞：
左右滑动查看
就连 X 之王兼世界首富与特斯拉和 SpaceX 大当家伊隆・马斯克也来凑了个热闹。
当然，网友关注的重点并不是 Cursor 竟然是基于 Kimi K2.5 后训练得到了 Composer 2，毕竟基于开源模型进行后训练其实也算是 AI 领域的一种常规操作。大家讨论的重点是 Cursor 在介绍 Composer 2 时对这个来自中国的开源模型只字未提。
上下滑动查看，
截至 21 日上午截图时，Cursor 官方中文博客仍未更新，https://cursor.com/cn/blog/composer-2
随着舆论在 X 与 Hacker News 等技术社区迅速扩散，Cursor 团队在巨大压力下做出了正面回应。他们承认，Composer 2 确实以 Kimi K2.5 为基础模型进行了针对性的强化学习与微调。
Cursor 联创 Aman Sanger 表示：「一开始没在博客里提到 Kimi 基础模型是个疏忽，我们会在下一款模型中解决这个问题。」他也在这条推文中表示，基于困惑度的评估，Kimi K2.5 是他们评估过的大量基础模型中最强的一个。基于此，他们还进行了进一步的持续预训练和强化学习（计算规模扩大了 4 倍），最终得到了 Composer 2。
Cursor 开发者 Lee Robinson 则表示虽然 Composer 2 是基于开源模型开发的，但未来他们也会进行完整的预训练。
尽管 Cursor 已经公开道歉并补充了模型架构的说明，开发者社区对这种先隐瞒后承认的做法依然存在不少批评声音。一些评论者指出，刻意淡化底座信息的行为会透支开源生态的互信根基。在当前阶段，坦诚公布技术栈、尊重底层贡献者的劳动成果，理应成为 AI 创业公司的基本准则。
关于此事的讨论到今天凌晨 3 点多告一段落，月之暗面官方发推表明该公司已经与 Cursor 达成了共识。他们特别强调：「Cursor 是通过 @FireworksAI_HQ 托管的强化学习和推理平台访问的 Kimi K2.5，这是授权商业合作的一部分。」
当然，此事的后续影响还在发酵中，比如 Cursor 的竞争对手之一 Windsurf 就抓住机会蹭了一波热度，宣布未来一周将对用户免费开放 Kimi K2.5：
Hugging Face 联创和 CEO Clement Delangue 则从这一事件中看到了开源的价值，他表示
中国的开源模型如今已成为塑造全球 AI 技术栈的最大力量
。
当开源底座的性能逐渐逼近甚至持平顶尖闭源模型时，下游应用厂商在享受开源红利的同时，该如何妥善处理
商业包装
与
技术透明度
之间的平衡？对此，你怎么看？
文章最后，我们也转发分享一下月之暗面创始人兼 CEO 杨植麟在英伟达 GTC 大会的精彩演讲：
转自月之暗面官方 X 帐号
参考链接
https://x.com/fynnso/status/2034706304875602030
https://x.com/amanrsanger/status/2035079293257359663
https://x.com/ClementDelangue/status/2035042945884463538
https://x.com/leerob/status/2035079470021829108
https://x.com/rogerliuty/status/2034997159314301145
https://x.com/Kimi_Moonshot/status/2035011542115393973
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com