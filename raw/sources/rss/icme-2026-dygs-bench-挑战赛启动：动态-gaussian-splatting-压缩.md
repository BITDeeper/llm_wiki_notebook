---
title: "ICME 2026 DyGS-Bench 挑战赛启动：动态 Gaussian Splatting 压缩"
date: 2026-02-09
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/2BEHBSUjzuSjdSltiUd7Vw"
rss_id: "2247655805_1"
---
🚀 Attention 各位三维视觉与沉浸式媒体方向的同学注意啦！
当 VR、AR、MR、XR 等沉浸式视觉技术不断迈向更高真实感、更大场景规模与更强实时交互能力，你是否思考过：
👉 这些高质量动态三维场景，究竟如何才能被高效存储、传输与实时渲染？
近年来，3D Gaussian Splatting（3DGS） 凭借高质量视角合成、极快的光栅化速度以及对 GPU 管线的良好兼容性，迅速成为实时神经渲染与自由视角视频的核心表示形式。然而，3DGS 通过成千上万甚至数百万个高斯基元显式建模场景，这也直接带来了巨大的存储、显存与传输开销，严重制约了其在 云端 XR、边缘渲染、多用户远程协作与沉浸式通信 等真实应用场景中的落地。
更具挑战的是，当场景随时间发生变化，例如人体运动、相机移动或复杂动态交互时，问题会进一步升级。
👉 动态 Gaussian Splatting 的压缩与编码问题，至今仍缺乏统一的数据集、评测协议与公开基准。
为此，ICME 2026 正式推出 Dynamic Gaussian Splatting Compression Grand Challenge（DyGSCBench），旨在填补这一关键空白，推动动态三维场景压缩研究迈向系统化、标准化与可复现的新阶段。
🧩 大赛简介
本次 ICME 2026 Dynamic Gaussian Splatting Compression Grand Challenge 是首个面向动态 Gaussian Splatting 压缩与编码的系统性国际挑战赛。赛事将：
构建一个 高质量、时间一致、几何细节丰富的动态Gaussian Spaltting数据集
覆盖 室内、室外、人体等多种复杂动态场景
每一帧以 原生 3DGS PLY 文件 形式提供，完整包含
高斯中心位置
尺度与旋转
不透明度
球谐（SH）外观系数
同步提供逐帧相机参数（JSON），支持真实渲染与序列级评测
官方同时提供统一的LightGaussian基线压缩框架，集成高斯裁剪、SH 蒸馏与向量量化等关键模块，帮助参赛者快速上手，并确保方法间的公平比较。
📊 评测机制
所有结果将在Kaggle平台上进行统一评测，由服务器端完成解码与渲染，确保公平性与可复现性。评测内容包括：
重建精度：PSNR、SSIM、tOF
压缩收益：Size/Frame，平均每帧压缩后文件大小
可复现性要求：提交完整代码与模型的方法可参与最终评奖
⚠️ 所有学习型方法需基于 PyTorch 实现。
📅 重要时间节点（UTC）
2026 年 2 月 5 日：阶段一测试集发布，榜单开启（每日最多 5 次提交）
2026 年 4 月 1 日：阶段二测试集发布，榜单开启（每日最多 3 次提交）
2026 年 4 月 25 日：榜单关闭，Top 10 团队进入本地验证
2026 年 5 月 1 日：公布最终结果，Top 团队提交技术报告
🏆 奖励与影响力
本挑战赛为ICME 2026官方 Grand Challenge
成绩优异的参赛团队将获得ICME官方认可，并有机会受邀在ICME 2026会议现场进行挑战赛成果报告，向国际学术界与工业界展示其研究方法与技术亮点
表现突出的方案将被重点关注，并为后续动态三维场景压缩与沉浸式媒体标准化研究 提供重要参考
👥 赛事组织者
本次挑战赛由鹏城实验室与北京大学联合组织，团队长期从事三维场景建模、神经渲染、沉浸式媒体压缩与国际标准制定相关研究。
📌 官方资料与平台
DyGSCBench 官方网站：https://guagod.github.io/ICME_grandChallenge/
Kaggle 评测平台：https://www.kaggle.com/competitions/dy-gs-bench-dynamic-3-dgs-compression-icme-2026-grand-challenge