---
type: source
title: "Claude新政，抛弃最忠实的Agent用户"
created: 2026-05-14
updated: 2026-05-14
tags: [anthropic, claude-code, agent-sdk, 定价策略, openai, codex, asi竞赛, 订阅制]
related: [anthropic, claude-code, openai, ai-subscription-crisis, agent-sdk, codex-openai]
sources: ["claude新政，抛弃最忠实的agent用户.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/uJjDf24dwRfPguaY-_i3fQ"
venue: 新智元
---
# Claude新政，抛弃最忠实的Agent用户

新智元2026年5月14日发布的深度分析报道，聚焦 [[anthropic]] 将 [[agent-sdk]] 用量从订阅限额中剥离的定价政策调整，以及 [[openai]] 同周推出 [[codex-openai|Codex]] 免费迁移的竞争反击。

## 核心内容

报道揭示了AI订阅制的结构性漏洞：订阅经济模型建立在"人类打字速度有限"的前提上，而Agent SDK的程序化调用打破了这个前提，机器24小时不停调用可在几小时内耗尽月度额度。随着SpaceX 22万块GPU到位、用户量即将爆发，Anthropic必须修补这个定价漏洞。

## 关键数据

- **额度分离**：2026年6月15日起，Agent SDK、claude -p、GitHub Actions及第三方工具调用全部从订阅限额中剥离
- **Credit额度**：Pro 20美元、Max 5x 100美元、Max 20x 200美元，按API零售价计费
- **实际缩水**：Max 20x用户此前共享的订阅限额折算约2000-5000美元，新政下仅获200美元Credit
- **Claude Code限额提升**：5小时滚动窗口翻倍 + 每周总额+50%，截止7月14日
- **OpenAI反击**：Codex两个月免费迁移，内置一键搬家工具

## ASI竞赛格局

报道将此次定价战置于 [[asi竞赛]] 的宏观框架下：OpenAI+微软+Stargate vs Anthropic+谷歌+亚马逊+SpaceX，模型能力趋同，护城河转向基础设施和开发者生态。

## 后续关键节点

- 2026年6月8日：Credit申领邮件通知
- 2026年6月15日：Agent SDK额度分离政策正式生效
- 2026年7月14日：Claude Code临时限额提升到期