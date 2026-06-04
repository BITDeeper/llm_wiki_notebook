---
type: entity
title: Pangram
created: 2026-06-04
updated: 2026-06-04
tags: [ai检测工具, 闭源工具, 学术争议]
related: [neurips-2026-ai检测拒稿风波, ai文本检测争议, 黑箱检测器, neurips]
sources: ["neurips用ai检测，说我的论文是ai生成的.md"]
---
# Pangram

Pangram是一个闭源的AI文本检测器（AI Text Detector），用于判定文本是否由AI生成。

## 在NeurIPS 2026中的应用

NeurIPS 2026 Position Paper Track与Pangram合作，根据企业级数据协议使用其模型进行投稿检测，承诺在使用过程中不保留数据。Pangram的检测结果被用作desk rejection的重要依据。

## 争议

### 准确性质疑
一位被拒稿的作者用Pangram检测了NeurIPS Position Paper Track几位主席的2026年近期论文，得到的结果包括：69% AI、45% AI、36% AI和24% AI。这表明检测器对学术写作的判定可能存在系统性偏差。

### 闭源问题
作为[[黑箱检测器|闭源工具]]，Pangram的检测逻辑不可审计、不可复现，被指控者无法有效申诉或验证结果。

### 分布偏移
NeurIPS进行的验证测试（Pangram审计、ACM FAccT论文、合成样本、人工编辑样本）均非真实投稿分布，存在[[假阳性率与分布偏移]]问题——在一个数据分布上测得的假阳性率不能自动迁移到另一个分布上。