# useHello

## 基本使用

<ComponentCard :code="'```ts \n'+data">

<template #component>
{{hello}}
</template>
</ComponentCard>

<script setup>
import data from '../../../../src/views/use-hello/index.vue?raw'
import { useHello } from 'knot-vue'
const hello = useHello()
</script>

