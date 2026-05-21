---
title: "Mythos架构被22岁小伙“逆推”开源了！MoE和注意力借鉴DeepSeek"
date: 2026-04-20
source: "量子位"
url: "https://mp.weixin.qq.com/s/bJ01FQge3WRUQMIRZ5FtDQ"
rss_id: "2247884771_1"
---
梦晨 发自 凹非寺
量子位 | 公众号 QbitAI
听说Mythos太危险被封印？有人反手就给他
“重建”并开源
了。
OpenMythos，整合了公开研究和目前对Claude Mythos架构的主流推测。
OpenMythos实现了一个带有MoE路由机制的循环深度Transformer（Recurrent-Depth Transformer ，RDT），通过跨专家的权重共享和条件计算来实现迭代深度。
已有研究证实，这种架构仅用1半参数，就能获得与传统模型同等的效果。
不堆参数，堆循环
把这些碎片拼在一起的人叫
Kye Gomez
，22岁，Swarms智能体框架创始人。
他设计的RDT架构有三个核心点：
让同一组权重最多反复跑16遍
每次走不同的专家路径
推理全程在潜在空间完成。
三者合力，让一个问题“想更多遍”比堆参数更高效。
过去两年，AI行业的标准打法是堆叠上百层不同的Transformer层，每层学到不同的东西，参数量直接爆炸。
RDT不用上百层，只用几层，最多反复循环跑16遍，每一遍都基于前一轮的结果继续计算。
同一个东西跑16遍，那不是浪费算力吗？
RDT的回答是不会重复，因为
每次循环激活的是不同的“专家”
。
循环块内部用了混合专家层，MoE路由器在每次循环中激活不同的专家子集。
MoE的设计上借鉴了DeepSeekMoE：大量细粒度路由专家，加少量始终在线的共享专家。
Gomez把这套设计总结成一句话：
MoE提供领域知识的广度，循环提供推理的深度。
广度和深度都有了，还需要一套稳定性机制保证循环不会跑飞。
来自UCSD和Together AI的新论文Parcae: Scaling Laws For Stable Looped Language Models提出
LTI稳定循环注入
让每轮不发散。
实验中用770M参数的RDT追平了1.3B参数的标准Transformer。
参数量少了近一半，效果一样。
最后一块拼图是连续潜在空间推理。16轮推理全部在hidden state向量中完成，不生成任何中间token。直到最后一轮循环结束，才输出答案。
这和Chain-of-Thought完全不同。CoT是“想一步，写一步，再想一步，再写一步”，中间token全部暴露给人类阅读。
RDT是“想完16遍才说一句话”，推理过程完全内化。
Kye还引用了俄亥俄州立大学的一篇论文，对循环Transformer架构做了两个关键实验。
第一个：系统性泛化。
训练时从没见过的知识组合，推理时循环Transformer照样能答对，标准Transformer直接失败。
这证明循环不是重复计算，是真正的”更深层思考”。
第二个：深度外推。
训练时只教了20跳推理链，测试时直接给30跳。
循环Transformer的应对方式就是在推理时多加几轮循环，标准Transformer直接崩溃。
这些结果说明当前大模型在预训练中已经记住了大量事实，瓶颈在于知识组合。
它们无法将已知事实串联起来回答新颖问题。循环似乎免费解锁了这种组合能力。
如果这些结论成立，Scaling的主流将从”训练更大的模型”转向“让现有模型在推理时多想几遍”。
有了这些研究结果，Anthropic的Mythos是否真的用了这套架构，似乎已经不重要了。
对循环Transformer的猜想已经吸引了来自学术界的大量目光。
更多理论和实验验证正在路上。
GitHub：
https://github.com/kyegomez/OpenMythos#the-central-hypothesis
参考链接：
[1]
https://x.com/KyeGomezB/status/2045660378844024994
[2]
https://arxiv.org/abs/2604.07822
[3]
https://arxiv.org/abs/2604.12946
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