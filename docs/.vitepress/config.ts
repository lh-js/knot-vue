import { defineConfig } from 'vitepress'
import { nav } from './relaConf'
import { sidebar } from './relaConf';

export default defineConfig({
    title: 'knot vue',
    base: process.env.NODE_ENV === 'production' ? '/knot-vue/' : '/',
    lastUpdated: true,
    // lastUpdatedText: '最后更新',
    themeConfig: {
        logo: 'https://lihong.org.cn/knot-vue/img/logo.png', // 表示docs/public/avartar.png
        nav: nav, // 把定义的nav给替换进来
        sidebar: sidebar, // 把定义的sidebar给替换进来
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lh-js/knot-vue' } // 右上角github图标
        ],
        search: {
            provider: 'local'
        }
    },
})