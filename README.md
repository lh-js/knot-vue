# knot-vue

# 介绍

A vue library developed with vitepress

#

[![npm](https://img.shields.io/npm/v/knot-vue)](https://www.npmjs.com/package/knot-vue)
[![npm](https://img.shields.io/npm/dw/knot-vue)](https://www.npmjs.com/package/knot-vue)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/knot-vue)](https://www.npmjs.com/package/knot-vue)
[![npm collaborators](https://img.shields.io/npm/collaborators/knot-vue)](https://www.npmjs.com/package/knot-vue)
[![NPM](https://img.shields.io/npm/l/knot-vue)](https://www.npmjs.com/package/knot-vue)
<br/><br/>
[![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
[![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
[![GitHub top language](https://img.shields.io/github/languages/top/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
[![GitHub language count](https://img.shields.io/github/languages/count/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/lh-js/knot-vue/ci.yml)](https://github.com/lh-js/knot-vue)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
[![GitHub Repo stars](https://img.shields.io/github/stars/lh-js/knot-vue)](https://github.com/lh-js/knot-vue)
<br/><br/>
![](https://komarev.com/ghpvc/?username=lh-js&color=dc143c)

#

# 快速上手

## 相关技术

`vue` , `ts`

## 安装

```bash
npm i knot-vue
```

or

```bash
yarn add knot-vue
```

## 使用示例

### 全局引入

```ts
// main.ts

import KnotVue from 'knot-vue'
const app = createApp(App)

app.use(KnotVue)
app.mount('#app')
```

```html
// index.vue

<template>
  <kn-hello />
</template>
```

### 按需引入

```html
// index.vue

<template>
  <kn-hello />
</template>

<script setup lang="ts">
  import { KnHello } from 'knot-vue'
</script>
```

## 使用文档

https://lh-js.github.io/knot-vue

## 参与贡献

1.Fork 本仓库 <br/><br/>2.新建 Feat_xxx 分支 <br/><br/>3.提交代码 <br/><br/>4.新建 Pull Request

## 启动项目
1.安装node_modules包(yarn install)<br/><br/>2.设置本地npm目录指向src目录(npm link ./src)<br/><br/>3.启动项目(yarn docs:dev)
