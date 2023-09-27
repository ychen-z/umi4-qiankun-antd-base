import { defineConfig } from '@umijs/max';

export const routes = [
  {
    path: '/',
    component: '@/layouts/index.tsx',
    routes: [
      { path: '', component: '@/pages/index' },
      {
        path: '/micro/*',
        microApp: 'ehr',
      },
      {
        path: '/app3/*',
        microApp: 'app3',
      },
    ],
  },
  {
    path: '/home',
    name: '首页',
    component: './home',
  },
  {
    path: '/login',
    component: './login',
  },
  {
    path: '/access',
    component: './Access',
  },
];

export default defineConfig({
  apiRoute: {},
  hash: true,
  access: {},
  model: {},
  history: {
    type: 'hash',
  },
  fastRefresh: true,
  initialState: {},
  title: '网易猎头系统',
  request: {},
  // umi 内置了postcss，所以只需要在这里进行配置和引用
  extraPostCSSPlugins: [
    require('tailwindcss')({ config: './tailwind.config.js' }),
    require('autoprefixer'),
  ],
  // devServer: {
  //   host: 'localhost.netease.com', // 需配置一下  127.0.0.1 local.netease.com
  // },
  proxy: {
    '/dev': {
      target: 'https://headerhunter-dev.netease.com',
      secure: false,
      pathRewrite: {
        '^/dev': '',
      },
      changeOrigin: true,
    },
  },
  qiankun: {
    master: {},
  },
  routes: routes,
  npmClient: 'yarn',
});
