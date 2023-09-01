# table

## 基本使用

<ComponentCard>

<template #component>
<kn-table :columns="columns" :dataSource="dataSource" />
</template>
<template #code>

```vue
<template>
  <kn-table :columns="columns" :dataSource="dataSource" />
</template>

<script setup lang="ts">
import { KnTable } from 'knot-vue'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
]

const dataSource = [
  {
    name: 'lh',
    sex: '男',
    age: 19,
  },
  {
    name: 'fxh',
    sex: '男',
    age: 19,
  },
  {
    sex: '女',
    name: 'hss',
    age: 19,
  },
]
</script>
```

</template>
</ComponentCard>

## 带边框

<ComponentCard>

<template #component>
<kn-table :columns="columns" :dataSource="dataSource" border />
</template>
<template #code>

```vue
<template>
  <kn-table :columns="columns" :dataSource="dataSource" border />
</template>

<script setup lang="ts">
import { KnTable } from 'knot-vue'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
]

const dataSource = [
  {
    name: 'lh',
    sex: '男',
    age: 19,
  },
  {
    name: 'fxh',
    sex: '男',
    age: 19,
  },
  {
    sex: '女',
    name: 'hss',
    age: 19,
  },
]
</script>
```

</template>
</ComponentCard>

## 插槽

<ComponentCard>

<template #component>
<kn-table :columns="columns" :dataSource="dataSource" >
<template #name="{row}">

<div style="color:red">
{{row.name}}
</div>

</template>
</kn-table>
</template>
<template #code>

```vue
<template>
  <kn-table :columns="columns" :dataSource="dataSource">
    <template #name="{ row }">
      <div style="color:red">
        {{ row.name }}
      </div>
    </template>
  </kn-table>
</template>

<script setup lang="ts">
import { KnTable } from 'knot-vue'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
]

const dataSource = [
  {
    name: 'lh',
    sex: '男',
    age: 19,
  },
  {
    name: 'fxh',
    sex: '男',
    age: 19,
  },
  {
    sex: '女',
    name: 'hss',
    age: 19,
  },
]
</script>
```

</template>
</ComponentCard>

<script setup>
    const columns = [{
        title:"姓名",
        dataIndex:"name",
        key:"name",
        align:'center'
    },{
        title:"性别",
        dataIndex:"sex",
        key:"sex",
        align:'center'
    },{
        title:"年龄",
        dataIndex:"age",
        key:"age",
        align:'center'
    }]

    const dataSource = [{
        name:'lh',
        sex:'男',
        age:19
    },{
        name:'fxh',
        sex:'男',
        age:19
    },{
        sex:'女',
        name:'hss',
        age:19
    }]
</script>
