---
type: entity
title: MT Lambda-Sim
created: 2026-05-19
updated: 2026-05-19
tags: [具身智能, 物理仿真, 渲染, 数据合成]
related: [mt-lambda, mt-lambda-lab, 摩尔线程, alphacore, mt-photon]
sources: ["国产gpu开始造世界！国内首个全栈具身智能仿真平台来了.md"]
origin_date: 2026-05-19
---
# MT Lambda-Sim

MT Lambda-Sim 是 [[mt-lambda]] 的上层平台之一，定位为高保真物理仿真与渲染平台。

## 功能定位

负责场景构建、传感器模拟、数据生成和仿真验证。核心关注点：机器人看到的世界、碰到的物体、执行动作后的反馈，能否尽可能接近真实世界。

## 关键能力

- 高保真物理仿真
- 传感器模拟（摄像头、深度相机、激光雷达、触觉传感器等）
- 合成数据大规模生成
- 仿真验证闭环

## 底层支撑

MT Lambda-Sim 的能力建立在 [[alphacore]] 物理引擎和 [[mt-photon]] 光子引擎之上，实现物理仿真与图形渲染的协同工作。