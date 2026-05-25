---
type: entity
title: Reasonix
created: 2026-05-25
updated: 2026-05-25
tags: [编程agent, deepseek, 缓存优化, 开源工具, 成本控制]
related: [deepseek-v4, 前缀缓存优化, 工具调用修复, 模型自动升降级, tokenmaxxing, codex, claude-code]
sources: ["deepseek-v4还能更省！新工具缓存命中率高达99.82%，2折稳定到手.md"]
origin_date: 2026-05-25
---
# Reasonix

Reasonix 是一款专为 [[DeepSeek V4]] 打造的终端编程 Agent（coding harness），由 esengine 团队开发，核心目标是通过极致的 [[前缀缓存优化]] 实现成本控制。官方明确宣称"完全不通用"、"不会发布通用功能"，每一个抽象层级都基于 DeepSeek 的 Feature 构建。

## 核心架构

### 三区上下文划分

Reasonix 将上下文划分为三个区域：

1. **固定前缀区**：系统提示和项目上下文，每个会话仅计算一次，永不修改。
2. **只追加历史区**：已确认的对话历史，只往后追加，不重写、不重排序、不注入时间戳。
3. **草稿区**：当前轮次的临时内容，在归入历史日志前需通过 [[工具调用修复]] 提炼为稳定格式。

### Append-Only 运行循环

旧上下文固定不动，新消息只往后追加，保证每一轮请求的前半部分字节完全一致，从而最大化 [[前缀缓存优化]] 的命中率。实测缓存命中率达 **99.82%**。

### 工具调用修复（Tool-Call Repair）

针对 DeepSeek 模型常见的四类工具调用异常进行最多 4 轮自动修复：

- JSON 在内部已生成但最终消息中消失
- JSON 参数畸形
- 同一工具被反复调用且参数完全相同（重复调用风暴）
- JSON 被截断

### 成本控制策略

- 默认使用 V4 Flash（便宜模型），困难任务手动输入 `/pro` 切换至 V4 Pro
- 轮次结束自动压缩上下文
- 失败次数到达警戒线后自动升级至 V4 Pro，完成后自动回退

## 成本实证

- 4 亿+ token 账单：61 美元 → 12 美元（约 2 折）
- 长会话缓存命中率稳定在 90%+
- 输入 token 成本降至原来的 1/5

## 安装使用

两步即可运行，无需全局安装：

1. 进入项目目录
2. 输入 `npx reasonix code`，启动 TUI 会话

同时提供桌面版。

## 项目地址

- GitHub: https://github.com/esengine/DeepSeek-Reasonix
- 文档: https://esengine.github.io/DeepSeek-Reasonix/

## 社区反响

项目发布后 GitHub 星标激增，社区讨论数百楼。部分网友质疑是否需要 DeepSeek 原生编程 Agent，并展示了通过微型桥接程序在 [[codex]] 中使用 DeepSeek V4 Pro 同样实现 95%+ 缓存命中的替代方案。

## 路线定位

Reasonix 代表了"深度绑定单平台优化"的路线，与通用跨平台工具（如 [[claude-code]]、[[codex]]）形成路线分歧。其设计哲学是：放弃通用性，换取对单一平台的极致优化。