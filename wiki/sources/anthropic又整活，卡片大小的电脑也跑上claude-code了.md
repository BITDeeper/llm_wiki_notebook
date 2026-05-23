---
type: source
title: "Anthropic又整活，卡片大小的电脑也跑上Claude Code了"
created: 2026-05-16
updated: 2026-05-16
tags: [claude-code, cardputer, 边缘ai, anthropic, 开发者活动]
related: [claude-code, anthropic, cardputer, 边缘ai终端, vibe-coding]
sources: ["anthropic又整活，卡片大小的电脑也跑上claude-code了.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/1fWBaNIqnVYV3U02xl1Xvg"
venue: 机器之心
---
# Anthropic又整活，卡片大小的电脑也跑上Claude Code了

## 摘要

机器之心报道了 [[anthropic]] 在「Code With Claude」活动上向开发者发放 [[cardputer]]（M5Stack 出品的卡片大小开发板），并成功在该设备上运行完整的 [[claude-code]]。开发者利用这一超小型硬件快速构建了多个趣味应用，包括陀螺仪控制的「魔法棒」、Tilt 迷宫游戏和 Oregon Trail 文字冒险游戏。

## 核心内容

- **硬件载体：** [[cardputer]] 搭载 ESP32-S3 芯片，配备迷你 QWERTY 键盘、彩色小屏幕、扬声器和陀螺仪，体积仅卡片大小。
- **运行方式：** Claude Code 在 Cardputer 上完整运行，开发者通过自然语言描述即可生成可运行程序，是 [[vibe-coding]] 在硬件创客场景的典型实践。
- **开源项目：** dakshaymehta/cardputer-claude-os 提供了完整的部署方案。
- **技术实质：** ESP32-S3 算力不足以本地运行大模型，实际应为通过 Wi-Fi 调用云端 API，Cardputer 仅充当超薄终端界面。

## 意义

报道展示了 AI 编程工具在极端受限硬件上的部署可行性，同时体现了 Anthropic 在开发者生态运营上的创意——通过硬件伴手礼制造社区话题，与同期发生的订阅制争议形成软性对冲。