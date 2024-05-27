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

const dataSource = [
{
    name: 'id',
    describle: '唯一标识',
    type: 'string',
    isRequired: true,
    default: '--'
},
{
    name: 'children',
    describle: '子节点数组',
    type: 'string',
    isRequired: true,
    default: '--'
},
{
    name: 'parentId',
    describle: '父节点唯一标识',
    type: 'string',
    isRequired: true,
    default: '--'
}]
</script>