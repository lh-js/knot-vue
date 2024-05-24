<template>
    <div @click.stop="clickTap(item, $event)" class="tree" v-for="item in data">
        <input v-model="item.checked" type="checkbox"> <span class="item-name">{{ item.name }}</span>
        <kn-tree v-if="item?.children?.length" :data="item?.children" />
    </div>
</template>

<script setup lang="ts">
interface Tree {
    name: string,
    checked: false,
    children?: Tree[]
}

defineProps<{
    data?: Tree[]
}>()

const clickTap = (item: Tree, e: MouseEvent) => {
    console.log(item, e.target);
}
</script>

<style lang="scss" scoped>
.tree {
    margin-left: 10px;

    .item-name {
        cursor: pointer;
    }
}
</style>