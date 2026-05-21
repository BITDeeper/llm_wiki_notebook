---
type: concept
title: 空引用错误
tags: [programming-languages, design-flaws, history]
related: [tony-hoare, hoare-logic, algol-60]
created: 2026-03-11
updated: 2026-03-11
sources: ["计算机界痛失泰斗！92岁图灵奖得主去世，打赌赢了老板6便士.md"]
---

# 空引用错误

**空引用错误** 是指在程序中试图访问一个指向“无”或“空”的引用对象而引发的运行时错误（如 Java 中的 `NullPointerException`）。这一概念由 [[tony-hoare]] 在 1965 年设计 ALGOL W 语言时首次引入。

## “价值十亿美元的错误”
尽管空引用在设计之初是为了简化编译器实现和方便程序员处理缺失值，但它后来导致了无数系统崩溃、安全漏洞和数据丢失。2009 年，Hoare 在伦敦 QCon 大会上发表了著名的演讲《Null References: The Billion Dollar Mistake》，公开道歉并称这是他职业生涯中最大的错误，其造成的损失估计高达数十亿美元。

## 技术背景
在 ALGOL W 之前，大多数语言没有统一的“空”概念。Hoare 引入空引用是为了让类型系统更加“优雅”，允许任何类型的引用都可以为空。然而，这破坏了类型系统的安全性，因为编译器无法静态检查引用是否有效，将风险推给了运行时。

## 现状与反思
尽管 Hoare 深悔这一设计，但空引用至今仍是大多数主流编程语言（如 C, C++, Java, C#, Python, JavaScript 等）的标准特性。现代语言设计开始尝试解决这个问题，例如：
- **Rust**：通过 `Option` 类型在编译期强制处理空值情况。
- **Swift**：使用可选类型来明确标记可能为空的变量。
- **Kotlin/TypeScript**：通过可空性检查来减少空引用异常。

这一案例深刻反映了软件工程中“理论上的优雅”与“工程上的便利”之间的持久张力。