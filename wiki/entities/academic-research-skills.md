---
type: entity
title: Academic Research Skills (ARS)
created: 2026-05-17
updated: 2026-05-17
tags: [开源项目, ai学术写作, claude-code技能包, 多agent系统]
related: [claude-code, edward-cheng-i-wu, anthropic, 高阶幻觉, 认知投降, 多agent协作架构, 办公技能框架]
sources: ["6.4k-stars！用claude-code写论文的全套流水线，有人打包开源了.md"]
origin_date: 2026-02-01
---
# Academic Research Skills (ARS)

一套基于 [[claude-code]] 的学术论文写作技能包，由 [[edward-cheng-i-wu]]（吴政宜）开发，2026年2月上线，截至5月已获得 GitHub 6.4k Stars，经历 300+ 次 commit 迭代。

## 核心架构

ARS 由4个 Skill 组成，各司其职拼成从选题到交稿的完整链路：

| Skill | Agent数量 | 职责 |
|-------|----------|------|
| Deep Research | 13 | 文献调研、研究问题构建、方法论设计、PRISMA综述 |
| Academic Paper | 12 | 大纲设计、论证构建、草稿撰写、风格校准、格式转换 |
| Academic Paper Reviewer | 7 | 模拟期刊评审，量化评分（0-100），输出修改路线图 |
| Academic Pipeline | 流程编排器 | 串联10阶段流水线，支持断点切入 |

## 关键设计机制

### 引用核验
每篇文献通过 Semantic Scholar API 进行存在性确认，使用 Levenshtein 相似度算法做模糊匹配，阈值0.70以上才算通过。实测中抓到15个伪造引用和3个统计错误。

### 完整性闸门
在 Stage 2.5 和 Stage 4.5 设置不可跳过的检查点，运行7项AI失败模式检查清单（源自2026年 Nature 全自主AI科研研究）。设计逻辑：把"我相信AI不会出错"变成"我要求AI证明它没出错"。

### 反谄媚协议
审稿团队中的魔鬼代言人（Devil's Advocate）对反驳评分1-5分，低于4分写作团队不允许承认。评分轨迹全程追踪，任何维度分数下降标记为回归。参见 [[认知投降]]。

### 三层数据隔离
- **Layer 1**：原始输入，默认不可信
- **Layer 2**：通过完整性验证后的产物
- **Layer 3**：评分标准/金标数据，永远不出现在写作AI上下文中

灵感来自 [[anthropic]] 的 w2s-researcher 研究，核心发现是当AI能读取标签数据时，结果可能不是真正泛化而是在优化表面特征。

### repro_lock 文件
记录运行时完整配置，但强制声明 LLM 输出不是字节级可复现的，只是配置文档而非重放保证。

## 设计哲学

> "AI是你的副驾驶，不是飞行员。"

核心理念：AI辅助学术写作的关键不在于"让AI写论文"，而在于"系统性防止AI搞砸学术研究"。这与 [[办公技能框架]] 和 [[模型-技能分离架构]] 的理念一脉相承——将能力拆解为可编排的技能模块。

## 费用

- 1.5万字论文全程约4-6美元
- 推荐 Claude Opus 4.7 + Max 订阅（100-200美元/月）
- 单次完整流水线消耗超过20万输入token和10万输出token

## 安装方式

```
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

也可将 SKILL.md 上传至 claude.ai 项目知识库，以单Agent模式轻量体验。

项目地址：https://github.com/Imbad0202/academic-research-skills