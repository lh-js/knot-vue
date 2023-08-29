<template #component>
  <KnForm v-model="modeValue" />
</template>

<script setup>
import KnForm from './components/kn-form/index.vue'
import { ref } from 'vue'

const modeValue = ref({
  name: 'xx',
  password: 'xx',
})
</script>