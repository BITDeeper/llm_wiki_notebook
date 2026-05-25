---
title: "ICML 2026 Spotlight 面向点监督红外小目标检测的双层样本重平衡与伪标签扩散方法"
date: 2026-05-23
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/66FSLsKBHYHw3DbWcoKghg"
rss_id: "2247660201_1"
---
近日，大连理工大学软件学院团队在红外小目标检测方向取得新进展，相关论文 “Diffuse to Detect: Bi-Level Sample Rebalancing with Pseudo-Label Diffusion for Point-Supervised Infrared Small-Target Detection” 被 ICML 2026 接收，并入选 Spotlight 论文。
该工作面向低标注、弱信号、高杂波红外感知场景，提出融合热扩散物理先验与双层优化反馈的点监督学习框架，在降低标注成本的同时提升伪标签稳定性、样本利用效率与检测泛化能力。
文章地址：http://arxiv.org/abs/2605.20766
代码地址: https://github.com/yuanhang-yao/diffuse-to-detect
一、问题背景：从“密集标注依赖”到“点监督可扩展学习”
红外小目标检测是红外搜索与跟踪、远距离预警、海上监测、无人系统感知等任务中的基础问题 [1–3]。与常规目标检测不同，红外小目标通常呈现尺寸极小、纹理缺失、边界模糊和信噪比低等特点，在图像中往往仅占极少像素区域，极易被复杂背景、强杂波和传感器噪声淹没。
近年来，深度学习方法显著推动了红外小目标检测的发展，但性能提升通常建立在高质量像素级密集标注之上。由于红外目标边界缺乏明确视觉轮廓，人工标注不仅成本高，而且容易引入主观偏差。点监督通过仅标注目标中心点，显著降低了标注负担，为大规模红外小目标数据构建提供了更具可扩展性的方案 [4–6]。
然而，点监督红外小目标检测仍面临两个紧密耦合的挑战。一方面，单点标注无法直接提供目标区域边界，伪标签生成过程容易在复杂背景中出现过度扩张、目标遗漏或背景误检。另一方面，现有红外小目标数据集规模有限且样本分布高度不均衡，少量困难样本往往决定模型泛化上限，但传统训练策略难以对其进行有效建模。
二、核心思想：用热扩散生成伪标签，用双层优化校正训练动态
针对上述问题，本文提出 Diffuse to Detect。其核心不是单独生成伪标签，而是构建“物理伪标签生成—检测网络训练—验证反馈校正”的闭环：从红外目标的热辐射物理特性出发，将单点标注建模为局部热源，并利用热扩散过程刻画目标能量在空间中的传播规律 [7]。与依赖启发式区域扩张或图像聚类的伪标签生成方式不同，该方法将红外成像中的热传播先验显式引入标注构造过程，使生成的伪掩膜更贴合目标真实热响应区域；同时通过双层优化反馈持续校正样本权重与扩散参数，使监督信号随检测网络训练状态动态演化。
三、方法框架：双层双更新的闭环学习机制
在优化层面，本文进一步提出双层双更新框架，将检测网络训练、样本重平衡和伪标签修正统一到一个闭环优化过程之中。下层优化负责基于当前伪标签和样本权重更新检测网络参数；上层优化则基于验证反馈自适应调整样本权重与扩散伪标签参数。由此，伪标签不再是训练前一次性生成的静态监督信号，而是能够随着模型训练状态不断校正的动态变量。
为了缓解样本分布不均衡问题，本文设计了一个元分类器，用于预测样本级损失权重。该模块能够根据样本响应与训练动态自动识别更具学习价值的困难样本，并赋予其更高训练权重。对于数量庞大但信息冗余的简单样本，模型则自动降低其贡献，从而避免训练过程被常见样本主导。
与此同时，本文将伪标签扩散过程设计为可微模块，使扩散参数能够在双层优化框架中接受检测反馈并进行自适应更新。该设计建立了从检测结果到标注质量的反向调节机制，使监督信号能够根据任务目标持续优化，从而减少噪声伪标签对模型训练的累积影响。
从方法论角度看，本文的关键贡献并不只是提出一种新的点监督标注生成策略，而是将红外物理机理、样本分布建模与双层优化反馈统一起来。热扩散先验提升了伪标签构造的物理合理性，元学习样本重平衡提升了训练过程的分布适应性，双层双更新机制进一步增强了模型训练与监督演化之间的协同性。
四、实验验证：跨数据集、跨网络的稳定增益
实验部分，作者在 SIRST3、SIRST-v1、NUDT-SIRST、IRSTD-1k 等多个红外小目标检测数据集上进行了系统验证，并在 ALCLNet、DNANet、ISNet、UIUNet、GGLNet、MSDANet 等多种检测网络上评估了方法的通用性。实验结果表明，本文方法在多种 backbone 和多个数据集上均稳定优于现有点监督方法，包括 LESPS、MCLC 和 PAL 等代表性工作 [4–6]。
在复杂背景场景中，本文方法能够更准确地区分弱小目标与背景杂波，有效减少漏检和误检。在低信噪比、多目标、边界模糊等挑战性样本中，方法生成的伪标签具有更好的目标完整性和边界一致性，检测结果也表现出更强的稳定性。
五、消融与数据效率：不仅提升精度，也筛选高价值样本
消融实验进一步验证了各模块的有效性。仅使用原始点监督会导致性能显著下降；单独使用扩散或超像素先验虽能提升伪标签质量，但仍难以充分解决训练动态中的不稳定问题；移除样本重平衡、在线标签更新或动态聚合机制都会造成性能退化。这表明，高质量伪标签生成与稳定的双层优化过程缺一不可。
值得关注的是，本文学习到的样本权重不仅能够提升训练效果，还可以作为数据选择依据。实验表明，仅使用由样本权重筛选出的约 30% 高价值训练样本，模型即可达到甚至超过部分基线方法使用完整数据训练的性能。这说明双层样本重平衡机制不仅缓解了长尾分布问题，也为低成本数据构建和高效模型训练提供了新的路径。
六、伪标签生成效率：面向训练闭环的轻量化扩散标注
在伪标签生成效率方面，本文方法同样展现出显著优势。与 COM、MCLC [5]、SAM [8]、SAM2 [9] 等方法相比，物理诱导扩散标注在伪掩膜质量和计算效率之间取得了更优平衡。实验结果显示，该方法能够在 CPU 上快速完成伪掩膜生成，并相较 MCLC 实现约 5 倍加速。这一轻量化特性使其能够被有效嵌入双层优化训练闭环，而不会带来过高计算负担。
七、总结：面向低标注红外感知的物理—优化融合范式
总体而言，Diffuse to Detect 针对点监督红外小目标检测中的伪标签构造与样本分布失衡问题，提出了一种兼具物理可解释性、优化自适应性和实际部署效率的学习框架。该工作表明，在低标注、弱信号、高杂波的红外感知场景中，将物理先验与双层优化机制相结合，可以有效提升模型对困难样本和复杂背景的建模能力。
该研究为低成本红外感知系统构建提供了新的技术范式，也为点监督学习、物理先验建模和任务反馈驱动优化在视觉感知中的融合提供了有价值的探索。
论文信息
Title: Diffuse to Detect: Bi-Level Sample Rebalancing with Pseudo-Label Diffusion for Point-Supervised Infrared Small-Target Detection
Authors: Zhu Liu, Yuanhang Yao, Ping Qian, Zihang Chen, Risheng Liu
Affiliation: School of Software Technology, Dalian University of Technology
Conference: International Conference on Machine Learning (ICML), 2026
Code: https://github.com/yuanhang-yao/diffuse-to-detect
参考文献（精选）
[1] Dai, Y., Wu, Y., Zhou, F., and Barnard, K. Asymmetric contextual modulation for infrared small target detection. WACV, 2021.
[2] Li, B., Xiao, C., Wang, L., Wang, Y., Lin, Z., Li, M., An, W., and Guo, Y. Dense nested attention network for infrared small target detection. IEEE Transactions on Image Processing, 2023.
[3] Zhang, M., Zhang, R., Yang, Y., Bai, H., Zhang, J., and Guo, J. ISNet: Shape matters for infrared small target detection. CVPR, 2022.
[4] Ying, X., Liu, L., Wang, Y., Li, R., Chen, N., Lin, Z., Sheng, W., and Zhou, S. Mapping degeneration meets label evolution: Learning infrared small target detection with single point supervision. CVPR, 2023.
[5] Li, B., Wang, Y., Wang, L., Zhang, F., Liu, T., Lin, Z., An, W., and Guo, Y. Monte Carlo linear clustering with single-point supervision is enough for infrared small target detection. ICCV, 2023.
[6] Yu, C., Zhao, J., Liu, Y., Zhao, S., Dai, Y., and Yue, X. From easy to hard: Progressive active learning framework for infrared small target detection with single point supervision. ICCV, 2025.
[7] Bao, F., Wang, X., Sureshbabu, S. H., Sreekumar, G., Yang, L., Aggarwal, V., Boddeti, V. N., and Jacob, Z. Heat-assisted detection and ranging. Nature, 2023.
[8] Kirillov, A. et al. Segment Anything. arXiv:2304.02643, 2023.
[9] Ravi, N. et al. SAM 2: Segment Anything in Images and Videos. 2025.
入群加好友(v:xiao-ma-baoli)，请备注你感兴趣的技术方向