import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
    // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
    '/pages/guide/start/': [
        // 第一部分
        {
            text: '快速开始',
            items: [
                {
                    text: '相关技术',
                    link: '/pages/guide/start/#相关技术'
                }
            ]
        },
        // 第二部分
        {
            text: '使用',
            items: [
                {
                    text: '安装',
                    link: '/pages/guide/start/#安装'
                }
            ]
        }
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
