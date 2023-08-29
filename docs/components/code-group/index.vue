<template>
  <ClientOnly>
    <div class="theme-code-group">
      <div class="theme-code-group__nav">
        <ul class="theme-code-group__ul">
          <li v-for="tab in codeTabs" :key="tab" class="theme-code-group__li">
            <button
              class="theme-code-group__nav-tab"
              :class="{
                'theme-code-group__nav-tab-active': tab === activeCodeTab,
              }"
              @click="changeCodeTab(tab)"
            >
              {{ tab }}
            </button>
          </li>
        </ul>
      </div>
      <slot :name="activeCodeTab" />
      <pre v-if="codeTabs.length < 1" class="pre-blank"> // 没代码~ </pre>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";

type Props = {
  codeTabs: any;
};
const props = withDefaults(defineProps<Props>(), {
  codeTabs: [],
});

const emit = defineEmits(["tabChange"]);
const activeCodeTab = ref(props.codeTabs[0]);

const changeCodeTab = (tab: string) => {
  activeCodeTab.value = tab;
  emit("tabChange");
};
</script>
  
  <style scoped>
/* .theme-code-group {} */
.theme-code-group__nav {
  margin-bottom: -35px;
  background-color: #282c34;
  padding-bottom: 22px;
  border-radius: 6px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 10px;
}
.theme-code-group__ul {
  margin: auto 0;
  padding-left: 0;
  display: flex;
  list-style: none;
}
.theme-code-group__li {
  margin-top: 0;
  margin-right: 10px;
}
.theme-code-group__nav-tab {
  border: 0;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  font-size: 0.85em;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}
.theme-code-group__nav-tab-active {
  border-bottom: #42b983 1px solid;
}
.pre-blank {
  color: #42b983;
  margin: 0;
}
</style>
  
  