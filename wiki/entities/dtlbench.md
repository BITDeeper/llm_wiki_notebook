---
type: entity
title: DTLBench
created: 2026-05-17
updated: 2026-05-17
tags: [基准测试, agent, 部署时学习, 评测]
related: [cascade, 部署时学习]
sources: ["cascade：让agent在部署任务流中进行在线经验学习.md"]
origin_date: 2026-05-01
---
# DTLBench

DTLBench是首个专门评估LLM Agent[[部署时学习]]能力的基准测试数据集，随[[cascade]]框架一同发布。包含16个跨领域任务，覆盖单轮与多轮场景。

## 设计理念

传统Agent评测采用静态测试集，而DTLBench将每个任务组织为在线查询序列。Agent必须按顺序处理样本，只能利用已经发生的历史交互和反馈。核心评估指标是部署步上的成功率，而非单次测试的准确率。

## 任务覆盖

### 单轮任务（12个）
- **医疗：** 医疗诊断、药物推荐、科室转诊、急诊分诊
- **法律：** 法律罪名预测、刑罚预测
- **金融：** 金融意图路由、金融情感分析
- **智能运维：** 根因分析、日志故障诊断
- **编程：** Text-to-SQL

### 多轮任务（4个）
- **经典评测环境：** ALFWorld、ScienceWorld
- **真实应用场景：** 基于网页的深度搜索、电子健康记录（EHR）表格推理

## 数据获取

- HuggingFace: https://huggingface.co/datasets/guosy/DTLBench