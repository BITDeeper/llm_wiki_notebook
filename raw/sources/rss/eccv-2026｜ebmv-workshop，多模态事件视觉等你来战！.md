---
title: "ECCV 2026｜EBMV Workshop，多模态事件视觉等你来战！"
date: 2026-05-15
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/Wi_jsVluNL3ALXGQrYiqkA"
rss_id: "2247659742_1"
---
如果你关注事件相机、多模态感知、自动驾驶、机器人或视觉大模型，这场Workshop（
https://eventbasemultimodalvision.github.io/
）不容错过。
今年ECCV 2026，我们发起了 Event-Based Multimodal Vision: Imaging, Perception, and Understanding（EBMV）研讨会，探索事件视觉与 RGB、LiDAR、IMU、语言模型等多模态融合的前沿技术。我们希望与全球研究者一起讨论事件视觉在
成像、感知、理解
全链路中的应用潜力和挑战，形式包括学术报告、挑战赛和论文征集。
目前已上线的挑战赛包括：
1. Low-Level Imaging Challenge
Event-Guided Brightness Adjustment with SEE-600K：
这是本次比赛中最核心的低层成像赛题之一，聚焦复杂光照条件下的亮度调整与图像恢复。低照度、过曝、混合照明、高反差，这些都是传统视觉系统最容易失效的环境。参赛者需要利用图像与事件的互补信息，将受限画面恢复到“曝光自然、结构稳定、细节完整”的状态。这不是简单地调亮图像，也不是单纯增强对比度，而是要求算法在极端光照下有效提取、补全和重建丢失信息，保持图像真实结构与纹理。
Event-Guided Low-Light Video Depth Estimation on SDE：
这项比赛进一步把低照度场景推进到视频深度估计任务中。参赛者需要结合图像与事件，在困难光照下恢复准确的深度图。它考验的不只是图像恢复能力，更是模型在暗光、动态和信息稀疏条件下理解三维结构的能力。
Event-Guided High-frame-rate Video Reconstruction on EventAid：
这项比赛聚焦事件引导的高帧率视频重建任务。参赛者需要利用事件的高速感知特性辅助引导低帧率视频实现帧率提升，同时对高速运动过程实现有效恢复。它考验算法对事件信号中高速运动信息的提取能力，以及事件与视频两种模态的有效融合能力。
2. Mid-Level Perception Challenge
Event-Guided Monocular Depth Estimation with CoSEC：
在中层感知方向，我们设置了基于 CoSEC 的单目深度估计挑战。参赛者需要在真实场景中利用图像与事件预测准确深度图，探索事件信号如何为几何感知提供额外线索。
Event-Guided Semantic Segmentation with CoSEC and REAL：
基于CoSEC和REAL，我们还设置了事件引导语义分割挑战。任务目标是在真实场景中预测像素级语义标签，重点考察事件流是否能帮助模型在复杂光照、运动和动态环境中获得更稳健的场景理解能力。
3. High-Level Understanding Challenge
Event-Guided Spatial Reasoning with EventBench：
在高层理解方向，我们关注事件视觉能否支撑更复杂的空间推理能力。这项挑战面向 MLLMs 的事件视觉空间推理评测，覆盖目标计数、绝对距离估计和空间关系推理等任务。
High-Level Understanding Challenge: Event Stream Understanding with EventBench：
我们还设置了事件流理解挑战，希望系统性评估并推动多模态大模型对 event-based vision data 的理解与推理能力。任务重点包括深层语义理解、时空推理和细粒度识别，目标是推动更鲁棒、更高效的事件视觉多模态模型发展。
这些竞赛共同指向一个目标：让事件视觉不再只停留在单点任务上，而是进入从低层成像、中层感知到高层理解的完整研究平台，探索事件相机在真实世界中的独特价值与应用潜力。
时间节点
5 月 10 日：Challenge 与网站启动
5 月 12 日：训练集 / 验证集发布
6 月 20 日：测试集与评测服务器上线
6 月 30 日：提交截止
7 月 5 日：比赛结果公布
7 月 10 日：Technical Report 截止
7 月 20 日：Regular Workshop Paper 截止
8 月 5 日：录用通知
8 月 12 日：Camera-ready 截止
重磅讲者阵容
Kostas Daniilidis，University of Pennsylvania, USA
多视图几何、3D 场景重建与几何视觉理论
Guillermo Gallego，Technical University of Berlin, Germany
事件视觉、连续时间运动估计与时空建模
Priyadarshini Panda，University of Southern California, USA
神经形态计算、脉冲神经网络与事件驱动学习
Shintaro Shiba，The University of Tokyo, Japan
面向自动驾驶的事件感知与部署
Federico Becattini，University of Siena, Italy
计算机视觉、自动驾驶、轨迹预测与事件相机应用
Liyuan Pan，Beijing Institute of Technology, China
事件相机、脉冲视觉模型与高速视觉感知
Daniel Gehrig，University of Pennsylvania, USA
事件光流、学习式运动估计与高速视觉
Min Liu，DVSense Technology Co., Ltd., China
事件相机传感器、成像硬件设计与工业视觉系统
讲者涵盖从基础理论、事件建模到硬件和应用落地的全链路研究，帮助你全面了解事件视觉的前沿进展。
组织者
投稿方向
本次 Workshop 接受长文不超过 14 页，也接受短文和技术报告4-6 页，采用双盲评审，详情可见
https://eccv.ecva.net/Conferences/2026/SubmissionPolicies
，主题包括但不限于：
Sensing Systems
Low-Level Imaging
Mid-Level Perception
High-Level Understanding
Computing and Hardware
Applications
具体包括事件相机与 RGB、LiDAR、IMU、语言的融合，数据集与benchmark，亮度建模、图像增强，光流、深度、SLAM、3D 重建，检测、分割、跟踪，visual grounding、时空推理、event-based MLLM，自动驾驶、机器人、AR/VR、边缘智能等方向。
官方链接：
Workshop 官网：
https://eventbasemultimodalvision.github.io/
比赛已经开启，讲者已集结，现在轮到你上场。带上你的论文、创意和挑战精神，一起推动多模态事件视觉的发展！