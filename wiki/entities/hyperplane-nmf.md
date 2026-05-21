---
type: entity
title: Hyperplane-NMF
tags: [算法, 矩阵分解, 机器学习, 数学优化]
related: [mlow, 频域幅度低秩分解, 超平面投影]
created: 2026-04-02
updated: 2026-04-02
sources: ["别再用黑盒预测了！即插即用模块通过前置分解让itransformerpatchtst既准又可解释.md"]
---

# Hyperplane-NMF

**Hyperplane-NMF** (Hyperplane Non-negative Matrix Factorization) 是一种针对频域幅度低秩分解的新型算法，被应用于 [[MLOW]] 模块中。

## 核心改进

与标准的非负矩阵分解（NMF）相比，Hyperplane-NMF 引入了额外的约束条件：将系数矩阵约束在超平面上（即 [[超平面投影]]）。

### 优势

1. **推理效率高**：在测试阶段，无需像标准 NMF 那样重新优化系数矩阵 $W$，从而显著加快推理速度。
2. **梯度优化**：虽然梯度形式与标准 NMF 类似，但由于引入了新约束，梯度更新方向完全顺从目标函数本身，而非朝向预先计算的 $W$。
3. **可解释性强**：系数矩阵 $W$ 可以通过超平面投影进行可视化，使得分解结果的物理意义更加清晰，不再依赖不可解释的拟合数值。
