---
title: "CVPR论文一网打尽！科研神器Papers with Code满血复活"
date: 2026-06-03
source: "量子位"
url: "https://mp.weixin.qq.com/s/fQOb1SEUSGSDghMZkJNkNQ"
rss_id: "2247894624_2"
---
梦晨 发自 凹非寺
量子位 | 公众号 QbitAI
科研神器Papers with Code，满血复活！
Hugging Face开源团队从零重建，SOTA排行榜全面回归，内容现在由AI智能体驱动。
2025年7月，原本由Meta AI维护的Papers with Code毫无预警关闭。
全球AI研究者打开网站，看到的是”502 Bad Gateway”，GitHub上的求助帖无人回应。
虽然这期间有HuggingFace、AlphaXiv等试图承接论文聚合的功能，但大家普遍反馈SOTA排行榜功能无可替代。
新版paperswithcode.co不仅重置了基准测试排行榜功能， 对于新时代的Agent、Coding Agent等领域覆盖的还更全。
而且主要由Agent解析论文自动更新，免除了人力维护的成本。
如今正赶上CVPR期间，新平台还可以一网打尽所有CVPR论文。
一夜之间，机器学习的”维基百科”无了
Papers with Code自2018年7月上线以来，一直是机器学习社区绕不开的基础设施。
论文、代码、数据集、排行榜，全部整合在一个站点里，研究人员找参考实现的时间从几天压缩到几分钟。
2019年12月Meta收购了它，当时承诺会保持其中立、开放和免费。
然后就是2025年7月，网站突然挂了，社区里一片混乱。
当时这个平台上积累了超过9300个基准测试、5600个数据集的性能对比数据，涵盖了5000多个不同任务的详细信息。这些数据是大量研究者日常工作流程中不可缺少的一环，说没就没了。
创始人Ross Taylor称，团队被Meta收购以后转型从事大模型研究，能花在Papers with Code的时间越来越少了，而且大量成员已经离开Meta，最终无法继续维护。
Hugging Face联合创始人兼CTO Julien Chaumond随后宣布已与原团队团队合作，推出了一个“Trending Papers”页面作为过渡。
原来的paperswithcode.com域名开始自动跳转到Hugging Face的论文页面。
但社区并不买账。
“Trending Papers”只展示热门论文和GitHub链接，排序依据是点赞数和仓库星标数。
而Paper with Code最核心的结构化SOTA排行榜完全缺席。
用户没办法按任务、数据集和评估指标去对比模型性能了。从一个功能完备的”研究基础设施”变成了仅仅是一个“热榜”，落差太大。
从零重建：AI智能体自动解析数千篇论文
2026年5月，Hugging Face开源团队成员Niels Rogge推出了paperswithcode.co。这不是对”Trending Papers”的修补，而是一个完全独立的、从零开始的重建项目。
新平台最核心的变化在于数据处理方式。
它部署了AI智能体来大规模自动化地解析每天新发表的数千篇研究论文。
这些智能体能自动为论文打上所属领域标签（如OCR、Agents），从PDF中提取关键评估结果和性能数据，并自动发现和链接相关的GitHub仓库、项目主页以及Hugging Face Hub上的模型和数据集。
新平台不再依赖纯人工维护，可以实时跟进论文发表的速度。
SOTA排行榜全面回归。
用户可以在最新的基准上对比各大模型的性能表现，并且加入了散点图来可视化特定基准上技术水平随时间的演进。
除此之外，新平台还增加了一个”Methods”标签页，系统性地整理AI领域中流行的技术方法。
每个论文页面本身也得到了增强，支持链接多个GitHub仓库和项目主页，直接展示从论文中提取的评估结果，并链接到Hugging Face生态系统中的相关资源。
平台还开放了论文提交，来源不限于arXiv，博客、GitHub报告都可以，提交后由AI自动索引。开发者通过GitHub和Discord收集社区反馈，持续迭代功能。
上线一周，功能连续更新
paperswithcode.co发布后，研究人员和工程师反响强烈，普遍认为它填补了原版关闭以来AI生态系统中最大的空白。
随着每天新论文和新模型数量爆炸式增长，找到适合特定任务的SOTA方案本身已经变成了一项挑战，而新平台的回归直接解决了这个问题。
Niels Rogge在上线后一周内就根据社区反馈迅速迭代了多项功能：
排行榜现在支持同时展示多个评估指标，比如自动语音识别任务中同时显示词错误率（WER）和实时因子（RTFx）
平台会自动识别论文之间的前后继承关系，如标注DINOv2是DINO的续作
团队还在逐步为Hugging Face transformers库中支持的所有模型添加评估结果，目前已完成约3000个。
这次回来的版本，用AI智能体驱动数据处理，覆盖范围和更新速度都不再受限于人工维护的瓶颈。
参考链接：
[1]
https://paperswithcode.co
[2]
https://www.reddit.com/r/MachineLearning/comments/1tgmwqr/reviving_paperswithcode_by_hugging_face_p/
—
欢迎AI产品从业者共建
—
📚
「AI产品知识库」
是量子位智库基于长期产品库追踪和用户行为数据推出的飞书知识库，旨在成为AI行业从业者、投资者、研究者的核心信息枢纽与决策支持平台。
一键关注 👇 点亮星标
科技前沿进展每日见