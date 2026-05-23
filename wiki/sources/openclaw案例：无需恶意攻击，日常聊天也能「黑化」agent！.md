---
type: source
title: "OpenClaw案例：无需恶意攻击，日常聊天也能「黑化」Agent！"
created: 2026-05-22
updated: 2026-05-22
tags: [agent安全, 长期状态投毒, 个性化agent, 评测基准, 防御框架]
related: [非预期长期状态投毒, ulspb, stateguard, openclaw, 认知投降, 高阶幻觉]
sources: ["openclaw案例：无需恶意攻击，日常聊天也能「黑化」agent！.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/DIKUf85n19VJG1GJFDaECg"
venue: 新智元
---
# OpenClaw案例：无需恶意攻击，日常聊天也能「黑化」Agent！

新智元2026年5月22日报道，介绍香港理工大学与香港科技大学（广州）联合团队关于个性化Agent长期状态安全的研究。

## 核心内容

报道系统介绍了[[非预期长期状态投毒]]（Unintended Long-Term State Poisoning）这一新发现的安全风险：即使没有恶意提示词，普通日常聊天也可能逐步污染个性化Agent的[[长期状态]]，使其在未来任务中偏离用户真实意图。

## 关键发现

- 研究团队构建了[[ULSPB]]双语评测基准，覆盖7类漂移场景、5类任务、350个设置
- 在[[openclaw]]环境中测试了Kimi K2.5、GPT-5.4、MiniMax M2.7、Grok 4.20四个模型
- 日常对话造成的Harm Score在部分模型上接近显式注入水平
- 风险高度集中在记忆相关文件（MEMORY.md等）
- 真实聊天数据（WildChat、LMSYS-Chat-1M）同样触发不可忽视的风险
- [[stateguard]]防御框架在Targeted- Ensemble设置下将HS压低至接近0

## 论文信息

- 论文地址：https://arxiv.org/abs/2605.06731
- Demo：https://xiaoyuxu1.github.io/ULSPB_website/
- 作者：Xiaoyu Xu, Minxin Du, Qipeng Xie, Haobin Ke, Qingqing Ye, Haibo Hu
- 通讯作者：Haibo Hu, Minxin Du