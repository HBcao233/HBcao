import { ElElement, html, css } from '/assets/element-plus-lit.min.js';

class Layout extends ElElement {
  static styles = css`
.container {
  padding: 0;
  height: 100%;
  background: url('/assets/137321521_p0.png') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

el-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sidebar-button {
  position: absolute;
  left: 10px;
  --el-button-text-color: #fff;
  --el-button-hover-text-color: #fff;
  --el-button-active-text-color: #fff;
  --el-button-bg-color: transparent;
  --el-button-active-bg-color: transparent;
  --el-button-hover-bg-color: #f6a2ff70;
  --el-button-border-color: transparent;
  --el-button-hover-border-color: transparent;
  --el-button-active-border-color: transparent;
}
.sidebar-button el-icon {
  display: flex;
  width: 100%;
  font-size: 25px;
}

el-main {
  padding: 10px;
}

.title {
  text-align: center;
  color: #fff;
  font-size: 19px; 
  margin-top: 10rem;
  margin-bottom: .5rem;
  text-shadow:
    -1px 0 0 var(--primary-color),
    1px 0 0 var(--primary-color),
    0 -1px 0 var(--primary-color),
    0 1px var(--primary-color),
    -1px -1px 0 var(--primary-color), 
    1px -1px 0 var(--primary-color), 
    -1px 1px 0 var(--primary-color),
    1px 1px 0 var(--primary-color);
}

.title-logo {
  text-align: center;
  position: relative;
}
.title-logo img {
  width: auto;
  height: 3rem;
}

.arrow {
  font-size: 1rem;
  opacity: .8;
  animation: float 3s ease-in-out infinite;
  color: var(--primary-color);
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.arrow svg {
  transform: rotate(180deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.content-container {
  margin-top: calc(100% - 1rem);
  background-color: rgba(255, 255, 255, .9);
  border-radius: 10px;
  padding: 10px;
  overflow: visible;
  height: auto;
}
  `;
  
  static properties = {
  }
  
  render() {
    return html`
<el-container class="container">
  <el-aside></el-aside>
  <el-header height="40">
    <el-button circle class="sidebar-button">
      <el-icon slot="icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2028 4.90042V6.43663H2.7973V4.90042H17.2028Z" fill="currentColor"></path><path d="M10.9604 13.0635V14.5997H2.7973V13.0635H10.9604Z" fill="currentColor"></path></svg>
      </el-icon>
    </el-button>
  </el-header>
  <el-main>
    <div class="title">欢迎来到</div>
    <div class="title-logo"><img class="logo" src="/assets/logo.png"></div>
    <div class="arrow">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em">
        <path fill="currentColor" d="M781.824 430.72l-220.8-358.08a53.312 53.312 0 0 0-90.432-0.576l-226.752 358.08A53.312 53.312 0 0 0 288.896 512L736.44799999 512a53.312 53.312 0 0 0 45.44000002-81.28z"></path>
      </svg>
    </div>
    <el-container class="content-container">
      <el-markdown .value="${`<p align="center">
  <img src="https://avatars.githubusercontent.com/u/41500176?v=4&w=3840&q=75" alt="" width="100">
</p>

<h1 align="center">派魔喵的开源项目</h1>
## 数字爱你化工具
https://games.lolih.dpdns.org/5201314/

## 玩玩小游戏
扫雷、星之战、点灯游戏
https://games.lolih.dpdns.org/

项目地址: [Github](https://github.com/HBcao233/games)

## MTgbot
轻量级 Telegram 机器人框架

项目地址: [Github](https://github.com/HBcao233/mtgbot)

## Fuck CORS
绕过 CORS验证

[https://fuck-cors.lolih.dpdns.org](https://fuck-cors.lolih.dpdns.org)

项目地址: [Github](https://github.com/HBcao233/fuck-cors)

## 哈基米音乐
https://manbo-music.vercel.app

项目地址: [Github](https://github.com/HBcao233/manbo-music)

## 一些小工具
https://tools-cyan-seven.vercel.app

项目地址: [Github](https://github.com/HBcao233/tools)

## 微信对话生成器
对 [githubitjun/wx-duihua](https://github.com/githubitjun/wx-duihua) 项目做了移动端适配

https://hbcao233.github.io/wx-duihua

项目地址: [Github](https://github.com/HBcao233/wx-duihua) 

## Element Plus Lit
使用 [Lit](https://lit.dev) 实现的轻量级 Web Components 版 Element Plus

文档: https://element-plus-lit.vercel.com

项目地址: [Github](https://github.com/HBcao233/element-plus-lit)

## Bilibili Player
Bilibili 样式的播放器

https://hbcao233.github.io/bilibili_player

项目地址: [Github](https://github.com/HBcao233/bilibili_player)

## Bilibili 404
一个能让你在b站404页面刷视频的油猴脚本

项目地址: [Github](https://github.com/HBcao233/bilibili_404)

## 可以涩涩的Deepseek
~~dicksuck~~

https://deepseek.lolih.dpdns.org

## 个人网盘
https://cp.lolih.dpdns.org

## EMBY 媒体播放器
https://emby.lolih.dpdns.org

## 郊狼小恐龙
https://hbcao233.github.io/dg-dino

项目地址: [Github](https://github.com/HBcao233/dg-dino)

## 伪娘转生到淫乱世界跑团RPG
https://rbqrpg.vercel.app

[Github](https://github.com/HBcao233/rpg)

* [ ] 计划用 lit 重做

## moeGameBot 
https://github.com/HBcao233/moeGameBot

## cathon
Python 编写的语法很像 Python 的编程语言（

https://github.com/HBcao233/cathon
`}"></el-markdown>
    <el-container>
  </el-main>
</el-container>
    `;
  }
}

customElements.define('hbcao-app', Layout);