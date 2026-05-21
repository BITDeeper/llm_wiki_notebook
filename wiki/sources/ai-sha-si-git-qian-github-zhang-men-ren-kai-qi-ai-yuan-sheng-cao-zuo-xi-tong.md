---
type: source
title: "「AI杀死Git」？前GitHub掌门人开启AI原生操作系统"
tags: [ai-programming, git, infrastructure, entire, thomas-dohmke]
related: [entire, thomas-dohmke, checkpoints, ai原生操作系统, 数字谱系, claude-code]
created: 2026-04-05
updated: 2026-04-05
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/oceb_PxSlI4-jMjDDmeYGQ"
venue: "新智元"
sources: ["「ai杀死git」？前github掌门人开启ai原生操作系统.md"]
---

# 「AI杀死Git」？前GitHub掌门人开启AI原生操作系统

## 摘要
本文报道了 GitHub 前 CEO [[thomas-dohmke]] 创立的新公司 [[entire]] 及其获得的 6000 万美元种子轮融资。文章指出，传统的 Git 和 GitHub 是为人类设计的“手工业”基础设施，无法适应 AI 智能体大规模生成代码的“工业化”时代。Entire 旨在构建适应 AI 智能体的新一代操作系统和开发基础设施，通过 [[checkpoints]] 技术解决 AI 编程中的上下文丢失和代码追溯问题。

## 核心观点

### 软件工程的范式转移
- **从手工业到工业化**：当前的软件开发流程正从以人类为中心的手工业协作，转向以智能体为中心的工业化生产。
- **基础设施过时**：[[github]] 等现有工具是为人类设计的，无法处理 AI 智能体产生的高频次、大规模代码变更，导致“代码垃圾围城”。

### Entire 的解决方案
Entire 构建了三个核心组件：
1. **Git 兼容数据库**：统一代码、意图、约束条件和推理过程，建立代码的“数字基因库”。
2. **通用语义推理层**：通过 [[上下文图谱]] 实现多智能体协同，共享工作记忆，避免重复推理。
3. **AI 原生用户界面**：重构智能体与人类的协作体验。

### 关键技术：Checkpoints
- **痛点**：当前的 AI 编程会话是短暂的，一旦关闭，关于“为何如此修改”的推理过程就会丢失。
- **方案**：[[checkpoints]] 将智能体编程时的上下文（对话、提示词、推理过程、工具调用）作为版本数据的一部分存入 Git。
- **价值**：实现代码的可追溯性，便于交接和代码评审，减少智能体重复犯错。

### 行业预测
- **[[nat-friedman]]** 预测，到 2028 年 AI 将生成 90% 的代码，人类角色将从编写者转变为审查者或意图发出者。
- 到 2030 年，全球软件创造者将从数千万人扩大到十亿级别。

## 相关实体
- [[entire]]：获得巨额融资的 AI 原生开发平台初创公司。
- [[thomas-dohmke]]：Entire 创始人，前 GitHub CEO。
- [[claude-code]]：Entire CLI 支持的首批智能体之一。
- [[gemini]]：Entire CLI 支持的模型之一。

## 相关概念
- [[ai原生操作系统]]：专为 AI 智能体设计的底层操作系统。
- [[数字谱系]]：记录代码来源、意图和推理过程的元数据。
- [[代码工业化]]：以智能体为中心的大规模代码生产方式。
- [[任务执行范式]]：软件开发从人类主导向智能体主导的转变。