---
type: source
title: "CASCADE：让Agent在部署任务流中进行在线经验学习"
created: 2026-05-17
updated: 2026-05-17
tags: [agent, 在线学习, 部署时学习, 案例推理, 上下文赌博机, 论文]
related: [cascade, dtlbench, 部署时学习, 上下文赌博机, 机器之心]
sources: ["cascade：让agent在部署任务流中进行在线经验学习.md"]
authors: [郭思源, 汪军, 杜雅丽, 陈贺昌, 常毅]
year: 2026
url: "https://mp.weixin.qq.com/s/Xeh7tt1Inly_dZeT4YaOeg"
venue: 机器之心
---
# CASCADE：让Agent在部署任务流中进行在线经验学习

**来源：** 机器之心
**发布日期：** 2026年5月17日
**论文链接：** https://arxiv.org/abs/2605.06702
**代码仓库：** https://github.com/guosyjlu/CASCADE
**基准测试：** https://huggingface.co/datasets/guosy/DTLBench

## 摘要

本文报道了来自[[伦敦大学学院]]、[[吉林大学]]和[[伦敦国王学院]]的研究团队提出的[[cascade]]框架及其配套基准测试[[dtlbench]]。该工作首次将LLM Agent的部署阶段形式化为在线学习问题，提出[[部署时学习]]（Deployment-Time Learning）设定，在不更新LLM参数的前提下，通过基于案例的推理与[[上下文赌博机]]实现部署任务流中的持续适应。

## 核心贡献

1. 提出[[部署时学习]]概念，将LLM Agent的部署阶段形式化为无参数更新的在线经验学习
2. 提出[[cascade]]框架，通过4R循环（检索、复用、修改、保存）与Neural-LinLogUCB算法实现原则化的部署时学习
3. 构建[[dtlbench]]基准测试，包含16个跨领域任务，覆盖医疗、法律、金融、编程等多领域

## 关键实验结果

- Qwen3-32B在12个单轮任务上：零样本48.33% → NP-CBR 63.76% → CASCADE 66.68%
- CASCADE在12个单轮任务中的9个上优于REINFORCE+LoRA，显存占用低于4GB
- 对黑盒模型Gemini-2.0-Flash同样有效（56.58% → 72.58%）
- 多轮任务（ALFWorld、ScienceWorld等）均带来稳定提升

## 作者信息

- **第一作者：** [[郭思源]]（吉林大学博士生）
- **通讯作者：** [[汪军]]（伦敦大学学院教授）
- **指导教师：** [[杜雅丽]]（伦敦国王学院副教授）、[[陈贺昌]]（吉林大学研究员）、[[常毅]]（吉林大学教授）