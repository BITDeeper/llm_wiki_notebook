---
type: entity
title: Thinking Machines Lab
tags: ["ai-startup", "research-lab", "openai-spinoff", "可定制ai", "公司", "初创企业", "ai-lab", "ai实验室", "初创公司", "openai系", "实验室", "基础设施", "startup", "ai-research", "company", "llm", "compute-moat", "entity", "frontier-lab", "ai-neolab", "openai-alumni"]
related: ["mira-murati", "joshua-gross", "andrew-tulloch", "soumith-chintala", "meta", "openai", "拆骨", "英伟达", "tinker", "vera-rubin", "barret-zoph", "luke-metz", "sam-schoenholz", "john-schulman", "alec-radford", "bob-mcgrew", "gpt-4", "dall-e-3", "clip", "pytorch", "dcgan", "weng-li", "chen-danqi", "nvidia", "算力护城河", "ai-neolab", "ssi-safe-superintelligence"]
created: 2026-04-19
updated: 2026-05-11
sources: ["小扎拆骨thinking-machines！120亿美元ai独角兽第5位创始人跳槽meta.md", "黄仁勋联手openai前高管，1吉瓦超级算力明年开闸.md", "前openai-cto企业遭重创！办公室偷情致团队崩盘，核心3人叛逃openai.md", "硅谷真实「无间道」！openai前cto怒斩泄密联创，奥特曼打包收了.md", "1人顶1个infra团队！openai前cto新招，让大模型训练跌成白菜价.md", "0博士组合拿下iclr时间检验奖！两个gpt天才本科生+二本逆袭lecun弟子，十年论文终封神.md", "mira翁荔陈丹琦公司，让老黄掏出了600亿美金.md", "估值3000亿！63家新实验室杀疯了，murati、贝佐斯集体押注下一代ai.md", "1人顶1个infra团队！openai前cto新招，让大模型跌成白菜价.md"]
---

# Thinking Machines Lab

[[Thinking Machines Lab]]（简称 TML）是一家成立于 2025 年 2 月的 AI Neolab（前沿实验室），由前 [[OpenAI]] CTO [[Mira Murati]] 创立。公司致力于探索通用人工智能（AGI）的前沿技术，专注于构建下一代通用智能架构，开发可定制、可理解且能与人类协同工作的 AI 系统，并致力于重新定义大模型的训练基础设施。

尽管团队被英伟达 CEO 黄仁勋称为“世界一流”，且拥有巨额融资支持，但 TML 自成立以来一直处于科技巨头人才争夺战的风暴中心，成为 [[Meta]] 和 [[OpenAI]] 等“拆骨”策略的主要目标。

## 核心技术与产品

### [[Tinker]] 范式
TML 提出了 [[Tinker]] 范式，旨在将算法设计与底层基础设施解耦，降低大模型训练（尤其是 [[后训练]] 和强化学习）的工程门槛。

- **技术原理**：将训练过程拆解为 [[forward]]、[[backward]]、[[optimizer step]] 等基本原语，使得训练大模型像函数调用一样简单。
- **产品形态**：2025 年 10 月，TML 发布了首个产品 [[Tinker]]。这是一款 API 接口，由 [[Joshua Gross]] 负责开发，旨在封装分布式训练与工程复杂度，降低企业微调大模型的门槛，使企业无需自建复杂基础设施即可对模型进行定制化改造（支持 LoRA 等技术）。
- **行业影响**：其理念被国内厂商 [[潞晨云]] 追随，推动了 [[训练即服务]] 和 [[按Token计费]] 模式的普及。

## 发展历程

### 创立与融资
TML 成立于 2025 年 2 月，迅速吸引了包括 [[OpenAI]] 联合创始人 [[John Schulman]] 和前研究副总裁 [[Barret Zoph]] 在内的一批核心人才加盟。

- **种子轮融资**：2025 年 7 月完成 20 亿美元融资，投资方包括 Andreessen Horowitz、Accel、[[英伟达]] 及 AMD 风投部门。
- **估值变化**：
    - 2026 年 1 月估值约为 120 亿美元。
    - 截至 2026 年 3 月，市场报价及传闻目标已达到 500-600 亿美元，被视为史上罕见的巨额种子轮规模及硅谷 AI 圈的当红独角兽。

### 战略合作与算力布局
- **与 [[英伟达]] 的合作**：2026 年 3 月，双方达成一项长期战略合作，计划于 2027 年初部署至少 1 吉瓦（1GW）的 [[Vera Rubin]] 算力系统（包括 [[R100]] GPU）。这笔交易价值高达 500-600 亿美元，不仅解决了算力瓶颈，更构建了深厚的 [[算力护城河]]，是 [[算力金融学]] 模式的典型案例。

## 团队与动荡

### 核心团队
TML 汇聚了多位来自 OpenAI 和 Meta 的核心人才，其背景涵盖了从底层框架（[[PyTorch]]）到基础模型（[[GPT]]、[[CLIP]]）的完整技术栈，代表了 OpenAI 在架构、训练方法和工程生态的三大核心支柱。

- **创始人**：[[Mira Murati]]（前 [[OpenAI]] CTO，负责监督了 [[GPT-4]]、[[DALL-E 3]] 等关键产品的发布）
- **现任 CTO**：[[Soumith Chintala]]（[[PyTorch]] 联合创始人、前 Meta 副总裁，从 Meta 挖来接替 Barret Zoph）
- **首席科学家**：[[陈丹琦]]（普林斯顿大学教授，著名自然语言处理学者）
- **安全负责人**：[[翁荔]]（前 OpenAI 安全系统负责人）
- **顾问**：[[Alec Radford]]（初代 [[GPT]] 之父、[[OpenAI]] 创始成员、[[CLIP]] 主导者）
- **联合创始人**：[[John Schulman]]（前 [[OpenAI]] 联合创始人）
- **关键成员**：
    - [[Bob McGrew]]：前 OpenAI 首席研究员。
    - Neal Wu：奥运会编程三金得主。

### 重大事件：2026 年 1 月政变
2026 年 1 月 14 日，公司爆发严重的内部危机。联合创始人兼时任 CTO [[Barret Zoph]] 因涉嫌“向竞争对手泄密”及办公室恋情丑闻被降职后，联合 [[Luke Metz]]（[[OpenAI]] 早期成员，[[DCGAN]] 二作）和 [[Sam Schoenholz]] 两名核心骨干向 [[Mira Murati]] 逼宫索权。遭拒后，三人被当场开除。然而，仅在一小时后，三人集体被 [[OpenAI]] 挖角，导致 TML 创始团队瞬间解体。

### 被挖角成员（OpenAI）
- **[[Barret Zoph]]**：联合创始人，前 CTO，在 2026 年 1 月的政变中被开除后立即被 OpenAI 挖回。
- **[[Luke Metz]]**：联合创始人，核心人物，随 Zoph 叛逃回 OpenAI。
- **[[Sam Schoenholz]]**：联合创始人，核心人物，随 Zoph 叛逃回 OpenAI。
- **[[Jolyn Parrish]]**：顶尖网络安全专家。

### 被挖角成员（Meta）
在过去 9 个月内，Meta 挖走了该公司的多位核心成员：
1. **[[Joshua Gross]]**：第 5 位离职的创始成员，Tinker 项目负责人，后加入 Meta 超级智能实验室领导工程团队。
2. **[[Andrew Tulloch]]**：联合创始人，已离职加入 Meta。
3. **Christian Gibson**：创始成员。
4. **Noah Shpak**：创始成员。

### 战略反击
为了应对核心团队的流失，[[Thinking Machines Lab]] 采取了反制措施，从 Meta 挖来了 [[Soumith Chintala]] 担任 CTO，并招募了 Neal Wu。

## 行业意义
[[Thinking Machines Lab]] 的成立与遭遇被视为 2025-2026 年 AI 行业的重要现象。它代表了 [[OpenAI]] 系人才的重大分流趋势，即核心科学家和工程师离开大厂，创立新的实体以追求更灵活或更具野心的研究目标。

同时，TML 的经历也是 AI 行业 [[人才奇点]] 的典型案例。它揭示了当前 AI 竞争的本质：资本可以购买算力，但无法锁定顶级智力。初创公司即便拥有巨额融资和算力承诺，也面临着被巨头通过高薪“连锅端”的生存危机。这一案例深刻反映了 [[硅谷旋转门]] 机制下的残酷竞争。