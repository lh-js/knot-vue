<template>
    {{ data }}
</template>
  
<script setup lang="ts">

import { useHello } from 'knot-vue'

const data = useHello()
</script>
  