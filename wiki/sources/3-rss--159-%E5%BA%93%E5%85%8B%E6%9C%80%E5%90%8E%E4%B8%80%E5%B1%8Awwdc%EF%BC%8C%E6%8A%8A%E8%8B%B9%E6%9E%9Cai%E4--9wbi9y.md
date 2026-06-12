---
type: source
title: "库克最后一届WWDC，把苹果AI九年的地基掀了"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/Iei_SeXPX8pJWlii_UZQKg"
venue: 新智元
tags: [苹果, wwdc, core-ai, afm-3, foundation-models, 端侧推理, anthropic]
related: [苹果, core-ai, afm-3, foundation-models框架, anthropic, 谷歌]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
---
# 库克最后一届WWDC，把苹果AI九年的地基掀了

**来源：** 新智元 | **日期：** 2026-06-10

## 摘要

苹果在WWDC 2026上彻底重写AI基础设施：服役9年的Core ML被一刀砍掉，全新[[core-ai]]从第一行代码为大模型重写。苹果发布第三代自研模型家族[[afm-3]]（5个模型，端侧2+云端3），其中20B参数稀疏模型通过[[instruction-following-pruning]]技术直接跑在手机闪存。[[foundation-models框架]]定义统一Language Model协议，苹果定位为AI路由层和分发平台。[[anthropic|Anthropic]]首个适配Foundation Models，Claude通过Swift包触达十亿级用户。

## 核心发现

1. **Core ML被砍，Core AI从零重写**：苹果从传统ML时代全面切换至大模型时代，统一调度CPU、GPU和Neural Engine。
2. **200亿参数端侧运行突破**：通过Instruction-Following Pruning，完整模型存闪存，路由模块按需激活专家，每次仅调动5%-20%参数。
3. **苹果不做模型公司，做AI擂台**：25亿台设备+统一Language Model协议，AI巨头竞争"默认AI引擎"位置。
4. **Anthropic获得消费级分发入场券**：首个适配Foundation Models的第三方，弥补消费端存在感缺失。

## 关键数据

- AFM 3 Core在45.6%测试prompt上优于上一代（上代仅23.3%）
- AFM 3 Cloud：64.7%对8.7%，几乎是单方面碾压
- AFM 3 Core Advanced：20B参数稀疏模型，每次激活5%-20%参数（1B-4B）
- App首次下载量低于200万：Private Cloud Compute云端推理完全免费

## 关联条目

- [[苹果]] — 发布主体
- [[core-ai]] — 全新端侧AI推理框架
- [[afm-3]] — 第三代自研模型家族
- [[foundation-models框架]] — 统一AI调用框架
- [[anthropic]] — 首个适配Foundation Models的第三方
- [[谷歌]] — 与苹果联合开发AFM 3
- [[tim-cook]] — 报道称为最后一届WWDC