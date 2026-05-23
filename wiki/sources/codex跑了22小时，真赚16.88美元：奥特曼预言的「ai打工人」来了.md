---
type: source
title: "Codex跑了22小时，真赚16.88美元：奥特曼预言的「AI打工人」来了"
created: 2026-05-12
updated: 2026-05-12
tags: [codex, ai智能体, 自主赚钱, github, bounty, openai]
related: [codex-16-88美元实验-202605, openai, sam-altman, token作为生产资料, 任务执行范式]
sources: ["codex跑了22小时，真赚16.88美元：奥特曼预言的「ai打工人」来了.md"]
authors: [新智元, 元宇]
year: 2026
url: "https://mp.weixin.qq.com/s/BpewuMYggDihqspI2qazRg"
venue: 新智元
---
# Codex跑了22小时，真赚16.88美元：奥特曼预言的「AI打工人」来了

## 摘要

报道了开发者Chris使用OpenAI Codex智能体，仅凭一条"去GitHub上赚5美元"的指令，让Codex在22小时内自主完成找活、写代码、提PR、沟通维护者、收款的完整闭环，最终获得16.88美元真实收入的事件。

## 核心内容

- **实验过程**：Chris向Codex下达极简指令后，Codex定位到开源安全审计赏金任务，完成代码修改并提交PR，与维护者沟通后PR被合并，几天后16.88美元到账
- **技术细节**：Codex运行约10-15个安全审计项目，消耗22M tokens，仅第一个项目"亮绿灯"并到账，后续还有多个pending audits
- **基础设施支撑**：[[github-agent-hq]]为AI智能体提供了异步任务分配、沙箱执行、PR审查的集成工作台；Algora等bounty平台已与GitHub issue工作流打通
- **关键约束**：Codex默认关闭互联网访问，"找bounty路径"可能需要人工开启权限；用户仍需手动审查所有智能体生成的代码
- **成本争议**：按GPT-5.5定价（输出30美元/百万tokens），22M tokens消耗成本可能远超16.88美元收入；Chris押注模型成本年降10倍

## 关键论点

1. 这是AI首次在人类监督下走通"自主赚钱"完整闭环的概念验证
2. "路径成立≠路径成熟"——更准确的定性是"在Chris监督下完成的端到端跑通"
3. GitHub已铺设四层接口（找活/做活/沟通/收款），任何接入Agent HQ的智能体均可复用此路径
4. 人类与智能体协作比例正在快速向后者倾斜

## 证据强度

中等偏弱。核心流程缺乏公开日志可核验，人工介入程度未知，22M tokens的输入输出比例和计费方式未公开。