---
type: source
title: "一个月狂烧130万美元！龙虾之父自曝token账单，费用OpenAI全包"
created: 2026-05-17
updated: 2026-05-17
tags: [ai编程, token消耗, codex, openai, peter-steinberger]
related: [peter-steinberger, openclaw-130万月度账单事件-202605, token作为生产资料, tokenmaxxing]
sources: ["一个月狂烧130万美元！龙虾之父自曝token账单，费用openai全包.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/2viAFaRVKPtNWjh6uhMEww"
venue: 机器之心
---
# 一个月狂烧130万美元！龙虾之父自曝token账单，费用OpenAI全包

## 摘要

本文报道了 [[peter-steinberger]]（龙虾之父）公开其30天Token消耗账单：总计6030亿Token、760万次请求、费用超过130万美元。OpenAI为其全额免单。文章详细描述了Steinberger运行约100个Codex实例的自动化编程流水线，涵盖PR审查、Issue去重、安全扫描、会议监听等10余种用例。同时引入了 [[tokenmaxxing]]（Token吞吐量最大化竞赛）概念，记录了 [[greg-brockman]] 和 [[andrej-karpathy]] 对Token作为新生产资料的评论。

## 核心内容

### 关键数据
- 30天Token消耗：6030亿（远超Meta排名第一用户的2810亿）
- 请求量：760万次
- 费用：130万美元+（OpenAI全额免单）
- 关闭快速模式后成本降低70%

### 自动化流水线用例
1. 约100个Codex实例长期云端运行
2. 审查每一个PR和Issue
3. @clawsweeper自动关闭已修复的旧Issue
4. 每次commit运行安全审查
5. Issue去重与聚类分析
6. 复现复杂环境并录制修复前后对比视频
7. 监控新Issue并自动创建PR
8. 扫描垃圾评论并封禁用户
9. 验证性能基准并报告回归问题
10. 监听会议并主动创建PR
11. clawpatch.ai将项目拆分为功能单元进行审查
12. 结合Vercel deepsec和Codex Security发现安全漏洞

### 行业背景
- [[tokenmaxxing]] 成为AI圈热议话题
- Meta和亚马逊公开内部Token使用排行榜，Token消耗成为员工KPI
- [[greg-brockman]] 发推："Token正在迅速成为解决问题的通用输入"
- [[andrej-karpathy]] 在播客中坦言感受到Token吞吐量压力

### 争议
- 网友质疑"130万美元啥都没交付"
- OpenAI免单意味着成本数据不反映真实市场定价
- 文章结论认为Token并非以量取胜，项目管理模式才是关键