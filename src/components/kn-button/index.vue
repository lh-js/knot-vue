<template>
  <button :class="['button', disabled ? 'disabled' : '', type]" :style="`--width:${width}px;--height:${height}px`"
    @click="buttonClick"><slot /></button>
</template>

<script setup lang="ts">

interface props {
  disabled?: boolean
  type?: 'default'
  | 'dashed'
  | 'text'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  width?: number
  height?: number
}

const props = withDefaults(defineProps<props>(), {
  disabled: false,
  type: "default",
  width: 74,
  height: 34,
})

console.log(props)
const emits = defineEmits(["click"])

const buttonClick = () => {
  if (props.disabled) return;
  emits("click")
};

</script>
<style lang="scss" scoped>
@import '../../style/var.scss';
@import '../../style/minxin.scss';
.button {
  width: var(--width);
  height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $black-color;
  border: 1px solid $gray-color-1;
  background-color: $white-color;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;

  &:not(.disabled):hover,
  &:has(.dashed .text):not(.disabled):hover {
    color: $main-color;
    border-color: currentColor;
  }

  &:where(.dashed) {
    border: 1px dashed;
  }

  &:where(.text) {
    border: none;
  }

  &:where(.primary) {
    @include button-theme($main-color);
  }

  &:where(.primary):not(.disabled):hover {
    @include button-hover($main-color);
  }

  &:where(.success) {
    @include button-theme($success-color);
  }

  &:where(.success):not(.disabled):hover {
    @include button-hover($success-color);
  }

  &:where(.warning) {
    @include button-theme($warn-color);
  }

  &:where(.warning):not(.disabled):hover {
    @include button-hover($warn-color);
  }

  &:where(.danger) {
    @include button-theme($danger-color);
  }

  &:where(.danger):not(.disabled):hover {
    @include button-hover($danger-color);
  }
}
</style>