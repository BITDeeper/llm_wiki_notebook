---
type: source
title: "OpenAI深夜祭出GPT-5.4，暴击Claude！原生操控电脑，打工人悬了"
tags: [openai, gpt-5.4, agent, computer-use, benchmark]
related: [openai, gpt-5.4, claude-opus-4-6, gemini-3-1-pro, playwright, openclaw, gdpval, osworld-verified, swe-bench-pro, frontiermath, arc-agi-2, 原生电脑使用, 工具搜索, 中途介入, ai-subscription-crisis]
created: 2026-03-06
updated: 2026-03-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/SrK2N8wYANEX5TK-WpR46g"
venue: "新智元"
---

# OpenAI深夜祭出GPT-5.4，暴击Claude！原生操控电脑，打工人悬了

## 概述
本文报道了 OpenAI 于 2026 年 3 月发布的下一代旗舰模型 [[GPT-5.4]]。该模型实现了“推理+编程”的合流，并首次引入了[[原生电脑使用]]能力，在多项基准测试中全面超越竞争对手 [[Claude Opus 4.6]] 和 [[Gemini 3.1 Pro]]。

## 核心进展

### 1. 原生电脑使用能力
[[GPT-5.4]] 是首个具备原生计算机使用能力的通用模型。它不仅能通过 [[Playwright]] 等库编写代码控制计算机，还能直接识别屏幕截图进行键鼠操作。
*   **OSWorld-Verified 基准**：达到 75.0% 成功率，超越了人类水平（72.4%）和 [[Claude Opus 4.6]]（72.7%）。
*   **应用场景**：发邮件、排日程、填表格、跑流程，甚至能自主开发并测试 3D 游戏和网页。

### 2. 全维度性能碾压
*   **知识工作**：在 [[GDPval]] 基准中得分 83.0%，在投行建模测试中得分 87.3%，且生成的 PPT 在审美上更受人类偏好。
*   **编程能力**：完整继承 GPT-5.3-Codex 基因，在 [[SWE-Bench Pro]] 上取得 57.7% 准确率。
*   **数学与推理**：在 [[FrontierMath]] 夺冠，在 [[ARC-AGI-2]] 上达到 83.3%（远超竞品）。
*   **幻觉率**：相比 GPT-5.2，事实错误声明率降低 33%。

### 3. 工程效率优化
*   **[[工具搜索]]**：仅在需要时加载工具定义，在 MCP Atlas 基准中将 Token 使用量减少了 47%。
*   **[[中途介入]]**：用户可在模型思考过程中随时打断、调整方向，无需等待最终结果。
*   **速度提升**：推理速度提升 1.5 倍，支持 100 万 token 上下文。

### 4. 行业影响与成本
*   **办公自动化威胁**：[[GDPval]] 的高分意味着初级分析师、行政人员等岗位面临被自动化替代的风险。
*   **高昂定价**：GPT-5.4 Pro 版本定价极高（输入 $30，输出 $180/百万 token），进一步印证了 [[ai-subscription-crisis]]，即 Agent 时代的高算力成本正在摧毁传统订阅制。

## 关键技术细节
*   **视觉感知**：引入“原始”和“高”图像输入细节级别，支持最高 1024 万总像素。
*   **智能体工具调用**：在 Toolathlon 上准确率达 54.6%，能顺畅完成全套工作流（如阅读邮件、评分、记录）。
*   **网络搜索**：在 BrowseComp 上以 89.3% 反超 Claude，擅长多源头信息整合。

## 背景关联
文章提到“[[OpenClaw]]之父”加入 OpenAI，这被认为是 ChatGPT 原生操控能力大幅提升的关键因素之一。