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
