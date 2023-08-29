# 快速上手

## 相关技术

`vue` , `ts`

## 安装

<CodeGroup>
  <div title="npm" active>

```sh
# install in your project
npm i knot-vue
```
</div>
<div title="yarn">

```sh
# install in your project
yarn add knot-vue
```
</div>
</CodeGroup>

## 使用示例

### 全局引入

```ts
// main.ts

import KnotVue from 'knot-vue'
import 'knot-vue/umd/es/style.css'
const app = createApp(App)

app.use(KnotVue)
app.mount('#app')
```

```vue
// index.vue

<template>
  <kn-hello />
</template>
```

### 按需引入

注：按需引入记得引入样式

```vue
// index.vue

<template>
  <kn-hello />
</template>

<script setup lang="ts">
import { KnHello } from 'knot-vue'
</script>
```
