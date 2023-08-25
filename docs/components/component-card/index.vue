<template>
  <div class="component-card">
    <div class="component-box">
      <slot name="component"></slot>
    </div>
    <div :class="[{ 'code-show': isShowCode }, 'util-box']">
      <show-code v-if="isShowCode" @click="codeClick(false)" />
      <hide-code v-else @click="codeClick(true)" />
    </div>
    <div :class="[{ 'code-show': isShowCode }, 'code-box']">
      <div v-html="marked(props.code)"></div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import ShowCode from "./icon/show-code/index.vue";
import HideCode from "./icon/hide-code/index.vue";
import { onMounted, ref } from "vue";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/foundation.css";

export interface Props {
  code: string;
}
const props = withDefaults(defineProps<Props>(), {
  code: "",
});

onMounted(() => {
  const render = new marked.Renderer();
  marked.setOptions({
    renderer: render, // 这是必填项
    gfm: true, // 启动类似于Github样式的Markdown语法
    pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
    sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）

    // 高亮的语法规范
    highlight: (code, lang: any) =>
      hljs.highlight(code, { language: lang }).value,
  });
});

const isShowCode = ref(false);

const codeClick = (value: boolean) => {
  isShowCode.value = value;
  const codeBox: any = document.querySelector(".code-box");
  if (!codeBox) return;
  if (!value) {
    codeBox.style.height = 0;
    return;
  }
  codeBox.style.height = "auto";
  const { height } = codeBox.getBoundingClientRect();
  codeBox.style.height = 0;
  codeBox.offsetHeight;
  codeBox.style.height = `${height}px`;
};
</script>
<style lang="scss" scoped>
.component-card {
  width: 100%;
  min-height: 140px;
  border: 1px solid #dcdfe6;
  border-radius: 10px;

  .component-box {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .util-box {
    width: 100%;
    height: 40px;
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

    &:where(.code-show) {
      padding: 10px;
    }
  }
}
</style>
  
