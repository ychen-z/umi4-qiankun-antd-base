import { defineConfig } from '@umijs/max';

export default defineConfig({
  // antd: {},
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
  // layout: {
  //   // title: '@umijs/max',
  // },
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
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/home',
  //   },
  //   {
  //     name: '首页',
  //     path: '/home',
  //     component: './Home',
  //   },
  //   {
  //     name: '权限演示',
  //     path: '/access',
  //     component: './Access',
  //   },
  //   {
  //     name: ' CRUD 示例',
  //     path: '/table',
  //     component: './Table',
  //   },
  // ],
  npmClient: 'yarn',
});
