---
title: "NTIRE 2026高效超分辨挑战赛正式开赛|验证平台已上线"
date: 2026-02-14
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/BHpEN0D7wnEM-ZPjkSKMmA"
rss_id: "2247655876_1"
---
比赛背景
随着图像处理技术的快速发展，超分辨率技术已成为图像恢复领域中的一个重要研究方向，特别是在卫星成像、医疗影像分析以及消费级摄影等应用中具有广泛的应用前景。
尽管取得了许多进展，但如何在保持计算效率的同时提高图像质量，仍然是一个重大挑战。因此，我们联合NTIRE研讨会举办这次关于高效超分辨率的挑战赛，旨在推动该领域技术的进步和创新。通过这个平台，我们鼓励全球研究者和开发者利用最新的机器学习和图像处理技术，探索如何更高效地实现图像的超分辨率。
此次比赛不仅提供了一个技术交流的场所，也是检验各种超分辨率算法性能的实战平台，我们希望这次挑战能够激发更多的创新思路，推动超分辨率技术在实际应用中的广泛应用和发展。
比赛介绍
我们联合NTIRE研讨会举办一个旨在探索高效超分辨率技术的挑战赛。这个挑战的核心任务是通过应用先进的图像处理技术，将输入的低分辨率图像的分辨率提高四倍，达到更高的清晰度。
参赛者需要利用一组预先提供的图像对，这些对包括原始的低分辨率图像及其相应的高分辨率版本，以此来训练和测试他们的超分辨率模型。
这一挑战旨在推动超分辨率技术的研究与发展，提升图像处理领域的技术水平。
赛道简介
🏆 主赛道：
总体性能（运行时间、参数、FLOPs）目标是在常见的GPU（即NVIDIA RTX A6000 GPU）上获得在推理运行时间、FLOPs和参数方面具有最佳总体性能的网络设计/解决方案，同时需要保持或提高PSNR结果的阈值。
💎 子赛道1：
推理运行时间，目标是在常见的GPU（即NVIDIA RTX A6000 GPU）上获得推理时间（运行时间）最短的网络设计/解决方案，同时在参数数量、FLOPs和PSNR结果阈值方面保持或优于基线方法EFDN。
💎 子赛道2：
FLOPs，目标是在常见的GPU（即NVIDIA RTX A6000 GPU）上获得FLOPs最少的网络设计/解决方案，同时需要保持或提升推理运行时间、参数和PSNR结果的阈值。
💎 子赛道3：
参数，目标是在常见的GPU（即NVIDIA RTX A6000 GPU）上获得参数数量最少的网络设计/解决方案，同时需要保持FLOPs、推理时间（运行时间）和PSNR结果的阈值。
比赛官网：
NTIRE官网：https://cvlai.net/ntire/2026/
高效超分辨Github仓库：https://github.com/Amazingren/NTIRE2026_ESR
CodaBench网站： https://www.codabench.org/competitions/13553/
赛程安排（以官网信息为准）：
2026.02.06：发布训练数据（输入与输出）及验证数据（仅提供输入）
2026.02.07：验证服务器上线
2026.03.10：发布最终测试数据（仅提供输入），验证服务器关闭
2026.03.17：测试结果提交截止日期/Fact Sheet 及代码 / 可执行文件提交截止日期
2026.03.19：向参赛者公布初步测试结果
2026.03.24：挑战赛参赛论文提交截止日期
2026.06：NTIRE Workshop挑战赛举办、结果公布及颁奖仪式（CVPR 2026，美国丹佛）
比赛要求：
本次挑战赛面向全社会开放，个人、高等院校、科研单位、企业等人员均可报名参赛。每位参赛者只能加入1支队伍，每支队伍最多不超过6人，每支队伍只能提交一种算法进行最终排名。
比赛奖励
发表论文是可选的，不会成为参加挑战赛或获奖的条件。本次挑战赛将邀请排名靠前的参赛者向NTIRE Workshop提交最多8页的论文，以供同行评审。论文录用后将发表在CVPR 2026 Workshop论文集中。
排名最高的参赛者和为比赛贡献新颖方法的参赛者将被邀请成为挑战赛报告论文的共同作者，该论文将在CVPR 2026 Workshop集中发表。
本次比赛的赞助商详见NTIRE 2026官网，如有额外的经济奖励和旅行补助将由NTIRE官方统一提供和发放。
比赛组织者
Bin Ren, MBZUAI, UAE (bin.ren@mbzuai.ac.ae)
Hang Guo, Tsinghua University, China (cshguo@gmail.com)
Yan Shu, UNITN, Italy (yan.shu@unitn.it)
Jiaqi Ma, MBZUAI, UAE (jiaqi.ma@mbzuai.ac.ae)
Guofeng Mei, FBK, Italy (gmei@fbk.eu)
Lei Sun, INSAIT, BG (lei.sun@insait.ai)
Zongwei Wu, University of Wuerzburg, Germany (zongwei.wu@uni-wuerzburg.de)
Salman Khan, MBZUAI, UAE (salman.khan@mbzuai.ac.ae)
Fahad Shahbaz Khan, MBZUAI, UAE (fahad.khan@mbzuai.ac.ae)
Radu Timofte, University of Wuerzburg, Germany (radu.timofte@uni-wuerzburg.de)
Yawei Li, ETH Zurich, Switzerland (li.yawei.ai@gmail.com)