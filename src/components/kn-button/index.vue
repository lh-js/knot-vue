<template>
  <button class="kn-button">{{ label }}</button>
</template>
  
<script lang="ts" setup>
export interface MyButtonProps {
  label: string;
}

withDefaults(defineProps<MyButtonProps>(), {
  label: "默认按钮",
});
</script>
<style lang="scss" scoped>
.kn-button {
  width: 100px;
  height: 50px;
  background: green;
  color: #ffffff;
  border-radius: 2px;
}
</style>
  
