<template>
  <div class="component-card">
    <div class="component-box">
      <!-- <slot name="component"></slot> -->
      <component />
    </div>
    <div :class="[{ 'code-show': isShowCode }, 'util-box']">
      <show-code v-if="isShowCode" @click="codeClick(false)" />
      <hide-code v-else @click="codeClick(true)" />
    </div>
    <div :class="[{ 'code-show': isShowCode }, 'code-box']" ref="codeBox">
      <slot name="code"></slot>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import ShowCode from "./icon/show-code/index.vue";
import HideCode from "./icon/hide-code/index.vue";
import { defineAsyncComponent, ref, shallowRef } from "vue";


type Props = {
  componentPath: string;
};
const props = withDefaults(defineProps<Props>(), {
  componentPath: "",
});

const component = shallowRef<any>(null)

component.value = defineAsyncComponent(() => import(/* @vite-ignore */`../../preview/${props.componentPath}`))

const isShowCode = ref(false);
const codeBox = ref<any>(null);

const codeClick = (value: boolean) => {
  isShowCode.value = value;
  if (!codeBox.value) return;
  if (!value) {
    const { height } = codeBox.value.getBoundingClientRect();
    codeBox.value.style.height = `${height}px`;
    codeBox.value.offsetHeight;
    codeBox.value.style.height = 0;
    codeBox.value.style.margin = 0;
    return;
  }
  codeBox.value.style.height = "auto";
  const { height } = codeBox.value.getBoundingClientRect();
  codeBox.value.style.height = 0;
  codeBox.value.offsetHeight;
  codeBox.value.style.height = `${height}px`;
  codeBox.value.style.margin = '-16px 0';
};

const autoHeight = () => {
  codeBox.value.style.height = "auto";
};

//暴露state和play方法
defineExpose({
  autoHeight,
});
</script>
<style lang="scss" scoped>
.component-card {
  width: 100%;
  height: auto;
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .component-box {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    padding: 10px;

  }

  .util-box {
    width: 100%;
    min-height: 40px;
    border-top: 1px solid #dcdfe6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;


    &:where(.code-show) {
      border-bottom: 1px solid #dcdfe6;
    }
  }

  .code-box {
    height: 0;
    transition: 0.5s;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
  
