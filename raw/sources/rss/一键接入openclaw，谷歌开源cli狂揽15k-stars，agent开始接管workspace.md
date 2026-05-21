---
title: "一键接入OpenClaw，谷歌开源CLI狂揽15k Stars，Agent开始接管Workspace"
date: 2026-03-08
source: "机器之心"
url: "https://mp.weixin.qq.com/s/4Grt-fwsMd3o3TO2pusnPQ"
rss_id: "2651020388_1"
---
编辑｜杜伟
OpenClaw 火爆的盛况至今仍在持续，在国内甚至出现了排队在腾讯总部楼下等待安装 OpenClaw 的场景，让人感叹「一代人有一代人的领鸡蛋」。
而就在几天前，谷歌发布了一个
CLI（命令行界面）神器
，并上传到了 GitHub 上，挂在了 Google Workspace 的官方组织名下。
全新的 Google Workspace CLI 将 Drive、Gmail、Calendar 等 Google Workspace 云 API 统一封装为一个命令行工具，为 AI 智能体自动化工作流提供了标准化接口，并通过结构化 JSON 输出，
能够方便地接入包括 OpenClaw 在内的各类 AI Agent 系统
。
短短几天，该项目已经收获了 15k 的 Stars。
项目地址：https://github.com/googleworkspace/cli
Google Cloud AI 总监 Addy Osmani 发推宣传，贴子浏览量突破了 500 万：
可一键接入 OpenClaw，让智能体接管 Google Workspace
为什么选择「gws」项目
？
对于人类开发者，不再需要根据 REST 文档手写 curl 请求。
gws 为每个资源都提供 --help 帮助信息，支持使用 --dry-run 预览请求，并自动处理分页。
对于 AI 智能体，所有返回结果都是结构化的 JSON。
结合内置的 Agent 技能，你的 LLM 就可以在无需编写额外工具的情况下直接管理 Google Workspace。
这意味着，该 CLI 将 Google Workspace API 变成了一个既适合人类，也适合 AI Agent 调用的统一接口。
人类不用写 API 请求，AI 不需要写额外工具
。
在架构层面，「gws」采用一种
两阶段解析（two-phase parsing）策略
：
读取 argv [1]，以识别要调用的服务（例如 drive）。
获取该服务的 Discovery Document（API 发现文档），并进行缓存（缓存时间为 24 小时）。
根据文档中定义的资源（resources）和方法（methods），动态构建一个 clap::Command 命令树。
再次解析剩余的命令行参数。
完成身份认证，构建 HTTP 请求并执行。
所有输出，包括成功结果、错误信息以及下载相关的元数据，都会以结构化 JSON 的形式返回。
至于开发者关注的
AI Agent Skills
能力，「gws」内置了 100 多个 Agent Skills（以 SKILL.md 文件形式提供），每个支持的 API 都对应一个技能，同时还包含一些用于常见工作流程的高层辅助技能，以及 50 个精选使用示例，覆盖 Gmail、Drive、Docs、Calendar 和 Sheets 等应用。
其中 OpenClaw 的配置步骤如下，两种方式可选：
另外，gws-shared 这个技能文件里包含了一段安装配置，如果系统环境变量 PATH 中没有检测到 gws CLI，OpenClaw 就会自动通过 npm 安装它。
完整 Agent Skills 列表如下：
地址：https://github.com/googleworkspace/cli/blob/main/docs/skills.md
项目安装
项目安装准确事项包括如下：
Node.js 18 或更高版本：用于通过 npm 安装（也可以从 GitHub Releases 下载已编译好的二进制文件）。
一个 Google Cloud 项目：用于获取 OAuth 凭证。你可以通过 Google Cloud Console、gcloud CLI，或者使用 gws auth setup 命令创建。
以及一个拥有 Google Workspace 访问权限的 Google 账号。
安装步骤如下：
npm 包中已经打包了针对你操作系统和架构的 预编译原生二进制文件，因此无需安装 Rust 工具链。
或者从源码构建：
此外还提供了一个 Nix flake，地址为：
github:googleworkspace/cli
。
快速开始：
最后提下醒，
虽然这个新的 GitHub 项目出自谷歌，主要开发者也来自谷歌，但它并不是谷歌正式的产品，因而不会得到官方的技术支持
。如果你选择使用它，将自行承担风险。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com