---
title: "第五届 CVPR DataCV 竞赛重磅来袭！挑战视觉错觉，测试 VLM 的“火眼金睛”！"
date: 2026-02-12
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/-BDRZ9Pc04aPPN8fFtbFZQ"
rss_id: "2247655866_1"
---
大家好！👋
第五届 DataCV 挑战赛（5th DataCV Challenge）
将在
CVPR 2026 DataCV Workshop
期间隆重举办！
随着多模态大模型（LMMs/VLMs）的爆发，虽然它们在许多任务上表现惊人，但它们真的“看”懂了这个世界吗？本次竞赛聚焦于
以数据为中心的 VLM 鲁棒性评估
，特别是针对
视觉错觉（Visual Illusions）
和
感知异常（Perceptual Anomalies）
场景。
如果你对
Prompt Engineering
、
In-Context Learning
感兴趣，或者想看看顶级大模型是否会被人类的“视错觉”骗过，千万不要错过这次机会！🚀
🏆 竞赛背景：眼见一定为实吗？
数据是计算机视觉和多模态 AI 的燃料。目前的 SOTA 系统不仅依赖于强大的架构，更依赖于全面的数据集。然而，社区往往过于关注算法（Algorithm-centric），而忽视了对数据集本身的深入理解（Data-centric）。
本次竞赛的核心目标是：
在不进行任何模型训练或微调（No Training / Fine-tuning）的前提下，通过设计策略提升 VLM 在视觉错觉下的鲁棒性。
我们挑战的是：
冻结的模型（Frozen VLM）+ 聪明的策略（Prompting/ICL）
。
📝 任务概述：两大核心赛道
本次挑战赛分为两个核心任务，旨在全面评估 VLM 的感知能力：
Task I: Classic Illusion Understanding（经典错觉理解）
任务内容
：针对经典的几何光学错觉图片（如艾宾浩斯错觉等），回答二分类问题。
输入形式
：一张错觉图片 + 一个是非题（Yes/No）。
例子：图中两个橙色圆圈的大小一样吗？
目标
：最大化准确率，同时保持对受控视觉变化的敏感度。
核心玩法
：设计高效的 Prompt 或 In-Context Learning (ICL) 策略。
Task II: Real-World Visual Illusions and Anomalies（现实世界错觉与异常）
任务内容
：针对现实场景中的视觉错觉和异常，回答多项选择题。
输入形式
：一张图片 + 一个包含问题及选项（A/B/C/D）的 Prompt。
例子：图中有多少根手指？
目标
：在多样化的错觉场景下选择唯一的正确选项。
核心玩法
：允许设计任何形式的推理策略（只要不训练模型）。
📅 重要日期 (Timeline)
本次比赛时间紧凑，请大家留意以下
AoE (Anywhere on Earth)
时间节点：
验证阶段 (Validation Phase)
：
⏰ 2026年2月6日 - 3月2日
说明：熟悉数据集，进行初步开发。每天最多提交 3 次。
测试阶段 (Test Phase)
：
⏰ 2026年3月3日 - 3月10日
说明：最终决战！仅此阶段成绩计入排名。提交后立即出分。
Workshop 论文投稿截止
：
⏰ 2026年3月4日 (AoE)
🔗 竞赛资源与链接
Codabench 竞赛官网（报名与提交）
：
👉
Task I (Classic Illusion)
: 点击直达 Task 1 比赛页面
👉
Task II (Real-world)
: 点击直达 Task 2 比赛页面
GitHub (代码框架与指南)
：
🛠️
Task I 仓库
: 点击访问 GitHub (Task 1)
🛠️
Task II 仓库
: 点击访问 GitHub (Task 2)
DataCV 2026 Workshop 主页
: 点击访问 Workshop 官网
💡 为什么参加？
CVPR 2026 顶级 Workshop
：获奖团队有机会在 Workshop 上展示成果。
零样本挑战
：无需昂贵的训练算力！比赛禁止训练模型，完全比拼 Prompt 设计和推理策略（CoT, ICL 等），对学生党和资源受限的团队非常友好。
前沿课题
：视觉错觉是目前 VLM 评估中最有趣也最具挑战性的方向之一。
👥 组织团队
本次竞赛由来自
Stanford University, Zhejiang University, Shandong University
等机构的研究者联合组织。
不要错过这个机会！欢迎加入我们，一起探索多模态大模型的认知边界！感谢您的关注与支持，我们期待您的参与！
🚀
如有疑问，请通过邮件联系我们：
datacv2025@gmail.com