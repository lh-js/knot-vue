# useHello

## 基本使用

<ComponentCard>

<template #component>
{{hello}}
</template>
<template #code>

```vue
<template>
  {{ data }}
</template>

<script setup lang="ts">
import { useHello } from 'knot-vue'
const data = useHello()
</script>
```

</template>

</ComponentCard>

<script setup>
import { useHello } from 'knot-vue'
const hello = useHello()
</script>
