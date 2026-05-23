---
type: entity
title: Avatar Flow
created: 2026-05-20
updated: 2026-05-20
tags: [数字分身, 安全机制, 身份验证, gemini-omni]
related: [gemini-omni, synthid, google-deepmind]
sources: ["全网实测gemini-omni！一句话改视频，草图变大片.md"]
origin_date: 2026-05-20
---
# Avatar Flow

Avatar Flow 是 [[gemini-omni]] 的数字分身注册系统，是谷歌为该模型设置的第一道安全笼子。它限制了用户将任意人物形象植入生成视频的能力，要求通过严格的注册流程创建数字分身。

## 注册流程

1. **多角度面孔采集**：用户需要提供多个角度的面部图像
2. **语音录制**：用户需要朗读一串数字进行录音
3. **Avatar 创建**：采集的数据存为一个"Avatar"实体

## 使用限制

- 所有使用用户面部形象的生成，必须调用已注册的 Avatar
- **不能任意上传图像**：用户无法直接上传一张自拍就开始生成
- 每次生成涉及人物形象时，系统会验证 Avatar 的合法性

## 设计理念

产品负责人 Nicole Brichtova 坦言："你可能会觉得我们封锁了很多东西。"这是一种明知会让用户嫌麻烦、但仍然坚持做的安全设计。

Avatar Flow 的存在反映了 [[gemini-omni]] 团队对深度伪造风险的主动管控，与 [[synthid]] 水印系统共同构成 Omni 的双层安全机制。

## 与 KYC 的关联

Avatar Flow 的多步验证逻辑与 [[kyc]]（了解你的客户）理念有相似之处，都是通过提高操作门槛来降低滥用风险。