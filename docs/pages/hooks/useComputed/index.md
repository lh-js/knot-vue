# useComputed

## 基本使用

解决计算属性不可传参的问题

<ComponentCard>

<template #component>
{{doubleCount(1)}} 
{{doubleCount(1)}}
{{doubleCount(1)}}
{{doubleCount(1)}}
带计算属性执行次数：{{count}}
</template>
<template #code>

```vue
<template>
{{doubleCount(1)}} 
{{doubleCount(1)}}
{{doubleCount(1)}}
{{doubleCount(1)}}
带计算属性执行次数：{{count}}
</template>

<script setup lang="ts">
import { useComputed } from 'knot-vue'
import {ref} from 'vue'

const count = ref(0)
const doubleCount = useComputed((num) => {
    console.log("执行第"+count.value+"次")
    count.value++
    return 2 * num
})
</script>
```

</template>

</ComponentCard>

<script setup>
import { useComputed } from 'knot-vue'
import {ref} from 'vue'

const count = ref(0)

const doubleCount = useComputed((num) => {
    console.log("执行第"+count.value+"次")
    count.value++
    return 2 * num
})
</script>