---
title: "NTIRE2026 遥感红外图像超分辨率挑战赛"
date: 2026-02-08
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/PqiIxEEOU23PZ53T3pNJCw"
rss_id: "2247655763_1"
---
NTIRE2026 遥感红外图像超分辨率挑战赛
苏伊士运河入口影像
本次挑战赛作为 NTIRE 2026 研讨会的重要组成部分，与 CVPR 2026 一同举办，面向全球征集遥感红外图像超分辨率（SR）算法方案。NTIRE（New Trends in Image Restoration and Enhancement）是图像复原与增强领域最具影响力的国际竞赛与研讨会之一。
大赛背景
红外遥感图像由于传感器硬件限制，往往存在空间分辨率偏低的问题，导致小目标、纹理细节以及微弱热异常难以辨识，从而影响目标检测、变化分析等下游任务的准确性。
与可见光不同，红外数据通常包含噪声更强、热辐射与像素强度存在非线性关系等特性，超分辨率不仅要“看起来清晰”，还要尽可能保持热辐射一致性与有效热对比度（不同地表覆盖之间的热差异不能被抹平）。
因此，构建既视觉一致又热学可信的红外 SR 结果，是该赛道的核心挑战。
大赛介绍
数据获取：数据位于比赛页面 “Files” 区域。
开发阶段：
发布训练数据：仅提供 HR 图像（参赛者可自行设计退化过程生成 LR 进行训练）。
发布验证数据：仅提供输入（用于调试与对比）。
测试阶段：发布最终测试数据（仅输入），参赛者提交 SR 重建结果，并提交可复现代码/可执行文件用于最终统一评测。
本赛道采用 PSNR 与 SSIM 作为主要指标，最终得分为：Score = PSNR + 20 * SSIM
赛程安排
2026.01.30 发布训练数据（HR，参赛者可自行退化）与验证数据（仅输入）
2026.03.10 发布最终测试数据（仅输入）
2026.03.17 测试结果提交截止
2026.03.17 Fact Sheet 及代码/可执行文件提交截止
2026.03.19 向参赛者公布初步测试结果
2026.03.24 赛道论文提交截止（挑战赛条目）
2026.06 NTIRE Workshop & Challenges 研讨会与颁奖典礼（CVPR 2026，Denver, CO）
大赛奖励
排名靠前的团队将获奖并受邀在 CVPR 2026 的 NTIRE Workshop 现场展示方案。挑战赛总体结果将发布于 NTIRE 2026 Workshop Proceedings（CVPR Workshops 论文集）。
致谢
特别感谢 星火传明（北京）有限公司（Spark Transmission (Beijing) Co., Ltd.）为本赛道提供宝贵数据支持，其贡献对推动遥感红外超分辨率研究具有重要意义。
参赛入口
CodaBench 竞赛平台：https://www.codabench.org/competitions/13508/
NTIRE 2026 官网：https://cvlai.net/ntire/2026/
竞赛主页：https://gobunu.github.io/ntire_infrared_sr/
大赛组织者
刘楷（Shanghai Jiaotong University）normal.kliu@gmail.com
岳浩洋（Shanghai Jiaotong University）haoyangyue@sjtu.edu.cn
林泽锂（Shanghai Jiaotong University）tszharry@gmail.com
陈铮（Shanghai Jiaotong University）zhengchen.cse@gmail.com
王敬锴（Shanghai Jiaotong University）jingkaiwang100@gmail.com
龚珏（Shanghai Jiao Tong University）g1017325431@gmail.com
李佳桐（Shanghai Jiao Tong University）jiatong.li2024@gmail.com
Radu Timofte（University of Würzburg）Radu.Timofte@uni-wuerzburg.de
张宇伦（Shanghai Jiao Tong University）yulun100@gmail.com
（持续更新）