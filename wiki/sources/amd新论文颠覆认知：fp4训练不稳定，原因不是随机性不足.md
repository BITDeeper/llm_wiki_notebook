---
type: source
title: "AMD新论文颠覆认知：FP4训练不稳定，原因不是随机性不足"
created: 2026-05-27
updated: 2026-05-27
tags: [fp4, 低精度训练, amd, 量化, mxfp4, 预训练]
related: [amd, fp4训练, mxfp4, 结构性微缩放误差, 确定性hadamard旋转, 量化, 机器之心]
sources: ["amd新论文颠覆认知：fp4训练不稳定，原因不是随机性不足.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/ljY5ORd36n9CrN-K-22rZQ"
venue: 机器之心
---
# AMD新论文颠覆认知：FP4训练不稳定，原因不是随机性不足

## 来源信息
- **媒体**：[[机器之心]]
- **发表日期**：2026年5月27日
- **原始论文**：*Pretraining large language models with MXFP4 on Native FP4 Hardware*（arXiv: 2605.09825）
- **研究方**：[[amd]] 联合 [[宾夕法尼亚州立大学]]

## 核心内容

本文报道了 AMD 联合宾夕法尼亚州立大学在 [[fp4训练]] 领域的突破性研究。论文在 [[amd-instinct-mi355x]] GPU 上，使用 [[mxfp4]] 格式完成了 Llama 3.1-8B 的全流程预训练，端到端训练速度比 FP8 基线快 9-10%，token 开销仅多 8-9%。

### 关键发现

1. **颠覆传统认知**：FP4 训练不稳定的根本原因不是随机性不足，而是 [[结构性微缩放误差]] 沿敏感梯度路径（特别是 [[wgrad]]) 的累积放大。
2. **控制变量实验**：逐步将 Fprop、Dgrad、Wgrad 从 FP8 替换为 MXFP4，发现仅 Wgrad 量化导致 26-27% 的 token 开销剧增。
3. **随机性策略失效**：随机舍入和随机 Hadamard 旋转在 Wgrad 量化场景下不仅无效，反而直接导致不收敛。
4. **确定性策略成功**：[[确定性hadamard旋转]] 将全流程 token 开销从 26-27% 压降至 8-9%。

### 产业意义

- 回答了 FP4 训练不稳定的根本原因，提供方法论价值
- 将 FP4 从"推理专属"推向"训练可用"
- 基于 [[ocp-microscaling格式标准]] 开放标准，具备跨硬件厂商可移植性

### 重要限制

作者明确指出，该结论基于 Llama 3.1-8B + C4 数据集的验证，不能直接假设可无缝迁移到所有模型、数据集和训练方法。