---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: knot vue
titleTemplate: Hello Knot vue ！
editLink: true
lastUpdated: true

hero:
  name: knot vue
  text: A component library for Vue
  tagline: /创意/易用/丰富/
  image:
    # 首页右边的图片
    src: https://lihong.org.cn/knot-vue/img/logo.png
    # 图片的描述
    alt: logo
  # 按钮相关
  actions:
    - theme: brand
      text: 指南
      link: /pages/guide/start/
    - theme: alt
      text: 组件
      link: /pages/components/hello/
# 按钮下方的描述
features:
  - icon: 💡
    title: 创意
    details: originality
    link: /
  - icon: 🎨
    title: 易用
    details: Easy To Use
    link: /
  - icon: 🧩
    title: 丰富
    details: richness
    link: /
---
