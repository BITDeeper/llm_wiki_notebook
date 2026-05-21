---
title: "EgoCross @EgoVis, CVPR26 | 跨域第一人称视频问答挑战赛，等你冲榜！"
date: 2026-02-28
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/JOCwbmQ_W_f2IhxfYTvwig"
rss_id: "2247656283_1"
---
EgoVis（Joint Egocentric Vision Workshop）
是近年来全球第一视角视觉（Egocentric Vision）领域最具影响力的学术活动之一，已连续三年在 CVPR 期间联合举办，汇聚了来自全球顶级高校与研究机构的前沿成果与创新思想。作为连接第一视角理解、具身智能与多模态学习的重要平台，EgoVis 持续推动 egocentric 视频理解、ego-exo 关系建模、具身决策等方向的发展。
依托
CVPR 2026 EgoVis Workshop
，我们重磅推出
EgoCross （Cross-Domain Egocentric Video QA）挑战赛
，旨在推动多模态大语言模型（MLLMs）在跨域第一视角视频问答中的泛化能力与推理能力。本次挑战赛为全球研究者提供了一个高标准、开放式的评测平台，鼓励探索更具鲁棒性与可迁移性的模型方法。本次挑战赛现已正式面向全球研究者开启报名！如果你致力于多模态大语言模型（MLLMs）、视频问答（VideoQA）或是第一人称视角（Egocentric Vision）智能的研究，诚邀关注并参与本次竞赛，共同推动第一人称智能理解的前沿发展。
大赛背景
当前的多模态大模型在日常场景的视频理解上已经取得了显著进展，但当它们面对未知、复杂、高度专业化的真实世界场景时，往往会面临严重的泛化瓶颈。
为了探索和突破这一极限，我们推出了
EgoCross Benchmark (AAAI 2026)
。不同于以往局限于“炒菜”、“做家务”等日常数据集，EgoCross 聚焦于
高难度跨领域
的第一视角视频，旨在全面评估模型在不同视觉和语义条件下的鲁棒性与零样本/少样本泛化能力。
二、 大赛任务介绍
任务描述
：给定一段来自全新领域的第一视角视频，参赛模型需要针对给定的问题，从 4 个选项中准确推理并选择正确答案（Multiple-choice VideoQA）。
为了全面考验模型的跨领域适应力，本次挑战赛精选了四大特色领域：
外科手术 (Surgery)
：要求精细的器械识别、手术阶段理解与手部交互推理。
工业装配 (Industry)
：侧重零部件识别、操作流程推理与工具使用逻辑。
极限运动 (Extreme Sports)
：包含高速第一视角运动、导航线索与时序预测。
动物视角 (Animal Perspective)
：涵盖物种线索、非人类运动模式与行为理解。
数据集共包含 798 个视频片段和 957 个 QA 对，全面覆盖识别、定位、预测和计数总共4大类任务的 15 个子任务。具体任务定义可参考论文。
三、 双赛道设置，满足不同研究需求
本次挑战赛在 Codabench 平台分为两个赛道，参赛团队可根据自身的研究方向和计算资源选择参与：
赛道一：受限资源赛道 (Source-Limited Track)
规则
：参赛者仅能使用官方提供的基线模型和极少量的支持集（Support Set）进行微调或引导。
核心目标
：测试跨域泛化能力并比较不同微调方法的效果。
评测入口
：https://www.codabench.org/competitions/11279/
赛道二：开源赛道 (Open-Source Track)
规则
：对基础模型没有任何限制（鼓励使用各类开源或商业闭源模型进行测试），允许使用额外的训练数据（前提是不能人为针对目标领域进行特殊构造）。
核心目标
：鼓励创新地利用更强大模型或算法提升跨域泛化能力。
评测入口
：https://www.codabench.org/competitions/13868/
(注：当前官方提供的 SFT-Qwen3VL 基线模型在四大领域的平均准确率仅为 0.4608，仍有巨大的提升空间等待各位研究者来突破！)
四、评测平台及指标
竞赛平台：
挑战赛将在
Codabench
平台进行，两个赛道分别对应独立评测页面。
评测指标：
模型在测试集上的
Multiple-choice VideoQA 准确率（Accuracy）
作为主要排名依据（最终排名与评奖细则以各赛道官方页面说明为准）。
说明：
成绩优异的团队将受邀按照
EgoVis Workshop
的投稿要求提交技术报告，并有机会在
CVPR 2026 Workshop
展示研究成果。
五、 数据&基线
为了让参赛者能够无缝切入研发，组委会已开源全套流程代码与数据集：
官方主页
：EgoCross Benchmark 官网 （https://egocross-benchmark.github.io/）
会议信息
：CVPR 2026 EgoVis Workshop 主页 （https://egovis.github.io/cvpr26/#）
评测推理代码
：EgoCrossCodes (GitHub) （https://github.com/MyUniverse0726/EgoCross）
训练微调代码
：基于 Qwen3VL-4B 的 EgoCross_SFT_qwen3vl4b (https://github.com/LiYu0524/EgoCross_SFT_qwen3vl4b)
六、 重要日程 (太平洋时间 PT)
评测榜单状态
：现已开放
评测榜单截止
：2026 年 5 月 13 日
技术报告提交截止
：2026 年 5 月 20 日
获奖通知
：2026 年 5 月 27 日
CVPR 研讨会时间
：2026 年 6 月 3 日 - 4 日
七、组织者团队
八、 报名与咨询
欢迎各大高校实验室、研究机构及企业团队踊跃报名！点击下方链接或访问官网，立即组建战队向榜单发起冲击。
https://egocross-benchmark.github.io/