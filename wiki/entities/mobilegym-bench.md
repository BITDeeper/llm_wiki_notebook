---
type: entity
title: MobileGym-Bench
created: 2026-06-02
updated: 2026-06-02
tags: [评测基准, mobile-agent, benchmark]
related: [mobilegym, 中科院自动化所, mobile-gui-agent, use-意外副作用指标]
sources: ["浏览器秒变手机！中科院开源agent训练场，微信、原神都能跑.md"]
origin_date: 2026-05-01
---
# MobileGym-Bench

MobileGym-Bench 是 [[MobileGym]] 配套发布的手机Agent评测基准，被形容为"史上最严手机Agent考场"。

## 设计特点

- **416个参数化任务模板**（256测试 + 160训练），横跨28个App
- **参数化实例化**：每道题非固定题干，通过参数可衍生超过27000个不同实例，从根源防止模型"背答案"
- **4个难度等级**（L1-L4）：由8个参考模型实测校准，非拍脑袋决定
- **结构化答题卡**：Agent在界面上填写结构化答题卡，系统按字段类型（精确文本、数值、格式、选项）逐项核对，堵死字符串模糊匹配的漏洞

## 基准结果

9个知名Agent模型同台竞技，在最难的L4任务上集体扑街：
- 最高得分仅21.9%（Gemini）
- 区分度极强：既未被刷爆，也未难到全军覆没

## 创新点

- 首次让微信、支付宝等日常App能被确定、可复现地打分
- 程序化状态校验替代VLM裁判，消除10.2%误判率
- 引入 [[use-意外副作用指标|USE指标]]，首次量化Agent在完成任务过程中的非预期操作