<template>
  {{ data }}
</template>
  
<script setup lang="ts">
import { hello } from "knot-vue";

const data = hello();
</script>
  