---
title: "单个LLM已不够？华盛顿大学开源多模型协同框架MoCo"
date: 2026-02-16
source: "机器之心"
url: "https://mp.weixin.qq.com/s/59LpEATM7634NihzGQ7wFw"
rss_id: "2651017257_2"
---
在训练与开发单个通用大语言模型 (LLM) 之外，越来越多的研究开始关注
多模型协同
(model collaboration)：由不同群体、基于不同数据、以不同目的训练的多个大语言模型，通过多样化的协同算法与系统架构，形成组合式人工智能系统。
多个模型可以通过路由算法而因材施用，通过生成文本相互沟通协作，或是在概率分布或模型参数空间做协同运算…… 各种各样的多模型协同研究共同揭示了一种 AI 新未来的可能：由去中心化训练的多样化小模型通过协同算法构建模块化、组合式的 AI 系统，使得人人都能参与共建一种不为任何人单独所有的公共人工智能系统。
为了支持多模型协同研究并加速这一未来愿景的实现，华盛顿大学 (University of Washington) 冯尚彬团队联合斯坦福大学、哈佛大学等研究人员提出
MoCo
—— 一个针对多模型协同研究的 Python 框架。MoCo 支持 26 种在不同层级实现多模型交互的算法，研究者可以灵活自定义数据集、模型以及硬件配置，比较不同算法，优化自身算法，以此构建组合式人工智能系统。MoCo 为设计、评估与分享新的模型协同算法、组合式智能以及协同开发策略提供了重要基础。
论文标题：
MoCo: A One-Stop Shop for Model Collaboration Research
论文链接：
https://arxiv.org/abs/2601.21257
代码链接：
https://github.com/BunsenFeng/model_collaboration
多模型协同算法
多模型协同算法
按模型间信息传递的层级主要分为以下四大类
：
API 层级（API-level collaboration）：多个模型如同多个备选的 API，根据不同任务与需求选择不同的模型。主要方法包括 routing、cascading、switched generation 等。
文本层级（Text-level collaboration）：多个模型通过生成文本的交互而协作，从而分工解决问题、优化模型输出。主要方法包括 debate、feedback、response aggregation、structured interaction 等。
logit 层级（Logit-level collaboration）：多个模型的 next-token distribution 之间进行代数运算，再根据共同的 distribution 进行 decoding 以生成文本。主要方法包括 logit aggregation、contrast 等。
权重层级（Weight-level collaboration）：多个模型在权重空间进行信息传递与交互，以获得对当前任务更有效的新模型或系统。主要方法包括 model merging、parameter arithemetic 等。
MoCo 框架当前支持来自四个层级的 26 种多模型协同算法，便于研究人员在统一标准下对多模型协同算法进行评测，并为拓展新思路、设计新方法奠定坚实基础。
MoCo 框架
现有的多模型协同研究大多分散在不同的代码库中且各自使用不同的训练与推理框架，这对系统性研究与对比多模型协同算法造成了很大的阻碍。MoCo 汇集众多模型协同研究者的力量，将多样的方法统合到一个框架与 Python package 中。
使用 MoCo 非常简便：下载代码库或通过 pip install modelco 安装 Python 包，通过 config 文件设置参与协同的模型、目标数据集、硬件配置以及各类超参数，再通过一个命令就能执行从简单到复杂的各式协同算法。
MoCo 自带 25 个评估数据集，囊括问答、数学、推理、代码、安全等应用场景，而用户也可轻松引入自己的评估数据集，或者仅用 MoCo 生成回答而另做评估。
MoCo 中的绝大部分算法采用了极为灵活的实现方式，支持任何数量的任何模型通过任何数量的常见 GPU 进行执行，从而使得小模型与少资源的研究场景也被充分支持。
MoCo 支持下的新发现
基于 MoCo 提供的灵活实现，我们
扩大模型协同系统的规模
，以期找出其 scaling laws。将模型的数量从 2 个一路扩充至 16 个，我们发现普遍的向上趋势：这揭示了一种新的 AI system 的可能性，即很多小模块自底向上组成大系统。
除了扩大规模之外，我们也探讨在同等规模的情况下，
模型多样性
的作用。我们发现在模型数量均为 8 的情况下，8 个多样的 LLM 协作显著优于 8 个同质的 LLM 协作，揭示了多个模型之间取长补短、互相成就的重要性。
我们还发现多模型协作系统能够
解决此前单一模型所不能解决的问题
。实验结果表明，在所有单一模型都不能解决的问题中，其协同系统平均能够解决 18.5% 的问题。这也揭示了模型协作不仅仅是简单的能力并集，而是在交互的过程中涌现了单一模型所不具有的能力。
欢迎您的贡献
如果您在研究工作中探索或提出过多个大语言模型协同的算法，欢迎联系作者团队将您的算法加入 MoCo。我们衷心希望通过更多研究人员的参与和贡献，将模型协同打造成一种独特的方法论，为模块化、组合式、去中心化以及共同开发的未来 AI 系统添砖加瓦。
作者介绍：冯尚彬是美国华盛顿大学 (University of Washington) 计算机系博士生，导师为 Dr. Yulia Tsvetkov。他的研究曾获得 ACL 2023 最佳论文奖、ACL 2024 杰出论文奖、the IBM PhD Fellowship、the Jane Street Graduate Research Fellowship、百度奖学金、the NVIDIA Graduate Fellowship。本文的共同第一作者还包括德州农工大学的白雨洋同学以及华盛顿大学的杨梓源同学。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com