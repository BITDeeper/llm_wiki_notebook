---
type: source
title: "《生化危机》女主演跨界AI拿SOTA了！打造免费“AI记忆系统”爆火GitHub"
tags: [ai-memory, local-ai, sota, open-source, mempalace]
related: [mempalace, 米拉-乔沃维奇, 记忆宫殿法, aaak, 记忆堆栈, 本地推理]
created: 2026-04-09
updated: 2026-04-09
authors: [一水]
year: 2026
url: "https://mp.weixin.qq.com/s/wtUOYjlnUHED6iclScu2zg"
venue: "量子位"
sources: ["《生化危机》女主演跨界ai拿sota了！打造免费“ai记忆系统”爆火github.md"]
---

# 《生化危机》女主演跨界AI拿SOTA了！打造免费“AI记忆系统”爆火GitHub

## 概述
本文报道了由演员 [[米拉-乔沃维奇]] 与程序员 Ben Sigman 联合开发的本地 AI 记忆系统 [[MemPalace]]。该系统在 LongMemEval 基准测试中取得了 96.6% 的历史最高分，并在 ConvoMem 和 LoCoMo 上分别获得 92.9% 和 100% 的成绩。项目完全开源，强调本地化处理以保护隐私。

## 核心亮点

### 1. SOTA 性能表现
- **LongMemEval (RAW)**: 96.6% (公开可查史上最高分)
- **ConvoMem**: 92.9%
- **LoCoMo**: 100%

### 2. 记忆宫殿架构
受古希腊“记忆宫殿法”启发，[[MemPalace]] 将记忆构建为空间结构：
- **Palace (宫殿)**: 包含所有知识的大房间。
- **Wings (翅膀)**: 代表一个人或一个项目。
- **Rooms (房间)**: 代表具体主题（如认证、计费）。
- **Halls (走廊)**: 定义记忆类别（如建议、决策）。
- **Drawers (抽屉)**: 存储原始记录。
- **Closets (衣柜)**: 存储压缩摘要。
- **Tunnels (隧道)**: 连接不同项目中的同一主题。

实验表明，这种层级结构相比全局乱搜，检索效率提升了约 34%。

### 3. 成本与效率优化
通过 [[记忆堆栈]] 和 [[AAAK]] 语言，系统大幅降低了长上下文成本：
- **处理量**: 1950 万 tokens（约 6 个月对话）。
- **成本对比**: 传统压缩总结法年成本约 507 美元，MemPalace 仅需约 10 美元。
- **精度**: RAW 模式保持高精度（96.6%），AAAK 模式牺牲部分精度（84.2%）以换取极致压缩。

### 4. 隐私优先
所有数据处理（记录、索引、检索）均在本地完成，不依赖云端服务器，从源头消除隐私泄露风险。

## 技术细节

### 记忆堆栈
分层管理机制，按需加载 Token：
- **L0+L1**: 常驻记忆（约 170 tokens），包含基本自我认知和用户上下文。
- **L2**: 房间级召回。
- **L3**: 全局深度搜索。

### AAAK 语言
专为 AI 设计的缩写语言，无需额外解码器，主流大模型可直接理解。通过去除废话和集中关键信息，显著压缩 Token。

### 实时纠错
通过 `fact_checker.py` 工具进行一致性校验，自动识别并纠正前后矛盾的信息。

## 团队背景
- **架构师**: [[米拉-乔沃维奇]]（《生化危机》主演），负责设计理念。
- **程序员**: Ben Sigman，负责技术实现。
- **协作者**: [[Claude]]（Anthropic），辅助开发。

## 安装与使用
1. **安装**: `pip install mempalace`
2. **初始化**: `mempalace init ~/projects/myapp`
3. **数据挖掘**:
   - 项目文件: `mempalace mine ~/projects/myapp`
   - 对话记录: `mempalace mine ~/chats/ --mode convos`
4. **使用模式**:
   - **自动模式**: 支持 MCP 工具调用（如 Claude）。
   - **手动增强模式**: 配合本地模型使用，支持命令行和 Python API。

## 社区反响
项目在 GitHub 上热度飙升，短时间内 Star 数从 3.3k 飞涨至 17.4k，社区成员已开发出前端界面。