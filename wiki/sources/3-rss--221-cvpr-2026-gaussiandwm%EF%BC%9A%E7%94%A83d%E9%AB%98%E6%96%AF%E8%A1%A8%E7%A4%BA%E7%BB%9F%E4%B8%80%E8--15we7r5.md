---
type: source
title: "CVPR 2026 | GaussianDWM：用3D高斯表示统一自动驾驶场景理解与多模态生成"
authors: [Tianchen Deng, Xuefeng Chen, Yi Chen, Qu Chen, Yuyao Xu, Lijin Yang, Le Xu, Yu Zhang, Bo Zhang, Wuxiong Huang, Hesheng Wang]
year: 2026
url: "https://mp.weixin.qq.com/s/osoYZr1dCwceHv-0s7ZIsg"
venue: "CVPR 2026 / 机器之心"
tags: [自动驾驶, 世界模型, 3dgs, 场景理解, 多模态生成, cvpr-2026]
related: [gaussiandwm, 3dgs-3d高斯溅射, 世界模型, 自动驾驶世界模型, 机器之心]
created: 2026-06-14
updated: 2026-06-14
sources: ["rss/cvpr-2026-gaussiandwm：用3d高斯表示统一自动驾驶场景理解与多模态生成.md"]
---
# CVPR 2026 | GaussianDWM：用3D高斯表示统一自动驾驶场景理解与多模态生成

本来源报道了被 CVPR 2026 收录的论文《GaussianDWM: 3D Gaussian Driving World Model for Unified Scene Understanding and Multi-Modal Generation》。该论文由[[上海交通大学]]、[[清华大学]]、旷视科技和 Mach Drive 联合完成。

## 核心主张

论文指出，[[自动驾驶世界模型]]的研究目标已从单纯预测未来视觉帧，扩展到构建可用于场景理解、空间定位和后续决策的世界表示。如果模型只能生成外观上合理的未来图像，却无法回答场景中有哪些目标、目标位于何处，那么它仍然缺少对三维驾驶环境的显式建模能力。

[[gaussiandwm|GaussianDWM]] 提出将 3D 高斯场景表示放置于世界模型中间，用同一种 3D 表示同时承载几何、外观和语言语义，从而在统一的框架内同时支持场景理解任务和多模态生成任务。

## 关键技术架构

GaussianDWM 的整体框架围绕同一个 3D 高斯表示展开，包含三个核心模块：

1. **语言增强的3D高斯分词器**：在传统高斯基元的基础上加入来自 CLIP 和 SAM 的语言特征，并使用场景级语言自编码器将 512 维特征压缩至 3 维，使每个高斯基元成为携带语义信息的 3D token。
2. **场景理解**：引入高斯投影器和[[任务感知采样]]机制。针对全局理解任务使用均匀采样和 Top-K 采样；针对视觉定位任务基于文本相似度采样。主实验中从场景里采样 4096 个高斯 tokens 输入 LLM。
3. **多模态生成**：采用[[双条件生成]]设计，同时接收低层条件（稀疏 RGB/深度，约束纹理）和高层世界知识（LLM 提取的语义先验，约束空间关系），服务空间生成、时间生成和 RGB-D 生成。

## 实验结果

- **场景理解（NuInteract 数据集）**：GaussianDWM 综合指标达到 59.23，大幅超越基线 DriveMonkey 的 52.12。其中 3D 视觉定位 mAP 提升至 52.78。
- **多模态生成（nuScenes 数据集）**：在空间生成任务中，视角位移 ±1m 时 FID/FVD 为 8.36/44.50。消融实验证明，在大视角变化（±4m）下，引入高层世界知识能显著降低 FID（从 21.79 降至 18.91）。

## 意义

该研究标志着自动驾驶世界模型从“纯视觉生成”向“统一3D可查询表示”演进。对于自动驾驶系统而言，形成一个能被理解、被查询、被用于定位和规划的 3D 世界表示，比单纯追求更清晰的视频预测更为重要。