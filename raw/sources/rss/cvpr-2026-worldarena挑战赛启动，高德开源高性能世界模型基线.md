---
title: "CVPR 2026 WorldArena挑战赛启动，高德开源高性能世界模型基线"
date: 2026-04-12
source: "机器之心"
url: "https://mp.weixin.qq.com/s/WG_4zJbNk9K14UngO7TbGw"
rss_id: "2651027183_1"
---
机器之心发布
过去两年，从 Sora 到 Veo，再到 Cosmos，视频生成模型在「视觉逼真」这条路上飞速狂奔，生成的画面已经足以以假乱真。但一个根本性的问题始终悬而未决：这些模型真的「理解」了物理世界吗？这个问题目前还没有一个答案。
事实上，当这些模型去生成机器人操作的视频，「夹爪穿模、物体凭空消失、时序错乱」等物理违规现象比比皆是。从「看起来像」到「真能干活」，一直横亘着一条技术实现的鸿沟。
究竟什么样的模型才可以真能干活？围绕这个问题，一场全球性的技术竞赛正在打响 ——
CVPR 2026 WorldArena Challenge
。
赛事官网：http://cvpr2026challenge.world-arena.ai/
WorldArena 排行榜：https://world-arena.ai/
WorldArena GitHub：https://github.com/tsinghua-fib-lab/WorldArena
ABot-PhysWorld GitHub：https://github.com/amap-cvlab/ABot-PhysWorld
ABot-PhysWorld 论文：https://github.com/amap-cvlab/ABot-PhysWorld/blob/main/tech_report/ABot-PhysWorld.pdf
Workshop 官网：https://videoworldmodel-workshop.github.io/
官方交流群（微信）：https://github.com/tsinghua-fib-lab/WorldArena/assets/WeChat.jpg
官方交流群（Discord）：https://discord.gg/ZMrJJD55
官方邮箱：WorldArena1@outlook.com
一、WorldArena Challenge：世界模型的「大考」来了
WorldArena Challenge 是依托 CVPR 2026 Video World Model Workshop 举办的国际挑战赛，由
高德地图视觉技术中心（AMAP CV Lab）
、流形空间（Manifold.ai）和清华大学牵头，联合普林斯顿大学、新加坡国立大学、香港大学等全球顶尖学术机构共同主办。
与此前的世界模型评测不同，WorldArena 的核心理念可以用四个字概括：「真能干活」。评测体系不仅关注视频「好不好看」，更聚焦于生成的内容是否遵循物理规律、是否能支撑机器人的实际操作。比赛基于清华大学等 8 所顶尖高校联合研发的 WorldArena Benchmark，涵盖 16 大核心指标和 3 大真实应用任务，旨在推动世界模型从「视觉逼真」向「功能可用」转型。此次比赛设置了以下两个赛道，参赛团队可根据研究方向选择单一赛道或双赛道并行参与。
赛道一评估世界模型在视频生成层面的综合感知质量 —— 不是简单地看「画面漂不漂亮」，而是从视觉质量、动作质量、内容一致性、物理法则遵循度、可控性和 3D 准确性六大维度，通过 16 项量化指标展开全方位评测。最终通过 EWMScore 整合为统一的综合分数排名。简单说，不是比谁的视频最好看，而是比谁的视频最「合理」。
赛道二为具身任务功能性赛道。这是 WorldArena 的核心创新方向，首次将评测延伸至真实的具身任务执行层面，围绕世界模型在具身智能中的三大核心使用价值展开评估：作为数据合成引擎，能否生成有效提升策略模型性能的合成数据；作为策略评估器，能否替代物理仿真器准确评估策略；作为行动规划器，能否直接规划出可执行的动作序列。赛道二将率先开放数据合成引擎与策略评估器的提交通道，对于排名靠前的方案，后续将引入行动规划器进行额外加权打分，以全面验证模型的实用价值。
二、即刻上手，高性能开源世界模型已就位
赛事主办方之一的高德为提升创新活跃、降低参赛门槛，已将其世界模型
ABot-PhysWorld
完全开源 —— 这个模型目前在 WorldArena Leaderboard 上排名领先，参赛者可以直接在此基础上训练和优化。
ABot-PhysWorld 是高德即将发布的 ABot-World 系列的首个子工作，聚焦于具身场景下的
物理一致性视频生成
。与现有模型追求「视觉合理性」不同，ABot-PhysWorld 的核心目标是「物理真实性」—— 让 AI 生成的不仅是连续帧，而是符合物理规律的可行操作序列。
在技术实现上，该模型取得了多项关键突破：
四维泛化数据
：从 300 万原始数据清洗至 30 万高质量 SFT 数据，覆盖本体泛化（不同机器人形态）、任务泛化（50+ 任务类型）、场景泛化（10+ 场景）和物体泛化（1000+ 物体类别），确保模型不偏向特定场景。
DPO 偏好对齐
：通过 VLM-as-Judge 构造 1 万条偏好数据对，使用 Direct Preference Optimization 让模型在「物理正确」和「物理错误」之间做出正确选择，显著减少穿模、变形等物理违规现象。
Dense Action Map 精细控制
：11 万条动作控制数据，将机器人动作编码为空间稠密的控制信号，通过 Context Blocks 分支与视频 latent 融合，实现精细化动作注入。
在独立的 PAI-Bench 基准上，ABot-PhysWorld 以
0.8491 的综合得分
和
0.9306 的领域得分
刷新 SOTA，显著超越 GigaWorld、Wanx-2.5、Veo 3.1、Sora 2 等开源和闭源模型。更重要的是，它成功打破了业界长期存在的「视觉质量与物理合规性」之间的 Trade-off—— 在保持极具竞争力的视觉质量的同时，实现了领域得分的大幅领先。
在 WorldArena Leaderboard 上，ABot-PhysWorld 同样表现优异，名列前茅。这一成绩充分证明了高德在具身世界模型方向的技术实力。
为保障赛事公平性并加速社区创新，主办方明确 ABot-PhysWorld 不参与最终评奖。该模型已开放完整模型权重、训练代码及数据处理流程，参赛团队可直接在此高起点基线上进行微调、数据策略优化或技术创新。
值得一提的是，今年以来高德在具身智能领域动作频频，先后发布多款具身模型，并在多项权威基准测试中取得 SOTA。结合此次 ABot-PhysWorld 的开源及 ABot-World 系列的预告，高德在具身世界模型领域的产业布局正持续深化。
三、赛程安排与参赛指南
赛事总奖金池超过 14,000 美元，各赛道分设一、二、三等奖。获奖团队将获得 CVPR Workshop 报告展示机会，顶尖队伍可跨赛道获奖。目前提交通道已开放并支持实时刷榜，最终提交截止时间为 2026 年 5 月 25 日，结果将于 6 月 1 日公布，并于 6 月 4 日在 CVPR 期间举行颁奖典礼。
参赛流程非常简洁，预计半天即可跑通第一个提交：
准备数据：从 Hugging Face 下载 val_dataset /test_dataset。
生成视频：用您的模型输出 ≥640×480、121 帧 @24fps 视频（输入：初始帧 + 文本 / 动作）。
打包提交：压缩成 zip（视频文件夹 + model_README.md），在官网注册提交或发送至官方邮箱。
目前已有众多顶尖学术团队与产业机构报名参赛，赛事详情与报名入口请访问官网。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com