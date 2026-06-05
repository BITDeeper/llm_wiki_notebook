---
type: entity
title: Meta FAIR
created: 2026-04-07
updated: 2026-06-04
tags: ["meta", "实验室", "ai研究", "soa", "ai实验室", "开源研究", "pytorch", "llama", "ai研究机构", "计算机视觉"]
related: ["soa", "llama-3-2-3b", "mit", "yann-lecun", "ami-advanced-machine-intelligence", "硅谷羊群效应", "fino", "ai-for-science"]
sources: ["ai邪修时刻！meta联手mit投毒，左脚踩右脚强行升天.md", "lecun炮轰hinton：他认可llm就是想摆烂退休了！.md", "meta-fair-提出-fino：靠“免费”元数据让视觉模型变身领域专家.md"]
origin_date: 2013-12-01
---

# Meta FAIR（Meta 人工智能研究院）

Meta（前 Facebook）的基础 AI 研究实验室（Fundamental AI Research），由 [[yann-lecun|LeCun]] 于2013年底筹建，是 AI 领域最顶尖的研究实验室之一。FAIR 在计算机视觉、自然语言处理、强化学习等多个方向均有开创性贡献。

## 辉煌时期

- 建立了开放的、尊重科学过程的文化
- 产出大量基础方法、科学成果和工具（如 PyTorch）
- 培养了大量研究者，遍布整个 AI 生态系统
- 开发了 Llama 1（2023年初），催生了开源 LLM 生态

## 研究成果与合作

### 强化学习与推理

在 [[SOAR]] 架构的研究中，Meta FAIR 展示了其在强化学习和推理模型领域的创新。他们提出的利用"有毒"合成数据进行课程学习的方法，成功突破了传统强化学习在 [[Fail@128]] 极极难任务上的梯度消失瓶颈。

该部门与 [[MIT]] 有密切的合作关系，共同探索 AI 自我进化的新范式。

### 计算机视觉与 AI for Science

FAIR 开发了 DINOv2 等通用视觉基座模型。在此基础上，FAIR 提出了 [[fino|FINO]] 无标签微调学习范式（与 CNRS 和哥伦比亚大学合作完成）。FINO 利用科学数据中的元数据作为弱监督信号，在多个专业领域实现了超越全监督微调的性能，是 [[ai-for-science|AI for Science]] 的重要方法论贡献。

## 衰落过程

- **2023年**：Gen AI 组织成立，从 FAIR 抽调60-70名科学家和工程师；Llama 1 团队被调往 Gen AI。
- **2023-2024年**：人才流失，[[mistral|Mistral]] 的诞生即为例证（Llama 1 的两位作者和一位前 Google 员工出走创办）。
- **2024-2025年**：Meta 全面聚焦 LLM 追赶战略，大量探索性研究被降优先级；JEPA 世界模型应用场景（如机器人）被砍。
- **2025年**：对发表论文增加限制，不再允许公开讨论中期与业务相关的研究。

## LeCun 的评价

> "到了2024年初、尤其是2025年，FAIR的走向和管理方式已经不符合我认为保持创新、研究和突破所需要的条件了。很多优秀的人都走了。"

LeCun 认为创新链条需要从蓝天研究到技术验证到工程推进的完整接力，而 FAIR 在研究和产品之间出现了 gap——Gen AI 组织面临太大短期压力，变得非常保守。