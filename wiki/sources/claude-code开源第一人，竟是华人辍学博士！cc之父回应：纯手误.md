---
type: source
title: Claude Code开源第一人，竟是华人辍学博士！CC之父回应：纯手误
tags: [安全漏洞, 源码泄露, claude-code, anthropic, 事故分析]
related: [claude-code, anthropic, chaofan-shou, source-map-leaks]
created: 2026-04-02
updated: 2026-04-02
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/Btt9gLDu5QkEYQVXmWBRTQ"
venue: "新智元"
sources: ["claude-code开源第一人，竟是华人辍学博士！cc之父回应：纯手误.md"]
---

# Claude Code开源第一人，竟是华人辍学博士！CC之父回应：纯手误

## 摘要
报道了 [[anthropic]] 旗下产品 [[claude-code]] 发生的重大源码泄露事件。安全研究员 [[chaofan-shou]] 发现并公开了因 npm 包打包失误导致的 51.2 万行源码泄露。Claude Code 之父 Boris Cherny 回应称这是人为失误，与 Bun 运行时漏洞无关。这是 Anthropic 第二次因同样原因（source map 未删除）发生泄露。

## 关键事件
- **泄露时间**: 2026年3月31日凌晨4点23分
- **泄露规模**: 51.2万行 TypeScript 代码，1900个源文件
- **泄露原因**: 发布 npm 包时未删除 `cli.js.map` 文件，该文件指向公开的 Cloudflare R2 存储桶
- **发现者**: [[chaofan-shou]]（华人安全研究员，Solayer 工程师，前 FuzzLand 联合创始人）

## 核心发现
1. **重复犯错**: 2025年2月曾发生过完全相同的 source map 泄露事故。
2. **官方定性**: [[anthropic]] 发言人及 Claude Code 之父 Boris Cherny 确认为“发布打包问题”，否认了 Bun 运行时 bug 导致泄露的猜测。
3. **源码细节**:
   - 包含 187 个加载动词（`SPINNER_VERBS`）。
   - 包含监控用户负面情绪的正则表达式（检测“垃圾”、“去你的”等词汇）。
   - 包含名为“Undercover Mode”的防泄露子系统（讽刺的是该系统本身也被泄露）。

## 发现者背景
[[chaofan-shou]] 是伯克利辍学博士，导师为程序分析专家 Koushik Sen。其个人主页“Things I Broke”记录了攻破 CVS Pharmacy、Twitter、Devin.ai 等平台的战绩，Bug Bounty 总收入达 190 万美元。

## 影响与争议
- GitHub 镜像仓库被 fork 超 7.7 万次。
- 引发对 [[anthropic]] 工程流程控制能力的质疑。
- 揭示了公司内部监控用户情绪（“fucks 图表”）的具体技术手段。