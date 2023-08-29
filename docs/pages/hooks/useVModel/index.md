# useVModel

## 基本使用

<ComponentCard :code="'```ts \n'+data">

<template #component>
<KnForm v-model="modeValue" />
<button @click="console.log(modeValue)">点击</button>
</template>
</ComponentCard>

<script setup>
import data from '../../../../src/views/useHello/index.vue?raw'
import KnForm from './components/kn-form/index.vue'
import { ref } from 'vue'

const modeValue = ref({
    name:"xx",
    password:"xx"
})
</script>
