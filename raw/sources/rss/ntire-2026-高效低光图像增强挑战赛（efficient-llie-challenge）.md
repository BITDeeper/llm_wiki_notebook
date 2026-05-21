---
title: "NTIRE 2026 高效低光图像增强挑战赛（Efficient LLIE Challenge）"
date: 2026-02-05
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/Je2e-eIa8Ry5dOMkw8NykA"
rss_id: "2247655629_1"
---
NTIRE 2026 高效低光图像增强挑战赛（Efficient LLIE Challenge）
—— 探索轻量、高效、实用的低光照视觉解决方案
🌟 赛事简介
在真实世界中，低光照环境下的图像普遍存在亮度不足、噪声严重、细节丢失等问题，严重制约了安防监控、自动驾驶、移动摄影等关键应用的性能。
为推动
高效、轻量、可部署
的低光图像增强技术发展，
NTIRE 2026
特设
“高效低光图像增强挑战赛”（Efficient Low-Light Image Enhancement, Efficient LLIE）
赛道。
❝
我们的目标
：寻找在保证高质量增强效果的同时，模型体积 ≤1MB、计算开销极低的创新方法，真正迈向
实用化与落地化
。
本赛事由国际顶级图像处理与计算机视觉社区组织，成果将收录于
CVPR 2026 Workshop
，并有机会在学术界与工业界产生广泛影响。
🎯 核心挑战
质量与效率的平衡
：如何在极小模型（≤1MB）约束下，实现媲美大模型的增强效果？
真实场景泛化能力
：算法需在多样、复杂的低光测试图像上保持鲁棒性。
端到端可复现性
：提交的模型与代码必须能被组委会完整复现结果。
📊 评估机制
🔍 验证阶段（CodaBench 在线平台）
支持多次提交，即时反馈
SSIM
与
LPIPS
分数；
仅用于调试，
不计入最终排名
；
首次提交可能较慢或超时，请耐心重试或查看日志。
🏆 最终测试阶段（组委会离线评测）
唯一决定官方排名的环节
；
采用
六大指标综合评估
：
有参考指标
：SSIM、LPIPS、DISTS
无参考指标
：LIQE、MUSIQ、Q-Align
硬性资格要求
：提交的模型文件
必须 ≤1 MB
（如
.pth
,
.onnx
等），超限者
直接取消评奖资格
。
📥 提交要求（最终阶段）
参赛团队需通过邮件或指定 Google 表单提交以下材料：
增强后的测试图像（严格匹配原始文件名，ZIP 根目录存放）；
训练好的模型文件（≤1 MB）
；
可运行的最小推理代码；
方法简要说明（鼓励提交，非强制）。
❝
✅ 所有提交将由组委会本地验证：
可复现性 + 模型大小合规性 + 格式正确性
。仅合规方案进入最终评分。
📅 重要时间节点（敬请关注官网更新）
训练/验证数据发布，验证阶段启动：2026 年 1 月 28 日 - 2026 年 3 月 8 日
测试数据发布 & 最终提交截止：2026 年 3 月 10 日 - 2026 年 3 月 16 日
官方排行榜公布：2026 年 3 月下旬
❝
💡
立即准备！轻量模型设计、高效网络架构、知识蒸馏、量化感知训练等技术将迎来大展身手的舞台！
👥 组织团队
Jiebin Yan (Jiangxi University of Finance and Economics, yanjiebin[at]jxufe.edu.cn)
Chenyu Tu (Jiangxi University of Finance and Economics, 2202420256[at]stu.jxufe.edu.cn)
Weixia Zhang (Shanghai Jiao Tong University, zwx8981[at]sjtu.edu.cn)
Zhihua Wang (Sun Yat-sen University, zhihua.wang[at]my.cityu.edu.hk)
Peibei Cao (Nanjing University of Information Science and Technology, cpb[at]nuist.edu.cn)
Qinghua Lin (Guangdong University of Technology, dear.muhua[at]gmail.com)
Yuming Fang (Jiangxi University of Finance and Economics, fa0001ng[at]e.ntu.edu.sg)
Xiaoning Liu (University of Electronic Science and Technology of China, liuxiaoning2016[at]sina.com)
Zongwei Wu (University of Wurzburg, zongwei.wu[at]uni-wuerzburg.de)
Zhuyun Zhou (University of Wurzburg, zhuyun.zhou[at]uni-wuerzburg.de)
Radu Timofte (University of Wurzburg, radu.timofte[at]uni-wuerzburg.de)
他们是本次挑战赛的
直接负责人与联系人
，欢迎技术咨询与合作！
🔗 更多信息
官方 CodaBench 页面：[https://www.codabench.org/competitions/13382/]
NTIRE2026赛事官网：[https://cvlai.net/ntire/2026/]
加入我们，用一行代码点亮黑暗，用1MB模型改变视界！
NTIRE 2026 Efficient LLIE —— 小模型，大视野！