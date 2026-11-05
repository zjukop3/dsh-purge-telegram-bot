# 🔮 dsh-purge-telegram-bot

<p align="center">
  <a href="https://github.com/HunYiSage/dsh-purge"><img src="https://img.shields.io/badge/core-dsh--purge%20v1.1.90-blue?logo=github" alt="dsh-purge"></a>
  <a href="https://github.com/HunYiSage/dsh-purge-telegram-bot/stargazers"><img src="https://img.shields.io/github/stars/HunYiSage/dsh-purge-telegram-bot?logo=github&label=Stars" alt="GitHub stars"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=node.js&logoColor=fff" alt="Node.js">
</p>

<p align="center">
  <a href="#chinese">中文</a> | <a href="#english">English</a>
</p>

---

<h2 id="chinese">🇨🇳 中文</h2>

### 为什么有这个项目？

[HunYiSage/dsh-purge](https://github.com/HunYiSage/dsh-purge) 是一个强大的“破甲”工具，让每个模型都能突破限制，默认面向国模“小码酱”。但它的使用目前主要依赖命令行或程序集成。为了降低使用门槛，让更多人能以最自然的方式（聊天）体验不同模型在破甲状态下的表现，我们开发了 **dsh-purge-telegram-bot**。

只需在 Telegram 中向 Bot 发送消息，就能一键切换模型、应用不同的破甲提示词，并实时获得模型的回复。这是对主项目的生态补充，而非替代，专注于“对话式前端”场景。

### 特性

- 🤖 **Telegram 无缝集成** – 通过简单的 Telegram 机器人即可与 dsh-purge 交互
- 🔄 **模型切换** – 使用 `/model` 命令动态切换底层模型（如 deepseek, deepseek-coder 等）
- 🧠 **智能破甲** – 自动应用主项目提供的破甲提示词，你也可以传入自定义提示词
- 📦 **开箱即用** – 提供完整的运行骨架，只需配置 Bot Token 并安装依赖
- 🌐 **本地实验限定** – 同主项目一样，攻击任务仅限于回环地址和 RFC1918 私有地址，拒绝公网地址

### 安装

```bash
git clone https://github.com/HunYiSage/dsh-purge-telegram-bot.git
cd dsh-purge-telegram-bot
npm install
```

然后在项目根目录创建 `.env` 文件：

```env
BOT_TOKEN=你的Telegram机器人Token
```

### 快速上手

```bash
npm start
```

在 Telegram 中与你的机器人对话：

```
/start
/model deepseek
你好，小码酱
```

### 与主项目的关系

本仓库是 [dsh-purge](https://github.com/HunYiSage/dsh-purge) 的**官方二创附属项目**，非独立核心工具。它复用主项目的破甲逻辑和模型适配，仅增加了 Telegram Bot 前端。

- 主项目负责：破甲提示词管理、模型适配、“本地实验限定”等核心能力
- 本附属项目负责：Telegram 消息接入、用户会话管理、模型切换指令

**请务必遵守主项目的署名要求（Attribution required），并且本项目的使用同样需符合主项目的许可与边界。**

### Roadmap

- [x] 基础 Telegram Bot 骨架
- [x] 模型切换与内存会话
- [ ] 持久化用户偏好（数据库集成）
- [ ] 支持自定义破甲提示词上传
- [ ] 群聊上下文感知
- [ ] 多语言支持

### License

本项目采用 [MIT License](LICENSE)，但你对 dsh-purge 的使用仍需遵循其 [Apache-2.0](https://github.com/HunYiSage/dsh-purge/blob/master/LICENSE) 许可证及署名要求。

---

<h2 id="english">🇬🇧 English</h2>

### Why this project?

[HunYiSage/dsh-purge](https://github.com/HunYiSage/dsh-purge) is a powerful jailbreak tool that enables every model to break its restrictions, with a default prompt tailored for 小码酱. However, its usage currently relies on CLI or programmatic integration. To lower the barrier and let more people experience jailbroken models in the most natural way — chatting — we built **dsh-purge-telegram-bot**.

Just send a message to the Telegram bot, and you can switch models, apply different jailbreak prompts, and get real-time responses. This is an ecosystem complement to the main project, not a replacement, focusing on the “conversational frontend” scenario.

### Features

- 🤖 **Telegram integration** – Interact with dsh-purge through a simple Telegram bot
- 🔄 **Model switching** – Dynamically switch models via `/model` command (e.g., deepseek, deepseek-coder)
- 🧠 **Smart jailbreak** – Automatically apply jailbreak prompts from the main project; custom prompts accepted
- 📦 **Batteries included** – Complete runnable skeleton, just set your bot token and install dependencies
- 🌐 **Local-lab only** – Like the main project, attack targets are limited to loopback and RFC1918 private addresses; public addresses are rejected

### Installation

```bash
git clone https://github.com/HunYiSage/dsh-purge-telegram-bot.git
cd dsh-purge-telegram-bot
npm install
```

Create a `.env` file in the project root:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Quick Start

```bash
npm start
```

Chat with your bot on Telegram:

```
/start
/model deepseek
Hello, Xiao Ma Jiang
```

### Relationship with the main project

This repository is an **official secondary creation** of [dsh-purge](https://github.com/HunYiSage/dsh-purge). It reuses the core jailbreak logic and model adapters, only adding a Telegram bot frontend.

- Main project: handles jailbreak prompts, model adapters, local-lab enforcement, etc.
- This repo: handles Telegram messaging, user sessions, model switching commands

**Please respect the main project’s attribution requirements, and note that usage of this project must also comply with the main project’s license and boundaries.**

### Roadmap

- [x] Basic Telegram bot skeleton
- [x] In-memory model selection per user
- [ ] Persistent user preferences (database)
- [ ] Custom jailbreak prompt upload
- [ ] Group chat context awareness
- [ ] Multi-language support

### License

This project is licensed under the [MIT License](LICENSE). Your use of dsh-purge remains subject to its [Apache-2.0](https://github.com/HunYiSage/dsh-purge/blob/master/LICENSE) license and attribution requirements.
