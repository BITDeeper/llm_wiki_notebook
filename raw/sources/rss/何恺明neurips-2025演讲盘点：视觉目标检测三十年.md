---
title: "何恺明NeurIPS 2025演讲盘点：视觉目标检测三十年"
date: 2025-12-11
source: "机器之心"
url: "https://mp.weixin.qq.com/s/pIDb-DDfSB2MBWCh_vn7MA"
rss_id: "2651006633_2"
---
机器之心报道
机器之心编辑部
不久前，NeurIPS 2025 顺利举办，作为人工智能学术界的顶级会议之一，其中不乏学术界大佬的工作和演讲。
有一项荣誉的颁发显得格外厚重且众望所归 —— 由任少卿、何恺明、Ross Girshick 和孙剑合著的经典论文
《Faster R-CNN》
，摘得了
「时间检验奖」 (Test of Time Award)
。
凡是接触过计算机视觉的人，对这个名字绝不陌生。自 2015 年发表以来，《Faster R-CNN》无疑成为了该领域最具里程碑意义的工作之一。它不仅一举奠定了现代目标检测框架的核心范式，更像是一座灯塔，深刻影响并指引了随后整整十年的视觉模型发展方向。
论文地址：https://arxiv.org/pdf/1506.01497
作为这一历史性时刻的见证与总结，何恺明在大会上发表了题为
《视觉目标检测
简史》 (A Brief History of
Visual Object Detection)
的演讲。
何恺明演讲 PPT 已经公开，可以参阅以下链接：
https://people.csail.mit.edu/kaiming/neurips2025talk/neurips2025_fasterrcnn_kaiming.pdf
从何恺明的演讲内容来看，这不单是一个技术汇报，更像是一部计算机如何学会「看世界」的英雄史诗，总结了 30 年来视觉目标检测的发展历程。演讲中介绍的每一个工作，都获得了不同顶会的时间检验奖，对视觉智能的发展起到了决定性的作用。
你是否好奇：为什么现在的 AI 能在一瞬间识别出照片里的猫、狗、汽车甚至它们的位置，而在十几年前这却被认为是几乎不可能的任务？
让我们跟随大神的视角，穿越回那个「原始」的时代，看看这一路是如何走来的。
原始：手工打磨的「放大镜」
在深度学习爆发之前，计算机视觉科学家们更像是「工匠」。
人脸检测的早期尝试
： 早在 90 年代，科学家们就开始尝试用神经网络和统计学方法找人脸：
1996 年： Rowley 等人发表了
《基于神经网络的人脸检测》
(Neural Network-Based Face Detection) ，这是何恺明阅读的第一篇 CV 论文，利用早期的神经网络在图像金字塔上寻找面孔 。
1997 年： Osuna 等人引入了支持向量机，发表了
《用于人脸检测的 SVM》
(SVM for Face Detection) ，试图在数据中画出一条完美的分类线。
2001 年： 著名的
Viola-Jones 框架
(The Viola-Jones Framework) 横空出世。它通过简单的特征组合实现了极快的人脸检测，直到今天，很多老式相机的对焦功能还得感谢它。
特征工程的黄金时代
： 既然「整张脸」难找，那就找「关键点」和「纹理」。随后的几年，特征描述符成为了主角：
1999 年： Lowe 提出了
SIFT
，这种「尺度不变特征变换」能在旋转、缩放的情况下依然认出物体，是当年的绝对王者。
2003 年： Sivic 和 Zisserman 借鉴文本搜索，提出了
「视觉词袋模型」
(Bag of Visual Words) ，把图片看作一堆「视觉单词」的集合。
2005 年： Dalal 和 Triggs 发明了
HOG
(方向梯度直方图) ，专门用来描述行人的轮廓。同一年，Grauman 和 Darrell 提出了 「金字塔匹配核」 (Pyramid Match Kernel) ，用来比较两组特征的相似度。
2006 年： Lazebnik 等人进一步提出了
「空间金字塔匹配」
(Spatial Pyramid Matching) ，解决了词袋模型丢失空间位置信息的问题。
2008 年： 特征工程的集大成者
DPM
(Deformable Part Model) 登场。它把物体看作一个个可变形的部件（比如人的头、手、脚），像弹簧一样连接在一起。这是传统方法的巅峰。
痛点在哪里？特征是人设计的（Hand-crafted），分类器（比如 SVM）只能在这些有限的信息上工作 。这种方法不仅慢，而且很难适应复杂的场景。
破晓：AlexNet 与 R-CNN 的「暴力美学」
2012 年，AlexNet 横空出世，深度学习证明了它提取特征的能力远超人类手工设计 。但是，怎么用它来做目标检测呢？
深度学习的惊雷：
2012 年，AlexNet (Krizhevsky et al.) 在 ImageNet 竞赛中以压倒性优势夺冠。它证明了深层卷积神经网络（CNN）提取特征的能力远超人类手工设计。
R-CNN：
从分类到检测 但是，怎么用 CNN 做目标检测（框出物体位置）？ 2014 年，Girshick 等人提出了划时代的 R-CNN (Region-based CNN) 。它的思路很直接：
先用传统算法（Selective Search）在图上剪出约 2000 个「候选区域」 (Region Proposals)。
把每个区域都扔进 CNN 提特征，再用 SVM 分类。
巅峰：Faster R-CNN 的「速度进化」
R-CNN 让每个候选框都过一遍 CNN，计算量巨大。科学家们开始思考如何复用计算。
2014 年： 何恺明团队提出了
SPP-Net
(Spatial Pyramid Pooling) 。它引入了空间金字塔池化层，允许神经网络处理任意大小的图片，并且只算一次全图特征，大大加速了检测。
2015 年： Girshick 借鉴 SPP-Net，推出了
Fast R-CNN
。它引入了 RoI Pooling，把特征提取和分类回归整合到了一个网络里，不仅快，还能端到端训练。
最终的瓶颈： 即便如此，
候选框（Region Proposals）依然依赖那个笨重的传统算法（Selective Search）
，这成为了系统的速度瓶颈。
2015 年，
F
aster R-CNN 的诞生：
何恺明团队提出了 RPN (Region Proposal Network) 。他们从 1991 年 LeCun 等人的 「空间位移神经网络」 (Space Displacement Net) 中获得灵感，让神经网络自己在特征图上「滑动」，通过预设的 Anchor (锚点) 来预测物体可能存在的位置。
至此，目标检测的所有环节 —— 提议、特征提取、分类、回归 —— 全部被神经网络接管，实现了真正的「端到端」实时检测。速度和精度双重飞跃，计算机视觉终于迈入了实时检测的时代。
迷雾后的新世界：Transformer 与万物
Faster R-CNN 开启了一个时代，但探索从未停止。演讲的后半部分，何恺明展示了技术的洪流如何继续奔涌：
既然要快，能不能连「候选框」这个步骤都不要了？
2016 年：
YOLO
(You Only Look Once) 和
SSD
(Single Shot MultiBox Detector) 问世。它们像人类一眼看全图一样，直接输出所有物体的位置和类别，速度极快。
2017 年： 为了解决单阶段检测精度低的问题（正负样本不平衡），何恺明团队提出了
Focal Loss
(RetinaNet) 。
2017 年：
Mask R-CNN
惊艳亮相。它在 Faster R-CNN 的基础上加了一个分支，不仅能画框，还能像素级地把物体「抠」出来（实例分割），引入了 RoI Align 解决了像素对齐问题。
2020 年：
DETR
(Detection Transformer) 将 Transformer 架构引入视觉。它完全抛弃了 Anchor 和复杂的后处理（NMS），用全局注意力机制重新定义了检测。
2023 年：
SAM
(Segment Anything Model) 横空出世。它在大数据的喂养下，学会了「分割万物」，不再受限于特定的训练类别，展示了视觉大模型的雏形。
在这个「大航海时代」我们学到了什么？
我们在过去的几十年里学到了什么？
何恺明说：「Write object detection papers and win Test of Time Awards :)」（写目标检测论文然后拿到时间检验奖 :) ）
演讲最后，他用一张 Nano-Banana 生成的非常有寓意的图作为结尾：一艘船驶向迷雾中的大海。
他说，
科学探索就像是驶入迷雾
。
这里没有预先画好的的地图。
我们甚至不知道终点是否存在 。
从手工特征到 CNN，再到 Transformer，每一次飞跃都是探险者在迷雾中发现的新大陆。Faster R-CNN 不仅仅是一个算法，它教会了我们：当旧的组件成为瓶颈时，用更强大的可学习模型去取代它。
在下一个十年，计算机视觉的「圣杯」会是什么？
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com