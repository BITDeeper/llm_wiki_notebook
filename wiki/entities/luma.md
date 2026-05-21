---
type: entity
title: Luma
tags: [ai, startup, image-generation, video-generation]
related: [uni-1.1, 宋佳铭, 沈博魁, ray2, 原生理解生成统一]
created: 2026-05-06
updated: 2026-05-06
sources: ["luma-uni-1.1-api开放，图像模型榜单第三，文字渲染直逼gpt-image-2.md"]
---

# Luma

[[Luma]] 是一家海外 AI 初创公司，专注于开发“统一智能”模型。该公司以其在图像生成和视频生成领域的技术突破而闻名，致力于将“看、说、推理、想象”放在同一条连续流中处理。

## 核心产品与技术

### Uni-1.1
Luma 发布的第一代统一图像模型。该模型在 [[LMArena]] 图像生成榜单中位列全球第三，仅次于 OpenAI 和 Google。[[Uni-1.1]] 采用了 [[原生理解生成统一]] 架构，能够在同一模型中同时处理图像理解和生成，解决了多轮编辑和角色一致性的难题。

### 技术路线
Luma 选择了一条与大厂截然不同的路径：不是把理解和生成分开做，而是用同一个模型把两件事一起搞定。其架构基于 decoder-only 自回归 Transformer，将文本 token 与图像 token 表示在同一个交错序列里。

## 商业生态
- **客户**：包括 [[Adidas]]、[[Mazda]]、Publicis Groupe、Serviceplan 等品牌与广告集团。
- **合作伙伴**：Envato、Comfy、Runware、Flora、Krea、Magnific、Fal、LovArt 等创作者平台。
- **定价策略**：以极具竞争力的价格（单图最低 0.0404 美元）切入市场，旨在将广告本地化、电商按需生图等工作转化为可编程的 API 调用。

## 团队
核心研究团队规模不到 15 人，由两位华人学者领衔：
- [[宋佳铭]]：首席科学家，DDIM 采样算法发明人。
- [[沈博魁]]：Uni 系列模型研究负责人，CVPR 2018 Best Paper Award 得主。

## 发展愿景
根据官方路线图，Luma 的统一框架将从静态图像扩展到视频、语音与交互式世界模拟，最终实现真正的“统一智能”。