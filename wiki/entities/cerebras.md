---
type: entity
title: Cerebras
tags: [hardware, wafer-scale-engine, startup, 硬件, 芯片, ai基础设施, 推理加速, ai-hardware, sram, inference, ai芯片, ipo, 诉讼, openai, chips, competitor]
related: ["英伟达", "去gpu化", "晶圆级芯片", "wafer-scale-engine-3", "gpt-5-3-codex-spark", "maia-200", "openai", "groq", "算力主权", "greg-brockman", "sam-altman", "自我交易", "lpu", "gpu", "hc1", "nvidia", "taalas"]
created: 2026-03-06
updated: 2026-05-08
sources: ["gpu时代落幕？硅谷巨头集体「叛逃」，英伟达1500亿疯狂自救.md", "openai史上最快模型降临，每秒1000token！代码从此「炸出来」.md", "老黄大出血！openai背刺英伟达，微软自研芯连夜拆掉cuda护城河？.md", "突发，openai总裁当庭「认罪」！自曝零元购300亿，马斯克这回真要赢了？.md", "英伟达放弃gpu上lpu：新推理芯片被曝groq即买即用，openai第一个吃螃蟹.md", "24人团队硬刚英维达！amd前高管梦之队出手，新芯片每秒17000个token.md"]
---

# Cerebras

[[Cerebras]] 是一家专注于 AI 计算硬件的芯片公司，以其独特的 [[晶圆级芯片]]（Wafer Scale Engine）技术和海量片上 [[SRAM]] 设计而闻名。作为 [[英伟达]] 在 AI 推理芯片领域的主要竞争对手，Cerebras 已成为 [[OpenAI]] 发布超高速模型 [[GPT-5.3-Codex-Spark]] 时的关键硬件合作伙伴，并获得了 OpenAI 价值数百亿美元的巨额订单。在 [[Taalas]] 发布 [[HC1]] 之前，Cerebras 的解决方案长期被视为业界速度标杆。

## 核心产品：Wafer Scale Engine 3

Cerebras 的旗舰产品 [[Wafer Scale Engine 3]] (WSE-3) 是专为低延迟 AI 推理设计的芯片。与传统的 GPU 堆叠方案及英伟达依赖 HBM 显存的路线不同，WSE-3 采用了完全不同的架构路径：

-   **晶圆级集成**：将数据流架构从芯片尺度扩展到整片晶圆，在单块晶圆上集成海量的计算核心，实现了极高的数据吞吐量。
-   **海量 SRAM 架构**：主张在芯片内部集成海量 SRAM，以解决 AI 推理中的内存墙和延迟问题。
-   **极致互联**：通过在整张晶圆上集成计算核心，极大缩短了互联距离，使得互联带宽实现数量级提升，通信延迟大幅降低。

## 性能表现

Cerebras 的架构在推理性能上对传统 GPU 架构构成了压倒性优势。其首席执行官 Andrew Feldman 公开表示，其芯片在特定场景下速度快于 [[英伟达]] [[GPU]]。

-   **对比 [[英伟达]]**：Cerebras CS 3 系统推理性能比英伟达旗舰 DGX B200 快 21 倍，成本与功耗均降低三分之一。
-   **实测数据**：在 [[OpenAI]] 的 GPT-5.3-Codex-Spark 模型部署中，Cerebras 芯片实现了每秒超 1000 token 的生成速度。这种“暴力美学”般的物理支持，首次让代码编写具备了实时交互体验。
-   **行业基准**：在 Llama 3.1 8B 模型下，Cerebras 的推理速度约为每秒 2,000 个 token。作为对比，[[Taalas]] 的 [[HC1]] 芯片宣称达到了 17,000 token/s，约为 Cerebras 速度的 8.5 倍。

## 商业合作与 IPO 时间线

Cerebras 与 OpenAI 的深度合作不仅推动了技术落地，也直接催生了其估值的飙升，但也引发了关于利益冲突的法律争议。

-   **2017 年**：OpenAI 总裁 [[greg-brockman]] 和 CEO [[sam-altman]] 个人投资 Cerebras。
-   **2025 年 12 月**：在 [[英伟达]] 推出新 [[LPU]] 芯片前夕，OpenAI 寻求更高效率的推理替代方案，与 Cerebras 签署 100 亿美元订单，并提供 10 亿美元贷款。
-   **2026 年 2 月**：凭借 OpenAI 的订单，Cerebras 估值从 80 亿美元飙升至 230 亿美元。
-   **2026 年 4 月**：OpenAI 将订单追加至 200 亿美元。
-   **2026 年 5 月**：Cerebras 正式提交 IPO 申请，估值冲向 266 亿美元。

## 争议与法律风险

在 [[马斯克诉openai案]] 中，Cerebras 因涉及与 OpenAI 高管的 [[自我交易]] 指控而成为焦点。庭审披露显示，Brockman 和 Altman 在推动 OpenAI 与 Cerebras 进行巨额交易时，未向早期捐赠者 [[elon-musk]] 披露其个人持股情况。这被指控为典型的利用慈善资金扶持个人投资，实现财富指数级增长的 [[自我交易]] 行为。

## 市场动态与行业影响

Cerebras 的崛起标志着 AI 基础设施正在发生深刻变革，其技术路线也被 [[微软]] 的 [[maia-200]] 借鉴。

-   **验证 [[去gpu化]] 趋势**：证明了专用架构（非 CUDA 架构）在特定任务（如低延迟推理）上对通用 GPU 的压倒性优势，加剧了 AI 芯片市场的多元化竞争。
-   **突破 [[scaling-law]] 瓶颈**：表明单纯依赖模型参数增长正面临物理瓶颈（如延迟和带宽），未来的 AI 竞争将更多地依赖于“软硬结合”的协同优化。
-   **供应链安全**：OpenAI 向 Cerebras 下达巨额订单，被视为防止供应商单点故障、实现“算力多样化”和“[[算力主权]]”的重要举措。
-   **[[推理优先]] 时代**：头部客户为分散风险并降低推理成本，正在积极寻求非英伟达的硬件方案，推动了算力市场的多元化。