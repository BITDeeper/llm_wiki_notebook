---
type: source
title: "Claude深夜彻底「虾化」！一句话接管电脑打工，手机指挥7×24小时不停"
tags: [claude-code, anthropic, agent, automation, computer-use]
related: [claude-code, anthropic, alex-albert, noah-zweben, orbit, 电脑使用, 手机使用, 定时任务自动化, openclaw]
created: 2026-03-24
updated: 2026-03-24
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/tBLiIN6IdqWIOnYXlMhTpw"
venue: "新智元"
---

# Claude深夜彻底「虾化」！一句话接管电脑打工，手机指挥7×24小时不停

## 摘要
报道了 [[anthropic]] 发布的 [[claude-code]] 重大更新，正式推出了全平台电脑控制功能（Computer Use）和 `/schedule` 定时任务系统。这标志着 Claude 从对话模型进化为具备实际操作能力的“数字员工”，能够通过手机远程操控电脑执行复杂任务，并实现 7×24 小时的自动化工作流。此外，代码泄露还揭示了即将到来的移动端控制功能 [[orbit]]。

## 核心要点

### 1. 全平台电脑控制
- **功能**：Claude 现已获得 macOS 系统的完全控制权，可直接操作各类应用、浏览器、本地文件和专业工具（如 PPT、Excel、开发服务器）。
- **交互方式**：用户仅需通过手机发送自然语言指令，Claude 即可在远程电脑上自主执行任务。
- **应用场景**：
  - 远程将 PPT 转为 PDF 并添加到会议邀请。
  - 在火车上启动开发服务器并截图发送。
  - 批量处理图片（调整尺寸、添加水印）。
- **竞品影响**：该功能直接导致 [[openclaw]] 等传统自动化工具被网友调侃为“可以一键卸载”。

### 2. 移动端控制（Phone Use）
- **代号**：[[orbit]]
- **证据**：开发者泄露的代码中出现了 `phone_use` 和 `phone_call_completed` 字段，且设置页面出现了“Orbit”开关。
- **潜力**：未来 Claude 将能读取手机屏幕、操作 APP、拨打电话及预约餐厅，实现全场景覆盖。

### 3. 定时任务自动化
- **指令**：`/schedule`
- **机制**：用户无需编写 Cron 表达式或配置 CI 流水线，只需用自然语言描述任务和频率，Claude 即可创建云端定时任务。
- **内部实践**：[[anthropic]] 内部已将其作为基础设施使用，用于自动修复 CI 报错、同步文档更新，甚至维护跨语言代码库（Python 到 Go）。

## 关键人物观点
- **[[alex-albert]]**（Anthropic 科学家）：称“不用再打开电脑完成工作的未来，正加速兑现”，目标是打造完全自动化的“数字人类”。
- **[[noah-zweben]]**（Claude Code 产品经理）：证实团队内部已广泛使用 `/schedule`，Claude 已成为 7×24 小时不间断工作的自动化员工。

## 意义与影响
- **范式转移**：AI 从“对话者”转变为“行动者”，从“写代码工具”进化为“个人自动化助理”。
- **基础设施化**：Agent 正在成为像电力一样的基础设施，用户只需一句话即可“雇佣”AI 进行全天候劳动。
- **安全隐忧**：全权接管电脑带来了巨大的安全风险，此前 [[openclaw]] 曾发生删除用户收件箱的事故，Claude 的自主性需配合严格的风控机制（如 [[平台完整性检查]]）。