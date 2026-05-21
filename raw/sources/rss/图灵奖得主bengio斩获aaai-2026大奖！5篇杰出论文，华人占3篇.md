---
title: "图灵奖得主Bengio斩获AAAI 2026大奖！5篇杰出论文，华人占3篇"
date: 2026-01-22
source: "新智元"
url: "https://mp.weixin.qq.com/s/FE2DOO-jWXeh9A1xiDaVQg"
rss_id: "2652666709_1"
---
新智元报道
编辑：KingHZ 好困
【新智元导读】
AAAI 2026「七龙珠」，华人团队强势霸榜！从视觉重建到因果发现，再到知识嵌入传承，新一代AI基石正在新加坡闪耀。
万众期待的AAAI 2026开奖了！
今年共有5篇论文摘下杰出论文桂冠，2篇论文获得经典论文奖。
其中，图灵奖得主Yoshua Bengio，达成AI领域
首个百万被引作者
成就之后，凭借在2011年参与的一篇论文获经典论文奖。
AAAI 2026是第40届AAAI年会，本月20日至27日在新加坡博览中心举行。
杰出论文奖
AAAI人工智能会议杰出论文奖，旨在表彰在技术贡献和论述方面树立了最高标准的优秀论文。
在双盲评审过程中，程序委员会成员会推荐论文，以供评选主技术赛道及各特别赛道的「杰出论文奖」（ Outstanding Paper Award）。
今年，有5篇论文获得杰出论文，其中华人作者参与了其中3篇论文。
此外，会议于2021年增设了「优秀论文」（Distinguished Papers）这一类别，以给予特别表彰。
论文：ReconVLA: Reconstructive Vision-Language-Action Model as Effective Robot Perceiver
作者：
Wenxuan Song、Ziyang Zhou、Han Zhao、Jiayi Chen、Pengxiang Ding、Haodong Yan、Yuxin Huang、Feilong Tang、Donglin Wang、Haoang Li
机构：
香港科技大学（广州）、西湖大学、浙江大学、莫纳什大学
论文地址：https://arxiv.org/abs/2508.10333
视觉-语言-动作模型的最新进展使机器人能够融合多模态理解与动作执行。
然而，实证分析表明，当前VLA模型难以将视觉注意力分配到目标区域，其视觉注意力始终处于分散状态。
为引导视觉注意力正确锚定目标，研究人员提出了
隐式锚定范式
的重建式VLA模型。
该方法以模型视觉输出为条件，通过扩散变换器重建图像中对应于操作目标的注视区域。这一过程促使VLA模型学习细粒度表征并精准分配视觉注意力，从而有效利用任务相关的视觉信息并执行精确操作。
此外，他们从开源机器人数据集中构建了包含逾10万条轨迹、200万数据样本的大规模预训练数据集，进一步提升了模型在视觉重建任务中的泛化能力。
在仿真环境与现实场景中的大量实验验证了隐式锚定方法的优越性，展现了其在精确操作与泛化能力方面的杰出性能。
论文：LLM2CLIP: Powerful Language Model Unlocks Richer Cross-Modality Representation
作者：
Weiquan Huang、Aoqi Wu、Yifan Yang、Xufang Luo、Yuqing Yang、Usman Naseem、Chunyu Wang、Qi Dai、Xiyang Dai、Dongdong Chen、Chong Luo、Lili Qiu、Liang Hu
机构：
同济大学、微软、麦考瑞大学
论文地址：https://arxiv.org/abs/2411.04997
这篇论文主要目的是利用LLM的能力来进一步提升多模态表征学习。
将LLM融入CLIP的潜在益处显而易见。然而，要做到这一点很难。
实验表明，直接将LLM集成到CLIP中会导致性能出现灾难性的下降。
他们提出了新方法LLM2CLIP，利用LLM的力量来释放了CLIP潜力。
通过在描述空间（caption space）利用对比学习对LLM进行微调（fine-tuning），文本能力被提取到输出嵌入中，显著提高了输出层的文本区分度。
接着，研究人员设计了一种高效的训练流程，让微调后的LLM充当CLIP视觉编码器的强力教师。
得益于LLM的加入，大家现在可以纳入更长、更复杂的图像描述，而不再受限于原版CLIP文本编码器的上下文窗口和能力限制。
实验证明，该方法在跨模态任务中带来了实质性的提升。
新方法直接将此前SOTA的EVA02模型在长文本和短文本检索任务上的性能提升了16.5%，将一个仅在英语数据上训练的CLIP模型转变为业界领先的跨语言模型。
此外，当集成到像Llava 1.5这样的模型进行多模态训练时，它在几乎所有基准测试中都持续优于CLIP，展现了全面的性能提升。
论文：High-Pass Matters: Theoretical Insights and Sheaflet-Based Design for Hypergraph Neural Networks
作者：
Ming Li、Yujie Fang、Dongrui Shen、Han Feng、Xiaosheng Zhuang、Kelin Xia、Pietro Lio
在建模多元实体间高阶关系方面，超图神经网络潜力巨大。
然而，现有方法主要侧重低通滤波，普遍忽视高频信息的作用。
本研究通过理论分析揭示了HGNN的频谱特性，并证明结合低频与高频分量能构建更具表达力与效能的学习模型。特别值得注意的是，我们的分析表明高频信号对于捕捉超图内部局部判别性结构具有关键作用。
基于此发现，研究人员创新性地提出层化框架超图神经网络（HyperSheaflets），该模型融合胞腔层论与小框架变换，在保持高阶依赖关系的同时实现多尺度频谱分解。
该框架显式强调高频分量，与理论分析形成呼应。在基准数据集上的大量实验表明，新方法优于现有技术，验证了高频信息在超图学习中的重要性。
论文：Model Change for Description Logic Concepts
作者：
Ana Ozaki、Jandson S Ribeiro
机构：
奥斯陆大学、卡迪夫大学
他们研究这样一个问题：在以「带指向的解释」（pointed interpretations）所表示的模型背景下，如何修改一个描述逻辑概念。我们将这一设定称为
模型变更
（model change），并区分三类主要的变更方式：
驱逐（eviction）
：仅通过移除元素来实现变更；
接纳（reception）
：将元素纳入其中；
修订（revision）
：在一次操作中同时包含元素的移除与纳入。
他们引入了修订的形式化概念，并论证修订并不能（直觉上似乎可以）简化为「驱逐+接纳」的简单组合。
研究人员还针对
EL
与
ALC
描述逻辑概念中，驱逐与接纳的相容性给出了正反两方面的结果，并进一步给出关于
ALC
概念修订相容性的结果。
论文：Causal Structure Learning for Dynamical Systems with Theoretical Score Analysis
作者：
Nicholas Tagliapietra、Katharina Ensinger、Christoph Zimmer、Osman Mian
机构：
博世人工智能中心，达姆施塔特工业大学，巴登-符腾堡双元制大学，德国医学人工智能研究所（IKIM）
论文地址：https://arxiv.org/abs/2512.14361
现实世界系统依据其内在因果关系在连续时间中演进，但这类动力学常不可知。现有动力学学习方法通常需对时间离散化（导致在非均匀采样数据上表现欠佳），或忽略底层因果关系。研究人员提出
CADYT
，一种解决这些挑战的动态系统因果发现新方法。
与当前采用离散时间动态贝叶斯网络建模的先进因果发现方法不同，
CADYT
框架基于
差分因果模型
，能以更温和的假设建模系统的连续性。
CADYT利用精确的高斯过程推理来模拟连续时间动力学，从而更贴合底层动态过程。他们提出一种实用实现方案：通过
算法马尔可夫条件
和
最小描述长度原则
指导的贪心搜索来识别因果结构。
实验表明，CADYT在均匀与非均匀采样数据上均优于当前最优方法，所发现的因果网络更接近真实的底层动力学。
经典论文奖
AAAI经典论文奖旨在表彰从特定年份的会议中选出的一篇或多篇最具影响力的论文。2026年的奖项将颁发给第二十五届人工智能会议上最具影响力的论文。
论文的评选标准主要基于其影响力，例如：
开创了一个新的研究（子）领域
催生了重要的应用
回答了一个长期悬而未决的问题，或厘清了此前晦涩不明的概念
取得了在该子领域历史上具有里程碑意义的重大进展
被人工智能内部（或外部）的其他领域所重视并广泛采用
被大量引用
今年有两篇入选：
论文：Learning Structured Embeddings of Knowledge Bases
作者：
Antoine Bordes、Jason Weston、Ronan Collobert、Yoshua Bengio
机构：
CNRS、谷歌、
IDIAP、
蒙特利尔大学
论文地址：https://ojs.aaai.org/index.php/AAAI/article/view/7917
这篇2011年的论文通过将符号事实表示为连续向量，戏剧性地改变了AI系统使用知识的方式，首次使结构化知识能够被神经网络所访问。
这一突破在后续模型的推动下得到完善，确立了通往现代大语言模型（LLM）的直系脉络。
作者Antoine Bordes将发表「AAAI-26经典论文奖」主题演讲，展示该论文的核心概念如今如何成为当代AI的基石，尤其是为检索增强生成（RAG）提供了动力——
因为该技术将LLM与外部知识库连接起来，将其建立在事实数据之上，使得该论文的最初愿景对于构建当今准确、可靠的AI系统变得至关重要。
Antoine Bordes博士是Helsing的首席科学，此前为FAIR的联合管理总监。
论文：Understanding Natural Language Commands for Robotic Navigation and Mobile Manipulation
作者：
Stefanie Tellex、Thomas Kollar、Steven Dickerson、Matthew Walter、Ashis Banerjee、Seth Teller、Nicholas Roy
机构：
MIT
论文地址：https://ojs.aaai.org/index.php/AAAI/article/view/7979
这篇论文与2011年第25届AAAI会议上，作者当时的工作单位均为MIT。
本文提出了一种新型模型，用于理解半结构化环境中，自主导航与移动操纵系统所接收自然语言指令。
传统方法采用固定结构模型，依据环境与指令，推断动作序列的可能性。
与之相对，他们提出的「广义接地图框架」（Generalized Grounding Graphs）能根据自然语言指令的层次化组合语义结构，动态实例化特定指令的概率图模型。
该系统通过模型推理成功生成并执行与自然语言指令相对应的规划，例如「将轮胎托盘放到卡车上」。
该模型采用众包收集的指令语料库进行训练，通过将每条指令与机器人动作配对来学习模型参数。
通过从自然语言指令推断规划、在仿真环境中执行规划、并邀请用户评估系统表现等方式，研究人员验证了机器人性能。实验表明，该系统能成功执行语料库中多数自然语言指令。
参考资料：
https://aaai.org/conference/aaai/aaai-26/award-talks/
https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/
https://jandsonribeiro.github.io/home/
https://sites.google.com/view/dravcap
https://personal.cityu.edu.hk/xzhuang7/pubs/2026-LFSFZXL-AAAI-Sheaflets.pdf
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！