---
title: "OpenClaw的风刮到了多模态生成，6B小模型超越Nano Banana 2！"
date: 2026-04-11
source: "量子位"
url: "https://mp.weixin.qq.com/s/NX7FAtlTGVjYO06OZeONlw"
rss_id: "2247882420_3"
---
GEMS团队 投稿
量子位 | 公众号 QbitAI
现在的多模态生成模型已经在主流任务上表现出色，却仍在复杂指令和下游任务上表现不佳。
近期火热的Agent框架，例如OpenClaw，Claude Code，在复杂的真实任务中取得了惊人的表现。近日，上海人工智能实验室联合南京大学、香港中文大学及上海交通大学，将OpenClaw的成功应用于
多模态生成
领域。
他们提出
GEMS
（Agent-Native Multimodal
Ge
neration with
M
emory and
S
kills）
，激发小模型潜力，甚至让6B小模型在部分任务超越了Nano Banana 2。
GEMS：Agent-Native Multimodal Generation with Memory and Skills
受到先进的Agent系统例如OpenClaw，Claude Code的启发，研究团队将其中的成功经验运用于多模态生成领域，来解决上述问题。
GEMS
包含三大特性：
Agent Loop：
引入了一个结构化的多智能体协作框架，通过闭环优化，确保生成结果逐步对齐。
Agent Memory：
不同于简单的历史堆叠，GEMS采用了分层压缩策略。它将历史轨迹中的事实性要素保留，而将冗长的思维链
（CoT）
压缩为精炼的经验，有效减少了Token开销并提升了长时迭代的指引效率。
Agent Skill：
建立了一个可扩展的专家知识库，通过按需加载，在触发相关任务时加载详细指令，极大地扩展了系统的能力边界。
实验分析
为了验证GEMS的优势，研究团队在五个主流任务和四个下游任务上，基于不同的生成模型进行了实验，主要结果如下：
基于Z-Image-Turbo，在主流任务平均+14.22。在下游任务上，超越最好baseline +8.92，展现了
GEMS
框架的有效性
进一步分析
研究团队进一步地分析了各个模块的有效性。
左图展示了通过逐步加入Agent Loop，Agent Memory，Agent Skill等模块，性能逐渐提升，甚至使得6B的Z-Image-Turbo在GenEval2上超越了Nano Banana 2。
右图则展示了Memory模块的具体变体，体现了将思维链压缩为经验的有效性。
团队还分析了轮次
（平均生图次数）
和性能的权衡，展现了
GEMS
框架性能和效率的双重优势。
进一步的消融揭示了Memory和Skill模块有效的提升了迭代优化过程的质量，减少了平均轮次。
技能加持，生成更有艺术感术感
GEMS
的
Agent Skills
能让模型根据任务自主触发特定技能，显著提升生成效果。
案例
1
：
山脉日出
无技能：
山脉虽真实，但光影平淡，缺乏艺术感。
有
技能
：
触发
Aesthetic Drawing
，光影层次丰富，画面更有美感。
案例
2
：
漂浮的书
无技能：
书本漂浮效果简单，创意不足。
有技能：
触发
Creative Drawing
，书页飞舞、星空点缀，整体更梦幻。
通过这两个案例，可以直观感受到
GEMS
技能模块让生成结果不仅正确，更生动、有故事感。
结语
GEMS
证明了：智能体化的管理策略可以有效弥补基础模型能力的不足。通过赋予模型“长记性”和“学技能”的能力，即使是轻量化的开源模型也能在复杂任务中展现出媲美甚至超越闭源模型的潜力。这为未来多模态生成的进一步演进提供了一个极具参考价值的范式。
论文地址：
https://arxiv.org/abs/2603.28088
项目主页：
https://gems-gen.github.io/
代码仓库：
https://github.com/lcqysl/GEMS
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
我们正在招聘一名眼疾手快、关注AI的
学术编辑实习生
🎓
感兴趣的小伙伴欢迎关注 👉
了解详情
🌟 点亮星标 🌟
科技前沿进展每日见