---
title: "真香！刚骂完AI，Linux之父的首个Vibe Coding项目上线"
date: 2026-01-12
source: "机器之心"
url: "https://mp.weixin.qq.com/s/PCFTDO2DlbLaN7As7QIL9A"
rss_id: "2651011618_1"
---
编辑｜泽南、杜伟
时代变了，就连 Linus Torvalds 现在也氛围编程（Vibe Coding）了。
上周末，最著名程序员、Linux 作者 Linus Torvalds 发布 Vibe Coding 项目的消息让不少人始料未及。
大神在 GitHub 上发布了一个名叫 AudioNoise 的新项目，和 Linux 并列。
在自述文件中，Torvalds 说这是一个和吉他效果器相关的代码库，「这些效果器在利用 AI 技术『模拟箱体』…… 另外需要注意的是，这个 Python 可视化工具基本上是用 Vibe Coding 的方式编写的。」
Torvalds 表示，他对模拟滤波器的了解要比对 Python 的了解要多得多。一开始写这个项目时，他就像平时那样通过谷歌搜索然后照搬照抄的方式进行编程，但后来他决定省略中间环节 —— 也就是他自己 —— 直接使用 Google Antigravity 来实现音频样本的可视化。
看起来在新年假期里，Torvalds 也没有闲着，他也在顺应最近科技界最大的 AI 潮流。
对此，人们的反应既有欢迎的，也有谨慎的。首先当然是普大喜奔：「官宣了，Vibe Coding 是合法的。」
Torvalds 首个 AI 项目，生成了什么？
这个名为「AudioNoise」的项目在 5 天前上传到了 GitHub，目前已经收获了 1.4k 的 Stars。
GitHub 地址：https://github.com/torvalds/AudioNoise
根据主页介绍，
AudioNoise 项目源自 Torvalds 几个月前做的一个「随机吉他效果器板设计」（GuitarPedal），包括电路原理图和代码
。
这是他在 Linux 内核之外的一个兴趣尝试，目的不是打造成品设备，而是探索运算放大器（op-amp）等电路设计原理，详情可参考以下项目。
GitHub 地址：https://github.com/torvalds/GuitarPedal
从上个项目的结果来看，虽然 Torvalds 制作的基于树莓派 RP2354A 开发板和 TAC5112 音频编解码器的数字吉他单块效果器确实可以正常运行。但是 Torvalds 对一些模拟接口的选择并不太满意，尤其是那些电位器。此外他越来越讨厌那个会发出咔嗒声的脚踏开关，即使它能兼做编程时的引导选择开关。
因此，Torvalds 暂时没有去管硬件设计，而是认真琢磨了物理交互界面以及数字音效。他的想法很简单，「既然全都是数字化的，那就先搞模拟，别太纠结硬件。」
这就像 Torvalds 最开始做模拟电路一样，只是玩玩而已，不必太当真。
本项目主要的设计目标是学习数字音频处理相关的基础知识，这和他此前做吉他单块项目来学习硬件的初衷完全一致
。
项目中并没有什么基于 FFT（快速傅里叶变换）的声码器，有的只是 IIR（无限冲激响应）滤波器和基础的延迟循环。
一切都是「单采样输入，单采样输出，并且零延迟」。采样可能会存储在延迟循环中，以便在后续调用时实现回声效果），但也没有进行任何复杂的实时处理。
Torvalds 对 TAC5112 在 ADC（模数转换器） 到 DAC（数模转换器） 链路中低于毫秒级的延迟表现很满意，因此现在也打算延续这种设计思路。再加上他以前没做过这些，所以单从新手这个角度来看，一切都显得非常基础和简单。
换句话说：这些 IIR 滤波器并不是现代单块或吉他音箱里那种高端的 AI「箱体模拟」。虽然它们确实能模拟移相器等模拟电路，但只是通过数字全通滤波器来模拟 RC（电阻器和电容器）网络的效果，并没有用到什么真正高深的技术。
Torvalds 特别强调了，
项目中的 Python 可视化工具基本上是靠「氛围编程（Vibe-Coding）」写出来的
。他起初只是采用典型的「搜索并照猫画虎」式编程，但后来省去了中间人（他自己），
直接让 Google Antigravity 来写这个音频采样可视化工具
。
对于 AI 编程工具的加入，Torvalds 自己的心得是：
过程基本顺利
，虽然他有时需要琢磨一下使用「内置矩形选择」功能时到底出了什么状况。在告诉 Antigravity 直接写一个自定义的 RectangleSelector 之后，情况就好了很多。
如果要问
氛围编程是不是要比他自己动手写出来的效果好呢？他的回答是肯定的
。
Torvalds 使用的 AI 软件开发平台 Antigravity，是去年 11 月谷歌刚刚发布的智能体式开发平台，直接对标 Cursor。
它将传统的 AI 驱动的集成开发环境 (IDE) 发展为「智能体优先」的形态。背靠谷歌自家的最新大模型 Gemini 3，可以驱动编程智能体自主规划和执行复杂的、端到端的软件任务。
当然，更重要的是，这个工具目前在招揽用户时期是免费使用的。
圈内热评：AI 大势下的「顺流而下」
Linux 之父开始使用 AI 编程工具这一「罕见的盛况」，在圈内引发了现象级的讨论，简直是「活久见」系列。
有人感叹，「我认识的最厉害程序员，包括那些构建编译器、CUDA 内核和操作系统等最核心功能的程序员，他们以前对「所有 AI 代码都是垃圾」的呼声最高。但如今，他们的想法正在迅速改变，并对 AI 的强大感到震惊。没有时间去否认这一点了。」
Antigravity 创建者、谷歌 DeepMind 工程师 Varun Mohan 视 Torvalds 为自己的编程偶像之一，此次对其能够在最新的项目中使用该 AI 编程工具感到莫大的荣幸。
云开发平台 Vercel CEO Guillermo Rauch 列举了 2026 开年发生的几件大事，其中 Torvalds 在其非内核项目中使用氛围编程与陶哲轩宣布 GPT 和 Aristotle 自主解决 Erdős 问题、编程大神 DHH 收回在 Lex 播客中发表的「AI 不会编程」的言论等并列。
几天前，Linus 还在骂 AI
作为曾经引领时代的程序员大神，Linus Torvalds 对于 AI 写代码这件事的态度还是相对保守的。至少直到去年底，他在几次采访中还是把编程分为「入门」与「生产」两个维度。
他认为对于非专业人士来说 Vibe Coding 是一项降低门槛的伟大技术，但对于生产环境和内核开发，Linus 明确表示 Vibe Coding「是一个非常，非常糟糕的主意 —— 如果你自己都不理解代码的逻辑，当它在生产环境中崩溃时，你根本无法修复。」
Torvalds 认为目前的 AI 辅助编程主要是「90% 的营销加 10% 的现实」，极其反感那些利用 AI 生成「垃圾代码」并提交给内核维护者的行为。
1 月 7 日，在 Linux 内核开发人员讨论如何规范 AI 生成的 Linux 内核时，Torvalds 忍不住插话进来：
他表示：「讨论 AI 生成的垃圾毫无意义，简直愚蠢至极。那些生成垃圾内容的人根本不会在他们的补丁中注明这一点。所以，停止这种愚蠢的行为。我不希望任何内核开发文档包含任何关于人工智能的声明。」
这样厌恶的态度，让人想起当年他对老黄竖起的中指。
不知为何在骂完之后，Torvalds 就放出了自己用 AI 写好的代码。
AudioNoise 这个小项目，会成为 Linus Torvalds 的「真香时刻」吗？
参考链接：
https://www.reddit.com/r/theprimeagen/comments/1q9q2kd/linus_torvalds_is_a_vibecoder_now/
https://x.com/AiBattle_/status/2010105477166969307?s=20
https://github.com/torvalds/AudioNoise
https://news.ycombinator.com/item?id=46569587
https://x.com/kimmonismus/status/2010445425694867753?s=20
https://x.com/Yuchenj_UW/status/2010215226978042218?s=20
https://x.com/_mohansolo/status/2010023056778137699?s=20
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com