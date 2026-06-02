---
type: source
title: "ICML 2026 | 上海创智学院 x 复旦大学提出智能体安全新范式：让智能体学会「三思而后行」"
created: 2026-06-01
updated: 2026-06-01
tags: [智能体安全, 思维校正, icml-2026, 论文, 行为安全]
related: [thought-aligner, 智能体行为安全, 思维校正, 上海创智学院, 复旦大学]
sources: ["icml-2026-上海创智学院-x-复旦大学提出智能体安全新范式-：让智能体学会「三思而后行」.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/TMccM7M3LaoFMpPbG33drw"
venue: 机器之心
---
# ICML 2026 | 上海创智学院 x 复旦大学提出智能体安全新范式：让智能体学会「三思而后行」

## 摘要

本文报道了上海创智学院与复旦大学联合提出的智能体行为安全新范式 [[thought-aligner]]，一种轻量级可插拔的"思维校正"模块。该工作已被 ICML 2026 接收。

## 核心内容

### 问题定义
- AI 安全的核心正从"内容是否安全"转向"行为是否可靠"
- 智能体以 [[thought-action-observation循环]] 方式完成任务，风险往往从看似合理但偏离安全边界的 Thought 开始
- 传统输出端拦截面临"发现太晚"或"拦得太粗"的两难

### 技术方案
- [[thought-aligner]] 在 Agent 生成不安全 Thought 但尚未执行 Action 的毫秒级窗口内修正推理逻辑
- 修正后的 Thought 进入上下文历史，对后续多轮交互形成持续影响
- 提供 1.5B 和 7B 两种规模，1.5B 版本单次修正延迟可控制在 100ms 以内

### 实验结果
- 在 ToolEmu、Agent-SafetyBench、AgentHarm、AgentDojo、InjecAgent 五个基准上评测
- 将无防护状态约 50% 的行为安全水平提升至约 90%
- 平均安全收益约 23%，且未以牺牲有用性为代价
- 在 [[openclaw]] 实机环境中完成真实场景验证

### 政策背景
- 2026年5月8日，国家网信办、国家发展改革委、工业和信息化部联合印发《智能体规范应用与创新发展实施意见》
- 明确将"安全、可靠、可信"作为智能体发展底线

### 作者信息
- 第一作者：[[蒋昌跃]]（上海创智学院与复旦大学联合培养在读博士）
- 通讯作者：[[潘旭东]]（上海创智学院全时导师，复旦大学副研究员）、[[杨珉]]（复旦大学教授，计算与智能创新学院执行院长）

## 关键链接
- 论文：https://arxiv.org/abs/2505.11063
- 项目主页：https://github.com/WhitzardAgent/Thought-Aligner
- Hugging Face 模型：https://huggingface.co/WhitzardAgent/Thought-Aligner-7B
- ModelScope 模型：https://www.modelscope.cn/models/bgbgbrt/Thought-Aligner-7B-v1.0