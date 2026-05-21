---
type: source
title: "GLM-5.1上线，编程表现贴Opus 4.6开大，Coding plan瞬间断货"
tags: [智谱, glm-5.1, 编程评测, 模型发布, 空间推理]
related: [智谱, glm-5.1, claude-code, openclaw, coding-evaluation, 空间一致性]
created: 2026-03-28
updated: 2026-03-28
authors: [梦瑶]
year: 2026
url: "https://mp.weixin.qq.com/s/QCZt_4XkrH_abwbWX0s0RA"
venue: 量子位
sources: ["glm-5.1上线，编程表现贴opus-4.6开大，coding-plan瞬间断货.md"]
---

# GLM-5.1上线，编程表现贴Opus 4.6开大，Coding plan瞬间断货

## 概述
本文报道了智谱 AI 发布的最新一代模型 [[glm-5.1]]。该模型在编程能力上相比上一代 [[GLM-5]] 提升显著，在官方 [[Coding Evaluation]] 评测中得分逼近 [[Claude Opus 4.6]]。文章还记录了社区实测中展现出的多模态空间推理能力，以及因需求火爆导致 GLM Coding Plan 短暂售罄的现象。

## 核心要点

### 性能表现
- **编程能力提升**：相比 GLM-5 提升近 10 分，与 Claude Opus 4.6 仅差 2.6 分。
- **社区推测**：其实力可能已超过 Claude Sonnet 4.6，仅次于 Opus 4.6。
- **上下文窗口**：维持在 200K 级别。

### 实测案例
- **AI 版「我的世界」**：用户 @AICodeKing 利用 GLM-5.1 生成了可交互的 3D 游戏场景。
- **室内设计图**：模型展现了优秀的空间结构理解和动线规划能力。
- **国际象棋游戏**：生成了可运行的网页游戏。

### 技术亮点
- **空间一致性**：在连续环境生成中保持空间逻辑、视角和物体关系的连贯。
- **动态补全能力**：随着交互或视角移动，实时生成并补全未显示区域的内容。

### 市场反响
- **售罄现象**：GLM Coding Plan (Lite/Pro/Max) 全量开放后迅速售罄，反映了市场对高性能国产编程模型的极高需求及算力资源的紧缺。
- **快速迭代**：距离 GLM-5 发布仅一个多月，处于极快的迭代周期。

### 配置与兼容性
- **平台支持**：支持在 [[Claude Code]] 和 [[OpenClaw]] 等第三方工具中手动配置使用。
- **接口标准**：兼容 OpenAI 格式，降低开发者迁移成本。
- **配置方法**：通过修改 `~/.claude/settings.json` 文件中的环境变量（如 `ANTHROPIC_DEFAULT_SONNET_MODEL`）来替换底层模型。

## 相关链接
- [模型入口](https://open.bigmodel.cn/glm-coding)
- [配置指南](https://docs.bigmodel.cn/cn/coding-plan/using5-1#glm-5-1)