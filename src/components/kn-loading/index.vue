<template>
    <div class="ball-box">
        <div class="ball red"></div>
        <div class="ball blue"></div>
    </div>
</template>
<style lang="scss" scoped>
.ball-box {
    display: flex;
    align-items: center;

    .ball {
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;

    }

    .ball.red {
        background-color: #e94359;
        animation: redRotate linear 1s infinite;
        z-index: 1;
    }

    .ball.blue {
        background-color: #74f0ed;
        animation: blueRotate linear 1s infinite;
        z-index: 0;
    }

    @keyframes redRotate {
        0% {
            transform: translateX(0);
            z-index: 1;
        }

        50% {
            transform: translateX(20px);

        }

        100% {
            transform: translateX(0);
            z-index: 0;
        }
    }

    @keyframes blueRotate {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(-20px);
        }

        100% {
            transform: translateX(0);
        }
    }
}
</style>