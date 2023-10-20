<template>
    <LoadingBall v-if="props.type === 'default'" />
    <LoadingFlow v-if="props.type === 'flow'" />
</template>
<script setup lang="ts">
import LoadingBall from "./loading-ball.vue";
import LoadingFlow from './loading-flow.vue'

type Props = {
    type: 'default' | 'flow'
}

const props = withDefaults(defineProps<Props>(), {
    type: "default",
})

</script>