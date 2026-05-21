---
title: "刚刚，英伟达CUDA迎来史上最大更新！"
date: 2025-12-06
source: "机器之心"
url: "https://mp.weixin.qq.com/s/lDlVLpFHWwd-HE3Muaa-kQ"
rss_id: "2651005849_1"
---
机器之心报道
机器之心编辑部
几个小时前，
NVIDIA CUDA Toolkit 13.1 正式发布，
英伟达官方表示：
「这是 20 年来最大的一次更新。」
这个自 2006 年 CUDA 平台诞生以来规模最大、最全面的更新包括：
NVIDIA CUDA Tile 的发布，
这是英伟达基于 tile 的编程模型，可用于抽象化专用硬件，包括张量核心。
Runtime API exposure of green contexts
（是指把所谓的 Green Context「指轻量级的、可并发调度的上下文或执行环境」暴露给外部调用者使用。）
NVIDIA cuBLAS 中的双精度和单精度仿真。
一本完全重写的 CUDA 编程指南 ，
专为 CUDA 新手和高级程序员设计。
下面我们就来具体看看。
CUDA Tile
CUDA Tile 是 NVIDIA CUDA Toolkit 13.1 最核心的更新。
它是一种基于 tile 的编程模型，能够以更高的层次编写算法，并抽象化专用硬件（例如张量核心）的细节。
解读 CUDA Tile 的核心概念
英伟达博客解释说：
CUDA Tile 可让开发者在高于 SIMT（单指令多线程）的层级编写 GPU 核函数。
在目前的 SIMT 编程中，开发者通常通过划分数据并定义每个线程的执行路径来指定核函数。
而借助 CUDA Tile，开发者可以提升代码的抽象层级，直接指定被称为「Tile」的数据块。只需指定要在这些 Tile 上执行的数学运算，编译器和运行时环境会自动决定将工作负载分发到各个线程的最佳方式。
这种 Tile 模型
屏蔽了调用 Tensor Core 等专用硬件的底层细节，并且 Tile 代码将能够兼容未来的 GPU 架构。
CUDA 13.1 包含两个用于 Tile 编程的组件：
CUDA Tile IR：
一种用于 NVIDIA GPU 编程的全新虚拟指令集架构（ISA）。
cuTile Python：
一种新的领域特定语言（DSL），用于在 Python 中编写基于数组和 Tile 的核函数。
编译的 Tile 路径可以融入完整的软件栈，与 SIMT 路径对应。
这是该软件的首个版本，其包含以下注意事项：
CUDA Tile 仅支持 NVIDIA Blackwell（计算能力 10.x 和 12.x）系列产品。
未来的 CUDA 版本将扩展对更多架构的支持。
目前的开发重点聚焦于 AI 算法的 Tile 编程。
英伟达表示在未来的 CUDA 版本中将持续增加更多特性、功能并提升性能。
英伟达计划在即将发布的 CUDA 版本中引入 C++ 实现。
为什么要为 GPU 引入 Tile 编程？
CUDA 向开发者提供了单指令多线程（SIMT）硬件和编程模型。这种模式要求（同时也允许）开发者以最大的灵活性和针对性，对代码的执行方式进行细粒度控制。然而，编写高性能代码往往需要付出巨大的心力，尤其是在需要适配多种 GPU 架构的情况下。
尽管已有许多库（如 NVIDIA CUDA-X 和 NVIDIA CUTLASS）旨在帮助开发者挖掘性能，但
CUDA Tile 引入了一种比 SIMT 层级更高的新型 GPU 编程方式。
随着计算工作负载的演进，特别是在 AI 领域，
张量已成为一种基础数据类型。
NVIDIA 开发了专门用于处理张量的硬件，例如 NVIDIA Tensor Core（TC）和 NVIDIA Tensor Memory Accelerator（TMA），它们现已成为每个新 GPU 架构中不可或缺的组成部分。
硬件越复杂，就越需要软件来帮助驾驭这些能力。CUDA Tile 对 Tensor Core 及其编程模型进行了抽象，使得使用 CUDA Tile 编写的代码能够兼容当前及未来的 Tensor Core 架构。
基于 Tile 的编程方式允许开发者通过指定数据块（即 Tile），然后定义在这些 Tile 上执行的计算来编写算法。开发者无需在逐元素的层面上设定算法的执行细节：编译器和运行时将处理这些工作。
下图展示了随 CUDA Tile 推出的 Tile 模型与 CUDA SIMT 模型之间的概念差异。
Tile 模型（左）将数据划分为多个块，编译器将其映射到线程。单指令多线程（SIMT）模型（右）将数据同时映射到块和线程
这种编程范式在 Python 等语言中很常见，在这些语言中，像 NumPy 这样的库可以让开发者指定矩阵等数据类型，然后用简单的代码指定并执行批量操作。
CUDA 软件更新
以下是本次 CUDA 版本更新中包含的其他重要软件改进：
运行时对 Green Context（绿色上下文）的支持
CUDA 中的 Green Context 是一种轻量级的上下文形式，可作为传统 CUDA 上下文的替代方案，为开发者提供更细粒度的 GPU 空间划分与资源分配能力。
自 CUDA 12.4 起，它们已在驱动 API 中提供；而从本版本开始，
Green Context 也正式在运行时 API 中开放使用。
Green Context 使用户能够定义和管理 GPU 资源的独立分区，主要是 Streaming Multiprocessors（SM）。你可以将特定数量的 SM 分配给某个特定的 Green Context ，然后在该 context 所拥有的资源范围内启动 CUDA kernel 并管理只在此 context 内运行的 stream。
一个典型的应用场景是：你的程序中有部分代码对延迟极为敏感，并且需要优先于其他所有 GPU 工作执行。通过为这段代码单独创建一个 Green Context 并分配 SM 资源，而将剩余的 SM 分配给另一个 Green Context 处理其他任务，你就能确保始终有可用的 SM 供高优先级计算使用。
CUDA 13.1 还引入了更加可定制的 split () API。
开发者可以通过这一接口构建此前需要多次 API 调用才能完成的 SM 分区，并且可以配置工作队列，从而减少不同 Green Context 之间提交任务时产生的伪依赖（false dependencies）。
有关这些功能及 Green Context 的更多信息，请参见 CUDA Programming Guide。
CUDA 编程指南地址：https://docs.nvidia.com/cuda/cuda-programming-guide/04-special-topics/green-contexts.html
CUDA 多进程服务（MPS）更新
CUDA 13.1 为多进程服务带来了多项新特性和功能。有关这些新功能的完整信息，请参阅 MPS 文档。以下是部分亮点内容：
内存局部性优化分区
内存局部性优化分区（Memory locality optimization partition，MLOPart）是 NVIDIA Blackwell 系列（计算能力 10.0 和 10.3，为架构版本号）及更新 GPU 上提供的一项特性。
该功能允许用户创建专门优化内存局部性的 CUDA 设备。MLOPart 设备基于同一块物理 GPU 派生而来，但呈现为多个独立设备，每个设备拥有更少的计算资源和更小的可用内存。
在计算能力 10.0 和 10.3 的 GPU 上，每块 GPU 都包含两个分区。
当在 GPU 上启用 MLOPart 时，每个分区都会作为一个独立的 CUDA 设备出现，并具有其对应的计算与内存资源。
目前，MLOPart 仅支持 NVIDIA B200 与 NVIDIA B300 系列产品。
未来的 CUDA 发布版本将加入对 NVIDIA GB200 与 NVIDIA GB300 系列的支持。
静态流式多处理器（SM）分区
作为 MPS 中现有的动态执行资源供给（provisioning）的一种替代方案，静态流式多处理器（SM）分区是针对 NVIDIA Ampere 架构（计算能力 8.0）及更新 GPU 的一项特性，它为 MPS 客户端提供了一种创建独占 SM 分区的方法。
该模式通过使用 -S 或 --static-partitioning 标志启动 MPS 控制守护进程来启用，其主要目的是提供确定性的资源分配，并改善 MPS 客户端之间的隔离性。分区的基本单位是一个「Chunk」（块），其大小根据 GPU 架构而异 —— 例如，在 Hopper（计算能力 9.0）及更新的独立 GPU 上，一个 Chunk 包含 8 个 SM。
cuBLAS 中的双精度和单精度模拟
虽然严格来说这不属于 CUDA 13.1 的更新，但 NVIDIA CUDA Toolkit 13.0 中的 cuBLAS 更新引入了新的 API 和实现，旨在提升双精度（FP64）矩阵乘法（matmul）的性能。
这是通过在 NVIDIA GB200 NVL72 和 NVIDIA RTX PRO 6000 Blackwell Server Edition 等 GPU 架构的 Tensor Core 上进行浮点（FP）模拟来实现的。
开发者工具
开发者工具是 CUDA 平台的重要组成部分。此次发布带来了多项创新和功能增强，包括：
CUDA Tile 核函数性能分析工具
在摘要页新增「Result Type」（结果类型）列，
用于区分 Tile 核函数与 SIMT 核函数。
详情页新增「Tile Statistics」（Tile 统计）部分，
总结 Tile 维度和重要管线（pipeline）的利用率。
源码页支持将指标映射到高层级的 cuTile 核函数源码。
Nsight Compute 分析，重点展示了分析输出中的 Tile Statistics 部分
此次发布的 Nsight Compute 还增加了对设备端启动的图（device-launched graphs）中 CUDA 图节点的分析支持，并改进了源码页导航，为编译器生成和用户生成的标签提供了可点击的链接。
编译时修补
NVIDIA Compute Sanitizer 2025.4 通过 -fdevice-sanitize=memcheck 编译器标志，增加了对 NVIDIA CUDA 编译器（NVCC）编译时修补（patching）的支持。这种修补增强了内存错误检测能力，并提升了 Compute Sanitizer 的性能。
编译时插桩（instrumentation）可将错误检测直接集成到 NVCC 中，从而实现更快的运行速度，并通过高级的基址 - 边界分析（base-and-bounds analysis）捕捉更隐蔽的内存问题（如相邻分配间的非法访问）。这意味着开发者可以在不牺牲速度的情况下调试内存问题，运行更多测试并保持生产力。目前，该功能仅支持 memcheck 工具。
要使用此新功能，请使用如下 NVCC 标志编译代码：
nvcc -fdevice-sanitize=memcheck -o myapp myapp.cu
然后使用 memcheck 工具运行你的应用：
compute-sanitizer --tool memcheck myapp
NVIDIA Nsight Systems
NVIDIA Nsight Systems 2025.6.1 与 CUDA Toolkit 13.1 同步发布，带来了多项新的追踪功能：
系统级 CUDA 追踪：
--cuda-trace-scope 可开启跨进程树或整个系统的追踪。
CUDA 主机函数追踪：
增加了对 CUDA Graph 主机函数节点和 cudaLaunchHostFunc () 的追踪支持，这些函数在主机上执行并会阻塞流（stream）。
CUDA 硬件追踪：
在支持的情况下，基于硬件的追踪现在成为默认模式；使用 --trace=cuda-sw 可恢复为软件模式。
Green Context 时间轴行现在会在工具提示中显示 SM 分配情况，
帮助用户理解 GPU 资源利用率。
数学库
核心 CUDA 工具包数学库的新功能包括：
NVIDIA cuBLAS：
一项全新的实验性 API，支持 Blackwell GPU 的分组 GEMM 功能，并兼容 FP8 和 BF16/FP16 数据类型。针对上述数据类型，支持 CUDA 图的分组 GEMM 提供了一种无需主机同步的实现方式，其设备端形状可实现最高 4 倍的加速，优于 MoE 用例中的多流 GEMM 实现。
NVIDIA cuSPARSE：
一种新的稀疏矩阵向量乘法 (SpMVOp) API，与 CsrMV API 相比性能有所提升。该 API 支持 CSR 格式、32 位索引、双精度以及用户自定义的后缀。
NVIDIA cuFFT：
一套名为 cuFFT 设备 API 的全新 API，提供主机函数，用于在 C++ 头文件中查询或生成设备功能代码和数据库元数据。该 API 专为 cuFFTDx 库设计，可通过查询 cuFFT 来生成 cuFFTDx 代码块，这些代码块可以与 cuFFTDx 应用程序链接，从而提升性能。
针对新的 Blackwell 架构，现已推出性能更新。用户可选择关键 API 进行更新，并查看性能更新详情。
cuBLAS Blackwell 性能
CUDA Toolkit 12.9 在 NVIDIA Blackwell 平台上引入了块缩放的 FP4 和 FP8 矩阵乘法。CUDA 13.1 增加了对这些数据类型和 BF16 的性能支持。图 2 显示了在 NVIDIA Blackwell 和 Hopper 平台上的加速比。
cuSOLVER Blackwell 性能
CUDA 13.1 继续优化用于特征分解的批处理 SYEVD 与 GEEV API，并带来了显著的性能增强。
其中，批处理 SYEV（cusolverDnXsyevBatched） 是 cuSOLVER 中 SYEV 例程的统一批处理版本，用于计算对称／Hermitian 矩阵的特征值与特征向量，非常适合对大量小矩阵进行并行求解的场景。
图 3 展示了在批大小为 5,000（矩阵行数 24–256）的测试结果。与 NVIDIA L40S 相比，NVIDIA Blackwell RTX Pro 6000 Server Edition 实现了约 2 倍的加速，这与预期的内存带宽提升相吻合。
对于复数单精度和实数单精度两类矩阵，当行数
N = 5
时，加速比约为
1.5×，
并随着行数增大逐渐提升，在
N = 250 时达到 2.0×。
图 4 显示了 cusolverDnXgeev (GEEV) 的性能加速比，该函数用于计算一般（非对称）稠密矩阵的特征值和特征向量。GEEV 是一种混合 CPU/GPU 算法。单个 CPU 线程负责在 QR 算法中执行高效的早期降阶处理，而 GPU 则处理其余部分。图中显示了矩阵大小从 1,024 到 32,768 的相对性能加速比。
当矩阵行数
n = 5000
时，加速比约为
1.0，
并随着矩阵规模增大逐渐提升，在
n = 30000 时达到约 1.7。
NVIDIA CUDA 核心计算库
NVIDIA CUDA Core 计算库 (CCCL) 为 CUB 带来了多项创新和增强功能。
确定性浮点运算简化
由于浮点加法不具备结合律，cub::DeviceReduce 历史上只能保证在同一 GPU 上每次运行得到位上完全相同的结果。这被实现为一个两遍算法。
作为 CUDA 13.1 的一部分， NVIDIA CCCL 3.1 提供了两个额外的浮点确定性选项，您可以根据这些选项在确定性和性能之间进行权衡。
不保证：
使用原子操作进行单次归约。这不能保证提供位上完全相同的结果。
GPU 间：
基于 Kate Clark 在 NVIDIA GTC 2024 大会上演讲中可复现的降维结果。结果始终逐位相同。
可以通过标志位设置确定性选项，如下面的代码所示。
更便捷的单相 CUB API
几乎所有 CUB 算法都需要临时存储空间作为中间暂存空间。
过去，用户必须通过两阶段调用模式来查询和分配必要的临时存储空间，如果两次调用之间传递的参数不一致，这种模式既繁琐又容易出错。
CCCL 3.1 为一些接受内存资源的 CUB 算法添加了新的重载，从而用户可以跳过临时存储查询 / 分配 / 释放模式。
CUDA Tile 资源链接：https://developer.nvidia.com/cuda/tile
CUDA Toolkit 13.1 下载地址：https://developer.nvidia.com/cuda-downloads
参考链接
https://developer.nvidia.com/blog/focus-on-your-algorithm-nvidia-cuda-tile-handles-the-hardware
https://developer.nvidia.com/blog/nvidia-cuda-13-1-powers-next-gen-gpu-programming-with-nvidia-cuda-tile-and-performance-gains
https://x.com/NVIDIAAIDev/status/1996976702732620271
https://developer.nvidia.com/blog/simplify-gpu-programming-with-nvidia-cuda-tile-in-python
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com