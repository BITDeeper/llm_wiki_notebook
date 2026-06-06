---
type: source
title: "AI手机时代，Mobile Agent最缺是更真实的世界"
created: 2026-06-06
updated: 2026-06-06
tags: [mobile-agent, 环境scaling, mock-app, 腾讯混元, phoneworld, 机器之心]
related: [phoneworld, 腾讯混元, mobile-agent, 环境-scaling, mock-android-app]
sources: ["ai手机时代，mobile-agent最缺是更真实的世界.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/uzasS6q6LAwX8wLXD7KzeA"
venue: "机器之心微信公众号"
---
# AI手机时代，Mobile Agent最缺是更真实的世界

本文由 [[机器之心]] 发布，深入报道了由 [[腾讯混元]] 牵头，联合港中深、人大高瓴、武汉大学等机构发布的最新研究成果 [[phoneworld|PhoneWorld]]。

## 核心摘要

文章指出，限制 [[mobile-agent|Mobile Agent]] 发展的瓶颈不仅在于模型本身，更在于缺乏可规模化构建、可验证且接近真实的手机交互环境。真实App存在状态难重置、结果难自动验证、充满不稳定噪声（如弹窗、风控）等痛点。

PhoneWorld 提出了一种“中间路线”：从真实App的截图和操作轨迹中恢复“使用结构”，生成页面级PRD，并由AI自动构建出可运行、可重置、可验证的 [[mock-android-app|Mock Android App]]。

## 关键数据与结果

- **环境规模**：构建了 34 个 Mock App，覆盖 16 个领域，包含 120 个评测任务、3,354 条成功轨迹和 36,193 个交互步骤。
- **性能提升**：仅用 10K PhoneWorld 步骤替换部分训练数据，即在四个外部基准测试上带来显著提升（HYMobileBench +17.7，AndroidControl +6.0，AndroidWorld +14.7）。
- **互补性**：完全替换真实数据会导致在 AndroidWorld 上的表现下降，说明 Mock 环境与真实环境必须互补使用。
- **Scaling 潜力**：随着轨迹步数和 App 多样性的增加，模型收益持续增加，验证了 [[环境-scaling|环境规模化]] 的有效性。