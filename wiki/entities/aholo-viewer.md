---
type: entity
title: Aholo Viewer
created: 2026-05-25
updated: 2026-05-25
tags: [开源软件, 3dgs, 浏览器, 渲染引擎]
related: [群核科技, spark-2.0, 3d高斯泼溅, chunk-based-lod-tree, 空间智能]
sources: ["性能超越李飞飞，他们把10亿高斯点的3d世界装进浏览器.md"]
origin_date: 2026-05-25
---
# Aholo Viewer

Aholo Viewer 是由[[群核科技]]开源的 3D 高斯浏览器，让任何设备的浏览器都能流畅运行 10 亿+粒子的超大 3D 场景。

## 基本信息
- **开源地址**：https://github.com/manycoretech/aholo-viewer
- **主页**：https://aholojs.dev/zh-CN/
- **开源时间**：2026 年 5 月

## 技术特点

### 核心架构：Chunk-based LOD Tree
采用 [[chunk-based-lod-tree]] 技术路线，将原始 3DGS 数据切成数据块（chunk），分别为每个 chunk 生成不同层级的 LOD，运行时以 chunk 为单位做层级切换。

相比 [[spark-2.0]] 采用的 [[splat-based-lod-tree]]，优势在于：
1. **内存与显存开销更可控**：以 chunk 为单位选层级，无需为成千上万个 splat 各自决策
2. **可扩展性更强**：chunk 是清晰的数据边界，未来扩展至城市级、街区级场景更容易

### 渲染管线优化
- 多精度数据结构降低显存占用
- 缓存预计算与按需 pass 压缩每帧 GPU 开销
- Morton Sort 和 detail culling 改善数据访问效率

## 性能基准（3 亿高斯点场景 vs Spark 2.0）
| 指标 | 对比 Spark 2.0 |
|------|---------------|
| 内存占用 | 减半 |
| 加载速度 | 快 1 倍 |
| 渲染速度 | 快 3 倍 |
| 容量上限 | 10 亿高斯点（10 倍） |

## 产品完备性
- 兼容主流 3DGS 格式
- 完整工具链支持：数据格式转换、3D 高斯碰撞体生成等
- 已具备被开发者落地产品应用的成熟度

## 注意事项
- 性能数据来自媒体实测，非第三方独立基准
- 10 亿高斯点的"流畅运行"未说明具体帧率和设备配置
- 移动端体验缺乏详细数据