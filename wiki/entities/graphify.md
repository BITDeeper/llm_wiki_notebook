---
type: entity
title: Graphify
tags: [tools, knowledge-management, open-source, graph-database]
related: [andrej-karpathy, ast解析, leiden算法, claude-code, tree-sitter]
created: 2026-04-07
updated: 2026-04-07
sources: ["卡帕西没做完的，开源社区48小时搞定了！完全体知识库，token省70倍.md"]
---

# Graphify

[[Graphify]] 是一款开源的自动化知识图谱构建工具，旨在将 [[Andrej Karpathy]] 提出的个人知识库工作流进化为完全体。它主打零配置、全模态支持、本地运行以及极致的 Token 消耗优化。

## 核心特性

### 全模态自动解析
Graphify 内置统一的多模态处理管线，能够针对不同文件类型自动执行解析策略：
- **代码**：利用 [[tree-sitter]] 在本地进行 [[AST解析]]，提取结构信息，不消耗 Token。
- **文档**：自动拆分 PDF 和 Markdown 文件的文本与语义单元。
- **视觉**：调用 [[Claude Vision]] 处理截图、白板照片等，提取概念与关系。

### Token 消耗优化
通过“本地逻辑 + 云端语义”的双阶段架构，Graphify 在测试中实现了 **71.5 倍** 的 Token 消耗降低：
1. **本地阶段**：代码结构提取完全在本地完成，确定性高且无 API 成本。
2. **云端阶段**：仅对非代码内容使用并行 LLM 子代理进行语义抽取。
3. **缓存机制**：基于 SHA256 的缓存确保重复运行时只处理变更文件。

### 零配置与图算法
- **无向量库依赖**：不使用 Embeddings 或向量数据库，而是基于图拓扑结构进行聚类。
- **Leiden 算法**：利用 [[Leiden算法]] 按边密度划分社区，实现知识点的自动分类。
- **一键部署**：无需复杂配置，一条命令 (`/graphify .`) 即可生成可视化图谱。

## 工作流集成
- **监听模式**：支持 `--watch` 参数，文件改动自动触发更新。
- **Git 集成**：支持安装 Git 钩子，在代码提交或切换分支后自动重建图谱。
- **增量更新**：支持仅更新变更节点，无需全量重建，适合长期维护的知识库。

## 兼容平台
- [[Claude Code]]
- [[Codex]] (需开启 `multi_agent` 模式)
- [[OpenClaw]] (多代理并行支持尚不完善)

## 开发者
由伦敦 Valent 公司的 AI 研究员 [[Safi Shamsi]] 开发。

## 参见
- [[知识图谱自动化构建]]
- [[个人知识库自动化]]