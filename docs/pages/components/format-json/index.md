# format-json-component

## 基本使用

<ComponentCard>

<template #component>
<kn-format-json :data = "list" />
</template>
<template #code>

```vue
<template #component>
<kn-format-json :data = "list" />
</template>
<script setup>
import { KnFormatJson } from 'knot-vue'
const list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  }
]
</script>
```

</template>
</ComponentCard>

## API

<api />

<script setup>
import api from '../../../word/components/format-json/api.vue'
const list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  }
]
</script>