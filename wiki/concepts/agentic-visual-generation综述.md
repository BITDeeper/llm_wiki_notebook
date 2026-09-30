---
type: concept
title: Agentic视觉生成综述
created: 2026-09-24
updated: 2026-09-24
tags: [agentic, 视觉生成, 综述, 论文]
related: [l0-l4控制级别分类, wan团队, 复旦大学, 任务执行范式, agentic-engineering, vlm质检闭环]
sources: ["迎接生成范式革命-复旦和wan团队发布首篇agentic视觉生成综述-20260924.md"]
origin_date: 2026-09-22
---
# Agentic视觉生成综述

《Agentic Visual Generation: From Generative Models to Agentic Control》（arXiv:2609.06758），由[[复旦大学]]、[[wan团队|Wan团队]]（阿里）与港中文MMLab联合发布，是首篇系统化梳理智能体式视觉生成的综述。配套GitHub仓库：Awesome-agentic-visual-generation-model。

## 问题定义

让AI围绕设计目标持续工作：理解需求、生成初稿、自查自纠、积累经验。决策范围从“输入什么提示词”扩展到选什么工具、检查结果、局部修改、积累经验。

## 核心贡献

1. **[[l0-l4控制级别分类]]**：以控制器能影响的最远决策为主线，将系统划分为L0固定支撑→L1条件控制→L2执行控制→L3结果自适应→L4经验自适应五级，类比自动驾驶分级。
2. **对齐条件的评估方法**：固定生成器、工具、预算、评估器，逐次增加一类决策能力，以隔离Agent贡献；记录每次修正的代价。
3. **文献地图**：截至2026年8月24日收录300+工作，覆盖图像、视频、幻灯片、UI、3D与世界模型。

## 代表系统

- L1：LLM-grounded Diffusion、LayoutGPT、World-To-Image
- L2：Visual ChatGPT、ComfyUI-Copilot、ViMax
- L3：SLD、GenPilot、PPTAgent
- L4：OctoT2I、GenEvolve、COMFYCLAW

## 结构性发现

L3（202条）与L4（25条）的严重失衡表明：根据结果修正当前任务已成主流，跨任务经验复用仍是前沿洼地。经验积累存在负迁移与遗忘风险。