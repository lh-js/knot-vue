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
    name: 'title',
    describle: '列名',
    type: 'string',
    isRequired: true,
    default: '--'
},
{
    name: 'dataIndex',
    describle: '列索引',
    type: 'string',
    isRequired: true,
    default: '--'
},
{
    name: 'key',
    describle: '列对应字段',
    type: 'string',
    isRequired: true,
    default: '--'
},
{
    name: 'align',
    describle: '对齐方式',
    type: 'string',
    isRequired: false,
    default: 'center'
}]
</script>