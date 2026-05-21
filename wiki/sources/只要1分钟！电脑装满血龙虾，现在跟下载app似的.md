---
type: source
title: "只要1分钟！电脑装满血龙虾，现在跟下载APP似的"
tags: [智谱, autoclaw, openclaw, agent, 部署]
related: [autoclaw, openclaw, zhipu-ai, pony-alpha-2, autoglm-browser-agent]
created: 2026-03-10
updated: 2026-03-10
authors: [金磊]
year: 2026
url: "https://mp.weixin.qq.com/s/gBd3cPV6rI3g316om-P_iA"
venue: 量子位
sources: ["只要1分钟！电脑装满血龙虾，现在跟下载app似的.md"]
---

# 只要1分钟！电脑装满血龙虾，现在跟下载APP似的

## 概述
本文报道了 [[智谱]] 推出的电脑端应用 [[autoclaw]]（艺名“澳龙”），该产品旨在解决 [[openclaw]] 部署门槛高的问题，实现了“1分钟安装”的平民化体验。

## 核心要点

### 产品定位
- **平民化部署**：将原本需要复杂编程、环境配置（Python、API Key）和云端算力的 [[openclaw]] 技术，封装为普通用户可一键安装使用的桌面软件。
- **多模型支持**：支持 GLM-5、DeepSeek、Kimi 等模型，并预置了专为 Agent 场景设计的 [[pony-alpha-2]] 模型。

### 技术特性
1.  **模型优化**：[[pony-alpha-2]] 针对 [[多步任务稳定性]] 进行了优化，旨在解决通用大模型在执行复杂 Agent 任务时的中途崩溃和幻觉问题。
2.  **工具增强**：集成了 [[autoglm-browser-agent]]，相比原生 Browser use，能更稳定地完成多步骤、跨页面的复杂浏览器任务。
3.  **开箱即用**：预置 50+ Skills，并支持一键接入飞书等 IM 工具，实现 [[im-集成-agent]]。

### 实测场景
- **资讯监控**：定时抓取并总结多平台（B站、抖音、GitHub 等）资讯。
- **舆情监控**：在飞书群聊中自动识别并汇报风险舆情。
- **跨平台同步**：自动同步内容至小红书、X 等平台。
- **自动化开发**：基于 GitHub 仓库自动生成 UI（如 Star-Office-UI）。

## 行业意义
文章指出，[[autoclaw]] 的发布标志着 AI 交互范式从 Chat 向 Agent 的跃迁，将技术权力从极客圈下放给大众，是 [[agent-部署平民化]] 的典型案例。