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
    name: 'columns',
    describle: '表格列名',
    type: 'Column[] 见下表',
    isRequired: true,
    default: '--'
},
{
    name: 'dataSource',
    describle: '表格数据',
    type: '对应Column的key',
    isRequired: true,
    default: '--'
}]
</script>