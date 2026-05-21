---
type: entity
title: Percepta
tags: [ai-research, lab, llm, internal-computation, ai-lab, transformer-research, general-catalyst]
related: ["christos-tzamos", "transformer", "内部计算", "快速解码路径", "webassembly-wasm", "transformer-内置计算机", "hullkvcache", "general-catalyst"]
created: 2026-03-21
updated: 2026-05-08
sources: ["太疯了！mit博士在transformer里造计算机，攻破llm终极缺陷.md", "卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# Percepta

[[Percepta]] 是一家 AI 研究实验室，也是 General Catalyst 旗下的 AI 转型公司。该团队致力于探索人工智能的基础架构创新，特别是在将神经网络与符号计算相结合的领域，旨在解决大语言模型（LLM）在精确推理和计算效率方面的短板。

## 团队背景
Percepta 汇聚了来自 Meta FAIR、MIT、Google 等顶尖机构的顶尖人才。其核心领导人物包括：
*   **[[Christos Tzamos]]**：创始研究员，麻省理工学院（MIT）博士，现任雅典大学副教授。

## 核心贡献：Transformer 内部计算机
Percepta 团队最著名的工作是提出并实现了在 [[Transformer]] 模型内部构建计算机的方案。这一范式跳出了传统的“工具调用”和“智能体调度”框架，直接在模型内部实现确定性计算。

### 技术实现
团队通过 [[WebAssembly (WASM)]] 技术，将一个完整的虚拟机解释器无损地嵌入到模型的权重中，使模型具备了 [[内部计算]] 能力。这一突破解决了 LLM 长期以来无法进行精确算术和逻辑运算的缺陷。

### 性能表现
该技术使得模型能够在不依赖外部工具调用的情况下，以极高的速度（每秒 33,000 Token）执行复杂算法。实测案例包括：
*   **高难度数独求解**：成功攻克世界最难数独。
*   **组合优化**：高效执行匈牙利算法等复杂逻辑。

## 技术创新
Percepta 在模型架构和计算机制上进行了多项底层创新：
*   **[[HullKVCache]]**：一种针对长上下文和计算密集型任务的缓存优化方案。
*   **[[2维注意力头]]**：改进了注意力机制的计算维度。
*   **[[快速解码路径]]**：发明了一种新的注意力机制优化方案，通过限制注意力头的回看范围，实现了计算速度的指数级加速，克服了标准 Transformer 在长序列计算中的性能瓶颈。
*   **只增不减的轨迹**：提出了一种将计算过程映射为自回归生成轨迹的方法，类似于图灵机的纸带操作。

## 行业影响
Percepta 的研究引发了 AI 社区对于 [[混合-LLM-架构]] 的广泛讨论。他们的工作表明，LLM 不仅仅是概率预测模型，还可以演变为包含推理系统和确定性计算引擎的混合实体。这一观点得到了 [[Karpathy]] 等业内权威的高度评价。