# picture-group

## 基本使用

<ComponentCard>

<template #component>
<kn-picture-group :pictureList="list1"/>
<br/>
<kn-picture-group :pictureList="list2"/>
<br/>
<kn-picture-group :pictureList="list3"/>
<br/>
<kn-picture-group :pictureList="list4"/>
</template>
<template #code>

```vue
<template>
    <kn-picture-group :pictureList="list1"/>
<br/>
<kn-picture-group :pictureList="list2"/>
<br/>
<kn-picture-group :pictureList="list3"/>
<br/>
<kn-picture-group :pictureList="list4"/>
</template>

<script setup>
const list1 = ["https://lihong.org.cn/knot-vue/img/logo.png"]

const list2 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]

const list3 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]

const list4 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]
</script>
```

</template>
</ComponentCard>




<script setup>
const list1 = ["https://lihong.org.cn/knot-vue/img/logo.png"]

const list2 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]

const list3 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]

const list4 = ["https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png",
"https://lihong.org.cn/knot-vue/img/logo.png"]
</script>