# button

## 基本使用

<ComponentPreview componentPath="button/base.vue">
<template #code>

```vue
<template>
    <kn-button>点击</kn-button>
</template>

<script setup lang="ts">
import { KnButton } from 'knot-vue'
</script>
```
</template>
</ComponentPreview>

## 按钮类型

<ComponentPreview componentPath="button/type.vue">
<template #code>

```vue
<template>
  <kn-button>点击</kn-button>
  <kn-button type="dashed">点击</kn-button>
  <kn-button type="text">点击</kn-button>
  <kn-button type="primary">点击</kn-button>
  <kn-button type="success">点击</kn-button>
  <kn-button type="warning">点击</kn-button>
  <kn-button type="danger">点击</kn-button>
</template>

<script setup lang="ts">
import { KnButton } from 'knot-vue'
</script>
```
</template>
</ComponentPreview>

## 禁用

<ComponentPreview componentPath="button/disabled.vue">
<template #code>

```vue
<template>
  <kn-button disabled>点击</kn-button>
</template>

<script setup lang="ts">
import { KnButton } from 'knot-vue'
</script>
```
</template>
</ComponentPreview>


## API

<api />

<!-- | 属性名   | 描述     | 类型      | 是否必填 | 默认值    |
| -------- | -------- | --------- | -------- | --------- |
| children | 按钮内容 | `string`  | √        | `--`      |
| width    | 宽度     | `number`  | ×        | `74`      |
| height   | 高度     | `string`  | ×        | `34`      |
| type     | 按钮类型 | `string`  | ×        | `default` |
| disabled | 是否禁用 | `boolean` | ×        | `false`   | -->

## event

<event />

<!-- | 事件名 | 描述         | 类型   |
| ------ | ------------ | ---------- |
| @click | 按钮点击事件 | `()=>void` | -->

<script setup>
import api from '../../../preview/button/api.vue' 
import event from '../../../preview/button/event.vue' 
</script>
