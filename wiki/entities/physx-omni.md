---
type: entity
title: PhysX-Omni
created: 2026-06-03
updated: 2026-06-06
tags: ["3d生成", "物理仿真", "框架", "simulation-ready", "具身智能", "physical-ai", "仿真", "论文"]
related: ["大晓机器人", "南洋理工大学-刘子纬团队", "physxverse", "physx-bench", "simulation-ready物理3d生成", "template-based-rle", "南洋理工大学", "physical-ai", "template-based-rle-representation", "sim2real"]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md", "大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
origin_date: 2026-05-01
---
# PhysX-Omni

PhysX-Omni 是首个统一的 [[simulation-ready物理3d生成]] 框架，由 [[大晓机器人]] 联合 [[南洋理工大学]] [[南洋理工大学-刘子纬团队|刘子纬教授团队]] 提出。该框架首次实现对刚体（rigid）、可形变物体（deformable）和关节物体（articulated）的统一物理建模。

## 论文信息

- **标题：** PhysX-Omni: Unified Simulation-Ready Physical 3D Generation for Rigid, Deformable, and Articulated Objects
- **arXiv：** 2605.21572（2026年5月提交）
- **项目主页：** https://physx-omni.github.io/
- **GitHub：** https://github.com/physx-omni/PhysX-Omni

## 核心问题

现有3D生成方法生成的资产外观和几何质量越来越高，但大多只能"看"不能"用"——缺乏真实尺度、材料属性、运动能力和交互语义，无法直接用于仿真器训练机器人。更棘手的是，刚体、可形变物体、关节物体三大类别此前没有统一框架，且 simulation-ready 的物理3D数据极度稀缺。

## 技术方案

### Template-based RLE 几何表征

PhysX-Omni 的核心创新是一种受二维行程编码（Run-Length Encoding）启发的全新三维几何表征方法——[[template-based-rle-representation|Template-based RLE Representation]]（[[template-based-rle]]）：

1. 将3D资产体素化（voxelization），按部件层级结构划分为 part-level voxels
2. 每个部件级体素沿 z-axis 切分为二维二值 mask，采用紧凑的二维 RLE 编码
3. 提出 **template layers** 概念：多个结构相似的切片共享同一个模板，仅记录残差变化，复用跨层结构模式
4. 在不引入 special token 的前提下显式建模高分辨率三维结构，大幅减少 token 数目
5. 相比传统自回归方法具有更强鲁棒性，能有效降低预测误差累积

### 统一物理建模

与传统仅关注外观和几何的 3D 生成方法不同，PhysX-Omni 同时建模：

- **几何结构**（Geometry）
- **绝对尺度**（Absolute Scale）
- **材料属性**（Material）
- **运动学参数**（Kinematics）
- **交互能力**（Affordance）
- **语义描述**（Description）

## 配套数据集与评测

- **[[physxverse]]** — 首个通用 simulation-ready physical 3D 数据集（8.7K+ 资产，2.9K+ 类别）
- **[[physx-bench]]** — 首个物理 3D generation benchmark，基于 Qwen3.5 VLM 与物理仿真的六维评估体系

## 实验结果

- 在几乎所有几何与物理属性指标上达到 SOTA
- **Absolute Scale 误差相比 PhysXGen 和 PhysX-Anything 降低了两个数量级**
- 在 Material、Affordance、Description、Kinematics 维度均取得最优
- 运动学（Kinematics）提升尤为显著
- 生成的资产已直接部署到物理模拟器中用于机器人交互与策略学习

## 下游应用

- 机器人交互与策略学习
- 场景级物理世界生成（scene-level physical world generation）
- [[sim2real|Sim2Real]] 仿真环境构建
- [[physical-ai|Physical AI]] 与具身 AI 世界建模