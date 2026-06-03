---
type: entity
title: Qwen-3.7 Plus
created: 2026-06-03
updated: 2026-06-03
tags: [qwen, 多模态, agent, 代码生成, 阿里, 大模型]
related: [多模态混合agent, 长程agent任务, qoderwork, qoder-ide, vibe-coding]
sources: ["阿里qwen上新多模态旗舰！11小时自动研发app，狂写10000+行代码1000+次调用.md"]
origin_date: 2026-06-03
---
# Qwen-3.7 Plus

阿里推出的多模态交互式混合Agent模型（Qwen3.7-Plus），是Qwen系列的最新旗舰产品。该模型将视觉感知、语言理解、代码生成、工具使用、GUI操作等能力统一放入同一个推理循环，即"Hybrid"（混合）模式。

## 核心能力

- **多模态感知** — 能感知现实场景、读屏并操作GUI、从视觉参考里写代码、端到端导航App、结合网页知识回答视觉问题
- **长程代码任务** — 连续稳定运行超过11小时，完成完整App研发周期
- **跨框架兼容** — 在 [[claude-code]]、[[openclaw]]、Qwen Code等不同Agent框架中无需适配即可稳定运行

## 关键案例

### 11小时自动研发英语词汇学习App
基于Qwen3.7构建的Hybrid-Agent系统，自动完成完整研发周期：需求文档生成→自动编码→安装部署→测试用例创建→GUI自动化测试→多场景并行测试→产品文档更新→自主版本演进。产出10000+行代码，执行1000+次Agent调用。

### macOS Stocks App复刻
智能体先与原生应用交互理解UI布局和功能细节，再生成SwiftUI源码，接入真实行情API，自动编译并启动复刻应用。10项功能验证（实时行情加载、股票选择和切换、多周期视图切换、搜索过滤、详细统计面板展示等）全部通过。

## 技术规格

- **API接口** — 支持文本和图像/视频混合输入，兼容OpenAI规范的chat completions和responses API
- **preserve_thinking** — 多轮对话中保留每轮思考内容，官方推荐在智能体任务中开启
- **基准测试配置** — Terminal Bench 2.0使用Harbor/Terminus-2 harness，5小时超时，12核CPU/24GB内存，温度1.0，最大token数80K，上下文256K；Kernel Bench L3配备H100 80GB GPU，限制500次工具调用

## 基准表现

- 代码任务：各模型表现接近，长程代码任务能拉开差距
- 通用智能体任务：基本处于第一梯队
- 多模态任务：为Qwen-3.7 Plus的强项

## 开放权重状态

截至报道发布时，Qwen-3.7 Plus可能未开放权重。大量开发者希望能继续像Qwen之前的模型一样开放权重、在本地部署。

## 产品关系

Qwen-3.7 Plus可能为阿里的 [[qoderwork]] 和 [[qoder-ide]] 等AI办公/开发产品线提供底层模型能力，属于阿里AI产品生态的核心技术底座。