---
type: concept
title: 端侧Agent协议标准之争
created: 2026-05-13
updated: 2026-05-13
tags: [agent, 协议, MCP, 谷歌, 端侧AI, 标准竞争]
related: [appfunctions-api, gemini-intelligence, anthropic, 安卓智能系统转型]
sources: ["安卓彻底变了！gemini接管所有屏幕，苹果连影子都没追上.md"]
origin_date: 2026-05-13
---
# 端侧Agent协议标准之争

端侧Agent协议标准之争是指谷歌自建 [[appfunctions-api]] 而非采用Anthropic主推的MCP协议所引发的标准化竞争，被定义为ASI决赛的第三条战线。

## 背景

随着AI智能体从开发者工具（如Claude Code）扩展到消费侧（如Gemini Intelligence），AI系统需要标准化接口来调用第三方服务。目前出现两条路线：

### AppFunctions API（谷歌）
- 谷歌自建的端侧Agent协议
- 让开发者主动暴露服务和数据给Gemini智能系统调用
- 设计思路与MCP高度相似但独立实现
- 25个App已跑通本地执行用例

### MCP协议（Anthropic主推）
- Anthropic主导的模型上下文协议
- 同样是让AI系统直接调用第三方服务的标准化接口
- 在开发者侧（IDE）已有广泛应用

## 竞争维度

| 维度 | AppFunctions API | MCP |
|------|------------------|-----|
| 主导方 | 谷歌 | Anthropic |
| 目标场景 | 消费侧/端侧 | 开发者侧/IDE |
| 设备基数 | 10亿安卓用户 | 开发者群体 |
| 开放性 | 谷歌控制 | 社区驱动 |

## 战略意义

谷歌选择自建而非采用MCP，说明端侧Agent的协议标准具有巨大战略价值。谁定义了智能体调用第三方服务的标准接口，谁就掌握了端侧AI生态的话语权。

## 关联条目
- [[appfunctions-api]] — 谷歌端侧Agent协议
- [[gemini-intelligence]] — AppFunctions API的调用方
- [[anthropic]] — MCP协议的主推方
- [[安卓智能系统转型]] — 协议竞争的宏观背景