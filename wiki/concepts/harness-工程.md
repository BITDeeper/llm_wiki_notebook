---
type: concept
title: Harness 工程
created: 2026-05-24
updated: 2026-05-24
tags: [ai编程, 智能体工程, 工程基础设施, 2026趋势]
related: [agents-md, ai编程三大致命失败模式, claude-code, codex, 任务执行范式, 断点续跑, vibe-coding]
sources: ["ai成功率从20%飙到100%！只需一个harness文件.md"]
---
# Harness 工程

Harness 工程是围绕 AI 编程智能体搭建的一整套工程基础设施，由**指令、工具、环境、状态、反馈**五个子系统组成，每一个子系统对应一种具体的智能体失败模式。

## 核心定位

Harness 不是工具，也不是提示词技巧，而是一整套工程基础设施。2026 年前后，[[anthropic|Anthropic]] 和 [[openai|OpenAI]] 几乎同时在各自的工程实验中得出同一结论：

> **AI 编程智能体频频失败，问题不在模型，在模型之外的 Harness。**

模型能力决定上限，Harness 决定你能用到上限的几成。

## 五大子系统

### 1. 指令子系统（Instructions）
- **载体**：仓库根目录的 Markdown 文件——OpenAI 阵营叫 [[agents-md|AGENTS.md]]，Anthropic 阵营叫 CLAUDE.md
- **机制**：[[codex]]、[[claude-code]]、[[cursor]] 启动时自动读取并注入系统提示词
- **解决问题**：智能体不知道项目约定，瞎写代码（风格不一致、用错包管理器、随手执行破坏性命令）
- **效果**：不到 15 行，把项目约定从反复重申变成启动时自动注入

### 2. 工具子系统（Tools）
- **载体**：[[claude-code]] 用 `.claude/settings.json`，[[codex]] 用 `~/.codex/config.toml`
- **机制**：限定智能体能调用哪些命令
- **解决问题**：越权操作（`rm -rf` 误删、`git push --force` 覆盖远端、不该联网时调外部 API）
- **策略**：允许的直接跑，禁止的直接拒，灰色地带弹确认

### 3. 环境子系统（Environment）
- **载体**：`setup.sh` / `Dockerfile` / `devcontainer.json`
- **机制**：锁定依赖版本、运行时配置、数据库状态
- **解决问题**："这台机器上能跑"的虚假环境（本地通过，CI 一跑就废）
- **关键一行**：`--frozen-lockfile`——智能体无法擅自升级任何依赖

### 4. 状态子系统（State）
- **载体**：PROGRESS.md，提交进 git，作为项目自身的一部分维护
- **机制**：把跨会话进度、断点、未完成任务持久化
- **解决问题**：[[ai编程三大致命失败模式|跨会话失忆]]——第二个会话从零开始，写出和第一个会话冲突的代码
- **约定**：新会话第一件事读 PROGRESS.md；任务完成或断点变化，立即回写

### 5. 反馈子系统（Feedback）
- **载体**：机器可执行的验证命令——测试、lint、类型检查、构建
- **机制**：智能体宣布完成前必须跑通，退出码不为 0 就不算完成
- **解决问题**：[[ai编程三大致命失败模式|过早宣布胜利]]——说 "Done!" 但一行跑不通
- **地位**：**最关键的环节**——没有反馈循环，Harness 等于没装

## 实验证据

### Anthropic 对照实验
同一 [[opus-4-5]] 模型、同一编程题：
| 指标 | 裸跑 | 套 Harness |
|------|------|-----------|
| 花费 | 9 美元 | 200 美元 |
| 成功率 | 0% | 100% |

多花的 191 美元全部用于验证循环。

### OpenAI 百万行实验
[[codex]] 团队验证：仅在仓库根目录添加不到 100 行的 [[agents-md|AGENTS.md]]，即显著提升成功率。

## 五步搭建指南

1. **根目录建 AGENTS.md**：至少包含项目说明、禁止操作、完成定义
2. **配 permissions**：`.claude/settings.json` 或 `~/.codex/config.toml`，最小两条权限规则
3. **写 setup.sh 锁环境**：已有 Dockerfile/devcontainer.json 可跳过，否则把所有版本写死
4. **建 PROGRESS.md**：四块内容——已完成、进行中、待办、已知问题
5. **固化完成定义**：在 AGENTS.md 末尾写明 type check / test / lint / build 四个命令

## 与现有概念的关系

- Harness 工程是 [[任务执行范式]] 在编程领域的具体工程化落地
- 状态子系统是 [[断点续跑]] 在编程场景的具体实现方案
- Harness 可视为对 [[vibe-coding]] 的工程化纠偏——从"零代码氛围"转向"有约束的自动化"
- 成本从 9 美元涨到 200 美元（22 倍）印证了 [[ai-subscription-crisis]] 和 [[tokenmaxxing]] 的趋势

## 行业动态

[[deepseek-v4|DeepSeek]] 最近也在招聘 Harness 工程师，标志着该概念正从头部实验室向全行业扩散。