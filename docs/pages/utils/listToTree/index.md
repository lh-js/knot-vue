# listToTree

## 基本使用

<ComponentCard>

<template #component>
转换前：
<kn-format-json :data = "list" />
转换后：
<kn-format-json :data = "tree" />
</template>
<template #code>

```vue
<template #component>
转换前：
<kn-format-json :data = "list" />
转换后：
<kn-format-json :data = "tree" />
</template>
<script setup>
import { listToTree,KnFormatJson } from 'knot-vue'
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
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  },
  {
    id: '2-2',
    title: '节点2-2',
    parentId: '2'
  },
]
const tree = listToTree(list)

</script>
```

</template>
</ComponentCard>

## API

<api />

## Item

<item />

<script setup>
import api from '../../../word/utils/listToTree/api.vue'
import item from '../../../word/utils/listToTree/item.vue'
import { listToTree } from 'knot-vue'
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
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  },
  {
    id: '2-2',
    title: '节点2-2',
    parentId: '2'
  },
]
const tree = listToTree(list)

</script>
