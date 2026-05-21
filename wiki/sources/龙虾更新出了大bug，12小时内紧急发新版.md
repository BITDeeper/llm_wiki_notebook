---
type: source
title: "龙虾更新出了大bug，12小时内紧急发新版"
tags: [openclaw, update, bug-fix, qwen, deepseek]
related: [openclaw, qwen, deepseek-v4, gong-ju-wan-zheng-xing-xiao-yan, an-liang-ji-fei, nei-lian-jiao-ben-ha-xi]
created: 2026-03-24
updated: 2026-03-24
authors: [henry]
year: 2026
url: "https://mp.weixin.qq.com/s/DMkQ2cuNgI60azO0kfhjYw"
venue: "量子位"
---

# 龙虾更新出了大bug，12小时内紧急发新版

本文报道了 [[openclaw]] 在 2026 年 3 月 22 日至 23 日发生的重大版本更新事故及其紧急修复过程。

## 核心事件

OpenClaw 在发布被称为“史上变动最大”的 3.22 版本后，因“暴力拆除旧 API” 导致严重的 UI 崩溃和插件兼容性问题。开发团队在 12 小时内紧急发布了 3.23 版本进行修复。

## 事故详情

- **UI 消失**：用户反馈升级后 Web 控制界面消失，仅剩终端界面（TUI）。
- **插件罢工**：微信等 IM 插件大面积失效。
- **原因**：开发者 Peter 承认，为了上线自动化流水线，发布时意外漏掉了关键的 Web 控制界面资源文件。

## 修复措施

3.23 版本实施了以下修复和改进：
1.  **回填文件**：全量回填了缺失的运行时文件。
2.  **引入校验**：增加了强制性的 [[gong-ju-wan-zheng-xing-xiao-yan]]，确保静态资源正确打包，否则拦截发布。
3.  **兼容性优化**：优化了插件 API 的兼容性校验，回填了缺失的运行时文件。

## 模型更新

本次更新重点集成了国产大模型能力：
- **[[deepseek-v4]]**：插件重构完成，支持直接通过 API Key 使用 DeepSeek 系列模型，性能更稳且兼容新 Plugin-SDK。
- **[[qwen]]**：正式重命名为 Qwen (Alibaba Cloud Model Studio)，并支持 [[an-liang-ji-fei]]（Pay-as-you-go），中国区和全球 API Key 均可接入。
- **OpenAI**：修复了 Token 回退到过期值的 Bug。
- **Anthropic**：针对 Claude 3.7 的思维链进行了优化，防止深度推理过程被打断。

## 安全与体验增强

- **脚本安全**：对所有内联脚本计算 [[nei-lian-jiao-ben-ha-xi]]（SHA-256），防止恶意代码注入。
- **Mac 体验**：修复了 macOS 连接 Chrome 时反复弹窗的 Bug，响应速度提升近一倍。
- **视觉升级**：上线了基于 WCAG 2.1 AA 级对比标准的 Knot 红黑主题。

## 行业观察

文章指出 OpenClaw 的迭代速度极快（“10天更新的功能比 Siri 10年多”），但也暴露了激进迭代策略下的稳定性风险。