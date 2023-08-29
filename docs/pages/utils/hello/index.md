# hello

## 基本使用

<ComponentCard>

<template #component>
{{text}}
</template>
<template #code>

```vue
<template>
  {{ data }}
</template>

<script setup lang="ts">
import { hello } from 'knot-vue'

const data = hello()
</script>
```

</template>
</ComponentCard>

<script setup>
import data from '../../../../src/views/hello/index.vue?raw'
import { hello } from 'knot-vue'
const text = hello()
</script>
