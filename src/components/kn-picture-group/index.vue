<template>
    <div class="picture-list" :style="`--itemWidth:${itemWidth ? itemWidth : 50}px`">
        <div v-for="(item, index) in list" :class="`picture-item${index + 1} picture-length${list?.length}`" :key="index">
            <img :src="item" style="width: 100%;height: 100%;object-fit:cover;object-position:left">
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    pictureList?: string[]
    itemWidth?: number
}

const list = computed(() => {
    if (!props.pictureList) return
    return props.pictureList.length > 4 ? props.pictureList.slice(0, 4) : props.pictureList
})

const props = defineProps<Props>() 
</script>
<style lang="scss" scoped>
.picture-list {
    display: grid;
    grid-template-columns: var(--itemWidth) var(--itemWidth);
    grid-template-rows: var(--itemWidth) var(--itemWidth);
    gap: 2px;

    .picture-item1 {

        &:where(.picture-length1) {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }

        &:where(.picture-length2, .picture-length3) {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 3;
        }
    }

    .picture-item2 {
        &:where(.picture-length2) {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }
    }
}
</style>