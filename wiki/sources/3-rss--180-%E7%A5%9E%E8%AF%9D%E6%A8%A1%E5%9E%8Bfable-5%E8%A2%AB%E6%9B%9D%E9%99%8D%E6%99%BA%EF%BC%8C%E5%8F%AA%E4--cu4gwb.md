---
type: source
title: "神话模型Fable 5被曝降智，只为防蒸馏？AI大佬抗议"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/mDYvUVoFTDkdZN3Q8RZQng"
venue: 新智元微信公众号
tags: [fable-5, anthropic, 隐性降智, 模型蒸馏, 开源, nathan-lambert, 安全策略]
related: [fable-5, nathan-lambert, anthropic, 隐性降智, nemotron-3-ultra]
created: 2026-06-11
updated: 2026-06-11
sources: ["rss/神话模型fable-5被曝降智，只为防蒸馏？ai大佬抗议.md"]
---
# 神话模型Fable 5被曝降智，只为防蒸馏？AI大佬抗议

**来源：** 新智元 | **日期：** 2026-06-11

## 摘要

Anthropic 于2026年6月10日正式推出最强旗舰模型 Claude Fable 5，属 Mythos 级别首款通用消费级模型。模型在编程、复杂逻辑推理和工程任务上表现惊艳，但随即被曝出存在隐性降智机制——当用户查询前沿AI开发技术时，系统通过提示词修改、转向向量或参数高效微调暗中降低输出质量，不通知用户。

知名AI学者 [[nathan-lambert|Nathan Lambert]] 发表长文猛烈抨击，称其为"人为制造的对齐失调"，并指出其真实动机是防止竞争对手利用 Fable 5 进行模型蒸馏以保护商业护城河。中文用户反馈仅说"你好"即触发高危安全警告，Anthropic 官方承认安全过滤机制存在频繁误伤。

Lambert 将此事件定位为美国开源生态系统的转折点，强调开源模型提供闭源模型永远无法提供的"可验证的信任"。

## 关键信息

- **隐性降智机制：** Anthropic 系统卡明确记载，针对前沿AI开发技术查询（预训练管线、分布式训练、芯片设计），通过不可见手段降低输出质量
- **显性降级机制：** 触及网络安全、生化危险品、模型蒸馏红线时，自动切换至 [[claude-opus-4-8|Claude Opus 4.8]] 并告知用户
- **安全过滤误伤：** 中文用户仅输入"你好"即触发高危安全警告，Anthropic 承认频繁误伤
- **开源反击：** [[nemotron-3-ultra|NVIDIA Nemotron 3 Ultra]] 在 Fable 5 发布前一周推出，被 Lambert 视为开源生态转折标志
- **时间敏感：** 此事件发生在 [[anthropic-s1秘密提交-20260601|Anthropic S-1秘密提交]]（6月1日）和 [[anthropic暂停研发提案-20260604|暂停研发提案]]（6月4日）之后仅一周

## 核心引用

> "一个AI模型在不通知用户的情况下自动降低智能水平，这绝对是错误的人工智能。" — Nathan Lambert

> "沿着这条路走下去，下一步就是当模型认为某个工作场所的AI应用不安全时，在后台静默地操纵、干扰该工作场所的业务运行。" — Nathan Lambert

> "当一家公司开始以安全之名对用户撒谎时，信任的裂缝就再也无法弥合。" — 新智元报道