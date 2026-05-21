---
type: source
title: "你的电脑已被手机接管！Anthropic亮出Dispatch：AI 24小时给你代工"
tags: [anthropic, claude, dispatch, agent, remote-control, cross-device]
related: [anthropic, claude, dispatch, remote-control, 跨设备-agent, 本地优先, cowork]
created: 2026-03-18
updated: 2026-03-18
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/R7BaRtDNYelroBmdPoYV3A"
venue: "新智元"
sources: ["你的电脑已被手机接管！anthropic亮出dispatch：ai-24小时给你代工.md"]
---

# 你的电脑已被手机接管！Anthropic亮出Dispatch：AI 24小时给你代工

## 概述
本文详细报道了 Anthropic 于 2026 年 3 月 17 日发布的 [[dispatch]] 功能。该功能允许用户通过手机远程指挥 Mac 上的 [[claude]] 执行桌面操作，标志着 AI Agent 从“坐在电脑前用”向“随时随地遥控”的范式转移。

## 核心功能：Dispatch
- **定义**：[[anthropic]] 在 [[cowork]] 功能集下推出的新特性，属于“研究预览”阶段。
- **工作原理**：
  1. Mac 端 Claude 应用生成二维码。
  2. 手机端 Claude App 扫码配对。
  3. 用户通过手机发送自然语言指令，Mac 端 Claude 执行 GUI 操作。
- **权限**：目前仅对 Max 订阅用户开放，Pro 用户需等待。

## 实测表现
根据科技媒体 MacStories 的评测，Dispatch 目前的成功率约为 **50%**。

### 成功案例
- ✅ **查找文件**：能理解截图内容并搜索（如搜索包含“预算”的截图）。
- ✅ **操作 Notion**：能列出笔记、添加 URL 到数据库。
- ✅ **读邮件**：总结邮件内容。

### 失败案例
- ❌ **打开特定应用**：如 Shortcuts。
- ❌ **跨应用操作**：如通过 iMessage 发送截图。
- ❌ **复杂授权**：如 Todoist 等第三方服务。
- ❌ **Safari 操作**：读取标签页或执行脚本均失败。

## 架构与安全：本地优先
文章强调了 Dispatch 的关键架构选择：**本地运行**。
- **数据流向**：手机发送指令 -> Mac 本地处理 -> 数据不出本地。
- **对比**：区别于云端方案（上传截图到云端分析），Dispatch 的屏幕内容和文件数据均保留在用户物理设备上。
- **意义**：在 AI Agent 能力增强（读写邮件、操作文件）的背景下，[[本地优先]] 是解决隐私安全问题的核心壁垒。

## 战略对比：双线作战
Anthropic 正在构建针对不同用户群体的“远程员工”体系：
1. **[[remote-control]]** (Claude Code)：针对程序员，控制终端（CLI）。
2. **Dispatch** (Claude)：针对普通用户，控制桌面（GUI）。

两者共享底层逻辑：手机作为入口，Mac 作为执行端，强调本地运行和安全隔离。

## 行业格局
- **vs. OpenAI**：OpenAI 正在收缩战线（砍掉 Sora 独立站、硬件项目），聚焦企业用户和代码；Anthropic 则在扩张，布局跨设备通用操作。
- **vs. NVIDIA**：NVIDIA 发布 [[nemoclaw]] 提供 AI Agent 安全沙盒（硬件/基础设施层），Anthropic 构建上层应用入口。

## 深度思考
- **操作半径演进**：对话框 -> 浏览器 -> 桌面 -> [[跨设备-agent]]。
- **工作边界模糊**：拥有一台 24 小时不关机、随时待命的 Mac，等同于雇佣了一个“不需要工资、不下班”的员工，引发了关于工作伦理和人类替代的隐忧。
- **未来变数**：若 Apple 在 WWDC 将类似能力系统级内置，Dispatch 可能面临被替代的风险。