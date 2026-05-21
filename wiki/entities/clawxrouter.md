---
type: entity
title: ClawXRouter
tags: [software, plugin, router, open-source]
related: [edgeclaw, openclaw, 端云协同, 三级隐私路由, 性价比感知路由, 双轨记忆, pinchbench]
created: 2026-04-01
updated: 2026-04-01
sources: ["龙虾成本狂降58%！清华人大面壁等最新开源“智能调度员”.md"]
---

# ClawXRouter

[[ClawXRouter]] 是一个开源的端云协同 AI 智能体路由插件，由 [[清华大学-THUNLP]]、[[中国人民大学]]、[[面壁智能]] 与 [[OpenBMB]] 联合开发。它基于 [[EdgeClaw]] 框架构建，旨在解决 AI Agent 在实际落地中面临的隐私安全、计算成本和模型性能之间的矛盾。

## 核心功能

ClawXRouter 通过在本地和云端模型之间进行智能路由，实现了以下目标：

1.  **解决“不敢用”**：通过 [[三级隐私路由]] 机制，确保敏感数据不离开本地。
2.  **解决“用不起”**：通过 [[性价比感知路由]] 机制，将简单任务分配给低成本模型，降低 58% 的 API 成本。
3.  **解决“用不好”**：通过 [[智能脱敏]] 和 [[双轨记忆]]，在保护隐私的同时利用云端大模型的强大能力。

## 技术架构

### 路由管线
ClawXRouter 采用可组合的路由管线设计，遵循“安全优先”原则：
1.  **隐私路由器**（高权）：首先扫描数据，发现敏感数据直接进行本地处理或脱敏处理。
2.  **性价比路由器**：在确保数据安全的前提下，评估任务复杂度，选择性价比最高的模型。

### Hook 机制
通过 10 个 Hook 覆盖从模型选择到会话结束的完整生命周期，无侵入式接管 [[OpenClaw]] 原有流程。

### 可视化控制台
提供中英双语 Dashboard（默认端口 `18789`），包含以下面板：
- 用量概览
- 会话记录
- 检测日志
- 路由规则配置
- 模型配置

## 性能表现

在 [[PinchBench]]（包含 23 项 OpenClaw Agent 基准测试）上的测评结果显示：
- **成本**：降低了 **58%**。
- **性能**：反而提升了 **6.3%**。

## 安装与使用

```bash
# 前置条件：已安装 OpenClaw
# 通过 npm 安装（推荐）
pnpm add -w @openbmb/clawxrouter

# 或通过 ClawHub 安装
openclaw plugins install clawhub:clawxrouter

# （可选）安装本地推理后端
ollama pull openbmb/minicpm4.1
ollama serve

# 启动
openclaw gateway

# 访问 Dashboard
# http://127.0.0.1:18789/plugins/clawxrouter/stats
```

## 关联实体

- **开发机构**：[[清华大学-THUNLP]], [[中国人民大学]], [[面壁智能]], [[OpenBMB]]
- **依赖生态**：[[OpenClaw]], [[EdgeClaw]]
- **推荐模型**：[[MiniCPM4.1]]