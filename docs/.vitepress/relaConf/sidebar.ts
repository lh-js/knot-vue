import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
    // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
    '/pages/guide': [
        // 第一部分
        {
            text: '指南',
            items: [
                {
                    text: '快速开始',
                    link: '/pages/guide/start/'
                }
            ]
        },
    ],
    '/pages/components/': [
        {
            text: '欢迎',
            items: [
                {
                    text: 'hello',
                    link: '/pages/components/hello/'
                }
            ]
        },
    ]
};
