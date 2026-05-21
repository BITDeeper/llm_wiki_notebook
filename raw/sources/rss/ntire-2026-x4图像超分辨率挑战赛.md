---
title: "NTIRE 2026 x4图像超分辨率挑战赛"
date: 2026-02-07
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/Qkr7DVU0FBtY01e3xMwfzw"
rss_id: "2247655736_1"
---
NTIRE 2026 x4图像超分辨率挑战赛
本次挑战赛隶属于 NTIRE Workshop & Challenges，并将与 CVPR 2026 同期举办。NTIRE（New Trends in Image Restoration and Enhancement）是图像复原与增强领域最具影响力的国际竞赛与研讨会之一，长期推动图像复原算法在统一数据与评测协议下的公平比较与持续进步。
大赛背景
随着计算机视觉的不断发展，单图像超分辨率（Single-Image Super-Resolution，x4）已成为图像复原领域的关键方向之一。
在移动端成像、医学影像、卫星遥感等应用场景中，受限于硬件性能与成像条件，低分辨率图像往往会丢失细节，影响后续分析与实际使用。
本赛道聚焦 4 倍超分辨率重建（x4 SR），鼓励参赛者从低分辨率输入中恢复高分辨率图像的丰富纹理与结构信息，推动算法在真实场景中的可用性与创新性。
大赛介绍
本次挑战赛的目标是开发先进的单图像超分辨率算法，基于示例数据从低分辨率输入中重建高质量的高分辨率图像，尽可能恢复丰富细节与纹理信息。竞赛分为双轨道评估：
恢复质量（Restoration Quality）：以 PSNR 为核心指标，衡量像素级还原精度。
感知质量（Perception Quality）：以 Perception Score 为核心指标，该分数由 6 个感知指标（LPIPS、DISTS、NIQE、ManIQA、MUSIQ、CLIP-IQA）加权得到，用于评估结果的视觉逼真度与观感质量。
大赛阶段
开发阶段：
发布训练集（含输入-输出对）与验证集（仅输入）。参赛者可基于训练集训练模型，并通过验证集进行调试与迭代优化。
测试阶段：
发布最终测试集（仅输入）后，参赛者提交模型输出的超分辨率结果，由组委会统一评估并给出最终排名。
赛程安排
2026.01.29 发布训练数据（输入-输出对）与验证数据（仅输入）
2026.03.10 发布最终测试数据（仅输入）
2026.03.17 测试结果提交截止
2026.03.17 Fact Sheet 及代码/可执行文件提交截止
2026.03.19 向参赛者公布初步测试结果
2026.03.24 挑战赛论文提交截止（Challenge Papers）
2026.06 NTIRE Workshop & Challenges 研讨会与颁奖典礼（CVPR 2026，Denver, CO）
参赛入口
CodaBench 竞赛平台：https://www.codabench.org/competitions/13516/
NTIRE 2026 官网：https://cvlai.net/ntire/2026/
竞赛主页： https://ntire-sr.github.io/2026/
奖励与机会
排名前列的团队将受邀在NTIRE Workshop发表最多8页的论文，收录于CVPR 2025 Workshop论文集。
双轨道独立评奖
：恢复质量与感知质量赛道分别设置奖项，前三名团队可获得挑战赛奖状证书。
赞助商奖励与旅行补助详情请关注NTIRE官网更新。
大赛组织者
陈铮（Shanghai Jiao Tong University）zhengchen.cse@gmail.com
刘楷（Shanghai Jiao Tong University）normal.kliu@gmail.com
王敬锴（Shanghai Jiao Tong University）jingkaiwang100@gmail.com
龚珏（Shanghai Jiao Tong University）g1017325431@gmail.com
李佳桐（Shanghai Jiao Tong University）jiatong.li2024@gmail.com
Radu Timofte（University of Würzburg）Radu.Timofte@uni-wuerzburg.de
张宇伦（Shanghai Jiao Tong University）yulun100@gmail.com
（持续更新）