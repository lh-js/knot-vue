# useVModel

### 用于封装表单组件的hooks

注:父组件传入子组件的值暂时只能用ref定义，后续会考虑更好的方式修复

## 基本使用

<ComponentCard ref="componentCard">

<template #component>
<KnForm v-model="modeValue" />
</template>
<template #code>

<CodeGroup :codeTabs="['kn-form.vue','index.vue']" @tabChange="tabChange">
<template #kn-form.vue>

```vue
<template>
  <input v-model="model.name" />
  <input v-model="model.password" />
</template>
<script lang="ts" setup>
import { useVModel } from 'knot-vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>
```

</template>
<template #index.vue>

```vue
<template #component>
  <KnForm v-model="modeValue" />
</template>

<script setup>
import KnForm from './components/kn-form/index.vue'
import { ref } from 'vue'

const modeValue = ref({ //暂时只能用ref定义，后续会考虑更好的方式修复
  name: 'xx',
  password: 'xx',
})
</script>
```

</template>

</CodeGroup>

</template>
</ComponentCard>

<script setup>
import KnForm from './components/kn-form/index.vue'
import { ref } from 'vue'

const modeValue = ref({
    name:"xx",
    password:"xx"
})

const componentCard = ref(null)

const tabChange = () =>{
    componentCard.value.autoHeight()
}
</script>
