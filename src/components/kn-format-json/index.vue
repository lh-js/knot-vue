<template>
<pre>{{ data }}</pre>
</template>
<script setup lang="ts">
import { computed } from 'vue';


interface Props {
  data: string | JSON
  indent: number
}

const props = defineProps<Props>()

const data = computed(() => {
  if( typeof props.data == 'string' ) {
    return props.data
  } else {
    return JSON.stringify(props.data,null,props.indent ? props.indent : 2)
  } 
})
</script>
<style>
pre {
    background-color: #f5f5f5;
    padding: 10px;
}
</style>