---
title: "CUDA要凉？Claude 30分钟铲平英伟达护城河，AMD要笑醒了"
date: 2026-01-23
source: "新智元"
url: "https://mp.weixin.qq.com/s/EkUlJX9jEOaUKOgPd-eYew"
rss_id: "2652666781_1"
---
新智元报道
编辑：桃子
【新智元导读】
英伟达护城河要守不住了？Claude Code半小时编程，直接把CUDA后端迁移到AMD ROCm上了。
一夜之间，CUDA护城河被AI终结了？
这几天，一位开发者johnnytshi在Reddit上分享了一个令人震惊的操作：
Claude Code仅用了30分钟，便将一段完整的CUDA后端代码，成功移植到AMD的ROCm上。
整个过程，没有手写一行代码。
这架势，简直是要填平这两个生态系统之间的鸿沟。
更关键的是，这次移植完全没有依赖传统的「中间转换工具」，如Hipify翻译层，而是一键通过CLI完成。
就连AMD软件副总Anush E.为之震惊，GPU编程的未来，是AI智能体的。
消息一出，整个科技圈瞬间沸腾，很多人直呼：英伟达CUDA护城河要守不住了.....
这究竟是怎么回事？
Claude手撕CUDA，仅30分钟
Claude Code是在一个智能体框架运行的，这意味着它可以自己「动脑子」。
在执行过程中，他不会机械地转换关键词，而去真正理解代码，即特定核函数的底层逻辑。
开发者johnnytshi介绍，这次移植中，最棘手的数据布局差异问题也被AI解决了，确保了内核核心计算逻辑保持一致。
令人惊叹的是，johnnytshi在短短30分钟内，就把整个CUDA后端移植到了AMD ROCm上，而且中间没用任何翻译层。
另外一个好处当然是，不用费劲去搭像Hipify这种复杂的翻译环境了；直接在命令行（CLI）里就能干活。
如今，全网都被CUDA护城河被攻破呼声淹没了。
毕竟，英伟达霸主地位，很大程度上建立在CUDA这个几乎成为行业标准的编程生态上。
无数AI框架、深度学习库、科学计算工具都深度依赖它。
AMD的ROCm虽然功能强大，却一直面临生态兼容性，以及开发者迁移成本高的痛点。
现在，一个Claude却用极短时间踢碎了门槛，说不定未来更多CUDA代码可能轻松在AMD GPU跑起来了。
实现细节
GitHub中，johnnytshi本人也更新了日志和说明。
为AMD GPU实现了完整的ROCm后端，从而在RDNA 3.5及其他AMD架构上支持基于注意力机制的现代国际象棋网络。
GitHub：https://github.com/LeelaChessZero/lc0/pull/2375
在
src/neural/backends/rocm/
中添加了完整的ROCm后端
实现了注意力网络架构（多头自注意力、FFN、嵌入层）
使用rocBLAS进行GEMM运算，使用MIOpen进行卷积运算
针对RDNA 3.5上的FP16性能优化了NCHW布局
提供三种后端变体：
rocm
(FP32)、
rocm-fp16
(FP16)、
rocm-auto
(自动检测)
MIOpen是必选依赖（类似于CUDA的cuDNN）
通过
rocm_agent_enumerator
自动检测AMD GPU架构
编译选项：
-Drocm=true -Damd_gfx=gfx1151
（或使用自动检测）
性能说明：
FP16性能
：在Strix Halo (Radeon 8060S, gfx1151) 上 >2000 nps
自动Batch Size调优（RDNA 3.5上min_batch=64）
测试过rocWMMA，但rocBLAS性能更好
验证情况（Strix Halo - Radeon 8060S, gfx1151）：
测试模型
：
768x15x24h-t82-swa-7464000.pb.gz
和
maia-1900.pb.gz
后端
：
rocm-fp16
功能正常，能生成正确的走法
环境
：ROCm 7.2.53150, MIOpen 3.5.1
注
：仅在RDNA 3.5上进行了测试；其他AMD架构暂未验证
GPU未来，是AI智能体主场
当然，这次演示也有局限性。
对于简单或中等复杂度的内核，Claude Code表现得非常出色。更重要的是，写核函数的核心就在于搞定「深度硬件」优化。
不过，一部分觉得Claude Code在这方面还是差点火候——
如果遇到那些针对特定硬件缓存层级，内存访问模式做过极致优化的复杂内核，AI目前还难以完全取代人类专家。
即便如此，这一事件释放出的信号已经足够强烈。
过去几个月，ZLUDA项目、还有微软内部的尝试，都想要打破CUDA的垄断。
但它们大多依赖规则映射或中间层，自动化程度和智能水平有限。
Claude Code代表的智能体式编程，直接跳过了这些环节，用「理解+自主决策」的方式填平生态鸿沟。
正如AMD软件副总所言，GPU编程的未来，是AI智能体主场。
全员AI编程，浓度高达100%
如今的Claude Code已经让整个硅谷入坑了（Claude-Pilled）。
两天前，CEO Dario Amodei在达沃斯上再出暴论：软件工程师们没有时间了。未来6-12个月，AI能够彻底取代这些人！
甚至，Anthropic内部工程师已经不再手写代码了，全是Claude完成。
别不信，是真的。
就在Wired最新采访中，Claude Code之父Boris Cherny坦承，「自己100%代码都是AI写的」。
或许Anthropic工程师怎么也没有想到，一个「副业项目」竟让硅谷如此狂热。
Boris Cherny回忆道，「一年前我们发布Claude Code时，甚至不确定『智能体编程』能不能成，但火爆来得太快了」。
Cherny个人经历就是最好的缩影：
刚发布时，他只有5%代码是用Claude Code写的；
到了去年5月，有了Opus 4和Sonnet 4，这个比例变成了30%；
而现在，有了Opus 4.5，他在过去两个月里100%的代码都是由Claude Code完成。
在Anthropic内部，这种全员AI化更是到了极致。
几乎100%技术员工都在使用Claude Code，甚至连Claude Code团队本身95%的代码也是由自身写出来的。
斯坦福AI教授都在用了
不得不说，AI编程的进化速度令人咋舌。
回望2021到2024年，大多数工具不过是高级版的「自动补全」，在开发者打字时卑微地建议几行代码。
但到了2025年初，随着Cursor和Windsurf等初创发布早期的Agentic编程产品，游戏规则改变了——
开发者只需用大白话描述功能，剩下的脏活累活全扔给AI智能体完成。
Claude Code也在这个时间点，真正诞生了。
Boris Cherny坦承，早期版本也曾跌跌撞撞，甚至陷入死循环。但Anthropic下了一步狠棋：不为当下的AI能力开发产品，而要为AI即将抵达的未来而构建。
这一赌注押对了。随着Anthropic下一代旗舰Claude Opus 4.5的发布，AI编程迎来了真正的「拐点」。
斯坦福大学AI讲师、Workera CEO Kian Katanforoosh最近就把公司全员迁移到了Claude Code。
他直言，对于高级工程师来说，Claude Code比Cursor、Windsurf更能打。
Katanforoosh感叹道，最近唯一让我看到编程能力有阶跃式提升的模型，就是Claude Opus 4.5。
「它给人的感觉不像是在模仿人类写代码，而是它真的找到了一种更聪明的解决路径」。
据传，微软内部也在大规模采用Claude Code了。
年入超10亿美金的「副业」
Claude Code大获成功，给Anthropic带来了最直观的效益。
去年，AI编程智能体业务彻底爆发。11月，Anthropic宣布Claude Code在上线不到一年内，年度经常性收入（ARR）就突破了
10亿美元
。
到2025年底，ARR至少又增长了1亿美元。
彼时，该产品约占Anthropic总ARR（约90亿美元）的12%。虽然比起向大企业提供 AI 系统的核心业务来说还算「小弟」，但它已是公司增长最快的板块之一。
尽管Anthropic在AI编程领域看似独孤求败，但Claude Opus 4.5的光环其实照亮了整个赛道。
竞争对手Cursor也在11月达到了10亿美元ARR，OpenAI、谷歌和xAI更是磨刀霍霍，试图用自研模型分一杯羹。
但Anthropic没打算停下。
前几天，他们又发布了Cowork——这是一款面向非编程领域的AI智能体。
它能管理你电脑里的文件、操作各种软件，而且完全不需要你在代码终端里敲命令。
不是取代，是进化
提及Cowork时，Cherny透露自己已经用疯了。
比如项目管理，他会让Cowork盯着工程师的任务表格，谁没填名字，AI就会自动在Slack上发消息催人。
Cherny感慨道，「这是我当工程师以来最爽的时候，因为我不再需要做那些枯燥乏味的脏活了」。
面对那些因不再需要亲自写代码而感到失落的工程师，Cherny给出了他的建议：
这行业一直在变。我祖父在苏联用穿孔卡片编程；后来变成了机器码；再后来是C语言、Java、Python。
这是一条不断抽象化的连续体，AI智能体只是这条线上的最新一个点。
如今，Cherny每天早上起床会在手机上启动3-4个编程智能体，到了公司再在终端里开几个。
任何时候，他都有五到十个智能体在跑任务。
Cherny总结道，「AI智能体将接管生活中所有繁琐的事——填表、搬运数据、发邮件。这会具有颠覆性，我们必须适应」。
话又说回来，Anthropic能不能先解决下Claude使用量？
参考资料：
https://github.com/LeelaChessZero/lc0/pull/2375
https://wccftech.com/the-claude-code-has-managed-to-port-nvidia-cuda-backend-to-rocm-in-just-30-minutes/
https://www.wired.com/story/claude-code-success-anthropic-business-model/?utm_brand=wired&utm_social-type=owned&utm_source=twitter&utm_medium=social&utm_campaign=aud-dev
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！