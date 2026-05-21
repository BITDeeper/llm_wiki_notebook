---
title: "CVPR 2026 | 大模型首次攻克矢量动画生成：OmniLottie 用 Lottie Tokenizer 重新定义序列建模边界"
date: 2026-04-13
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/0A2WrOxsMEs2U9Ld1DSxJA"
rss_id: "2247658601_1"
---
TL;DR:
当 AI 视频生成的焦点都聚焦在像素级视频时，一个真正的工业痛点被长期搁置——前端与 UI/UX 设计真正需要的是
轻量、无损、可编辑
的结构化矢量动画。复旦大学提出首个端到端多模态 Lottie 生成大模型
OmniLottie
，通过革命性的
Lottie Tokenizer
实现了惊人的序列压缩，将复杂冗长的 JSON 动画代码生成难题化解于无形。该研究已被 CVPR 2026 接收，代码、模型权重与百万级数据集已全部开源。
论文信息
论文标题：
OmniLottie: Generating Vector Animations via Parameterized Lottie Tokens
论文作者：
Yiying Yang, Wei Cheng, Sijin Chen, Honghao Fu, Xianfang Zeng, Yujun Cai, Gang Yu, Xingjun Ma
作者单位：
复旦大学、阶跃星辰、HKU MMLab, University of Queensland
资源
链接
论文地址
https://arxiv.org/abs/2603.02138
项目主页
https://openvglab.github.io/OmniLottie/
HuggingFace权重
https://huggingface.co/OmniLottie/OmniLottie
代码地址
https://github.com/OpenVGLab/OmniLottie
数据集地址
https://huggingface.co/datasets/OmniLottie/MMLottie-2M
Benchmark地址
https://huggingface.co/datasets/OmniLottie/MMLottieBench
在线Demo
https://huggingface.co/spaces/OmniLottie/OmniLottie
为什么像素视频在前端开发中"水土不服"？
在真实的 Web、移动端及智能设备开发链路中，像素视频存在致命缺陷：
体积庞大
占用高昂带宽、
缩放失真
模糊、且宛如"黑盒"
无法通过代码进行元素级的编辑与交互绑定
。
由 Airbnb 开源的
Lottie
格式，凭借其基于 JSON 的轻量级矢量特性，早已成为工业界前端动画的"事实标准"。但让大模型直接生成原生 Lottie？这极具挑战——Lottie 本质上是高度嵌套、逻辑严密、包含复杂贝塞尔曲线和时间轴控制的冗长 JSON 代码。直接让 LLM 学习输出这些代码，极易导致
上下文崩溃
与严重的
语法幻觉
。
核心创新：Lottie Tokenizer: 序列建模的"降维打击"
OmniLottie 没有选择在原始 JSON 上硬磕，而是从
底层表征
入手，创新性地提出了
Lottie Tokenizer
。这是该研究最具启发性的范式突破：
🎯 极简指令映射：
将 Lottie 中冗余的层级结构和形状属性，抽象重构成高度紧凑的参数化 Token 序列
⚡ 超级压缩：
相比原始 JSON，Token 序列长度实现数量级的压缩，极大降低模型的自回归计算负担
🔒 零损耗保真：
压缩过程通过数学建模完美保留动画的核心控制点与时间轴关键帧
借助这一底层表征革命，OmniLottie 成功将
复杂的矢量图形生成问题
，转化为
高效的大模型序列预测问题
。
OmniLottie-pipeline
三大模态，覆盖真实开发全场景
OmniLottie 直接打通了真实开发流中的三种核心场景：
模态
能力
Text-to-Lottie
自然语言 Prompt 直接输出轻量级动态 UI 组件
Image+Text-to-Lottie
注入静态图像，自动拆解图层并赋予矢量化生命力
Video-to-Lottie
像素视频反向重建为可编辑 Lottie，资产"瘦身器"
OmniLottie 主要演示:
基础设施：MMLottie-2M——矢量动画的"ImageNet 时刻"
制约矢量动画生成的另一大痛点是"数据荒"。OmniLottie 团队开源了目前业界规模最大的
MMLottie-2M 数据集
，包含百万量级高质量矢量动画，并建立了严谨的数据处理 Pipeline 与评估基准
MMLottieBench
。
MMLottie-2M 数据处理流程
总结：从算力依赖到端侧轻量化
OmniLottie 证明了"
高效参数化表征 + 多模态大模型
"是攻克复杂结构化代码生成的有效路径。生成的 KB 级矢量资产天然契合未来 AI 向边缘侧转移的趋势。这不仅是 UI/UX 设计工程的效率革命，更为端侧轻量化 AI 生成闭环点燃了第一支火炬。
OmniLottie-t2lottie
OmniLottie-ti2lottie
OmniLottie-v2lottie
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向