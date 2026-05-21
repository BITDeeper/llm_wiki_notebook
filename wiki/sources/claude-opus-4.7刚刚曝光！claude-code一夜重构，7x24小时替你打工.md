---
type: source
title: "Claude Opus 4.7刚刚曝光！Claude Code一夜重构，7x24小时替你打工"
authors: [好困, 桃子]
year: 2026
url: "https://mp.weixin.qq.com/s/ZeQ8VOEC53rmXB4jPSfPDw"
venue: "新智元"
tags: [anthropic, claude-code, ai-agent, automation, product-release]
related: [claude-code, claude-opus-4-7, routine, kairos, ai-subscription-crisis]
created: 2026-04-15
updated: 2026-04-15
sources: ["claude-opus-4.7刚刚曝光！claude-code一夜重构，7x24小时替你打工.md"]
---

# Claude Opus 4.7刚刚曝光！Claude Code一夜重构，7x24小时替你打工

## 摘要
本文报道了 Anthropic 对 [[claude-code]] 桌面端进行的重大重构，以及新推出的 [[routine]] 功能。文章还提及了即将发布的 [[claude-opus-4-7]] 模型及一款挑战 Adobe 和 Figma 的设计工具。

## 核心内容

### Claude Code 桌面端重构
- **并行多会话**：支持在同一窗口内并行运行多个 [[claude]] 实例，并排显示，支持拖拽布局。
- **集成开发环境**：内置终端、原生文件编辑、重新设计的 Diff 查看器，支持 HTML 和 PDF 预览。
- **SSH 连接**：支持连接远程服务器，保留 CLI 插件兼容性。
- **用户体验**：研究员 Alex Albert 表示，配合 Cowork 和 Code，基本不再需要打开其他 App。

### Routine 功能上线
此前泄露的代号为 [[kairos]] 的项目正式以 [[routine]] 名称上线。该功能允许 Claude Code 作为“云端员工”自主运行。

**核心特性：**
- **云端托管**：任务在 Anthropic 云端运行，不依赖本地设备状态。
- **三路触发器**：
  1. **定时触发**：按小时、每晚或每周执行。
  2. **API 触发**：通过 HTTP POST 请求触发，支持 Bearer Token 认证，可集成告警系统（如 Datadog）或 CI/CD 流程。
  3. **GitHub Webhook**：支持多种 GitHub 事件（PR、Issue、Push 等）。
- **一PR一会话**：为每个 Pull Request 维护独立的持久化会话上下文，持续跟踪 PR 的动态。
- **环境隔离**：支持自定义网络权限、环境变量和初始化脚本。

**配额限制（体现 [[ai-subscription-crisis]]）：**
- Pro：5 次/天
- Max：15 次/天
- Team/Enterprise：25 次/天

### Opus 4.7 与设计工具爆料
- **Claude Opus 4.7**：代号 `capybara-v2`，预计本周发布。有传闻称 Claude 近期“降智”是为新模型让路。
- **设计工具**：一款直接生成网页和演示文稿的工具，被视为对 Gamma、Figma 和 Adobe 的直接挑战。消息引发相关公司股价波动。

## 关键洞察
- [[claude-code]] 正从单纯的编程助手演变为全功能的 AI IDE 和自动化平台。
- [[routine]] 的 API 和 Webhook 集成能力，标志着 AI Agent 深度融入现有软件工程流程。
- 严格的每日运行配额反映了 [[ai-subscription-crisis]]，即 Agent 任务的高算力成本正在迫使平台调整订阅模式。