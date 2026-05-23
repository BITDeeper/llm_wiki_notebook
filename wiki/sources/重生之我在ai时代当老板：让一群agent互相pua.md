---
type: source
title: "重生之我在AI时代当老板：让一群Agent互相PUA"
created: 2026-05-14
updated: 2026-05-14
tags: [多agent, minimax, agent-team, 产品评测, vibe-coding]
related: [minimax, mavis-minimax, team-engine, 多agent协作架构, 上下文焦虑, worker-verifier对抗, cost-of-consensus]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/qSuKYdSxQYuHVsQvf547Dg"
venue: 量子位微信公众号
---
# 重生之我在AI时代当老板：让一群Agent互相PUA

量子位发布的关于 [[minimax]] 推出多Agent产品 [[mavis-minimax]] 的一手体验报道。作者以vibe coding爱好者的视角，通过让Mavis完成一个HTML专题页任务，深入体验了其多Agent协作架构。

## 核心内容

文章围绕单Agent在长程任务中的三大痛点展开：
1. **Agent偷懒**：频繁中断请示，需要反复说"继续"
2. **长任务越跑越笨**：上下文过长导致注意力衰减
3. **IM冷暴力**：长任务执行期间无法响应用户消息

MiniMax通过 [[team-engine]] 状态机驱动的 [[多agent协作架构]] 解决这些问题，采用Leader/Worker/Verifier三角色分工和 [[worker-verifier对抗]] 机制。

## 关键发现

- 作者仅用一句话prompt，Mavis在28分钟内无中断交付了完整的HTML专题页
- Agent Team自动组建了3个Worker（内容创作、设计、HTML编程）和Verifier进行质量验收
- MiniMax正视多Agent成本更高的事实，引用 [[cost-of-consensus]] 论文论证"有结构的多Agent"与"无结构的多Agent"的本质区别
- TokenPlan和Agent Plan合并，一份订阅打通CLI、API、Agent

## 重要观点

- 多Agent时代，用户角色从"提示词工程师"转变为"团队管理者"
- Agent与人类使用同一套操作协议（prompt/spawn/abort/kill），操作可审计追溯
- Team Engine判断何时需要多Agent、何时单Agent足够，以工程框架把控ROI
- MiniMax预计将Agent Team与MiniMax M3一起开源