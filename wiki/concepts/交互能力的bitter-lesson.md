---
type: concept
title: 交互能力的Bitter Lesson
created: 2026-05-12
updated: 2026-05-12
tags: [ai哲学, 技术路线, 实时交互]
related: [实时交互模型, thinking-machines-lab, scaling-law]
sources: ["翁荔创业大模型首秀！告别“120亿美元估值0模型”.md"]
---
# 交互能力的Bitter Lesson

交互能力的Bitter Lesson是 [[thinking-machines-lab|Thinking Machines Lab]] 提出的技术哲学观点，借用了Rich Sutton经典的"The Bitter Lesson"框架。

## 核心论点

当前多数AI模型通过外挂一层harness来解决交互问题——拼接VAD（语音活动检测）、turn-detection、TTS（文本转语音）等组件，模拟出实时感。

TML认为：**这些拼接出来的系统，长期看会被通用能力的扩展给追平甚至超越。想让交互能力随着智能一起scale，交互能力就必须做进模型本身。**

## 与经典Bitter Lesson的呼应

Rich Sutton的原始Bitter Lesson指出，利用大规模计算的通用方法最终总是击败依赖人类知识工程的方法。TML将这一逻辑延伸到交互领域——外挂组件本质上是人类知识工程的产物，而将交互做进模型则是让模型自己学习交互规律。

## 对行业的影响

这一观点与行业主流的外挂组件路线形成对立。如果TML的判断正确，当前的语音助手架构（如基于VAD+ASR+LLM+TTS的流水线）将被端到端的[[实时交互模型]]所取代。