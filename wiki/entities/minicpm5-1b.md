---
type: entity
title: MiniCPM5-1B
created: 2026-05-26
updated: 2026-05-26
tags: ["端侧模型", "开源模型", "大语言模型", "1b参数", "小模型", "开源", "ai造ai"]
related: [面壁, forgetrain, ultradata, 密度定律, 端侧模型, 本地推理, 量化, 面壁智能, 智能密度翻倍周期]
sources: ["不用人类手写训练框架了！ai自己写代码，训出1b端侧「小钢炮」.md", "刚刚，国产ai自己造了ai，全球首例！.md"]
origin_date: 2026-05-25
---
# MiniCPM5-1B

MiniCPM5-1B 是 [[面壁智能]] 于 2026 年 5 月 25 日开源的最新一代端侧文本基座大模型，参数规模为 1B，定位为"每个人都养得起的 AI"。该模型由 [[ForgeTrain]] 参与预训练完成，刷新了小模型的 [[智能密度翻倍周期|智能密度]] 上限，是 [[ai制造ai|AI 制造 AI]] 从概念到工程样本的标志性产物。

## 性能表现

- 在 Artificial Analysis Intelligence Index（AA-Index）榜单上以 **17.9 分**位列小尺寸模型第一，超越所有 2B 参数以下模型
- **MiniCPM5-1B/think 平均分**：42.57
- 超越 Qwen3.5-2B（16.3 分），参数量减半性能更优（Qwen3.5-2B 为 3 个月前发布）
- 综合知识、数学推理、代码编程、工具调用等核心能力维度均超越同规模竞品
- 进一步验证了 [[密度定律]]：智能密度约每 3.5 个月翻一番
- 评测项目涵盖：MMLU-Pro、MMLU-Redux、AIME-2025、AIME-2026、BFCL-v4、AA 榜单等

## 部署规格

| 精度 | 权重大小 | 适用设备 |
|------|---------|---------|
| FP16 | ~2GB | GPU、高端笔记本、服务器 |
| INT8 | ~1GB | 主流笔电、边缘计算盒子 |
| INT4/Q4 | ~0.5GB | 手机、平板、车机 |

- 支持**纯 CPU 环境运行**和**浏览器部署**

## 技术背景

MiniCPM5-1B 有两个发布版本：后训练版本和 Base Model 版本。Base Model 由 [[ForgeTrain]] 参与预训练完成，是 [[ai制造ai|AI 制造 AI]] 路线的模型级验证。数据层面使用 [[UltraData]] 高质量预训练数据集。

## 核心能力

- 综合知识、数学推理、代码推理、工具调用
- 自定义人格：可记住用户偏好，根据场景切换风格
- 桌宠应用：可常驻电脑桌面，基于 clawd-on-desk 项目二次开发

## 开发者工具链

- **推理**：SGLang、vLLM、llama.cpp、Ollama、Hugging Face、ArcLight
- **微调**：LLaMA-Factory、ms-swift

## 应用场景

- 离线客服、桌面宠物（AI 桌宠）、车机交互
- 本地助手、轻量 AI 应用
- 端侧 Agent 自主执行

## 开源地址

- Hugging Face：https://huggingface.openbmb.com/model/openbmb/MiniCPM5-1B
- GitHub：https://github.com/OpenBMB/MiniCPM
- ModelScope：https://modelscope.cn/models/OpenBMB/MiniCPM5-1B
- AtomGit：https://ai.gitcode.com/OpenBMB/MiniCPM5-1B
- 魔乐社区：https://modelers.cn/models/OpenBMB/MiniCPM5-1B