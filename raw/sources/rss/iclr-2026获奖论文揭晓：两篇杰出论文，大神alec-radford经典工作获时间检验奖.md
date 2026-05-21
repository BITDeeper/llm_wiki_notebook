---
title: "ICLR 2026获奖论文揭晓：两篇杰出论文，大神Alec Radford经典工作获时间检验奖"
date: 2026-04-25
source: "机器之心"
url: "https://mp.weixin.qq.com/s/nO8AIAnvHhkLRyGHCgErUQ"
rss_id: "2651030044_2"
---
机器之心编辑部
ICLR 2026 获奖论文已经公布。
今年共有 2 篇论文获得「杰出论文奖」（Outstanding Paper），另有 1 篇论文获得「荣誉提名」（Honorable Mention）；此外，还有 2 篇 ICLR 2016 论文获得「时间检验奖」（Test of Time Award）。
作为机器学习领域的顶级会议， ICLR 2026 于 2026 年 4 月 23 日至 27 日在巴西里约热内卢举行。官方今年收到了
有效投稿约 19000 篇，总录取率约为 28%，
该录取率涵盖了所有经过同行评审的完整论文投稿，无论其是否撤稿。
以下是获奖论文详细信息。
杰出论文奖
论文 1：Transformers are Inherently Succinct
这项理论工作提出了一个新的视角，
用以解释 Transformer 架构的强大能力：即与 RNN 等替代模型相比，它能够以多么简洁的方式编码某些概念。
尽管存在一些批评意见，但论文传达出的鲜明概念性观点仍引起了评审委员会及其他专家的兴趣。
该工作可能会推动后续围绕 Transformer 及其他架构在概念表示简洁性方面的更多理论与实证研究。
论文作者：Pascal Bergsträßer、Ryan Cotterell、Anthony Widjaja Lin
论文链接：https://openreview.net/pdf?id=Yxz92UuPLQ
论文摘要：
论文提出以简洁性作为衡量 Transformer 在描述某一概念时表达能力的指标。
为此，本文证明 Transformer 具有很强的表达能力：
相比有限自动机和线性时序逻辑（LTL）公式等形式语言的标准表示方法，Transformer 能够以显著更简洁的方式表示形式语言。
作为这种表达能力带来的一个副产物，研究进一步表明，验证 Transformer 的性质在理论上是不可处理的，也就是说，该问题是 EXPSPACE-complete（指数空间完全） 的。
论文 2：LLMs Get Lost In Multi-Turn Conversation
大多数用于 LLM 训练的数据与其实际部署方式之间存在明显的不协调：训练数据主要是文本补全或单轮交互形式，而实际部署场景本质上往往是多轮对话。如何稳健地评估和训练模型的多轮能力，仍然是一项复杂挑战。
这篇论文设计了一种可扩展的方法来评估多轮能力，并发现：
在非常常见的多轮交互场景中，尤其是当指令存在欠明确、信息不充分的问题时，LLM 的能力和可靠性会显著下降。
该工作展现了出色的实验设计和方法论，其发现新颖且有趣，尤其聚焦于一个更贴近真实使用场景的重要问题。尽管评审过程中曾讨论过其使用模型相对较旧的问题，但委员会认为，该论文的结论和方法对于当前最先进的模型仍然具有相关性。
这项工作突出揭示了一个前沿模型正在努力解决的问题，并提供了一种可行且可扩展的诊断方法。
论文作者：Philippe Laban, Hiroaki Hayashi, Yingbo Zhou, Jennifer Neville
论文链接：https://openreview.net/pdf?id=VKGTGGcwl6
论文摘要：
大语言模型本质上是一种对话式接口，因此其能力不应只体现在理解和完成用户已经充分说明的任务上，还应体现在能够通过多轮交流，帮助用户逐步明确、探索和细化需求。
然而，当前大多数 LLM 评估仍主要集中在单轮、指令完整明确的任务场景中，而真实用户交互中，指令不充分、需求未完全说明的情况十分常见。针对这一问题，论文通过大规模模拟实验，对比了多个顶尖开源和闭源 LLM 在单轮与多轮场景下的表现。
实验结果显示，
所有被测试模型在多轮对话中的表现都明显低于单轮场景。
在六类生成任务中，模型性能平均下降 39%。进一步基于 20 多万次模拟对话的分析表明，这种性能退化主要来自两个方面：
一是模型能力本身出现小幅下降，二是模型可靠性显著降低。
论文还发现，LLM 往往会在对话早期过早做出假设，并尝试生成最终答案；一旦这些早期判断出现偏差，模型在后续对话中容易过度依赖错误方向，难以及时纠正。换言之，
当 LLM 在多轮对话中走错一步时，往往会逐渐迷失，并难以恢复到正确轨道。
除上述两篇杰出论文奖论文外，《The Polar Express: Optimal Matrix Sign Methods and their Application to the Muon Algorithm》 获得了本届荣誉提名（Honorable Mention）。该论文由 Noah Amsel、David Persson、Christopher Musco 和 Robert M. Gower 共同完成。
时间检验奖（Test of Time）
时间检验奖旨在表彰 2016 年 ICLR 上发表的、对该领域产生持久影响的论文。2026 年程序委员会审查了 2016 年 ICLR 上发表的论文，选出了以下两篇具有代表性的论文，该论文对如今的机器学习领域产生了深远的影响和作用。
论文 1.Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks
这篇论文，通常被称为「DCGAN」，
是最早成功展示基于学习的生成模型能够合成多样化、真实且复杂图像的论文之一，为图像生成子领域的兴起奠定了基础。
当前，图像生成是机器学习研究中最活跃的领域之一，并且在工业界产生了许多非常成功的应用，虽然技术已经发生了变化（从 GAN 到扩散模型），但 DCGAN 依然经得起时间的考验，是这一重要领域得以发展的关键一步。
论文作者：Alec Radford、Luke Metz、Soumith Chintala
论文链接：https://arxiv.org/pdf/1511.06434
论文 2.Continuous control with deep reinforcement learning
该论文可以说是那些最具代表性的，从根本上改变其领域发展轨迹的成果之一。在这篇论文介绍深度确定性策略梯度（DDPG）算法发表之前，将强化学习应用于物理系统正面临着严重瓶颈，工程师们被困于手工制作状态特征，或与由离散化复杂运动控制引起的维度灾难作斗争。
而
深度确定性策略梯度算法是第一个成功解决这两大局限性的算法，
通过巧妙地将确定性 Actor-Critic 架构与 DQN 的稳定化技术结合，该算法使神经网络能够将原始传感器数据直接转化为精确、连续的物理动作。
最终，DDPG 展示了深度强化学习能够进入连续控制领域，改变了该领域的轨迹，并引发了一场强化学习的革命。
论文作者：Timothy P. Lillicrap、Jonathan J. Hunt、Alexander Pritzel、Nicolas Heess、Tom Erez、Yuval Tassa、David Silver、Daan Wierstra
论文链接：https://arxiv.org/pdf/1509.02971
参考链接：
https://x.com/iclr_conf/status/2047780516682694977
https://x.com/iclr_conf/status/2047287536611963295
https://x.com/iclr_conf/status/2047290363740606703
https://x.com/GoogleResearch/status/2047802189096136781
https://blog.iclr.cc/2026/04/23/announcing-the-iclr-2026-outstanding-papers/
https://blog.iclr.cc/2026/04/22/announcing-the-test-of-time-awards-from-iclr-2016/
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com