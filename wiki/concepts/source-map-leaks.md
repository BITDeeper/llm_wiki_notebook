---
type: concept
title: Source Map 泄露
tags: [软件工程, 安全漏洞, devops, 前端开发]
related: [claude-code, anthropic, bun]
created: 2026-04-02
updated: 2026-04-02
sources: ["claude-code开源第一人，竟是华人辍学博士！cc之父回应：纯手误.md"]
---

# Source Map 泄露

Source Map 泄露是指软件开发者在发布生产环境代码时，未剔除用于调试的 `.map` 文件，导致原始源代码结构、逻辑甚至完整源码被还原的安全事故。

## 技术原理
Source Map 是一种信息文件，存储了源代码与转换后代码（如压缩、混淆或编译后的代码）之间的映射关系。它允许开发者在浏览器或调试器中查看原始源代码，而不是难以阅读的转换后代码。

如果生产环境保留了 source map 文件，攻击者可以：
1. 还原完整的源代码目录结构。
2. 阅读未混淆的业务逻辑和敏感算法。
3. 发现潜在的 API 端点、硬编码凭证或内部路径。

## 典型案例：Claude Code 泄露
2026年3月，[[anthropic]] 在发布 [[claude-code]] v2.1.88 版本时，未删除 npm 包中的 `cli.js.map` 文件。该文件指向一个公开的 Cloudflare R2 存储桶 zip 包，导致 **51.2 万行 TypeScript 源码**和 **1900 个文件**完全公开。

值得注意的是，这是 [[anthropic]] **第二次**因完全相同的原因发生泄露（第一次在2025年2月）。

## 防范措施
1. **构建流程配置**: 在 Webpack、Vite、esbuild 等构建工具的生产配置中，确保关闭 source map 生成或使用 `hidden` 模式。
2. **发布前检查**: 将“检查生产包是否包含 .map 文件”纳入发布前的自动化检查清单。
3. **服务器配置**: 配置 Web 服务器（如 Nginx）拒绝访问 `.map` 文件请求。
4. **CDN 策略**: 确保 CDN 上不同步上传 source map 文件。

## 争议
在 Claude Code 事件中，社区曾怀疑是 Bun 运行时的已知 bug（#28001）导致了泄露，但官方否认了这一说法，确认为“发布打包问题”。