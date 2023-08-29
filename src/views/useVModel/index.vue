<template #component>
  <KnForm v-model="modeValue" />
  <button @click="console.log(modeValue)">点击</button>
</template>

<script lang="ts" setup>
import KnForm from "./components/kn-form/index.vue";
import { ref } from "vue";

const modeValue = ref({
  name: "xx",
  password: "xx",
});
</script>