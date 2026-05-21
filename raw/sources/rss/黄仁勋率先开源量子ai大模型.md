---
title: "黄仁勋率先开源量子AI大模型"
date: 2026-04-15
source: "量子位"
url: "https://mp.weixin.qq.com/s/TQVtx9KmXpXLlYaZWKJryg"
rss_id: "2247883563_2"
---
鱼羊 发自 凹非寺
量子位 | 公众号 QbitAI
英伟达最新AI开源，瞄准了量子计算：
推出
全球首个开源量子AI模型家族
——
NVIDIA Ising
。
具体包括：
Ising Calibration（校准）
：一个350亿参数的视觉语言模型（VLM），能够快速解读并对来自量子处理器的测量结果做出反应。基于这一模型，
Agent能够把几天的校准工作缩短到几小时
。
Ising Decoding（解码）
：
用3D CNN做实时纠错
，包括分别针对速度和精度优化的两个版本。相比于当前开源行业标准pyMatching，Ising Decoding在速度上最多快
2.5
倍，精度高出
3
倍。
用英伟达自己的话说，Ising系列模型极大地简化了对复杂物理系统的理解，为量子纠错和校准提供了高性能、可扩展的AI工具。
而量子纠错和校准，正是构建混合量子-经典系统时最关键的两大挑战。
老黄亦对Ising寄予厚望：
AI对量子计算的实用化至关重要。
有了Ising，
AI将成为量子计算机的操作系统
，将脆弱的量子比特转变为可扩展且可靠的量子-GPU系统。
加速量子系统实用化
说到量子计算的实用化，大家总开玩笑说存在“5年魔咒”：总是说下一个5年就能规模化，实则5年又5年，预期仍未实现。
其中很重要的一个原因是，量子计算机太容易出错了：
当前最先进的量子处理器，
每进行1000次操作就可能出错一次
。而从规模化的角度来看，错误率必须降至
万亿分之一
甚至更低。
因此，对于量子计算而言，在错误累积前进行实时校准和纠错，非常关键。
英伟达认为，AI最有希望突破这一难题。
此次开源，Ising正是在校准和量子纠错解码两方面发力。
NVIDIA Ising Calibration
Ising Calibration是一个大型视觉语言模型（VLM），能够理解量子计算科学实验的输出结果，以及结果与预期趋势的对比。
Ising Calibration可以被用到Agent的工作流中，对量子处理器的测量结果作出相应，并进行主动校准。
用于训练Ising Calibration的数据涵盖多种量子比特模态，包括超导量子比特、量子点、离子、中性原子、氦上电子等等。
为了验证Ising Calibration的有效性，英伟达和包括费米实验室、哈佛在内的合作伙伴们一起，基于真实量子计算机的输出，共同开发了QcalEval基准——这是世界上首个用于评估Agent量子计算机校准的基准。
结果显示，350亿参数的Ising-Calibration-1在解释实验结果、分类结果、评估结果重要性、评估拟合质量和关键特征，以及生成可行性建议这六个评估维度上，平均得分达到SOTA，超过了Gemini 3.1 Pro、GPT 5.4、Claude Opus 4.6等顶级闭源模型。
NVIDIA Ising Decoding
Ising Decoding则是基于3D CNN的AI训练框架和模型集合，专门用于量子纠错中要求极高的实时解码任务。
作为“预解码器”，Ising Decoding可以在空间和时间上扩展，通过处理大量局部的综合征错误，来加速并提高全局解码器的准确性。
用户只需定义噪声模型、旋转表面码的方向和模型深度，Ising Decoding框架就能自动生成合成数据，并训练出针对任务优化解码性能的3D CNN。
英伟达在HuggingFace上开源了两个基础模型实例：
针对速度优化的
Fast模型
模型参数量大约为91.2万，层数较少，体积较小。因此，Ising-Decoder-SurfaceCode-1-Fast可以在GPU上高效运行。
相比于单独的PyMatching方案，Fast模型能带来
2.5倍
加速，同时将准确率提升至原来的
1.11倍
。
针对准确率优化的
Accurate模型
模型参数量大约为179万。相比于Fast，Accurate模型能纠正更长的错误链，同时运行时间也会变长。
相比于单独使用PyMatching，Ising-Decoder-SurfaceCode-1-Accurate + PyMatching的方案是前者的
2.25倍
，准确率能达到
1.53倍
。
值得一提的是，Ising系列模型采用的是Apache-2.0协议，这是一个较为宽松、商用友好的开源许可。
另外，Ising这个名字也有点说法：
伊辛模型（Ising Model）是统计物理学中一个非常经典且重要的数学模型，最初由物理学家Wilhelm Lenz在1920年提出，并由他的学生Ernst Ising在1925年对其一维情况进行了详细研究。
现在，伊辛模型已经成为研究相变和临界现象的最基本模型，并被广泛应用于物理、化学、生物、计算机科学甚至社会学领域。
One More Thing
英伟达突然在量子计算领域大手笔开源，股价也迎来一波超过6%的涨幅。
就有网友辣评：英伟达发布量产量子工具链，等不到5年以后，大家伙又要开始手忙脚乱了。
回到老黄那句话上，“AI将成为量子计算机的操作系统”，那么率先用开源在量子生态中占据一席之地，就是英伟达为这盘未来棋局投下的重要一子。
依旧不止于硬件，而是从软件底层逻辑的层级上，就开始埋下影响力的伏笔。
开源地址：
https://huggingface.co/collections/nvidia/nvidia-ising
参考链接：
[1]https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers
[2]https://developer.nvidia.com/blog/nvidia-ising-introduces-ai-powered-workflows-to-build-fault-tolerant-quantum-systems/
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