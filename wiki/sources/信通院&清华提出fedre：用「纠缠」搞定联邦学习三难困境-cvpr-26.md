---
type: source
title: "信通院&清华提出FedRE：用「纠缠」搞定联邦学习三难困境 | CVPR 26"
created: 2026-05-18
updated: 2026-05-18
tags: [联邦学习, 隐私计算, cvpr, 表征学习, 模型异构]
related: [fedre, 表征纠缠, 联邦学习三难困境, 中国信通院泰尔英福, 清华大学]
sources: ["信通院&清华提出fedre：用「纠缠」搞定联邦学习三难困境-cvpr-26.md"]
authors: [FedRE团队, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/rs7gV4IBSbje6uwLlr27cw"
venue: 量子位公众号
---
# 信通院&清华提出FedRE：用「纠缠」搞定联邦学习三难困境 | CVPR 26

量子位发布的关于 [[中国信通院泰尔英福]] 与 [[清华大学]] 联合提出的 [[fedre]]（Federated Representation Entanglement）框架的报道。该工作被 CVPR 2026 接收，论文预印本编号 arXiv: 2511.22265。

## 核心内容

报道介绍了 FedRE 如何通过 [[表征纠缠]] 机制解决 [[联邦学习三难困境]]，即在 [[模型异构联邦学习]] 场景中同时兼顾模型性能、数据隐私和通信开销。

## 关键发现

1. **性能**：FedRE 在模型异构设置下优于 FedGH 等基线方法，表明纠缠表征比类别原型更有效。
2. **隐私**：[[表征逆向攻击]] 实验显示纠缠表征重建结果几乎不可辨识，远优于原始表征和类别原型。
3. **通信**：每个客户端仅需上传一个纠缠表征及标签编码，上传阶段通信开销为所有对比方法中最低。

## 代码仓库

https://github.com/AIResearch-Group/FedRE