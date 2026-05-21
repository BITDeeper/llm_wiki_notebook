---
title: "NTIRE 2026移动端真实场景图像超分辨率挑战赛"
date: 2026-02-13
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/qKMOghEzq3G0OQIsbJDVxg"
rss_id: "2247655875_1"
---
NTIRE 2026移动端真实场景图像超分辨率挑战赛
本次挑战赛作为 NTIRE 2026 Workshop & Challenges 的组成部分，与 CVPR 2026 同期在美国丹佛（Denver, CO）举办。NTIRE（New Trends in Image Restoration and Enhancement）是图像复原与增强领域最具影响力的国际赛事与研讨会之一，致力于推动真实场景数据、统一评测协议与可复现基准的发展，促进学术与工业交流合作。
大赛背景
图像复原与增强是计算机视觉中的基础任务，目标是恢复退化内容或补全缺失信息。随着移动与可穿戴设备的普及，真实场景图像超分辨率（SR）不仅要“更清晰”，还必须满足“更快、更省、更可部署”的工程要求。
本赛道聚焦于：从单张低分辨率（LR）输入中恢复细节丰富的高分辨率（HR）图像，同时要求模型在移动端设备上具备高效率（以 MediaTek Dimensity 8400 平台上的推理时延衡量）。
大赛介绍
本次挑战赛聚焦移动端真实场景单图像超分辨率（x4 SR）：参赛者需从未知退化的低分辨率输入中重建细节丰富的高分辨率图像，并兼顾移动端部署效率。竞赛采用“质量 + 效率”双维度综合评估：
感知质量（Perception Quality）：以综合感知得分为核心，基于 6 个无参考感知指标加权评估，包括 LPIPS、DISTS、NIQE、ManIQA、MUSIQ、CLIP-IQA，用于衡量结果的主观逼真度与观感质量。
移动端效率（Latency / Speed）：以移动端设备上的推理速度为核心（FP16 推理），评估模型在 MediaTek Dimensity 8400 平台上的运行效率，用于衡量可部署性与实时性。
开发阶段：
组委会发布训练数据与验证数据（仅输入），参赛者可基于训练集训练模型，并通过验证集迭代调试与对比方法。
测试阶段：
最终测试数据（仅输入）发布后，参赛者提交超分辨率重建结果，并按要求提交可复现代码/可执行文件，由组委会统一评测后确定最终排名。
组委会将在单卡 NVIDIA A6000 GPU 上运行你提交的代码/权重/推理脚本，计算 6 个感知指标并得到 Score；
同时在 MediaTek Dimensity 8400 平台上运行模型，计算 Speedup；
任意无法成功执行或不可复现的提交可能被取消资格。请控制随机性并提供完整依赖与推理说明。
大赛奖励
排名靠前的参赛者将获奖，并受邀按照 CVPR Workshop 论文投稿要求撰写方案描述，提交至与 CVPR 2026 同期的 NTIRE Workshop 论文集中。
重要日期
2026.01.29 发布训练数据（HR + reference LR，允许自定义退化）与验证数据（仅输入）
2026.03.10 发布最终测试数据（仅输入）
2026.03.17 测试结果提交截止
2026.03.17 Fact Sheet 及代码/可执行文件提交截止
2026.03.19 向参赛者公布初步测试结果
2026.03.24 挑战赛论文提交截止（Top/interesting solutions 受邀投稿，论文将双盲评审）
2026.06 NTIRE Workshop & Challenges 研讨会与颁奖（CVPR 2026，Denver, CO）
参赛入口
CodaBench 竞赛平台：https://www.codabench.org/competitions/13509/
NTIRE 2026 官网：https://cvlai.net/ntire/2026/
竞赛主页：https://gobunu.github.io/ntire_mobile_sr/
大赛组织者
李佳桐（Shanghai Jiao Tong University）jiatong.li2024@gmail.com
王敬锴（Shanghai Jiao Tong University）jingkaiwang100@gmail.com
龚珏（Shanghai Jiao Tong University）g1017325431@gmail.com
陈铮（Shanghai Jiao Tong University）zhengchen.cse@gmail.com
刘楷（Shanghai Jiao Tong University）normal.kliu@gmail.com
Radu Timofte（University of Würzburg）Radu.Timofte@uni-wuerzburg.de
张宇伦（Shanghai Jiao Tong University）yulun100@gmail.com
（持续更新）