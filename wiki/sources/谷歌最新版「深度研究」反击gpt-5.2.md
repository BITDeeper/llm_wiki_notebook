---
type: source
title: "谷歌最新版「深度研究」反击GPT-5.2"
tags: [google, deepmind, gemini, agent, openai]
related: [gemini-deep-research-agent, interactions-api, deepsearchqa, project-extract]
created: 2025-12-12
updated: 2025-12-12
authors: [新智元]
year: 2025
url: "https://mp.weixin.qq.com/s/zGSEyV9lStSmYupgy6MNJQ"
venue: "新智元"
sources: ["谷歌最新版「深度研究」反击gpt-5.2.md"]
---

# 谷歌最新版「深度研究」反击GPT-5.2

本文详细报道了谷歌针对 OpenAI GPT-5.2 发布的反击动作，重点介绍了基于 [[Gemini 3 Pro]] 构建的全新 [[Gemini Deep Research Agent]]，以及专为智能体应用设计的 [[Interactions API]]。文章还深入剖析了 [[google-deepmind]] 与英国政府在「AI治国」层面的深度合作，涵盖了解决住房危机的 [[Project Extract]] 和加速科学发现的自动化实验室。

## 核心要点

### 1. 谷歌 Deep Research 的技术革新
- **模型基础**：基于 [[Gemini 3 Pro]] 构建，通过多步强化学习训练以减少幻觉。
- **性能表现**：在 DeepSearchQA 上得分 66.1%，在 BrowseComp 上与 GPT-5 Pro 相当，但成本低一个数量级。
- **工作机制**：采用迭代式研究规划机制，能够制定查询、阅读结果、识别知识缺口并再次搜索。

### 2. 开发范式的转移：Interactions API
- **有状态交互**：从传统的无状态「请求-响应」转向服务器端维护会话状态。
- **内置 Agent**：开发者可直接调用谷歌预训练的高级 Agent（如 Deep Research），而不仅仅是基础模型。
- **成本优化**：通过服务器端状态管理和缓存，降低构建复杂 Agent 的难度和成本。

### 3. AI 在国家治理层面的应用
- **Project Extract**：利用多模态地理空间推理技术，将城市规划文档处理时间从 2 小时压缩至 40 秒，效率提升百倍。
- **自动化材料实验室**：计划于 2026 年运行，利用 AI 和机器人闭环系统，将新材料发现周期从数十年缩短至数天。
- **网络安全**：利用 [[BigSleep]] 智能体在代码库中寻找漏洞，构建「数字免疫系统」。

## 关键数据
- **DeepSearchQA 得分**：66.1%
- **BrowseComp 得分**：59.2%
- **HLE 测试集得分**：46.4%
- **城市规划效率提升**：从 2 小时缩短至 40 秒 - 3 分钟

## 结论
文章认为，虽然 GPT-5.2 在某些方面表现强劲，但谷歌通过底层工程优化（如 Interactions API）和垂直领域的深度落地（如英国政府合作），展示了 AI 技术从「对话框」走向「改变物理世界的基础设施」的清晰路径。