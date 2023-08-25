---
lastUpdated: true
---

<script setup>
import { KnHello , KnButton } from '../../../../umd/es/index.mjs';
import '../../../../umd/es/style.css'
import ComponentCard from '../../../components/component-card/index.vue'
</script>

## 基本使用

<ComponentCard code="">
<template #component>
<kn-hello />
</template>
</ComponentCard>

<kn-button label="点击" />

```vue
<template>
  <kn-hello />
</template>
<script setup>
import { KnHello, KnButton } from '../../../../umd/es/index.mjs'
import '../../../../umd/es/style.css'
</script>
```
