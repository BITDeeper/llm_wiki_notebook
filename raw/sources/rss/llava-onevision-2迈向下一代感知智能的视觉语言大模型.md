---
title: "LLaVA-OneVision-2迈向下一代感知智能的视觉语言大模型"
date: 2026-05-21
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/uv0oZX_De1Sfyy8XNUbFSQ"
rss_id: "2247660042_1"
---
首个以「码流（Codec-Stream）」为视觉单元的多模态大模型 — 让视频不再只是被采样的帧，而是一条由比特率与运动残差共同驱动的连续证据流。8B 模型在 18 项视频任务、11 项空间推理任务、4 项跟踪任务上全面超越 Qwen3-VL-8B；在体育中考数据集 上以 74.9 vs 30.1（+44.8）大幅领先。
🔗
LLaVA-OneVision-2技术报告：
https://cdn.jsdelivr.net/gh/anxiangsir/ov2_asset@main/LLaVA_OneVision_2.pdf
🔗
LLaVA-OneVision-2 GitHub：
https://github.com/EvolvingLMMs-Lab/LLaVA-OneVision-2
🤗
模型：
https://huggingface.co/lmms-lab-encoder/LLaVA-OneVision-2-8B-Instruct
📦
数据：
https://huggingface.co/datasets/mvp-lab/LLaVA-OneVision-2-Data
📝
主页：
https://evolvinglmms-lab.github.io/LLaVA-OneVision-2
Part I ｜ Foundation
00 Codec 的前世今生：预测式编码是一种工程先验
Codec 诞生于通信与存储的硬约束：把每一帧都当作独立图像编码，码率会随分辨率与帧率线性爆炸。工程上可扩展的路线只有一条 — 利用时间冗余：把『可预测的部分』写成状态，把『不可预测的偏离』写成差分。
从早期的差分/预测编码，到运动估计—补偿与变换编码（MC-DCT）的混合框架，H.261/MPEG-2/H.264 再到 H.265/HEVC、H.266/VVC，迭代的核心始终是同一件事：让编码器在参考帧上做预测，码流只为运动向量与残差付费。
从建模视角看，codec 不只是『压缩器』，它更像一个显式的预测模型：把视频写成「继承的上下文 + 增量观测」。这种分解同时给出两类信号 — 几何位移（motion vectors, MV）与无法解释的外观变化（residual） — 它们是对『世界在这一瞬间发生了什么』最直接的证据。
图 ｜ 典型混合视频编码器的预测闭环：预测 → 残差 → 变换/量化 → 熵编码 → 重建 → 参考帧缓存。
💡 核心信念
Codec 有一种朴素的信仰：能被上下文推出的，不必重复编码；真正值得付费的，是迫使模型修正自身的真实增量。 我们把这套工程语法上升为视觉建模先验 — 让 ViT 以「状态 + 增量观测」的方式读取世界。
Part II ｜ 前情提要：LLaVA-OV-2 站在 OneVision-Encoder 的肩膀上
01 为什么是 codec-native：让『增量观测』成为输入侧的基本单位
自然视频高度冗余：背景、视角与光照的变化通常平滑可预测。传统 dense patch 或均匀采帧把同等计算撒在每个位置、每一帧，token 预算首先被『可预测的背景』消耗。
Codec 的设计恰好相反：I-frame 建立上下文；P-frame 只编码两类增量信号 — 运动向量（对应几何位移）与残差（对应无法预测的外观变化）。它们不是噪声，而是视频在时间轴上真正引入新证据的部分。
OV-Encoder 的取舍很直接：不把 codec 当作『压缩技巧』，而是把它当作『视频结构的显式标注』。当 tokenization 与这套结构对齐，模型学习的对象就从『平均处理像素』变成『在状态之上解释增量』。
图 1a ｜ Predictive Video Structure
图 1b ｜ 自左向右分别为：原始视频、均匀帧采样（常规用法）、运动矢量-残差显著性图、类编解码器风格的块提取
📝 OV-Encoder 一句话总结 ｜ 为 OV-2 准备好的视觉底座
OV-Encoder 在同一多模态评测设置下整体超过 Qwen3-ViT 与 SigLIP2（16 项图像/视频/文档基准），视频理解平均提升约 +4.1%；监督预算仅 100B caption tokens，对比基线则超过 2.1T。更重要的是：它把 Codec 写进了 ViT — LLaVA-OneVision-2 直接复用这套视觉接口作为骨干。
Part III ｜ LLaVA-OneVision-2：核心方法、架构与全面战绩
02 从『单帧 Patch 选择』到『跨时序 Codec-Stream』
OV-Encoder 把 Codec Patchification 引入到单帧粒度。但视频真正的潜力不仅在每一帧选什么 patch，更在跨时序如何切分组 — 码流的比特率脉冲本身就是一种『语义增量』的时间分布信号。LLaVA-OneVision-2 正是把这条路径推到了下一步：让整段视频成为一条连续的比特率证据流。
自适应 GOP 划分
按时间 bin 聚合 P/B 帧字节数；累积比特率达到阈值即触发组边界，再做局部低谷搜索锁定切分。事件密集处形成短组，平稳处形成长组。
运动残差打分
结合稠密运动场 M(x) 与归一化残差 R(x)，并融入 Patch 级比特率先验，对 2×2 Patch 区块进行评分，确保选出的视觉证据既空间相干又编码可靠。
分层时间分配
同一帧内做帧内衰减避免『赢者通吃』，跨帧用累积分配曲线均匀打散 — 保证 P-Canvas 既覆盖完整时间，又突出关键瞬间。
共享 3D RoPE
码流画布、采样帧、静态图像置于统一时空坐标系。无论输入形态如何，连接器与语言模型看到的接口都保持不变。
OV-Encoder 骨干
原生分辨率视觉骨干 + Windowed Attention 直接复用，码流流式输入只改变『证据选择』而不改变『视觉对齐』。
JumpScore 全新基准
面向高频、密集、视觉相似的动作序列，专测『在第几次循环中』的细粒度时间定位 — 现有 Benchmark 普遍欠考察的能力。
03 架构 & 路线图：一种视觉接口，三种证据来源
采样视频、码流视频、原生分辨率图像 — 三种证据形态全部由共享的 OneVision-Encoder 编码为同一套带 3D RoPE 的视觉 Token，再经轻量 MLP 投射到 Qwen3-8B 自回归解码器。码流流式输入只改变『模型看到什么』，不改变『模型如何看』。
图 2 ｜ LLaVA-OneVision-2 整体架构：三种输入统一映射到视觉 Token 接口，并由 Qwen3-8B 解码。
视频 MLLM 视觉表征的五代演化路线
理解 LLaVA-OneVision-2 的最佳方式，是把它放回视频多模态大模型这十年的演化主线里。下面这张路线图概括了视频 MLLM 视觉表征的五代范式 — 我们正站在第四代『码流对齐』到第五代『码流原生』的关键过渡点上。
图 3 ｜ 从早期帧采样、启发式压缩、学习式选择，到 2026 年码流对齐范式的完整演化路线图。
Ⅰ 2018–2021 ｜ 早期探索
稀疏采样 + 手工特征：I3D / C3D / SlowFast / TSN。把视频简化为关键帧 + CNN 特征，易丢关键时刻、长视频效率低、时序建模弱。
Ⅱ 2022–2023 ｜ 启发式压缩
Heuristic Token Compression：H2O / ToMe / DynamicViT / LLaVA-Pruner。靠规则（Top-k / Uniform / Merge）去冗余，信息损失大、Token 分配次优、不感知内容语义。
Ⅲ 2024–2025 ｜ 学习式选择
Learned Token Selection：TokenLearner / Evo-ViT / PruMerge / Smart Token。让网络自己学怎么选 Token，训练复杂度上升、泛化不稳定、Token 总量仍偏高。
Ⅳ ★ 2026 ｜ Codec-Aligned MLLM
LLaVA-OneVision-2（本工作）：Codec-Stream Tokenization — Token 跟随比特率与运动残差对齐，长视频稳定压缩 + 更优时间定位。
Ⅴ 2026+ ｜ Codec-Native 时代
原生码流 Token 作为基础表征，统一理解、生成与世界建模。下一步研究方向：端到端 Codec-Native LLM。
04 让 Token 跟着比特率走，而不是跟着秒表走
与传统『固定 GOP / 等距采帧』方式不同，我们用压缩流的 P/B 帧字节数当作『语义增量』代理：比特率峰值自适应地切分时序组，组内再用运动残差挑出真正发生变化的 2×2 Patch 区块，打包进紧凑的 I/P 画布。事件密集处密 Token，平稳处稀 Token — 这正是视频信息本应有的分布。
Codec-stream Tokenization 的四步流水线
相对 OV-Encoder 仅在单帧内挑选高信息 Patch，LLaVA-OneVision-2 把整段压缩流组织成一条连续的证据流，并通过四个步骤把它转化为语言模型可消费的视觉 Token：
① GOP Partition — 用 P/B 帧的 Packet Energy（字节数）作为「语义增量」代理，事件峰值处自适应触发组边界，事件密集区形成短组、平稳区形成长组；
② Scoring — 在组内把稠密 Motion Energy 与 Residual Energy 融合，再叠加 Patch 级比特率先验，得到逐 Patch 的 Fused Score；
③ Block Selection — 以 2×2 Patch 区块为最小选择单元（与编码器内部的 2×2 Merge 操作对齐），避免下游合并来自不同区域的不相干 Token；
④ Canvas Packing — 每个 GOP 输出一张锚定 I-canvas 和若干 P-canvas，构成 (I + P₁ … Pₙ₋₁) 的紧凑画布序列。
图 4 ｜ Codec-stream Tokenization 的四步流水线：GOP Partition → Scoring → Block Selection → Canvas Packing。
这条流水线把 OV-Encoder 的 single-frame Codec Patchification 升级为 stream-level、bit-cost-aware 的 Token 分配机制 — Token 密度不再由帧号或秒表决定，而是跟着码流真实暴露的『事件强度』分布走。在固定 Token 预算下，码流流式输入相对均匀采帧在时间定位上取得 +9.7 分增益；并支持高达 87.5% 的长视频压缩比（128k → 16k Patch）而不丢关键瞬间。
图 5 ｜ 在 7 类视频基准上，码流流式输入（蓝）与均匀采帧（灰）在不同 Token 预算下的曲线对比。
05 实验结果：18 项视频 / 11 项空间 / 4 项跟踪任务全面领先
与同体量主流模型相比，LLaVA-OneVision-2-8B 在视频任务上平均 +4.3 分、空间任务上 +5.3 分、跟踪任务上 +15.6 J&F；在我们自研的 JumpScore 上更以 74.9 mAP 大幅超过 Qwen3-VL-8B 的 30.1。
图 6 ｜ LLaVA-OneVision-2-8B 与 Qwen3-VL-8B、InternVL-3.5-8B 等主流 8B 模型的综合性能对比。
🏁 JumpScore：让『第几次』变成可量化的能力
JumpScore 专门考察『在多个视觉极度相似的循环中，找出指定序号的那一次』。这是机器人操作、体育分析、医疗复检都急需、却被现有基准长期忽视的能力。LLaVA-OneVision-2-8B 在 JumpScore 上以 74.9 mAP 大幅领先 Qwen3-VL-8B 的 30.1 — +44.8 分的鸿沟，本质上来自『证据是否真的对齐到事件瞬间』。
06 开放数据栈：8M 视频 + 4M 空间 + JumpScore
~8M 重标注视频
覆盖 30s / 60s / 90s / 15mins的多档时间，统一通过码流编码管线再加工。
~4M 空间监督
2D & 3D 空间问答监督，仅在 Stage 4 注入。
JumpScore 基准
面向高频密集动作的时间定位评测，弥补现有 Benchmark 盲区。
四阶段渐进训练
Stage 1 图像 → Stage 2 指令调优 → Stage 3 长视频 → Stage 4 码流 + 空间。
交替输入训练
码流视频 / 均匀采样视频 / 图像 / 拼图按比例混合，保留多模态泛化。
评测协议开源
提供匹配 Token 预算下的公平对比脚本，支持复现 Fixed-GOP vs Stream-Adaptive 全部消融结果。
Closing ｜ Vision
07 把视觉变成世界模型的『证据流』
Codec 有一种朴素的信仰：能被上下文推出的，不必重复编码；真正值得付费的，是迫使模型修正自身的真实增量。
我们希望把这种信仰写成视觉底座的默认语法：将连续世界整理为世界模型可直接消费的证据流 — 可继承的状态、必须解释的偏离、以及它们在时间中的因果链。当证据流稳定，语言不再用来补全感知空洞；世界模型得以用同一套证据完成重构、归因与规划。
OneVision-Encoder 完成了第一步：把 Codec 的预测式结构写进 ViT。LLaVA-OneVision-2 走出了第二步：把整段压缩流当作连续证据流。下一步，我们将继续把这一码流对齐范式推向 流式感知 与 小时级超长视频建模 — 让每一次视觉编码都更靠近真实世界本来的分布。
LLaVA-OneVision-2 · Towards Next-Generation Perceptual Intelligence
Lmms Lab · Glint Lab · AIM for Health Lab · MVP Lab	| 2026-05-20
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向