---
type: source
title: "虾马之后又火一个！OpenHuman用20分钟了解你的一切，存成卡帕西式知识库"
created: 2026-05-16
updated: 2026-05-16
tags: [agent, openhuman, 知识库, 记忆树, token压缩]
related: [openhuman, 卡帕西式知识库, 记忆树, 潜意识循环, andrej-karpathy]
sources: ["虾马之后又火一个！openhuman用20分钟了解你的一切，存成卡帕西式知识库.md"]
authors: [闻乐, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/YC4Xt8yKk3yxpIqJMwBZlw"
venue: 量子位
---
# 虾马之后又火一个！OpenHuman用20分钟了解你的一切，存成卡帕西式知识库

量子位发布的关于开源AI智能体项目 [[openhuman]] 的产品报道。文章将 OpenHuman 定位为 Agent 赛道继"虾"（Claude Cowork）和"马"（Hermes Agent/OpenClaw）之后的"新物种"，核心卖点是无需用户配置即可主动理解用户。

## 核心内容

- **项目热度**：GitHub Trending 连续霸榜第一，9k+ Star，日增千星
- **核心理念**：将 [[andrej-karpathy]] 的 [[卡帕西式知识库]]（LLM Wiki）手工工作流自动化
- **三步链路**：连接（118+第三方服务一键授权）→ 抓取（每20分钟自动轮询）→ 记忆（压缩存入 [[记忆树]]）
- **关键技术**：[[token-压缩]]（TokenJuice，最高节省80% Token）、[[潜意识循环]]（自主加载待办、读取记忆）
- **兼容性**：生成兼容 Obsidian 的本地 Markdown 知识库，底层为 SQLite 数据库
- **附加功能**：Mascot 虚拟参会者，可旁听 Google Meet 会议并记录要点

## 评价

文章为产品报道性质，数据来自项目方宣称，缺乏独立验证。未涉及数据安全与隐私问题。对竞品的对比停留在功能列表层面，缺乏客观基准测试。