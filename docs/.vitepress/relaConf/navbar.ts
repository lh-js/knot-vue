import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    link: '/pages/guide/start/'
  },
  {
    text: '组件',
    link: '/pages/components/hello/'
    // items: [
    //   {
    //     text: '',
    //     link: '/column/Travel/' // 表示docs/column/Travel/index.md
    //   },
    //   {
    //     text: '所思·所想',
    //     link: '/column/Growing/' // 表示docs/column/Growing/index.md
    //   }
    // ]
  },
  {
    text: 'hooks',
    link: '/pages/hooks/useHello/'
  },
  {
    text: 'utils',
    link: '/pages/utils/hello/'
  }
];
