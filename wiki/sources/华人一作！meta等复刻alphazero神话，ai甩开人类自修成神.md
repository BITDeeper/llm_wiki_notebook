---
type: source
title: "华人一作！Meta等复刻AlphaZero神话，AI甩开人类自修成神"
tags: [ai, meta, self-play, reinforcement-learning, code-generation, alpha-zero]
related: [ssr-self-play-swe-rl, meta, yuxiang-wei, zhiqing-sun, swe-bench, 自博弈, 逆向变异测试, ai-takeoff]
created: 2025-12-27
updated: 2025-12-27
authors: ["新智元", "元宇", "好困"]
year: 2025
url: "https://mp.weixin.qq.com/s/IVJOzct0bCm_YK2fpYoGyw"
venue: "新智元"
sources: ["华人一作！meta等复刻alphazero神话，ai甩开人类自修成神.md"]
---

# 华人一作！Meta等复刻AlphaZero神话，AI甩开人类自修成神

## 概述
本文报道了 Meta、UIUC 和 CMU 团队发表的 [[ssr-self-play-swe-rl]]（Self-play SWE-RL）研究成果。该研究复刻了 [[AlphaZero]] 的 [[自博弈]] 神话，通过让 AI 在代码库中分饰“破坏者”与“修复者”进行自我对抗，成功摆脱了对人类标注数据的依赖，在 [[SWE-bench]] 基准测试中显著超越了依赖人类数据训练的模型。

## 核心论点
1.  **人类数据是瓶颈**：现有 SOTA 模型（如 SWE-RL, DeepSWE）依赖人类编写的 Issue 和测试，存在数据稀缺、噪声大和天花板低（无法超越人类水平）的问题。
2.  **自博弈是出路**：通过 SSR，AI 可以在无需人类教师的情况下，通过自我对抗产生高质量的合成数据，从而突破人类经验的限制。
3.  **合成数据优于人类数据**：实验证明，使用合成数据训练的 SSR 模型在 SWE-bench Verified 和 Pro 上分别比使用人类数据的基准模型高出 10.4% 和 7.8%。

## 关键技术细节
-   **破坏者**：负责注入 Bug 并掩盖，生成包含 `bug_inject.diff`、`test_script.sh` 等在内的完整“作案工具包”。
-   **修复者**：负责诊断和修复 Bug，看不到原始注入过程，必须像侦探一样分析代码。
-   **一致性验证**：严格的安检流程，确保生成的 Bug 工件是有效的、可解析的，且确实破坏了测试。
-   **逆向变异测试**：通过逐个恢复被修改的文件来确认 Bug 的具体起因，确保改动的必要性。
-   **高阶 Bug**：利用修复者失败的尝试作为新的 Bug 状态，形成多轮次、分层级的故障模式。

## 实验结果
-   使用 [[Code World Model (CWM)]] 32B 作为底座，在 512 张 H100 GPU 上训练。
-   在 SWE-bench Verified 上提升 **10.4%**，在 SWE-Bench Pro 上提升 **7.8%**。
-   实现了零样本泛化：训练时仅看代码/测试，测试时能处理带自然语言描述的 Issue。

## 关键人物
-   [[Yuxiang Wei (魏宇翔)]]：UIUC 博士生，Meta FAIR 兼职研究员，论文一作。
-   [[Zhiqing Sun (孙志青)]]：Meta 超级智能实验室（MSL）研究科学家，UIUC 博士，前 OpenAI 研究员。
-   [[David Zhang]]：Meta FAIR 巴黎实验室研究科学家。
-   [[Lingming Zhang]]：UIUC 副教授，论文导师。
-   [[Sida Wang]]：Meta FAIR 西雅图实验室研究科学家。

## 意义
SSR 的出现意味着找到了一条摆脱“数据饥渴”的路径。只要有代码库，不需要昂贵的人类标注，AI 就能通过自我进化实现能力跃升，这为 [[ai-takeoff]] 和 [[递归式自我改进]] 提供了强有力的实证支持。