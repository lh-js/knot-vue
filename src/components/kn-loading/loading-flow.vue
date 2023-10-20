<template>
    <div class="box">
        <!-- 这里使用了svg，svg是可缩放矢量图形的标签，通过创建和操作svg，使得图形通过缩放而不失去真的在各种尺寸和分辨率下呈现 -->
        <!-- 这段代码的作用是先对图形进行高斯模糊处理，然后对图形的颜色进行变换。具体的颜色变换可以通过颜色矩阵来实现，
            这里使用的颜色矩阵将每个像素的红、绿、蓝三个通道的颜色值分别乘以1，不变化；将透明度乘以20，增加透明度；
            最后将透明度减去10，进一步增加透明度。这段代码可能被使用在创建视觉效果中，比如给图像添加模糊效果并调整其透明度，
            从而实现一种"流体"或"柔和"的视觉效果 -->
        <svg>
            <!-- 这是定义一个滤镜效果的元素，其中"id"属性的值为"fluid"，用于给滤镜效果命名。 -->
            <filter id="fluid">
                <!-- 这是一个高斯模糊滤镜效果，用于对图形进行模糊处理。“in"属性的值为"SourceGraphic”，表示将滤镜应用在源图形上，
                    “stdDeviation"属性的值为"10”，表示高斯模糊的参数，即模糊程度。 -->
                <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
                <!-- 这是一个颜色矩阵滤镜效果，用于对图形的颜色进行变换。
                    "values"属性的值为一个包含20个数字的字符串，表示颜色矩阵的变换矩阵。 -->
                <feColorMatrix values="
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10 ">
                </feColorMatrix>
            </filter>
        </svg>
        <div class="loader">
            <!-- 这里设置了水球的css样式变量，用于css样式中的计算 -->
            <span style="--i:1"></span>
            <span style="--i:2"></span>
            <span style="--i:3"></span>
            <span style="--i:4"></span>
            <span style="--i:5"></span>
            <span style="--i:6"></span>
            <span style="--i:7"></span>
            <span style="--i:8"></span>
            <!-- 这里设置了光晕效果，使得出现5个转动的小球 -->
            <span class="rotate" style="--j:0"></span>
            <span class="rotate" style="--j:1"></span>
            <span class="rotate" style="--j:2"></span>
            <span class="rotate" style="--j:3"></span>
            <span class="rotate" style="--j:4"></span>
        </div>
        <div class="word">加载中</div>
    </div>
</template>
<style lang="scss" scoped>
.box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.loader {
    position: relative;
    width: 250px;
    height: 250px;
    background: #666;
    animation: animate 12s linear infinite;
}

.loader span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

/* 定位 伪元素，设置流水的珠子 */
.loader span::before {
    content: '';
    position: absolute;
    top: 0;
    width: 40px;
    height: 40px;
    /* 珠子颜色设置 */
    background: linear-gradient(45deg, #c7eeff, #03a9f4);
    border-radius: 50%;
    /* 设置阴影 */
    box-shadow: 0 0 30px #00bcd4;
}

.loader span {
    /* 设置动画旋转 */
    transform: rotate(calc(45deg*var(--i)));
}

.loader span::before {
    left: calc(50% - 20px);
}

/* 这里设置了旋转动画 */
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.rotate {
    animation: animate 4s ease-in-out infinite;
    /* 设置延迟 */
    animation-delay: calc(-0.2s*var(--j));
}

.loader {
    filter: url(#fluid);
    /* 去掉临时背景颜色为透明 */
    background: transparent;
}

svg {
    width: 0;
    height: 0;
}

.word {
    position: absolute;
    color: #000000;
    font-size: 1.2em;
    animation: words 3s linear infinite;
}

/* 这里设置了文字的缩放动画 */
@keyframes words {
    0% {
        transform: scale(1.2);
    }

    25% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.8);
    }

    75% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.2);
    }
}
</style>