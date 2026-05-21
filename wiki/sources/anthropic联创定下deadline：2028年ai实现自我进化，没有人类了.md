---
type: source
title: "Anthropic联创定下deadline：2028年AI实现自我进化，没有人类了"
created: 2026-05-05
updated: 2026-05-05
tags: [ai-takeoff, scaling-law, automation, anthropic, jack-clark]
related: [jack-clark, 递归式自我改进, 自动化-ai-研发, metr-评估, swe-bench, core-bench, mle-bench]
authors: ["机器之心"]
year: 2026
url: "https://mp.weixin.qq.com/s/FcTzvVjn3OVNpLDDZk-ctA"
venue: "机器之心"
sources: ["anthropic联创定下deadline：2028年ai实现自我进化，没有人类了.md"]
---

# 摘要

Anthropic 联合创始人 [[jack-clark]] 预测，到 2028 年底，AI 实现 [[递归式自我改进]]（即无人类参与的 AI 研发）的概率超过 60%。这一判断基于大量公开基准测试数据的“分形式”进步，包括编程能力（[[swe-bench]]）、任务时长（[[metr-评估]]）以及科研技能（[[core-bench]], [[mle-bench]]）的飞速提升。

# 核心观点

- **时间节点预测**：Jack Clark 认为 2028 年底实现自动化 AI 研发的概率为 60%，2027 年为 30%。
- **证据链**：
    - **编程能力**：SWE-Bench 分数从 Claude 2 的 2% 飙升至 Claude Mythos Preview 的 93.9%。
    - **任务时长**：AI 独立任务时长从 30 秒（GPT-3.5, 2022）延长至 12 小时（Opus 4.6, 2026）。
    - **科研技能**：复现论文（CORE-Bench）、构建 ML 系统（MLE-Bench）、微调模型（PostTrainBench）的能力快速逼近人类水平。
- **AI 研究本质**：Clark 认为 AI 研究更像“搭乐高”（工程迭代、参数调整），而非“发现广义相对论”。AI 已非常擅长前者，即便缺乏激进创造力也能推动自我进化。
- **深远影响**：
    - **对齐挑战**：递归循环中的 [[误差累积]] 可能导致系统迅速失控。
    - **生产力倍增**：资源分配不均和“阿姆达尔定律”瓶颈。
    - **经济结构改变**：形成资本密集型、人力轻型的 [[机器经济]]。

# 关键数据

- **SWE-Bench**：Claude 2 (2%) -> Claude Mythos Preview (93.9%)。
- **METR 时间跨度**：GPT-3.5 (30秒) -> GPT-4 (4分钟) -> o1 (40分钟) -> GPT-5.2 High (6小时) -> Opus 4.6 (12小时)。
- **CORE-Bench**：GPT-4o (21.5%) -> Opus 4.5 (95.5%)。
- **MLE-Bench**：o1 (16.9%) -> Gemini 3 (64.4%)。
- **PostTrainBench**：AI 得分约 25-28%，人类基线 51%。

# 争议与反驳

- **Pedro Domingos**：指出 AI 早在 LISP 时代就能“构建自身”，关键在于是否有递增回报，目前证据不足。
- **网友质疑**：从 2027 年（30%）到 2028 年（60%）的概率跳跃暗示了某种未知的“相变”或重大突破。

# 相关实体

- [[anthropic]]：构建“自动化 AI 对齐研究员”。
- [[openai]]：目标 2026 年 9 月前构建“自动化 AI 研究实习生”。
- [[google-deepmind]]：Gemini 模型在 MLE-Bench 和 Erdős 数学问题上表现优异。
- [[Recursive Superintelligence]]：刚融资 5 亿美元，致力于自动化 AI 研究。