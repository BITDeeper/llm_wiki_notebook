---
title: "NTIRE 2026真实场景人脸修复挑战赛"
date: 2026-02-10
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/fJh_eQ6emKPWxltKjTGdAQ"
rss_id: "2247655842_1"
---
NTIRE 2026真实场景人脸修复挑战赛
本次挑战赛作为 NTIRE 2026 研讨会与挑战赛的一部分，与 CVPR 2026 同期举办（美国丹佛 Denver, CO）。NTIRE（New Trends in Image Restoration and Enhancement）是图像复原与增强领域最具影响力的国际赛事与研讨会之一，旨在汇聚学术界与工业界最新进展，并推动开放、公平、可复现的算法比较与交流。
大赛背景
人脸修复（Face Restoration）旨在从真实退化的低质量（LQ）输入中恢复高质量（HQ）人脸图像。LQ 往往受到模糊、噪声、压缩等多种失真影响，使该任务高度不适定。近年来，CNN、Transformer 与生成式模型（如扩散模型）显著提升了修复效果，但在真实世界复杂退化下，实现高感知质量与稳定泛化仍然具有挑战。
人脸修复的重要性不仅体现在观感提升，更直接影响下游任务，包括：人脸识别、关键点检测、3D 人脸重建等；并广泛服务于安全与取证、视频监控、移动/可穿戴设备、社交媒体内容增强等应用场景，因此对“高质量、实时与高效”的方法提出了更高需求。
大赛介绍
质量分数将在验证集/测试集上，对所有修复结果进行加权平均得到。官方说明使用多项无参考（No-Reference）质量指标进行综合评估（文中示例包含：NIQE、CLIP-IQA、ManIQA、MUSIQ、FID、Q-Align 等；具体指标清单与权重以赛道页面为准）。
训练数据：仅提供 HQ 图像；参赛者可自行进行退化生成 LQ 用于训练。
验证数据：仅提供 LQ 输入（用于调试与对比）。
测试数据：仅提供输入，用于最终评测。
公平性要求：请勿使用验证集与测试集进行训练。
大赛奖励
排名靠前的参赛者将获奖，并受邀按照 CVPR Workshop 论文投稿要求撰写方案描述，提交至与 CVPR 2026 同期的 NTIRE Workshop 论文集中。
重要日期
2026.02.02 发布训练数据（仅 HQ，高质量图像；参赛者可自行进行退化生成）与验证数据（仅 LQ，低质量输入）
2026.03.10 发布最终测试数据（仅输入）
2026.03.16 测试结果提交截止
2026.03.18 Fact Sheet 及代码/可执行文件提交截止
2026.03.19 向参赛者公布初步测试结果
2026.03.24 挑战赛论文提交截止
2026.06 NTIRE Workshop & Challenges 研讨会与颁奖典礼（CVPR 2026，Denver, CO）
参赛入口
CodaBench 竞赛平台：https://www.codabench.org/competitions/13507/
NTIRE 2026 官网：https://cvlai.net/ntire/2026/
竞赛主页：https://ntire-face.github.io/2026/
大赛组织者
王敬锴（Shanghai Jiaotong University）jingkaiwang100@gmail.com
龚珏（Shanghai Jiao Tong University）g1017325431@gmail.com
陈铮（Shanghai Jiaotong University）zhengchen.cse@gmail.com
刘楷（Shanghai Jiaotong University）normal.kliu@gmail.com
李佳桐（Shanghai Jiao Tong University）jiatong.li2024@gmail.com
Radu Timofte（University of Würzburg）Radu.Timofte@uni-wuerzburg.de
张宇伦（Shanghai Jiao Tong University）yulun100@gmail.com
（持续更新）