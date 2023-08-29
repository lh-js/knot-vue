<template>
  <input v-model="model.name" />
  <input v-model="model.password" />
</template>
<script lang="ts" setup>
import { useVModel } from "knot-vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const model = useVModel(props, "modelValue", emit);
</script>