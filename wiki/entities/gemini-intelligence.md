```markdown
---
type: entity
title: Gemini Intelligence
created: 2026-05-13
updated: 2026-05-13
tags: ["谷歌", "gemini", "端侧AI", "智能体", "安卓", "android", "系统级AI", "OS-Agent"]
related: ["gemini", "googlebook", "appfunctions-api", "安卓智能系统转型", "anthropic", "openai", "magic-pointer", "操作系统agent", "系统智能", "马维斯"]
sources: ["安卓彻底变了！gemini接管所有屏幕，苹果连影子都没追上.md", "苹果画的饼谷歌率先搞定！gemini全面进驻全家桶，连鼠标都ai上了.md"]
origin_date: 2026-05-13
---
# Gemini Intelligence

Gemini Intelligence 是谷歌嵌入 Android 底层的系统级 AI 服务，于 2026 年 5 月 13 日在 The Android Show: I/O Edition 2026 上正式发布，标志着安卓从"操作系统"向"智能系统"的范式转型。

## 与传统AI助手模式的区别

此前在 Android 上使用 Gemini 的体验是：打开 Gemini 应用 → 输入 prompt → 复制回答 → 切换到目标应用 → 粘贴。Gemini Intelligence 将这一流程简化为系统级默认能力，无需手动切换应用。它直接嵌入 Android 底层，成为默认智能服务，而非独立应用模式。

## 核心能力

### 多步骤任务自动化
- 跨应用执行复杂任务链（如在Gmail中找到课程纲要 → 将所需书籍加入购物车）
- 长按电源键，Gemini通过屏幕视觉信息直接动手操作
- 通知栏实时显示进度，最终确认环节需用户亲自操作

### 跨应用上下文理解
- 能读取邮件、网页、日历等多个应用的信息，自动完成提醒和下单等复合任务

### 自然语言本地服务搜索
- 结合位置、时间和营业信息，通过自然语言描述找到附近服务

## 关键功能

| 功能 | 描述 |
|------|------|
| Rambler | 语音输入优化，自动将磕绊口语整理为书面文字，支持中英混合输入 |
| Create My Widget | 自然语言描述需求，生成定制化桌面小组件（Wear OS 手表支持） |
| Autofill with Google | 接入Gemini个人智能，从关联App提取信息自动填表，opt-in机制 |
| Chrome Gemini助手 | 基于Gemini 3.1模型，总结网页、回答问题、跨应用操作 |
| auto browse | 替用户自动完成预约停车位、修改订阅等任务，面向AI Pro/Ultra用户 |

## 设备覆盖矩阵

覆盖谷歌"硬件全家桶"全部形态，今年内将陆续铺开：

- **手机**：三星 Galaxy S26 系列、Pixel 10 首批深度集成，后续拓展到其他 Android 设备
- **手表**：Wear OS 支持 Create My Widget 等功能
- **汽车**：Android Auto 集成 Gemini 语音，可语音下单外卖
- **XR眼镜**：纳入全设备AI化改造
- **笔记本**：[[googlebook]] 从底层为 Gemini Intelligence 设计

## 行业定位

Gemini Intelligence 可理解为 Android 版的 Apple Intelligence，但谷歌率先实现了落地交付。它是 [[操作系统agent]] 理念的厂商原生实现版本，与腾讯 [[马维斯]] 的第三方 OS Agent 路线形成对比。

谷歌选择不与 [[anthropic|Claude]] 和 [[openai|GPT]] 争代码能力，而是将 Agent 塞进十亿级 Android 用户的日常操作链。这不是技术最强的 Agent，但可能是覆盖面最广的。

谷歌是 ASI 决赛中"最精明的两面下注者"：
- **端侧**：铺 Gemini，覆盖10亿安卓用户
- **云端**：投 Claude（Anthropic），用 TPU 算力和投资帮其估值冲到1.2万亿美元

## 开发者路径

1. **零代码App自动化**：Gemini直接操作现有App界面
2. **[[appfunctions-api]]**：开发者主动暴露服务和数据给智能系统调用

25个App已在跨设备环境中跑通本地执行用例。

## 交付风险

- 部分功能标注"今年内陆续铺开"，实际交付时间待定
- 所有演示均为官方展示，缺乏独立实测验证

## 关联条目
- [[gemini]] — 谷歌主力大语言模型
- [[googlebook]] — 首款从底层为 Gemini Intelligence 设计的笔记本
- [[appfunctions-api]] — 端侧Agent开发者接口
- [[安卓智能系统转型]] — 安卓OS→智能系统范式转移
- [[操作系统agent]] — OS Agent 理念总览
- [[马维斯]] — 腾讯第三方 OS Agent 路线
```