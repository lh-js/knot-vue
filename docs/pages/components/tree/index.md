# tree

## 基本使用

<ComponentCard>

<template #component>
<kn-tree :data=data />
</template>
<template #code>

```vue
<template>
  <kn-tree :data=data />
</template>

<script setup>
import {ref} from 'vue'
const data = ref([
  {
    name: '1',
    checked: true,
    children: [
      {
        name: '1-1',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: true,
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: false
          },
          {
            name: '3-1-2',
            checked: true
          },
        ],
      }
    ]
  }
])
</script>
```

</template>
</ComponentCard>

<script setup>
import {ref} from 'vue'
const data = ref([
  {
    name: '1',
    checked: true,
    children: [
      {
        name: '1-1',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: true,
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: false
          },
          {
            name: '3-1-2',
            checked: true
          },
        ],
      }
    ]
  }
])
</script>