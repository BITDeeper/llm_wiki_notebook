---
title: "强烈推荐！即插即用模块顶会新成果！CVPR/ICLR等高分作品，这波思路必须学！"
date: 2026-04-22
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/vhmoKCwwDMqYcsTUK0LTcw"
rss_id: "2247658919_1"
---
今天给大家推荐一个深度学习创新利器：
即插即用的模块
。
它们都有标准化接口、可以无缝嵌入现有模型架构中。能够让你在不推翻整个baseline的情况下，就可以针对某一方面的短板进行针对性优化，从而 高效涨点。同时，由于只改动了局部，变量可控，效果也更容易通过对比实验和消融实验进行验证，更是容易让审稿人看到自己的贡献。
为了让大家用起来更方便，节省自己的时间，我给大家对
CVPR、ICLR、NeurIPS、AAAI等顶会上最新的、代码可复现的模块，
进行了系统整理，
共306个
。既有注意力机制、卷积、特征融合、特征提取等各种任务通用的，也有针对目标检测、时间序列、AI+医学等特定任务场景的。你可以根据自己的需要，快速落地到自己的文章里。
扫描
下方二维码，回复「
306模块
」
免费获取
全部论文合集及项目代码
通用的即插即用模块
【CVPR26】MixerCSeg: An Efficient Mixer
Archite
cture for Crack Segmentation via Decoupled Mamba Attention
内容：
该论文为CVPR 2026工作，提出轻量级裂缝分割模型MixerCSeg，融合 CNN 局部纹理捕捉、Transformer 全局依赖建模与解耦 Mamba 注意力，搭配方向引导门控卷积与空间细化多尺度融合模块，在多裂缝数据集上实现 SOTA 精度，且仅 2.54M 参数、2.05GFLOPs，兼顾高效与复杂场景鲁棒性。
【CVPR26】It Takes Two: A Duet of Periodicity and Directionality for Burst Flicker Removal
内容：
这篇论文聚焦手机/相机在室内光源下拍照出现的条纹闪烁去除问题，提出基于 Transformer 的Flickerformer框架，通过相位融合模块、自相关前馈网络、小波方向注意模块三大核心组件，联合建模闪烁的周期性与方向性，在连拍图像去闪烁任务中实现更优画质恢复与更低参数量，可有效消除明暗条纹并保留图像细节。
【AAAI26】Strip R-CNN: Large Strip Convolution for Remote Sensing Object Detection
内容：
这篇论文提出面向遥感目标检测的Strip R‑CNN，针对遥感图像中高长宽比细长目标检测难的问题，创新采用正交大条状卷积构建轻量高效的 StripNet 主干，通过序列式横竖长条卷积高效捕捉长程空间特征，并设计解耦的 Strip 检测头强化定位分支，有效提升细长目标定位与角度回归精度，模型仅约 30M 参数，在 DOTA‑v1.0、FAIR1M、HRSC2016、DIOR‑R 等多个遥感检测基准上取得 SOTA 性能，其中 DOTA‑v1.0 数据集上达 82.75% mAP，兼顾效率与精度。
扫描
下方二维码，回复「
306模块
」
免费获取
全部论文合集及项目代码
针对特定任务场景
【ICLR26 时序】CORA: COVARIATE-AWARE ADAPTATION OF TIME SERIES FOUNDATION MODELS
内容：
论文提出面向时序基础模型（TSFMs）的协变量感知适配框架 CORA，无需改动预训练模型，通过格兰杰因果嵌入量化协变量影响力、结合零初始化条件注入实现多模态协变量渐进融合，在时序预测任务中泛化性与可解释性更优，适配多种主流时序基础模型架构。
【ACM MM 图像分割】CRISP-SAM2 : SAM2 with Cross-Modal Interaction and Semantic Prompting for Multi-Organ Segmentation
内容：
该论文基于 SAM2 构建面向医学多器官分割的 CRISP-SAM2 模型，针对原生 SAM2 依赖人工几何提示、医学影像细节分割不准、空间信息易丢失等问题，采用渐进式交叉注意力跨模态交互融合器官文本语义与图像视觉特征并注入图像编码器，同时改用语义提示机制替代传统几何提示，搭配记忆相似度排序自更新与掩码精细化模块适配医学序列影像，在 7 项公开腹部 CT/MRI 多器官数据集上实验证明，该模型在 DSC、NSD 指标上全面超越 SAM、MedSAM 等主流医学分割算法，有效提升复杂器官边界分割精度，实现文本语义引导、低交互、高精度的医学多器官自动分割。
扫描
下方二维码，回复「
306模块
」
免费获取
全部论文合集及项目代码