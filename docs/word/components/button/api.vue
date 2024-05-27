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
    name: 'children',
    describle: '按钮内容',
    type: 'string',
    isRequired: true,
    default: '--'
}, {
    name: 'width',
    describle: '宽度',
    type: 'number',
    isRequired: false,
    default: '74'
}, {
    name: 'height',
    describle: '高度',
    type: 'number',
    isRequired: false,
    default: '34'
}, {
    name: 'type',
    describle: '按钮类型',
    type: 'string',
    isRequired: false,
    default: 'default'
}, {
    name: 'disabled',
    describle: '是否禁用',
    type: 'boolean',
    isRequired: false,
    default: false
}]
</script>