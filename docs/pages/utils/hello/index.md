# hello

## 基本使用

<ComponentCard :code="'```ts \n'+data">

<template #component>
{{text}}
</template>
</ComponentCard>

<script setup>
import data from '../../../../src/views/hello/index.vue?raw'
import { hello } from 'knot-vue'
const text = hello()
</script>
