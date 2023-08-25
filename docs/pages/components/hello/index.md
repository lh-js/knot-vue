# hello

## 基本使用

<ComponentCard :code="'```ts \n'+data">

<template #component>
<kn-hello />
</template>
</ComponentCard>

<script setup>
import { KnHello , KnButton } from '../../../../umd/es/index.mjs';
import '../../../../umd/es/style.css'
import ComponentCard from '../../../components/component-card/index.vue'
import data from '../../../../src/views/hello/index.vue?raw'
</script>
