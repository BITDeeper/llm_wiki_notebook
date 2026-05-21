---
title: "CVPR 2026 | 首届4D世界模型生成质量评价挑战赛（PhyScore）正式启动"
date: 2026-03-06
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/xHZAqDEDkZ2wulxkmm_E5Q"
rss_id: "2247656581_1"
---
随着生成式模型的发展，世界模型（World Models）正逐渐成为视频生成和动态场景建模的重要研究方向。从 Sora 到 Gen-3，这类模型已经能够生成视觉质量极高的动态视频内容。然而，一个关键问题仍然存在：
这些生成内容是否真正符合现实世界的物理规律？
当前主流评价指标（如 FID、FVD 等）主要关注视觉质量或统计分布，却难以衡量生成内容在物理合理性、时空一致性以及条件对齐方面的表现。为推动这一问题的系统研究，CVPR 2026 LoViF Workshop 正式发起：
The First Challenge on Holistic Quality Assessment for 4D World Model (PhyScore)
该挑战赛旨在构建一个面向 4D 世界模型生成内容的综合评估基准，重点关注视频生成中的物理一致性与整体质量评估问题。比赛现已在 Codabench 平台开放报名。
01 赛题背景：评估世界模型的物理一致性
随着 3D / 4D 生成模型的发展，研究者不仅希望生成的视频具有良好的视觉质量，还希望其能够体现真实世界的物理规律。例如：（1）物体下落是否符合重力规律，碰撞行为是否合理，水流与烟雾是否具有真实的流体动态, 物体运动过程中是否保持合理的形变与体积。然而，这些问题目前缺乏系统性的自动评估方法。
PhyScore挑战赛旨在推动研究者开发新的 Metric Model 或 Reward Model，用于从多个维度自动评估世界模型生成视频的质量与物理合理性。
02 竞赛任务：多维度综合质量评估
参赛者需要提交模型，对生成视频进行多维度评分。核心评估维度包括：
1. 物理真实性 (Physical Realism)
评估视频中的运动、碰撞、重力与流体行为是否符合基本物理规律，并识别明显的物理异常。
2. 时空一致性 (Spatio-Temporal Consistency)
评估物体在时间和空间变化过程中的连续性与稳定性，例如：是否出现闪烁、是否发生不合理形变、运动轨迹是否连续
3. 条件-视频对齐 (Condition-Video Alignment)
评估生成视频是否准确符合输入条件（例如文本、图像或视频提示）。
4. 视频质量 (Video Quality)
评估清晰度、噪声水平、色彩质量等基础视觉质量指标。
5. 物理异常检测 (Physical Anomaly Detection)
参赛模型需要定位视频中存在物理异常的时间区间，例如：
00:02 – 00:05
用于标记可能违反物理规律的片段。
最终评分公式:
FinalScore=0.3×Anomaly+0.25×Alignment+0.25×Quality+0.2×ConsistencyFinalScore = 0.3 times Anomaly + 0.25 times Alignment + 0.25 times Quality + 0.2 times ConsistencyFinalScore=0.3×Anomaly+0.25×Alignment+0.25×Quality+0.2×Consistency
03 数据集：PhyScore Dataset
本次挑战赛基于 4DWorldBench 构建数据集，覆盖多种世界模型生成的视频场景。
数据规模：
共包含 1,495 个生成视频
模型来源：
覆盖 7 种主流 2D / 4D 世界模型
例如 CamI2V、Diffusion-as-Shader、EX-4D 等
场景类别：
数据集包含 26 个细分场景类别，包括：
物理场景
：动力学、光学、热力学等
非物理场景：
卡通、游戏、电影等复杂视觉内容
输入形式-支持多种生成任务：
Text-to-4D
Image-to-4D
Video-to-4D
04 参赛方式与奖励
参赛报名
比赛已在 Codabench 平台开放：
Codabench：https://www.codabench.org/competitions/13622/
Workshop官网：https://lovif-cvpr2026-workshop.github.io/
重要时间节点（2026）
2月20日：训练集与验证集发布
3月21日：测试集发布（Input Only）
3月23日：结果提交截止
3月23日：FactSheet提交截止 (需要参与Challenge Report的Coauthor团队务必在此之前提交FactSheet包含团队所有成员姓名与Openreview邮箱. 大家如果投稿比赛论文请提前注册投稿3月20号前)
6月：CVPR 2026 Workshop公布结果并颁奖
奖项设置（暂定，具体根据赞助结果具体发放）
一等奖：800美元+证书
二等奖：500美元+证书
三等奖：300美元+证书
Challenge Report：将邀请参与者都参与官方技术报告撰写（发表于CVPR WOrkshop Proceeding）
也邀请相关参赛团队投稿LoViF Workshop
官方证书：由 CVPR Workshop 组委会颁发
05 组织机构
本次挑战赛由 CVPR 2026 LoViF Workshop 主办，联合多家科研机构共同发起。
组织机构：中科大、宁波东方理工、中关村学院、清华大学
联系邮箱：xin.li@ustc.edu.cn