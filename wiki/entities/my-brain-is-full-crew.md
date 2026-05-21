---
type: entity
title: "My Brain Is Full Crew"
tags: [开源, agent, 个人自动化, para, obsidian]
related: [claude-code, obsidian, 精力感知, 任务执行范式]
created: 2026-03-23
updated: 2026-03-23
sources: ["小扎秘密研发ceo-agent！开源「人生托管系统」爆火.md"]
---

# My Brain Is Full Crew

**My Brain Is Full Crew** 是一套开源的个人自动化 Agent 系统，旨在解决个人生活中的认知过载问题。该项目由 AI 博士生 [[gnekt]] 发起，并在 GitHub 上以 MIT 协议开源。

## 核心功能

该系统由 8 个具有明确职责边界的 Agent 组成，运行在 [[claude-code]] 平台上，并与本地 [[obsidian]] 笔记库深度集成。

### Agent 架构

1.  **Scribe（记录员）**
    -   **职责**：将语音碎碎念或文字意识流转化为结构化笔记。
    -   **目的**：降低记录成本，捕捉瞬时想法。

2.  **Sorter（分拣员）**
    -   **职责**：每晚清空收件箱，将所有内容分类归档。
    -   **目的**：维持系统的整洁和有序。

3.  **Seeker（搜索者）**
    -   **职责**：负责跨笔记检索，并进行综合作答。
    -   **目的**：充当私人搜索引擎，激活沉睡的知识。

4.  **Connector（连接者）**
    -   **职责**：在笔记之间发现隐藏关联。
    -   **目的**：促进知识复利，发现未被注意的联系。

5.  **Librarian（图书管理员）**
    -   **职责**：每周进行仓库体检，处理重复内容、断链和增长分析。
    -   **目的**：维护数据库的健康度。

6.  **Transcriber（转录员）**
    -   **职责**：将会议录音转化为结构化记录。
    -   **目的**：自动化会议纪要流程。

7.  **Postman（邮递员）**
    -   **职责**：打通 Gmail 和 Google Calendar，自动提取截止日期和会议信息。
    -   **目的**：实现外部信息流的自动同步。

8.  **Architect（架构师）**
    -   **职责**：负责整体结构设计和新用户引导。
    -   **目的**：作为系统的大脑，统筹全局。

## 技术实现

-   **协调机制**：Agent 之间通过共享消息板进行异步协调，而非直接相互调用，从而实现解耦。
-   **知识架构**：采用 PARA（Projects, Areas, Resources, Archives）和卡片盒笔记法的混合架构。
-   **部署方式**：提供 `launchme.sh` 脚本，自动部署到本地并生成 Claude Code 命令行和 Claude Cowork 两套配置。

## 局限性与挑战

根据社区反馈，该系统目前面临以下挑战：
-   **级联错误**：多个 Agent 串联工作，前端的错误可能被后端放大。
-   **竞争条件**：多个 Agent 同时写入单一消息文件可能导致数据冲突。
-   **缺乏精力感知**：系统目前无法根据用户的疲劳程度动态调整任务负载，可能导致过度消耗。

## 参考链接
- GitHub: [gnekt/My-Brain-Is-Full-Crew](https://github.com/gnekt/My-Brain-Is-Full-Crew)