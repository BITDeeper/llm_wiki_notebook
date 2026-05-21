---
type: source
title: "Claude Opus 4.7连夜突袭：或将抢走全球7亿打工人饭碗！"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/9m9S9Y9q9Fx4gscqizVDmg"
venue: "新智元"
tags: [ai-models, anthropic, computer-vision, benchmarks, automation]
related: [claude-opus-4-7, anthropic, gpt-5-4-thinking, gemini-3-1-pro, project-glasswing]
created: 2026-04-17
updated: 2026-04-17
sources: ["claude-opus-4.7连夜突袭：或将抢走全球7亿打工人饭碗！.md"]
---

# Claude Opus 4.7连夜突袭：或将抢走全球7亿打工人饭碗！

## 摘要
Anthropic 正式发布 [[Claude Opus 4.7]]，将其定义为当前可广泛使用的最强 Claude 模型。本次升级的核心在于**复杂任务执行**、**高清视觉理解**和**更稳的长链路工作流**。虽然性能不及未发布的 [[Claude Mythos Preview]]，但相比 [[Claude Opus 4.6]] 实现了全面碾压。

## 核心升级点

### 1. 复杂任务完成度
大模型竞争焦点从“答得像不像”转向“做得完不完”。Opus 4.7 在长时间任务执行上表现显著提升：
- **Vending-Bench 2**（自动售货机模拟）：最终余额从 8,018 美元提升至 10,937 美元，收益增加 36%。
- **GraphWalks BFS 1M**（广度优先搜索）：准确率从 41.2% 提升至 58.6%，提升 17.4 个百分点。

### 2. 视觉能力的代际飞跃
Opus 4.7 支持长边最高 2576 像素（约 375 万像素）的图像输入，是此前 Claude 模型的三倍以上。
- **ScreenSpot-Pro**（UI 定位）：高分辨率+工具调用得分达 87.6%。
- **XBOW 基准**：得分从 54.5% 跃升至 98.5%，接近满分。
- **SWE-bench Multimodal**（前端 JS 修 bug）：结合视觉素材，得分提升 7.4 个百分点。

### 3. 编程与专业领域
- **SWE-bench Multilingual**：多语言代码修复能力达到 80.5%。
- **Structural Biology**（生物分子推理）：从 30.9% 飙升至 74.0%，增长 2.4 倍。

## 竞品对比
在多项基准测试中，Opus 4.7 超越了 [[GPT-5.4 Thinking]] 和 [[Gemini 3.1 Pro]]：
- **GDPval-AA**（知识工作）：Opus 4.7 得分 1753（Elo），高于 GPT-5.4（1674）和 Gemini 3.1 Pro（1314）。
- **OfficeQA Pro**（企业文档推理）：Opus 4.7 得分 80.6%，是 GPT-5.4 的 1.6 倍。

## 用户感知变化
1. **指令遵循更强**：更严格地执行指令，减少提示词玄学，但旧提示词可能需要调整。
2. **看图更细**：能识别密集截图、复杂图表和像素级细节。
3. **成品更接近交付**：在界面、幻灯片、文档任务上更有审美和创造性，记忆能力增强。

## 成本与安全
- **Token 成本通胀**：新分词器和高清图像支持导致 Token 消耗增加约 1.0-1.35 倍。
- **Project Glasswing**：Opus 4.7 是该项目下首个部署的模型，具备拦截高风险网络安全请求的护栏，其网络安全能力弱于 Mythos Preview。

## 影响分析
Opus 4.7 的发布标志着 AI 从“会聊天”向“会干活”转型的一大步。开发者、分析师、法务等高频处理文档的人群将最先受益，但 API 用户需注意 Token 消耗增加带来的成本上升。