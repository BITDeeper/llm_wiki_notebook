---
title: "【NTIRE 2026 @ CVPR】首届 3D Restoration and Reconstruction Challenge（3DRR）开启！"
date: 2026-02-26
source: "我爱计算机视觉"
url: "https://mp.weixin.qq.com/s/MdsBDlDIt5QG_axG-gg-cg"
rss_id: "2247656263_1"
---
真实场景里的 3D 重建，常见瓶颈并不在几何本身，而在真实
低照度
与
烟雾/散射
等退化：噪声增强、对比度下降、颜色漂移、跨视角不一致，往往会导致新视角合成（NVS）出现闪烁、漂色与伪影。
3DRR Challenge
聚焦这一问题：
在给定
退化的多视角训练图像与相机位姿
的条件下，构建更干净、更一致的 3D 表征，并在指定测试位姿下输出
NVS 渲染结果
；提交结果将与干净参考进行自动评测。
Challenge 主页（任务说明 / 数据 / 规则）：https://i2wm.github.io/3DRR_2026/
Github 主页: https://github.com/I2WM/i2wm.github.io/tree/main/3DRR_2026
简单基线代码：https://github.com/I2WM/3DRR_codebase
两个赛道（Two Tracks）
Track 1：3D Low-Light Enhancement（3D 低照度增强）
低照度不仅意味着亮度不足，还常伴随细节丢失与颜色偏移。更关键的是：
不少方法在单张图像上效果可观，但在多视角设置中容易出现
跨视角不一致
，从而使 NVS 结果产生闪烁或漂色。
Codabench 入口：https://www.codabench.org/competitions/13854/
Track 2：3D Smoke Restoration（3D 烟雾恢复）
烟雾/散射属于典型的“视角相关”退化：对比度衰减、airlight 与视角变化会使多视角一致性更难保证。
Codabench 入口：https://www.codabench.org/competitions/13993/
时间线（Important dates）
2026.02.19
发布验证集与开发集
2026.03.20
发布测试集
2026.03.27
测试阶段 NVS 结果提交截止；factsheet 与代码/可执行文件提交截止
2026.03.28
向参赛者发布测试阶段初步结果
2026.04.10
挑战赛参赛条目论文提交截止
任务形式（需要提交什么）
每个场景包含：
train/
：退化的训练视角图像
transforms_train.json
：训练视角相机内外参与位姿
transforms_test.json
：测试视角相机内外参与位姿（需要在这些位姿下渲染）
提交内容：
测试视角对应的
NVS 渲染图像
（按 Codabench phase 的格式与命名打包提交）。
提交结果将自动与干净参考进行对比，并生成榜单成绩。
数据集划分（Data Split）
两条赛道均采用相同的三阶段设置：
Part I｜Validation（1 个场景）
完全公开的验证场景，用于调试与自查；该部分不计入排名。
Part II｜Development（4 个场景）
开发阶段提交后即时生成成绩，用于迭代方法与对比结果。
Part III｜Test（3 个场景）
测试阶段开始后发布测试集，按相同协议评测；最终排名通常按
Development + Test
的逐场景平均确定。
评测指标（Metrics）
主要指标：
PSNR
SSIM
LPIPS
最终排名与统计方式（Development / Test、逐场景平均）
参赛流程
访问主页，了解任务与数据结构：
https://i2wm.github.io/3DRR_2026/
选择赛道并注册参赛：
Low-Light：https://www.codabench.org/competitions/13854/
Smoke：https://www.codabench.org/competitions/13993/
下载数据 → 训练/推理 → 按测试位姿渲染 NVS → 提交 → 查看榜单
组织方
本挑战由东京大学、东北大学、维尔茨堡大学、比萨大学、南京理工大学、大连理工大学等研究机构，组织团队包括 Shuhong Liu、Chenyu Bao、Ziteng Cui、Lin Gu、Xuangeng Chu、Bin Ren、Xiang Chen、Long Ma、Mingrui Li、Marcos V. Conde 等
更多信息
组织信息、数据下载、规则细节与时间线更新以Codabench官网为准。
请查看本挑战赛相关数据集论文：
RealX3D: A Physically-Degraded 3D Benchmark for Multi-view Visual Restoration and Reconstruction
，了解数据采集流程、基线方法（baselines）、评测协议（evaluation）等更多细节： https://arxiv.org/abs/2512.23437