# 快速上手

## 相关技术

`vue` , `ts`

## 安装

<CodeGroup :codeTabs="['npm','yarn']">
<template #npm>

```sh
# install in your project

npm i knot-vue
```

</template>
<template #yarn>

```sh
# install in your project

yarn add knot-vue
```

</template>

</CodeGroup>

## 使用示例

### 全局引入

<CodeGroup :codeTabs="['main.ts','index.vue']">
<template #main.ts>

```ts
// main.ts

import KnotVue from 'knot-vue'
import 'knot-vue/umd/es/style.css'
const app = createApp(App)

app.use(KnotVue)
app.mount('#app')
```

</template>
<template #index.vue>

```vue
// index.vue

<template>
  <kn-hello />
</template>
```

</template>

</CodeGroup>

### 按需引入

注：按需引入记得引入样式
<CodeGroup :codeTabs="['main.ts','index.vue']">
<template #main.ts>

```ts
// main.ts

import 'knot-vue/umd/es/style.css'
const app = createApp(App)

app.mount('#app')
```

</template>
<template #index.vue>

```vue
// index.vue

<template>
  <kn-hello />
</template>

<script setup lang="ts">
import { KnHello } from 'knot-vue'
</script>
```

</template>

</CodeGroup>
