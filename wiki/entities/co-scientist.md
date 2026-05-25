---
type: entity
title: Co-Scientist（AI合作科学家）
created: 2026-05-23
updated: 2026-05-23
tags: [ai-for-science, google, 多智能体, nature论文, 假设生成]
related: [google-deepmind, era-经验性研究助手, alphaevolve, gemini-for-science, ai-for-science, 测试时计算扩展]
sources: ["谷歌gemini杀入科学界！一日两登nature，alphafold只是开胃菜.md"]
origin_date: 2026-05-19
---
# Co-Scientist（AI合作科学家）

Co-Scientist是 [[google-deepmind|Google]] 基于 [[gemini]] 构建的多智能体科研假设生成系统，核心机制为「点子锦标赛」（idea tournament），于2026年5月19日以Nature论文形式发布。

## 核心机制：点子锦标赛

多个专门智能体协作完成假设的生成、辩论和进化：

- **Generation**（生成智能体）：产生初始假设
- **Reflection**（反思智能体）：批判和细化假设
- **Ranking**（排序智能体）：基于Elo评分系统对假设排序
- **Evolution**（进化智能体）：组合和改进假设
- **Meta-review**（元评审智能体）：全局质量把控
- **Proximity**（邻近智能体）：注入新知识扩大探索范围
- **Supervisor**（监督智能体）：协调整体流程

关键特性：随 [[测试时计算扩展]]，假设质量持续提升——测试时计算量越大，输出质量越高。

## 验证成果

论文重点验证了三个生物医学场景：

1. **药物再利用**：急性髓系白血病（AML）的药物再利用候选和协同组合疗法，已在斯坦福医学院体外实验中得到验证
2. **新靶点发现**
3. **抗微生物耐药机制解释**

每条主张附带可点击的citation（引用溯源）。

## 早期采用者

Daiichi Sankyo、Bayer Crop Science、美国能源部国家实验室（Genesis Mission项目）等已接入Co-Scientist。

## 参考链接

Nature论文：https://www.nature.com/articles/s41586-026-10644-y