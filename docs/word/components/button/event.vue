<template>
    <kn-table :columns="columns" :dataSource="dataSource" border />
</template>
<script setup>
const columns = [{
    title: "事件名",
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
}]

const dataSource = [{
    name: '@click',
    describle: '按钮点击事件',
    type: '()=>void',
}]
</script>