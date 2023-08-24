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

### 按需引入

```vue
<template>
  <KnHello />
</template>

<script>
import { defineComponent } from 'vue'
import { KnHello } from 'knot-vue'

export default defineComponent({
  components: {
    KnHello,
  },
  setup() {
    return {
      
    }
  },
})
</script>
```