---
title: "逼AI当山顶洞人！Claude防话痨插件爆火，网友：受够了AI废话"
date: 2026-04-06
source: "新智元"
url: "https://mp.weixin.qq.com/s/hZm3ErNDLp0pNykprwP88Q"
rss_id: "2652689997_1"
---
新智元报道
编辑：元宇
【新智元导读】
一个让AI像原始人一样说话的插件，在HN上一夜
爆火，冲破2w星。它的核心只是一条简单粗暴的prompt：删掉冠词、客套和一切废话，号称能省下75%的输出token。它能火，说明开发者已经受够AI话痨了。
最近，一个叫「caveman」（穴居人）的Claude Code插件，在Hacker News炸了。
先看一张图。
从这条GitHub star增长曲线来看，「JuliusBrussee/caveman」在最初很长一段时间里几乎只是缓慢爬升，随后陡然上扬：
短短半天左右，star数从几十一路冲到500，目前已冲破2w！
「穴居人」省Token技能爆红！
caveman一夜
爆火背后，其实是一次典型的社区情绪共振。
它意味着
「AI Yap（废话连篇）」，这个看上去很小、却让无数人早已破防的痛点，再次被人精准地捅破了。
很快就有网友把caveman称作「2026年最厉害的提示词技巧」，称它能够砍掉浪费在「我很乐意帮你」这种礼貌和铺垫上的token。
这个插件干的事其实很简单：让AI agent像洞穴人一样说话。
删掉「the」「please」「thank you」……删掉一切不影响技术含义、却不断吞噬token的「人类客套」。
https://github.com/JuliusBrussee/caveman
项目出自开发者Julius Brussee之手，GitHub仓库名为「JuliusBrussee/caveman」。
Julius在
README里抛出的核心问题也非常直接：为什么少量token能说清楚的事，要用那么多token去说？
这是一款同时适配「Claude Code」和「Codex」的技能/插件。
它的核心思路是让智能体像「原始人」一样开口，在不牺牲技术准确性的前提下，把输出压缩到极致，并声称可将token消耗降低约75%。
问题也随之而来：删掉冠词和礼貌用语，真的就能为用户省掉四分之三的钱吗？
扒开SKILL.md
网友傻眼，就这？
caveman到底怎么「省」的？
打开它的核心文件SKILL.md，内容确实不长。
https://raw.githubusercontent.com/JuliusBrussee/caveman/main/skills/caveman/SKILL.md
文件frontmatter直接把它定义成「Ultra-compressed communication mode」（超压缩通信模式）。
并写明：
通过像洞穴人一样说话，在保持技术准确性的前提下，目标是把token用量压到更低。
当用户说出「caveman mode」「talk like caveman」「use caveman」「less tokens」「be brief」，或调用「/caveman」时启用。
当用户明确要求更高token效率时，也可自动触发。
它节省「token」的规则也非常简单粗暴：别用冠词，别说废话，别客气；技术术语和代码块保留，其他能砍就砍。
删除以下内容：冠词、语气填充词、客套话、犹豫性表达。
允许使用短句、碎片句。
优先使用更短的同义词，比如说「大」而不是「庞大」，说「修」而不是「实施一个解决方案」。
技术术语必须保持精确。
代码块不改。
报错信息必须原样引用。
推荐句式：[问题][动作][原因]。[下一步]。
比如，不要这样写：「当然！我很乐意帮你。你遇到的问题，很可能是由……引起的……」
而是要这样写：「Bug在认证中间件。Token过期判断用了
<
，没用
<=
。改这里：」
它支持三档强度级别：lite、full（默认）、ultra。
lite：
去掉填充词和犹豫表达
。保留完整句子和正常书面感。专业、简洁；
full：
进一步压缩表达
，可省略部分虚词，允许碎片句，使用短词替代。典型caveman风格；
ultra：
大量缩写
，如DB、auth、config、req、res、fn、impl；尽量去掉连接词；用箭头表达因果，如「X→Y」；能用一个词说明，就不用两个词。
举个例子：
lite：「连接池会复用已经打开的数据库连接，而不是每次请求都新建一个，从而避免重复握手开销。」
full：「连接池复用已打开的DB连接。不是每个请求都新建。省掉握手开销。」
ultra：「连接池=复用DB连接。跳过握手→高并发更快。」
当然，遇到安全警告、不可逆操作确认、多步骤流程、或用户明显已经困惑时，清晰表达仍然优先。这也是
SKILL.md
里明确写出的例外逻辑。
没有模型架构改动，没有推理机制层面的压缩，caveman的本质就是
一条精心编写的system prompt，约束的是AI的输出风格
。
更关键的一点：作者Julius Brussee本人在HN讨论帖里主动澄清了，这个skill不针对hidden reasoning tokens和thinking tokens。
模型在后台「想」的过程并不会因为caveman自动变短，它主要压缩的是最后说出来的那部分。
Anthropic官方文档也提到，skills的名称和描述本身会占用上下文预算。
换句话说，加载caveman这个skill本身就要消耗token。
所以端到端的真实成本节省，未必等于README里那个醒目的「75%」。
因此，caveman很可能显著压缩了可见输出长度，但这不应被直接理解为同等比例的总成本下降。
README里的75%，到底靠不靠谱？
从仓库公开内容看，作者确实提供了benchmark脚本，也在README里列出了若干任务的token对比，区间从22%到87%，平均65%。
但截至目前，公开仓库里能直接看到的是测试脚本和示例表格；外界仍难以仅凭仓库当前内容完整复核每一项结果的复现实验链条。
作者在HN帖子里表示：这只是初步测试，不是严格的基准测试。
不过，「简洁表达是否会伤害AI性能」这个问题，学术界确实有人研究过。
https://arxiv.org/pdf/2401.05618
2024
年的论文《The Benefits of a Concise C
hain of Thought on Problem-Solving in Large Language Models》显示：
当研究者要求模型使用更简洁的推理链时，GPT-3.5和GPT-4的平均回答长度下降了48.70%，而整体解题能力几乎没有明显下降；但在数学题上，GPT-3.5的表现平均下降了27.69%。
2026年的论文《Brevity Constraints Reverse Performance Hierarchies in Language Models》则更进一步指出：
在部分基准上，对大模型加入简洁约束，准确率可提升26个百分点，甚至可能改变不同规模模型之间原本的表现排序。
https://arxiv.org/pdf/2604.00025
以上两篇论文，为「简洁未必伤性能」提供了研究背景。
但必须说清楚：它们研究的是brevity作为通用提示策略的效果，不是对caveman这个GitHub仓库的专项评测。
README引用这些研究，最多只能说明它的思路并非毫无理论背景，不能直接当作对项目自身效果的严格验证。
Claude Code的插件生态
开始起来了
caveman能火，还有一个背景原因：
Anthropic已经为Claude Code提供了相对完整的skill与plugin机制
。
https://code.claude.com/docs/en/skills
根据Anthropic官方文档，开发者只需创建一个
SKILL.md
文件，Claude就能把它识别为skill；其中
description
用来决定何时自动加载，
name
则会变成可直接触发的斜杠命令。
官方文档还明确写了plugin级skill的路径结构是
<plugin>/skills/<skill-name>/SKILL.md
。
而
caveman
仓库中，确实能看到
.claude-plugin
、
plugins/caveman
、
skills/caveman
等目录，说明它不是一个停留在「几句提示词」层面的玩具，而是按照Claude Code的skill/plugin机制包装出来的扩展。
这也意味着，开发者确实可以通过一个
SKILL.md
，在不改模型底层的前提下，改变Claude Code在特定任务中的调用方式和输出风格。
某种意义上，这已经有点像早期VS Code扩展生态：
先有一批看起来轻量、甚至带点玩笑感的扩展冒出来，随后才逐渐长成更严肃、更细分的工作流工具。
开发者苦AI废话久矣
回到那个最初的问题：caveman到底有没有用？
如果把它当成一个严格意义上的「省钱工具」，那就需要更谨慎。
它压缩的只是可见输出文本，并不触及hidden reasoning tokens，而后者往往才是Claude Code成本的大头。
再加上skill本身也会占用上下文，端到端算下来，真实节省大概率到不了75%。
真正想优化token成本，关键也不在这里。模型分层调用、上下文窗口管理、prompt工程、缓存策略，这些才是真正的主战场。
但caveman真正值得关注的地方，不在于它是不是开出了一剂完美药方，而在于它本身就是一个信号。
当一个开发者把「让AI少说废话」这件事做成插件，放到GitHub上，被上千人认真讨论，在HN上爆火，事情的重点就已经变了。
它说明，AI工具的冗长，不再只是一个可以忍受的小毛病，而是严重到用户开始自己动手修正的程度。
实际上，
开发者们在情绪上早就已经破防了：去各大社区看一眼，满屏皆是对AI 废话的哀叹抱怨：
我只需要两行正则代码，它非要给我写5个自然段的正则历史散文；
求求你别再对我说「Certainly! Here is the……」了，直接给我报错或者给我代码不行吗？
在Hacker News上，这种哀叹和抱怨更是与使用成本挂钩：
我简直是在花15刀/100万Token的价钱，来阅读AI对我的道歉和寒暄。
只因为要改一个标点，它竟然把整个800行的文件重新输出了一遍，看着API余额肉眼可见地往下掉，我都快破产了。
……
当大家宁愿让AI像「山顶洞人」一样说话，也不愿意继续为冗余输出多付token成本时，真正应当反思的也许是那些主流AI大厂。
为什么直到今天，他们还没有把「克制」做成一种基础能力。
不要别总盯着算力生意，而是要认真想想，用户到底为什么越来越受不了这些没必要的输出。
参考资料：
https://github.com/JuliusBrussee/caveman
https://code.claude.com/docs/en/skills
https://news.ycombinator.com/item?id=47647455
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！