---
type: source
title: "20岁大学生花10天VibeCoding一个开源项目，获盛大3000万投资"
tags: [ai, 开源, 投资, 超级个体, vibecoding]
related: [bai-fu, mirofish, bettafish, vibecoding, chen-tianqiao, shanda-group]
created: 2026-03-08
updated: 2026-03-08
authors: [听雨]
year: 2026
url: "https://mp.weixin.qq.com/s/JAS6wv0cCDlfRMQbfkBqYQ"
venue: "量子位"
sources: ["20岁大学生花10天vibecoding一个开源项目，获盛大3000万投资.md"]
---

# 20岁大学生花10天VibeCoding一个开源项目，获盛大3000万投资

## 摘要
本文报道了中国科学技术大学 20 岁学生 [[bai-fu]] 利用 [[vibecoding]] 范式，在 10 天内开发出 [[mirofish]] 项目并获得盛大集团创始人 [[chen-tianqiao]] 3000 万人民币投资的故事。文章详细介绍了 MiroFish 作为 AI 预测引擎的技术原理（基于 [[时序-graphrag]] 的多智能体模拟），以及其前作 [[bettafish]] 的成功经历。BaiFu 分享了关于“超级个体”崛起的见解，以及如何通过深度人机协作和代码审计来驾驭 AI 工具。

## 核心观点

### 超级个体的崛起
- **现象**：个人利用 AI 工具（VibeCoding）可以在极短时间内（10天）构建出极具商业价值的产品。
- **证据**：BaiFu 连续两个开源项目爆火，并获得盛大 3000 万投资。
- **市场背景**：传统行业存在严重的“AI 焦虑”，急需 AI 变革，这为年轻开发者提供了巨大的机会窗口。

### VibeCoding 方法论
- **定义**：一种利用 AI 进行直觉式、高效率编程的开发范式。
- **流程**：
  1.  **市场调研与技术选型**：先弄明白“为什么做、做给谁、怎么做”。
  2.  **原型设计**：Figma 画草图 -> Google AI Studio 做前端 Demo。
  3.  **开发执行**：拆解任务，使用 AI IDE 分批开发。
- **工具选择**：
  -   **前端**：推荐 [[gemini]] 3 Pro（有“灵气”，适合交互细节）。
  -   **后端**：推荐 [[claude]]（工程结构稳，逻辑性强）。
- **关键策略**：
  -   **多 Agent 并行**：同时开多个 Agent 做同一任务，选最优解（虽消耗巨大 Token，但效率极高）。
  -   **刹车系统**：严格使用 Git 管理代码，编写文档，防止项目失控。
  -   **深度协作与审计**：人类必须一行行审计 AI 代码，理解其逻辑，纠正根本性错误，而非仅修补 Bug。

### MiroFish 技术解析
- **定位**：AI 预测引擎，通过多 Agent 模拟平行世界来预测未来。
- **技术架构**：
  -   **图谱构建**：利用 [[时序-graphrag]] 从文本中提取实体和关系，注入时间序列信息。
  -   **环境搭建**：抽取实体关系生成人设（如 MBTI、行为模式），构建虚拟社交网络。
  -   **模拟推演**：Agent 在环境中自由交互，生成事件链和报告。
- **应用案例**：
  -   《红楼梦》结局预测（黛玉焚稿、湘莲出家）。
  -   摩尔线程融资后的战略分析。
- **成本**：单次完整模拟（红楼梦案例）后台成本仅约 14 元人民币。

### 开源与营销建议
- **选题**：从垂直领域切入（如舆情分析），积累口碑后再面向大众。
- **减法**：不追求大而全，快速验证，实践中修正定位。
- **素材**：提前准备演示视频等素材，方便他人传播。
- **故事**：“代码是冷的，故事是热的”，学会讲好代码背后的故事。

## 精彩引述
> “市场在疯狂寻找能把AI用成生产力的人。” — BaiFu

> “我们严重低估了传统行业、半互联网行业对AI变革的决心……几乎所有企业都在经历一种‘AI焦虑’。” — BaiFu

> “时代在把机会往年轻人手里塞。” — BaiFu

## 相关链接
- GitHub: [https://github.com/666ghj/MiroFish](https://github.com/666ghj/MiroFish)
- Demo: [https://666ghj.github.io/mirofish-demo/](https://666ghj.github.io/mirofish-demo/)
- 作者自述: [https://mp.weixin.qq.com/s/UyYVjlBCvQRJI6B_MmZbsA](https://mp.weixin.qq.com/s/UyYVjlBCvQRJI6B_MmZbsA)