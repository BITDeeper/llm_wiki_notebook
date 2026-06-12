---
type: entity
title: Mind Lab（心洲实验室）
created: 2026-06-02
updated: 2026-06-08
tags: ["ai实验室", "持续学习", "lora", "peft", "研究机构", "参数化记忆", "体验智能", "ai研究", "实验室", "neo-lab", "agent", "强化学习", "开源"]
related: ["delta-mem", "mint-lora-infra", "peft-scaling-law", "macaron-a2ui", "lora-as-memory", "持续学习", "机器之心", "参数化记忆", "体验智能", "南洋理工大学", "复旦大学", "macaron-v1-preview", "mint-toolkit", "mixture-of-lora", "agent-harness-后训练", "livingbench"]
origin_date: 2025-01-01
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md", "rss/一个8×8矩阵，让大模型「记住」长对话：mind-lab联合ntu、复旦推出δ-mem，参数仅0.12%.md", "rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md", "rss/一个8x8矩阵让大模型记住长对话mind-lab联合ntu复旦推出δ-mem参数仅0.12.md"]
---
# Mind Lab（心洲实验室）

Mind Lab（心洲实验室）是中国第一家 Neo Lab，隶属于心洲科技（Mindverse），由粤港澳大湾区国家技术创新中心国际总部孵化。团队长期深耕[[参数化记忆]]与[[体验智能]]方向。

## 团队

- **创始人 Andrew**：深圳清华大学研究院研发中心主任
- **实验室负责人 [[马骁腾]]**：清华自动化系博士、博士后
- **核心研究团队**：约30人，累计发表200篇顶会论文，总引用超5万次
- **基础设施负责人**：来自 DeepSeek
- **算法负责人**：来自字节 Seed
- **模型团队成员**：来自清华、MIT、NVIDIA、xAI 等机构

## 核心研究方向

### 持续学习技术栈

系统性研究大模型持续学习机制，核心主张是 PEFT（尤其是 LoRA）不应被视为全参数微调的廉价平替，而是实现从"基础模型"向"可持续学习智能体"过渡的核心架构机制。

### 参数化记忆与体验智能

- **[[参数化记忆]]**：如何将记忆编码到模型参数中，并使其具备动态演化能力。
- **[[体验智能]]（Experiential Intelligence）**：核心研究愿景——构建能从真实交互中持续学习的AI系统。

### Agent-native 大模型

- **[[macaron-v1-preview|Macaron-V1-Preview]]**：749B参数的 Agent-native 大模型，专为 [[agent-harness-后训练|Agent Harness]] 场景深度后训练。
- **[[livingbench|LivingBench]]**：自研的生活场景 Agent 评测基准。

## 核心成果

### 记忆架构

- **[[delta-mem|δ-mem]]**：基于 LoRA 的平行混合线性注意力在线记忆机制，用 8×8 在线关联记忆状态为冻结 Transformer 赋予长期记忆，仅增加 0.12% 参数即可实现显著的记忆性能提升。

### 持续学习架构

- **[[mixture-of-lora|Mixture-of-LoRA]]**：允许多个 LoRA 适配器同时独立存在于同一基座模型上的持续学习架构。

### 基础设施

- **[[mint-toolkit|MinT（MindLab Toolkit）]]** / **[[mint-lora-infra|MinT]]**：万亿参数级 LoRA 管理基础设施，支持百万级适配器的训练、评估、部署和回滚（百万级 LoRA 训练与在线服务托管基础设施系统）。
- **verl-mint**：将基础设施成果贡献给字节 verl-project 强化学习框架。
- 万亿参数 LoRA 强化学习基础设施已获英伟达官方转载。

### 理论贡献

- **[[peft-scaling-law|PEFT Scaling Law]]** / **[[peft规模定律|PEFT规模定律]]**：提出三大扩展轴（Scale up/down/out）及基于模型数量的对数增长定律，43页论文《On the Scaling of PEFT》详细阐述——多个模型协作决策的准确性与模型数量之间呈对数增长关系。

### 应用验证

- **[[macaron-a2ui|Macaron-A2UI]]**：基于 MinT 训练的生成式 UI 模型，验证持续学习理论的应用可行性。

### 其他重要成果

- **LoRA-RL**：完成业界首个 1T 规模的 LoRA 强化学习训练。
- **R3修复**：修复 MoE 强化学习中 Router Replay 的关键 Bug。

## 技术链路

Mind Lab 构建了一条完整的技术验证链路：记忆架构（δ-mem）→ 底层基础设施（MinT）→ 扩展定律（Scaling of PEFT）→ 应用验证（Macaron-A2UI），从理论到系统到应用形成闭环。

## 合作网络

### 学术机构

- [[南洋理工大学]]（共同第一作者雷京迪所属机构，通讯作者 Soujanya Poria 所属机构）
- [[复旦大学]]（共同第一作者张迪所属机构）
- [[上海交通大学]]
- [[香港中文大学]]
- [[香港科技大学（广州）]]

### 产业合作伙伴

- **字节**（verl-project）
- **英伟达**（Megatron-Bridge）
- **加州大学伯克利分校**（vllm）
- **TileRT**（高速推理技术）
- **美团**（VitaBench 评测基准）

## 商业动态

已有头部手机厂商、头部可穿戴硬件厂商开始接触 Mind Lab 寻求合作，旨在将生成式交互界面与生活 Agent 模型深度整合到更多硬件载体。

## 核心愿景

Mind Lab 的核心愿景是构建[[体验智能]]——让极少数强大的万亿参数基础模型，支撑起数以百万计的、具备独立记忆和技能的可持续学习智能体。AI 系统能够从真实的持续交互中学习和进化，而非仅依赖静态训练数据。δ-mem 正是这一愿景的具体实现：通过紧凑的动态记忆状态，使模型在部署后仍能持续积累和复用经验。

## 定位与风格

Mind Lab 定位为务实、场景导向的前沿实验室。负责人 [[马骁腾]] 曾公开表示："我们不为刷榜做研究，也不为创新而做研究。我们是在为了真实的场景、真实的用户、真实的价值而做研究，并在这个过程中大胆地创新。"