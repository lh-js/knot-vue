<template>
    <div class="picture-list" :style="`--boxWidth:${boxWidth ? boxWidth : 100}px;--gap:${gap ? gap : 0.5}%`">
        <div v-for="(item, index) in list" :class="`picture-item${index + 1} picture-length${list?.length}`" :key="index">
            <img :src="item" style="width: 100%;height: 100%;object-fit:cover;object-position:left">
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    pictureList?: string[]
    boxWidth?: number
    gap?: number
}

const list = computed(() => {
    if (!props.pictureList) return
    return props.pictureList.length > 4 ? props.pictureList.slice(0, 4) : props.pictureList
})

const props = defineProps<Props>() 
</script>
<style lang="scss" scoped>
.picture-list {
    width: var(--boxWidth);
    height: var(--boxWidth);
    position: relative;

    .picture-item1 {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        &:where(.picture-length2, .picture-length3) {
            width: calc(50% - var(--gap));
        }

        &:where(.picture-length4) {
            width: calc(50% - var(--gap));
            height: calc(50% - var(--gap));
        }
    }

    .picture-item2 {
        width: calc(50% - var(--gap));
        height: calc(50% - var(--gap));
        position: absolute;
        top: 0;
        right: 0;

        &:where(.picture-length2) {
            height: 100%;
        }
    }

    .picture-item3 {
        width: calc(50% - var(--gap));
        height: calc(50% - var(--gap));
        position: absolute;
        bottom: 0;
        right: 0;

        &:where(.picture-length4) {
            left: 0;
        }
    }

    .picture-item4:where(.picture-length4) {
        width: calc(50% - var(--gap));
        height: calc(50% - var(--gap));
        position: absolute;
        bottom: 0;
        right: 0;
    }
}
</style>