---
type: source
title: "老黄刚夸完OpenClaw，Hermes反手把智能体搬进电脑桌面"
created: 2026-06-04
updated: 2026-06-04
tags: [开源智能体, 桌面智能体, hermes, openclaw, 英伟达, GTC]
related: [hermes-agent, openclaw, nous-research, 黄仁勋, 桌面智能体, 智能体计算机]
sources: ["老黄刚夸完openclaw，hermes反手把智能体搬进电脑桌面.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/TM0kTDMlJyZgvWUTEpE-dA"
venue: 新智元
---
# 老黄刚夸完OpenClaw，Hermes反手把智能体搬进电脑桌面

新智元2026年6月4日发布的报道，聚焦开源AI智能体从命令行走向桌面端的范式转换。

## 核心内容

### 黄仁勋GTC演讲
在GTC大会上，[[黄仁勋]]盛赞[[openclaw]]为"人类历史上最受欢迎的开源项目"，称其采用速度超越Linux约30年的积累。老黄将OpenClaw提升至操作系统级别，提出[[智能体计算机]]概念——如同Windows让个人电脑成为可能，OpenClaw让个人AI智能体成为可能。英伟达联手[[peter-steinberger]]推出[[nemoclaw]]企业级参考栈。

### Hermes Desktop发布
[[nous-research]]乘势推出[[hermes-desktop]]，将[[hermes-agent]]封装为带图形界面的桌面客户端，覆盖macOS 12+、Windows 10/11和Linux三大平台。核心特性包括：流式工具调用可视化、按项目管理会话、内置文件浏览器、语音对话、可视化设置面板。桌面端复用CLI和网关的同一套智能体、技能和记忆。

### 调用量竞争格局
2026年5月10日，Hermes在[[openrouter]]全球日调用量榜反超OpenClaw登顶（2240亿 vs 1860亿token）。截至发稿（6月4日），差距扩大到6600亿 vs 2490亿token。

### 开源vs闭源路线分析
闭源阵营（[[claude-code]]、[[codex]]、[[cursor]]、Devin）卷体验；开源阵营（OpenClaw、Hermes）卷自由和可控性。OpenClaw主打"广度"（20+消息渠道接入），Hermes主打"深度"（自学习技能体系）。

### 权限与信任隐忧
桌面原生智能体能访问文件、终端、浏览器，能力越强权限风险越大。Hermes文档列出七层纵深防御，但[[桌面智能体权限与信任]]仍是隐性成本。