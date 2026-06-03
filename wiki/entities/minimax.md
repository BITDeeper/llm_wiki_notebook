---
type: entity
title: MiniMax
created: 2026-06-01
updated: 2026-06-02
tags: ["ai-company", "llm", "agent", "harness", "china", "companies", "ai", "openclaw", "minimax", "人工智能", "公司", "产模一体", "全球化", "startup", "company", "multimodal", "独角兽", "全模态", "上市", "china-ai", "music-generation", "long-context", "ai公司", "上市企业", "企业", "大模型", "ai商业化", "中国ai", "多agent", "ToB商业化", "多模态", "港股上市", "ipo", "开源", "开源模型"]
related: ["m2-7", "maxhermes", "maxclaw", "harness", "智能密度", "hermes-agent", "openclaw", "minimax-m2.7", "nemo-claw", "闫俊杰", "m2-5", "forge", "产模一体", "星野", "talkie", "minimax-m2-5", "minimax-music-2-5", "ai音乐生成", "sensetime", "suno", "udio", "m2-model", "hailuo-02", "全模态", "ai-native-组织", "kimi", "step", "pinchbench", "deepseek", "yan-junjie", "ai-platform-company", "expert-智能体", "第四届中国aigc产业峰会", "mavis-minimax", "team-engine", "多agent协作架构", "量子位", "胡维琦", "海螺ai", "m2系列", "ai-native组织", "minimax-m3", "msa-稀疏注意力", "claw-eval", "minimax-code", "msa-minimax-sparse-attention"]
sources: ["b站爆了！hermes首度直播回应「抄袭」，minimax提前杀入harness赛点.md", "minimax-m2.7国服第一！龙虾自我进化，海外开发者疯狂刷屏.md", "minimax首份财报，震惊华尔街！收入飙涨破5亿，递交港股惊人成绩单.md", "一夜暴涨至2100亿！开源新王minimax-m2.5，革了opus-4.6的命.md", "音乐新王震撼降临，ai音乐进入格莱美时刻.md", "minimax今早上市，股价疯涨80%！一群95后跑通了中国ai的价值.md", "养虾人狂吃国产模型！4.19万亿token调用量激增34.9%超越美国.md", "全球首份大模型业绩报！minimax预判2026三大超级pmf，ai平台公司启程了.md", "minimax又又来吃龙虾肉了！openclaw真·一键部署，还有上万专家智能体等你差遣.md", "5月20日议程发布！ai实战派到底要聊什么｜中国aigc产业峰会.md", "重生之我在ai时代当老板：让一群agent互相pua.md", "倒计时一周，aigc峰会嘉宾又上新了！一起来看第三波嘉宾.md", "从token无上限到全员agent：minimax的ai-native组织进化实践丨minimax胡维琦-aigc2026.md", "minimax新旗舰m3发布！自己干了12小时复现获奖论文，三条科技树同时点满.md", "minimax-m3来了！.md", "minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
---
# MiniMax

中国AI公司，[[minimax-m3]] 大语言模型和 [[minimax-code]] Agent/编程客户端的开发者。

## 核心产品

- **[[minimax-m3]]** — 2026年6月上线的最新开源旗舰大模型，首个集齐[[frontier-三件套]]（1M长上下文、原生多模态、强Coding能力）的开源模型。
- **[[minimax-code]]** — 专为M3设计并同步训练的Harness/编程客户端，对标 [[claude-code]]，支持Agent Team工作流。
- **[[msa-minimax-sparse-attention|MSA]]** — 自研新型稀疏注意力机制（MiniMax Sparse Attention），实现1M上下文窗口的高效推理。

## 技术特色

- 预训练数据规模达100T（百万亿）token量级，涵盖纯文本、图文交织、图文对和视频数据。
- 构建"交互式用户模拟器框架"用于Agent能力训练。

## 行业地位

M3的发布标志着开源模型首次在长上下文+原生多模态+Coding三维度同时追平闭源旗舰（[[gpt-5.5]]、Claude Opus、Gemini 3.1 Pro）。[[nous-research]] 联创和Vercel CEO Guillermo Rauch公开为M3背书。

## 商业模式

- **Token Plan** — 分层定价方案：Plus档￥49/月6亿token，Max档￥119/月18亿token，Ultra档￥469/月55亿token，按相同价格折算约是Claude订阅的15倍用量。
- M3上线时引入Token Plan计费方式，引发争议后官方提高周用量限额，并对以前没有周限额的老用户保持原有设定。