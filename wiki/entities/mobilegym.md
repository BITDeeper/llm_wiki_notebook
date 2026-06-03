---
type: entity
title: MobileGym
created: 2026-06-02
updated: 2026-06-02
tags: [mobile-agent, 仿真环境, 开源项目, 强化学习, 训练平台]
related: [mobilegym-bench, 中科院自动化所, 交互保真, 结构化状态仿真, mobile-gui-agent, sim2real, use-意外副作用指标]
sources: ["浏览器秒变手机！中科院开源agent训练场，微信、原神都能跑.md"]
origin_date: 2026-05-01
---
# MobileGym

MobileGym 是由 [[中科院自动化所]] 模式识别实验室开源的浏览器端安卓仿真平台，专为 [[mobile-gui-agent|Mobile GUI Agent]] 的训练与评测而设计。

## 核心理念

MobileGym 的核心突破在于 [[交互保真]]（Interaction Fidelity）——既然 GUI Agent 只看截图、只做点击，那就不需要复刻完整的安卓内核或App后端，只要界面交互反应与真实环境一致，对Agent而言就足够"真实"。

## 技术架构

- **浏览器仿真**：在浏览器中实现完整的安卓运行时机制，包括任务栈、键盘、通知、权限流、intent路由、返回键派发等
- [[结构化状态仿真]]：整个环境状态（App数据、系统设置、设备信息）用一份结构化JSON表示，实现可读、可写、可复制、零后果重置
- [[考练一体]]：同一套可验证的环境状态信号，既作为评测的成绩单，又作为强化学习的奖励信号

## 覆盖范围

覆盖28个App（12个日常App + 16个系统App），包括微信、小红书、支付宝、B站、谷歌地图、12306、腾讯会议、微信读书、Spotify、Reddit、X、eBay等。仿真细致到主题切换、动态桌面小组件。

## 资源效率

| 指标 | 数值 |
|------|------|
| 单实例内存 | 约400MB |
| 冷启动时间 | 约3秒 |
| 并行环境（单服务器） | 96个 |
| 256任务评测时间 | 6分钟 |
| 程序化判定成本 | 0元（对比VLM裁判约60万元/96万条轨迹） |

## 训练效果

使用GRPO算法微调Qwen3-VL-4B模型：
- 测试集成功率：9.4% → 22.2%（+12.8pp）
- 真机任务成功率：32.2% → 72.9%（+40.7pp）
- [[sim2real|Sim2Real]] 迁移率：95.1%

## 链接

- 项目主页：mobilegym.dev
- GitHub：github.com/Purewhiter/mobilegym
- 论文：arXiv:2605.26114