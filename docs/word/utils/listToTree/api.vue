<template>
    <kn-table :columns="columns" :dataSource="dataSource" border />
</template>
<script setup>
const columns = [{
    title: "属性名",
    dataIndex: "name",
    key: "name",
    align: 'center'
}, {
    title: "描述",
    dataIndex: "describle",
    key: "describle",
    align: 'center'
}, {
    title: "类型",
    dataIndex: "type",
    key: "type",
    align: 'center'
}, {
    title: "是否必填",
    dataIndex: "isRequired",
    key: "isRequired",
    align: 'center'
}, {
    title: "默认值",
    dataIndex: "default",
    key: "default",
    align: 'center'
}]

const dataSource = [{
    name: '第一个参数',
    describle: '扁平列表',
    type: 'Item[] 见下表',
    isRequired: true,
    default: '--'
},
{
    name: '第二个参数',
    describle: '唯一标识字段名',
    type: 'string',
    isRequired: true,
    default: 'id'
},
{
    name: '第三个参数',
    describle: '子节点数组字段名',
    type: 'string',
    isRequired: true,
    default: 'children'
},
{
    name: '第四个参数',
    describle: '父节点唯一标识字段名',
    type: 'string',
    isRequired: true,
    default: 'parentId'
}]
</script>