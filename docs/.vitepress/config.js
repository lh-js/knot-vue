import { defineConfig } from 'vitepress'
import { nav } from './relaConf'

export default defineConfig({
    title: 'knot vue',
    themeConfig: {
        logo: 'https://lihong.org.cn/knot-react/img/logo.png', // 表示docs/public/avartar.png
        nav: nav, // 把定义的nav给替换进来
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 右上角github图标
        ]
    },
})