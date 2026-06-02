---
type: source
title: "材料版AlphaFold来了！40个工业任务全方位SOTA，AI4S迎来行业大突破"
created: 2026-06-01
updated: 2026-06-01
tags: [ai4s, 材料科学, 深度原理, mpa, 物理对齐]
related: [深度原理, mpa-materials-property-axiom, 物理对齐, ai-for-science, 量子位]
sources: ["材料版alphafold来了！40个工业任务全方位sota，ai4s迎来行业大突破.md"]
authors: [允中]
year: 2026
url: "https://mp.weixin.qq.com/s/MzoLYK5pQYKw2w0bEtQ5gQ"
venue: 量子位
---
# 材料版AlphaFold来了！40个工业任务全方位SOTA，AI4S迎来行业大突破

## 摘要

本文报道了[[深度原理]]（Deep Principle）发布的材料基座模型[[mpa-materials-property-axiom|MPA]]，该模型被称为"材料版AlphaFold"。MPA的核心创新在于将大语言模型的三段式训练范式（预训练→中期训练→后训练）迁移到材料科学领域，通过引入[[物理对齐]]（physics-guided alignment）的mid-training阶段和[[hybrid-readout|Hybrid Readout]]混合头设计，在40个真实工业任务数据集上取得SOTA。

## 核心内容

### 问题诊断
- 当前AI4S材料模型过度依赖理论计算榜单（如Matbench Discovery、Open Catalyst Project），在真实工业实验数据上表现不佳
- 真实实验数据存在噪声、误差，且直接取决于特定工业需求，比理论计算预测更难

### 技术方案
- **LLM三段式训练**：在预训练和微调之间增加mid-training阶段，建立AI对真实材料物理规律的"直觉"
- **物理对齐**：使用第一性原理计算数据（无噪声、易大规模产生）进行物理特性概念对齐
- **Hybrid Readout**：双路径输出机制，注意力池化（自由路径）处理"气质型"性质，原子加和（约束路径）处理"累加型"性质，通过可训练参数α动态调节

### 实验结果
- 消融实验：完整训练流程 vs 直接微调，随机划分下38/40变好（误差降14.0%），骨架划分下38/40变好（误差降14.6%）
- 对比实验：与ChemBERTa、ChemProp、Chemeleon、Uni-Mol2、Suiren五个主流模型对比，骨架划分下斩获35/40 SOTA
- 骨架划分提升大于随机划分，证明模型获得了真正的泛化能力

### 产品化
- MPA已作为Skill接入[[深度原理]]的Agent产品[[sciclaw|SciClaw]]（sciclaw.cn）

## 关键链接
- MPA博客：https://blog.deepprinciple.com/introducing-materials-property-axiom/
- MPA技术报告：https://www.deepprinciple.com/papers/mpa.pdf
- 在线试用：https://sciclaw.cn