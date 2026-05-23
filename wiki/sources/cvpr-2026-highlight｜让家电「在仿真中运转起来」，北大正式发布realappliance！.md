---
type: source
title: "CVPR 2026 Highlight｜让家电「在仿真中运转起来」，北大正式发布RealAppliance！"
created: 2026-05-13
updated: 2026-05-13
tags: [cvpr-2026, 具身智能, 仿真数据集, 家电操作, 评测基准, 北京大学]
related: [realappliance, realappliance-bench, dong-hao, 基于说明书的家电操作规划, checkmanual]
sources: ["cvpr-2026-highlight｜让家电「在仿真中运转起来」，北大正式发布realappliance！.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/g0_vfxdakjnTV3mj2GMejQ"
venue: 机器之心
---
# CVPR 2026 Highlight｜让家电「在仿真中运转起来」，北大正式发布RealAppliance！

## 摘要

本文报道了北京大学董豪团队在 CVPR 2026 上获得 Highlight 的 [[realappliance]] 数据集与 [[realappliance-bench]] 评测基准。该工作首次在家用电器场景中实现了「真实说明书、高保真资产与操作逻辑」的系统对齐，收录 100 个精细建模的家电资产，覆盖 14 类常见电器。

## 核心内容

- **数据集**：[[realappliance]] 包含 100 个高保真家电仿真资产，在说明书、外观结构、交互机制和程序逻辑四个层面与真实产品系统对齐。
- **评测基准**：[[realappliance-bench]] 围绕手册检索、开环规划、部件定位、闭环调整和全过程推理五个递进任务构建评测体系。
- **关键发现**：几乎所有主流多模态大模型和具身规划模型的端到端成功率均为 0，揭示了当前模型在真实家电操作场景中的能力边界。
- **前序工作**：[[checkmanual]]（CVPR 2025 Highlight）首次提出基于说明书的家电操作研究方向。

## 关键结论

1. 误差在多任务链路上的级联放大是端到端失败的根本原因。
2. 具身规划模型在文档理解任务上反而弱于通用多模态模型，暗示任务特化可能导致通用能力退化。
3. 部件定位 IoU 普遍仅 0-0.05，跨模态空间对齐仍是重大挑战。

## 关联

- 与 [[sim2real]] 直接相关：通过高保真仿真降低真实测试的安全风险和成本。
- 与 [[具身智能数据困境]] 直接相关：回应仿真鸿沟中程序逻辑对齐的缺失。
- 与 [[vla-视觉-语言-动作]] 相关：评测链路覆盖文档理解到动作规划的完整能力谱。