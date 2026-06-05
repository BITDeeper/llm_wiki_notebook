---
type: entity
title: WebBridge
created: 2026-06-04
updated: 2026-06-04
tags: [浏览器插件, agent, 工具]
related: [kimi-work, 浏览器操控agent]
sources: ["kimi-work内测结论：是比code们更懂中国职场.md"]
origin_date: 2026-06-03
---
# WebBridge

[[kimi-work]] 内置的浏览器插件，是实现浏览器操控 Agent 能力的核心组件。

## 功能

- 自动打开网页
- 点击按钮
- 填写表单
- 提取信息
- 自动化信息捕捉与整理

## 实测案例

在量子位的评测中，WebBridge 成功完成了以下任务：
- 自动打开谷歌浏览器中的小红书
- 搜索24小时内发布的具身智能行业资讯类笔记
- 将结果整理为包含标题、作者ID、发布时间、点赞数量和笔记链接的结构化表格

## 评价

- 浏览器交互体感优于竞品（暗指 Claude/Codex 类产品）
- 生成耗时较长（Agent 类产品的常见特征）
- 是 [[浏览器操控agent]] 概念的具体产品实现