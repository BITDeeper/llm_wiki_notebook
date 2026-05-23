---
title: "23个隐藏工具曝光！Anthropic公开Claude驯化手册"
date: 2026-05-17
source: "新智元"
url: "https://mp.weixin.qq.com/s/25VojYRWgTJfFfV58JX3Hw"
rss_id: "2652700978_2"
---
新智元报道
编辑：元宇
【新智元导读】
从4.6到4.7，哪些旧禁令消失了？哪些新红线被划下？Claude进化的真相，全藏在它的system prompt更新细节里。
就在前两天，Anthropic祭出Claude 4.7的同时，照例公开了Claude 4.7的「驯化手册」，也就是那份系统提示词（system prompt）。
https://platform.claude.com/docs/en/release-notes/system-prompts
Simon Willison在博客中对这份system prompt进行了逐行对比，哪里加了、哪里删了、哪里改了措辞，全部标了出来。
不仅如此，他还直接在对话中让Claude「自报家门」，拿到了一份23个工具的完整名单。
https://simonwillison.net/2026/Apr/18/opus-system-prompt/
他挖出的这些
Anthropic自己没有说的细节，要比官方的公告更有意思。
你每天对话的Claude
背后有一份几万字的「驯化手册」
很多人可能还不知道，Anthropic是目前唯一一家长期公开自己聊天模型system prompt的头部AI实验室。
2024年7月Claude 3发布起，每次模型更新，Anthropic都会同步更新并公布它的prompt，
每一版的system prompt都在那里，一路追溯将近两年。
从最新的Claude 4.7往前看，Anthropic的system prompt更新依次覆盖Claude 4.6、4.5、4.1、4、3.7、3.5，一直到Claude 3。
这意味着Claude是目前唯一一个你可以从文本层面追踪「它被怎样调教」的主流大模型：在这些公开的system prompt中，你可以看出Claude的进化轨迹。
比如，Claude被允许在什么情况下拒绝你，它被要求用什么语气跟你说话，它在遇到哪些话题时必须踩刹车，等等。
Claude藏了23个工具
而你可能只是和它聊天
大多数人用Claude只是打字聊天。
这其实是严重的大材小用，好比你手里握着一把瑞士军刀，却一直在拿它削苹果。
Simon在博客中还指出，Anthropic公开的prompt其实并不是全貌：它没有包含提供给模型的工具描述，而这些工具才是Claude真正的能力边界。
于是，
他通过直接在对话中让Claude「自报家门」，拿到了一份由Claude自述的工具名单。
一共23个工具，涵盖信息获取、文件操作、生活服务、社交通讯、记忆与上下文、平台连接、交互辅助、交互辅助八大场景。
需要强调一点的是，这份清单来自Simon让Claude自报的结果，并非Anthropic官方发布的工具白名单，但它与Anthropic当前公开的产品矩阵高度吻合。
更关键的是prompt里新出现的一个机制：tool_search，在4.7的prompt里明确写道：
在断定Claude缺少某项能力之前，Claude会先调用tool_search，检查是否有一个相关工具可用但尚未启用。只有在tool_search确认不存在匹配工具之后，「我无法访问X」这样的说法才是成立的。
也就是说，Claude被要求在说「我做不到」之前，先搜一遍自己到底能不能做到。
当一个AI系统挂载了成百上千个工具，不可能在每次对话中都全部加载，按需发现、按需调用，才是可扩展的方案。
Anthropic的官方tool search文档也证实了这一点：
tool search让Claude可以扩展到处理数百甚至数千个工具，并在需要时发现和调用相关工具。
https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool?utm_source=chatgpt.com
再看产品层面的外部信号。
就在4.7发布的第二天，4月17日，Anthropic推出了Claude Design。这是一款AI设计工具，能用自然语言生成原型、幻灯片和其他视觉物料。
公开报道显示，在Claude Design相关计划披露后，Figma股价一度下跌约6%。
更耐人寻味的是，Anthropic首席产品官Mike Krieger在发布前数天刚辞去了Figma董事会职务。
而在4.7的prompt里，工具列表已经涵盖了Claude in Chrome、Claude in Excel、Claude in PowerPoint
，再加上Claude Design、Claude Cowork……
大多数人把Claude当聊天框用，但Anthropic显然不这么想，它正在把Claude变成一个AI工作操作系统。
你感受到的变化
全写在prompt里
如果你最近频繁使用Claude，你可能已经有一个模糊的感觉：它好像变了。
以前你丢一个模糊的需求过去，它会追问你三四个问题，现在直接就干了；
以前它的回答经常拖得很长，现在短了不少；
以前你说「好了，谢谢」，它还要追一句「还有什么我能帮你的吗？」，现在不追了。
每一条变化，都预先写在了prompt里。
比如，4.7新增了一个叫acting_vs_clarifying的段落，当用户的请求中存在一些未明确的细节时，通常希望Claude直接做出合理尝试，而不是先进行询问。
当有工具可以用来消除歧义或补上缺失信息时，Claude会先调用工具来尝试解决，而不是让用户自己去查。
一旦Claude开始处理一个任务，就会把它完成并给出完整答案，而不是做到一半就停下。
后面还跟着一串具体要求：搜索结果不对？换个词继续搜。多部分问题？每个都回答。搜到了信息？直接用它作答，别让用户自己去翻。
Anthropic的官方公告也呼应了这一点：
Opus 4.7在遵循指令方面有显著提升
。
关于回复风格，4.7的prompt新增了一条：
Claude会让自己的回复保持聚焦和简洁，以避免过长的回答让用户感到信息过载。即便回答中需要带上免责声明或补充说明，Claude也会简要说明，并把大部分篇幅留给主要回答。
关于不再强行续聊，也有明确规定：
如果用户表示他们已经准备结束对话，Claude不会请求用户继续互动，也不会试图引出下一轮对话。
把这些变化放在一起看，你会发现一个清晰的方向：
Anthropic在把Claude从「对话助手」调教成「自主执行者」
。
部分安全细节升级
诚实性和抗提示注入更进一步
能力变强了，自主性提高了，那安全呢？
4.7的prompt在安全方面做了一轮系统性升级，而且升级的颗粒度也非常细。
其中变化最大的是儿童安全。
4.6的prompt里就有儿童安全相关的内容。但到了4.7，这个部分被大幅扩展，整个被包裹在一个新的标签里：critical_child_safety_instructions。
单从标签名就可以看出它的优先级。
另一个首次被单独命名处理的议题是饮食失调。
如果用户表现出饮食失调的迹象，Claude就不应在对话中的任何地方提供精确的营养、饮食或运动建议，不提供具体数字、目标或分步骤计划，即便本意是好的也不行。
还有一处细节，
4.7在evenhandedness部分新增了一条：如果有人要求Claude对复杂或有争议的问题只给「是」或「否」的简短回答，Claude可以拒绝。
这可能是针对社交媒体上一种很常见的攻击手法：截图诱导。即让AI就敏感话题回答「是」或「否」，然后把截图断章取义地传播。
被删掉的规则
是模型进化的证据
加规则容易，删规则要更难。
因为每删一条规则也意味着Anthropic已确信，新模型已经在训练层面解决了某个行为问题，不再需要外部规则来矫正。
据Simon Willison的分析，4.7删掉了好几条4.6里存在的行为规范。
第一条：「
Claude会避免使用用星号括起来的动作或情绪表达。
」
早期Claude有个毛病：聊着聊着突然来一句「若有所思地点头」或者「饶有兴趣地凑上前」，像在演舞台剧。
这个问题严重到需要专门写一条prompt来禁止，现在这条禁令被删了。
第二条：「
Claude会避说说真的、老实说或直截了当地说。
」
这三个词是早期Claude的口头禅。几乎每隔几句就来一个「说真的，我觉得……」，4.7把这条禁令也删了。
还有一个名称上的变化：「developer platform」被改成了「Claude Platform」。
看起来只是改了个名字，但去掉「developer」这个定语，意味着Claude的平台定位不再只面向开发者。
这些prompt的「瘦身记录」，也是模型被「驯服」的过程记录：每删一条规则，就说明有一个行为问题从「需要外部管控」变成了「内在已修复」。
它们合在一起，构成了一部有关Claude的微型进化史。
对用户来说，这意味着你正在用的AI，可能比上一个版本更「原生地」懂得怎么做一个正常的对话者。
这份公开的prompt
是一种稀缺的行业透明
我们能读到Simon这篇博客，这件事本身在AI行业就是一种稀缺的透明。
OpenAI不公开ChatGPT的system prompt，Google也不公开Gemini的。
Meta的Llama虽然开源了权重，但chat端的system prompt同样不透明。
目前，Anthropic是唯一一家持续公开聊天产品prompt历史的头部实验室。虽然，这次公开中并未给出模型的工具描述，但它仍然做了这个行业里别人都没做的事。
这些写在prompt里的规则，是真正在每一次对话中执行的指令，代表着Anthropic对「Claude应该成为什么样的AI」这个问题的真实判断和回答。
你每天跟AI说的每一句话，它怎么接、在哪里拒绝你、用什么语气回你，全都不是随机的：背后有一份不断被修改的指令在控制一切。
目前，只有一家公司让你看到这份指令长什么样。
下次跟AI对话的时候，你可能会想：这句话，是它自己想说的，还是被要求说的？
参考资料：
https://simonwillison.net/2026/Apr/18/opus-system-prompt/
https://platform.claude.com/docs/en/release-notes/system-prompts
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！