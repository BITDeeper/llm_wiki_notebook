---
type: event
title: Gemma 4 12B 发布
created: 2026-06-04
updated: 2026-06-04
tags: [产品发布, 开源模型, 边缘AI, 多模态]
related: [gemma-4-12b, google-deepmind, 无编码器统一架构, 本地推理]
sources: ["谷歌gemma-4-12b震撼发布！全球下载破1.5亿，16g轻薄本封神.md"]
origin_date: 2026-06-04
participants: [google-deepmind, demis-hassabis, michael-tschannen]
causes: []
effects: [gemma-4-12b]
significance: high
---
# Gemma 4 12B 发布

2026 年 6 月 4 日，Google DeepMind 正式发布 [[gemma-4-12b]]，一款 12B 参数的开源多模态模型。该模型采用 [[无编码器统一架构]]，仅需 9GB 显存即可在消费级硬件上全离线运行，标志着大模型从"卷参数"向"卷效率、卷落地"转变的重要节点。

## 关键事实

- **发布者**：[[google-deepmind]]，CEO [[demis-hassabis]] 亲自发文宣布
- **核心架构**：[[无编码器统一架构]]，由科学家 [[michael-tschannen]] 主导研发
- **里程碑**：同时宣布 Gemma 4 全系列下载量突破 1.5 亿次，衍生超 7 万个微调版本
- **开源协议**：Apache 2.0，允许商业自由使用

## 行业影响

1. **边缘 AI 普及**：证明通过架构创新（而非仅依赖 [[量化]]），12B 级别模型可在 16GB 轻薄本上流畅运行
2. **开源生态扩张**：1.5 亿次下载和 7 万+ 微调版本表明 Gemma 4 已成为 AI 基础设施级项目
3. **与云端路线的对抗**：为无法承担云端 API 成本或担忧数据隐私的开发者和中小企业提供了可行替代方案
4. **Agentic 开发民主化**：通过 gemma-skills 库展示了本地模型实现智能体工作流的可能性

## 注意事项

- 1.5 亿次下载包含自动化构建和服务器部署，并非独立用户数
- 12B 模型在绝对性能上仍逊于更大参数模型（如 [[gemma-4-26b-a4b]]），其胜利在于"性价比"和"可达性"