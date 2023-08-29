<template>
  <div><input v-model="model.name" /></div>
  <div><input v-model="model.password" /></div>
</template>
<script lang="ts" setup>
import { useVModel } from "knot-vue";

type Model = {
  name: string;
  password: string;
};
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const model: any = useVModel(props, "modelValue", emit);
</script>
<style scoped>
input {
  border: 1px solid;
}
</style>