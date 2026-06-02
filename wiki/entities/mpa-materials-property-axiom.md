---
type: entity
title: MPA (Materials Property Axiom)
created: 2026-06-01
updated: 2026-06-01
tags: [ai4s, 材料科学, ai模型, 基座模型]
related: [深度原理, 物理对齐, hybrid-readout, ai-for-science, sciclaw]
sources: ["材料版alphafold来了！40个工业任务全方位sota，ai4s迎来行业大突破.md"]
origin_date: 2026-06-01
---
# MPA (Materials Property Axiom)

**MPA**（Materials Property Axiom）是由[[深度原理]]开发的材料基座模型，被称为"材料版AlphaFold"。该模型在40个真实工业任务数据集上取得SOTA（State-of-the-Art），代表了[[ai-for-science|AI4S]]在材料科学领域的重大突破。

## 架构设计

MPA基于Transformer模型，结构分为"头"和"躯干"两部分：
- **躯干**：材料基座模型通用的图Transformer，用于存储核心通用知识
- **头**：根据不同训练阶段有所差异，适配不同训练任务

## 训练范式

MPA的核心创新在于将LLM三段式训练范式迁移到材料科学：

1. **预训练（Pre-training）**：基于通用知识库的"基础通识训练"
2. **中期训练（Mid-training）**：[[物理对齐]]阶段，使用第一性原理计算数据建立AI对真实材料物理规律的"直觉"
3. **后训练（Post-training）**：使用[[hybrid-readout|Hybrid Readout]]混合头进行精细任务微调

## 核心创新

### 物理对齐
在预训练和微调之间增加专门的物理对齐训练阶段，让模型建立对真实材料物理规律的"直觉"，而非仅记忆分子结构。详见[[物理对齐]]。

### Hybrid Readout
后训练阶段设计的双路径输出机制，结合注意力池化（自由路径）和原子加和（约束路径），通过可训练参数α动态调节。详见[[hybrid-readout]]。

## 实验结果

### 消融实验
完整训练流程 vs 直接微调（无物理对齐、无混合头）：
- **随机划分**：38/40性质变好，平均误差降低14.0%
- **骨架划分**：38/40性质变好，平均误差降低14.6%

### 对比实验
与5个主流模型（ChemBERTa、ChemProp、Chemeleon、Uni-Mol2、Suiren）对比：
- **骨架划分**：斩获35/40 SOTA
- 最大优势出现在"分布漂移"的硬场景下

### 关键发现
骨架划分（测试集材料骨架在训练时完全未见）的提升大于随机划分，证明模型学到的是可迁移的物理直觉（inductive bias）而非死记硬背。

## 产品化状态
MPA已作为Skill接入[[深度原理]]的Agent产品[[sciclaw|SciClaw]]，用户可在 sciclaw.cn 在线试用。

## 技术资源
- 技术报告：https://www.deepprinciple.com/papers/mpa.pdf
- 博客：https://blog.deepprinciple.com/introducing-materials-property-axiom/

## 开放问题
- "材料版AlphaFold"的定位是否名副其实？AlphaFold解决了蛋白质结构预测的百年难题，MPA目前是工业物性预测的SOTA，两者影响力是否可比？
- 文章未讨论MPA的参数量、训练成本、推理速度等工程指标