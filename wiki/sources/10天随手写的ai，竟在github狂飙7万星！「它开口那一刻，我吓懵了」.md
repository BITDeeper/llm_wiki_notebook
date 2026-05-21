---
type: source
title: "10天随手写的AI，竟在GitHub狂飙7万星！「它开口那一刻，我吓懵了」"
tags: [ai-agent, open-source, github, anthropic, moltbot]
related: [moltbot, peter-steinberger, claude-code, anthropic, ai-subscription-crisis]
created: 2026-01-28
updated: 2026-01-28
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/7nC3DmND11tRV8yUcgAm0A"
venue: "新智元"
sources: ["10天随手写的ai，竟在github狂飙7万星！「它开口那一刻，我吓懵了」.md"]
---

# 10天随手写的AI，竟在GitHub狂飙7万星！「它开口那一刻，我吓懵了」

## 摘要
本文报道了由个人开发者 [[Peter Steinberger]] 在10天内开发的 AI 智能体 [[Moltbot]]（原名 Clawdbot）在 GitHub 上迅速爆火的现象。文章详细描述了该智能体展现出的惊人自主性（如自主调用 FFmpeg 和 OpenAI API 解决语音处理问题），以及由此引发的关于 AGI（通用人工智能）临近的讨论。此外，文章还记录了因商标争议被 [[Anthropic]] 强制更名的事件，以及用户利用该智能体在 Polymarket 平台实现自动化交易获利 247% 的案例。

## 核心事件

### 惊魂瞬间：自主解决问题
开发者 [[Peter Steinberger]] 分享了一个令他“后背发凉”的瞬间：他向 [[Moltbot]] 发送了一条语音消息，但他从未编写过任何处理音频的代码。
- **AI 的自主操作流程**：
  1. 识别文件头发现是 Opus 格式；
  2. 调用本地的 FFmpeg 将其转换为 .wav；
  3. 尝试使用 Whisper 失败（未安装）；
  4. 搜索环境变量找到 OpenAI API Key；
  5. 通过 curl 向 OpenAI 发送请求完成转录；
  6. 最终回复文字内容。
这一过程展示了 [[Moltbot]] 在无预设代码情况下的推理和工具调用能力，被视为 AGI 雏形的体现。

### 强制更名风波
- **原名**：Clawdbot（致敬 [[Claude Code]]）。
- **争议**：[[Anthropic]] 认为 Clawdbot 的名称和 Logo 与其产品过于相似（“康帅傅”版），且本质上是对 [[Claude Code]] 的封装，利用了底座却抢了风头。
- **结果**：在 [[Anthropic]] 的强势介入下，项目被迫更名为 [[Moltbot]]（取自龙虾蜕壳 Molt），并更换了吉祥物和 Logo。
- **连锁反应**：更名导致加密货币玩家（Clawd meme coin）利益受损，冲撞了开发者账号；甚至出现账号被冒用进行诈骗的情况。

### 自动化交易实验
一位用户将 [[Moltbot]] 接入 Polymarket 平台，投入 100 美元并赋予其交易控制权。
- **指令**：在 24 小时内实现利润最大化，策略保守，严格风控。
- **结果**：一夜之间余额增长至 347 美元（收益率 247%）。
- **意义**：证明了 AI 智能体在复杂决策领域的超人潜力，同时也引发了关于职业替代的恐慌。

## 关键观点
- **个人软件革命**：一个人借助 AI 智能体（如 [[Moltbot]]）即可完成过去需要一个团队才能完成的任务，打破了大型科技公司的封闭生态。
- **AGI 临近**：[[Moltbot]] 展现出的自主规划和工具使用能力，让业界感受到 AGI 的逼近。
- **开源与资本的冲突**：开发者免费发布项目，却遭遇代币抢注、诈骗冒用和阴谋论（如苹果营销阴谋），揭示了开源项目在资本面前的脆弱性。

## 相关条目
- [[Moltbot]]：项目本体。
- [[Peter Steinberger]]：开发者。
- [[Claude Code]]：被致敬/侵权的对象。
- [[Anthropic]]：发起强制更名的公司。