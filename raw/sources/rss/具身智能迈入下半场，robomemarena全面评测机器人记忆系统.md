---
title: "具身智能迈入下半场，RoboMemArena全面评测机器人记忆系统"
date: 2026-05-27
source: "机器之心"
url: "https://mp.weixin.qq.com/s/MQVN3XtLHh7jQMrkki1POg"
rss_id: "2651035345_2"
---
具身基座模型（
VLA、世界模型
）
这两年进步很快。但只要任务一长、场景一复杂，一个很现实的问题就会立刻出现：机器人很多时候不是「不会做」，而是「记不住」。比如：
柜子之前有没有打开过？
物体被遮挡之前放到了哪里？
某个重复动作已经执行了几次？
人类刚才示范过的顺序到底是什么？
这些都不是只看当前一帧图像就能解决的问题。也正因为如此，我们越来越觉得：现有很多机器人 benchmark 虽然在操作上已经很丰富，但
对 memory-dependent long-horizon manipulation 的刻画还远远不够
。
于是，香港科技大学（广州）联合清华大学、浙江大学、西湖大学、上海交通大学等多所顶尖高校与科研机构共同打造了具身智能领域首个聚焦「
机器人记忆能力」的系统性评测基准
RoboMemArena
，旨在填补长期以来机器人在长时程任务与历史状态记忆评估上的空白。
该基准突破传统机器人 Benchmark 仅关注短期感知与即时控制的局限，构建了涵盖物体转移、目标遮挡、动作计数与顺序执行四大核心记忆场景的综合评测体系，共包含 26 项长时程任务、151 个细粒度子任务以及 2600 条专家演示轨迹。同时配套复杂的真机测评和 leaderboard，支持外部单位手动上传模型进行真机评测，为具身智能系统在长期规划、世界状态理解与动态决策方面提供了更接近真实世界的统一评测标准。
论文标题：
RoboMemArena: A Comprehensive and Challenging Robotic Memory Benchmark
论文地址：https://arxiv.org/abs/2605.10921
项目地址：https://robomemarena.github.io/
代码地址：https://github.com/OpenHelix-Team/RoboMemArena
Leaderboard地址：https://robomemarena.github.io/leaderboard.html
数据集地址：https://huggingface.co/datasets/RoboMemArenaBenchmark/RoboMemArena
如果一个 benchmark 本身没有把 memory 需求设计清楚，那么后面的模型比较其实很难公平：
有些任务看起来很长，但其实当前观察就足够决策；
有些 benchmark 有长程执行，却没有为 memory formation 提供直接监督；
还有一些工作只停留在 simulation，没有配套的真实机器人验证。
RoboMemArena 想补上的，正是这块空缺。它不是简单做更多任务，而是试图把「机器人到底什么时候必须依赖历史信息」这件事，系统化地组织起来。
RoboMemArena 的三个核心特点
1. 它提供了构建 robot memory 所必需的多模态标注
这是我们最看重的一点。很多 memory benchmark 只能告诉你最终成功还是失败，但如果模型真的要学会「记住过去」，它需要的往往不只是最终标签。
RoboMemArena 提供了更贴近 memory formation 的多模态监督，包括：
subtask-level annotations
：把长程轨迹拆成可执行、可理解的子任务；
native keyframe annotations
：显式标记那些真正重要的物理状态转折；
与轨迹对应的视觉观测、动作和机器人状态。
也就是说，我们不仅告诉模型「这个任务要完成」，还尽量告诉它「历史里哪些瞬间值得记住」。这也是 RoboMemArena 和很多已有 benchmark 非常不同的地方。
2. 它在 memory benchmark 里足够长程，也足够 diverse
RoboMemArena 一共包含
26 个任务
，覆盖四类典型的 memory-demand setting：
Transferring（
物体转移
）
Occlusion（
目标遮挡
）
Counting（
动作计数
）
Sequence（
顺序执行
）
这些任务并不是为了「凑数量」，而是围绕 reactive policy 的典型失败模式来设计的。从统计上看，RoboMemArena 有几个非常关键的数字：
平均每个任务
超过 1000 steps
一共收集
2600 条长程视觉轨迹
进一步切分得到
15100 个 keyframe-aligned 短段
全部 151 个子任务里，
68.9% 是 memory-dependent
换句话说，这不是一个「顺带考一下记忆」的 benchmark，而是一个把历史依赖明确放到台面上的 benchmark。
3. 它不只停留在 simulation，还配套了复杂真机测评
这也是我们特别想补上的地方。
如果一个 memory 方法只能在 simulation 里有效，那它距离真正的 embodied system 还是有一段距离。所以在 RoboMemArena 里，我们不仅做了仿真 benchmark，还配套设计了
5 个真实机器人 memory 任务
：
Pour Bottle ×2（
动作计数任务
）
Brush Plates with Swap（
状态不可见任务
）
Transfer Objects（
顺序执行任务
）
Shell Game（
隐藏状态追踪任务
）
IHMB
Imitate Human to Make Breakfast (IHMB)（
长程模仿任务
）
其中最长的真实任务
超过 3 分钟
，而且在最复杂的
IHMB（模仿人类做早餐） 任务
上，只有我们的
PrediMem
能够成功完成。
这意味着 memory 机制带来的提升，不只是 simulation 里的表面收益，而是在真实执行噪声下依然有价值。
为什么我们说它 easy to use？
我们不希望 RoboMemArena 只是一个「写论文用的 benchmark」，也希望它能被后来者真正拿来训练、复现和比较。所以在开放资源上，我们尽量把入口做完整：
开源
26 个任务
的高质量训练数据，并带有
子任务、关键帧、HDF5 轨迹结构
等丰富标注；
提供
26 个 BDDL 任务定义、LIBERO-compatible evaluation environment
，以及与
mujoco + robosuite + OpenGL/EGL
兼容的评测路径；
开放
PrediMem
相关训练与评测实现入口，并已经系统跑出
π0.5、MemoryVLA、MemER、HiF-VLA
等代表性 baseline。
换句话说，如果你想直接在统一 benchmark 上做 robot memory 研究，RoboMemArena 已经尽量把最费时间的那部分前置工作替大家做掉了。
PrediMem 到底强在哪里？
如果说 RoboMemArena 回答的是：memory benchmark 应该怎么做。那么 PrediMem 回答的就是：在这样一个 benchmark 上，一个真正有效的 memory-aware baseline 应该长什么样
PrediMem 是一个
dual-system VLA
：
高层 VLM 负责规划和 memory 管理
低层 VLA 负责执行动作 chunk
它的关键不在于盲目加大模型，而在于让高层 planner 显式维护：
recent-frame buffer
keyframe buffer
并且通过
predictive coding head
，让高层表征对物理状态转折更敏感。这种设计看起来不算复杂，但在 long-horizon、partially observable 的场景里非常关键。
实验上，它把 memory 这件事真正拉开了差距
在仿真实验里，PrediMem 的整体结果优于所有 baseline：
PrediMem
：38.5% TSR / 55.2% CSR
MemER
：27.3% TSR / 49.1% CSR
π0.5
：21.5% TSR / 38.7% CSR
如果再细看四类任务，PrediMem 在
Transferring、Occlusion、Counting、Sequence
上都拿到了最好的平均结果，其中在最依赖历史状态保持的
Sequence
上达到
72.5% TSR / 89.5% CSR
，在
Occlusion
和
Counting
这两类 memory-demand 最强的设置里也明显拉开了和 baseline 的差距。
而在真实机器人任务上，结果同样清楚：
PrediMem
：52% average success
MemER
：40%
π0.5
：20%
更重要的是，在最长、最复杂、最依赖历史信息的
IHMB
上，只有 PrediMem 成功。而且从消融实验也能看到，无论去掉
predictive coding head
还是拿掉
keyframe bank
，整体表现都会明显下降。
这说明 PrediMem 的优势并不来自单纯「模型更大」，而是确实来自对历史信息组织方式的改进。这也说明 memory 不是一个「锦上添花」的小模块，而是长程机器人执行里决定任务能不能贯通的核心能力。
我们真正希望 RoboMemArena 带来什么？
我们希望它不只是又一个 benchmark 名字，更希望它把一个长期被低估的问题真正抬出来：对于 long-horizon robotic execution，memory 不是可选项，而是基础能力。
如果一个系统不能记住：
之前发生了什么
哪些状态变化值得保留
人类刚刚示范过怎样的顺序
那么它在真实复杂任务里就很难真正稳定。
RoboMemArena 想做的，就是把这件事用一个更完整、更可训练、更可比较、也更能落到真机上的方式组织起来。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com