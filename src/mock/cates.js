export const CateList = [
  {
    label: 'Hello World',
    name: 'World',
    path: '/hello',
    meta: {
      roles: ['admin', 'boss']
    },
    isExist: true,
  },
  {
    label: '电商',
    name: 'Shop',
    path: '/ebusiness',
    isExist: true,
  },
  {
    label: '技术栈',
    path: '/stack',
    redirect: '/stack/vuejs/vue/vue2',
    meta: {
      icon: 'el-icon-moon-night'
    },
    children: [
      {
        label: 'Vue.js',
        path: 'vuejs',
        children: [
          {
            label: 'Vue',
            path: 'vue',
            children: [
              {
                label: '2.0',
                path: 'vue2',
                component: () => import(/* webpackChunkName: "vue2" */ "@/components/Vue2.vue"),
              },
              {
                label: '3.0',
                path: 'vue3',
              },
            ]
          },
          {
            label: 'Vue-Router',
            path: 'vrouter',
          },
          {
            label: '数据管理',
            path: 'data',
            children: [
              {
                label: 'Vuex',
                path: 'vuex',
              },
              {
                label: '其他',
                path: 'other',
                children: [
                  {
                    label: '混入',
                    path: 'mixin',
                  },
                  {
                    label: '依赖注入',
                    path: 'inject',
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        label: 'Nodejs',
        path: 'node',
        children: [
          {
            label: 'Webpack',
            path: 'webpack', 
          },
          {
            label: 'Koa',
            path: 'koa', 
          }
        ]
      },
      {
        label: '性能优化',
        path: 'performance', 
      }
    ]
  },
  {
    label: '心驿站',
    path: '/station',
    meta: {
      icon: 'el-icon-moon-night',
      roles: ['admin', 'hero', 'boss']
    },
    children: [
      {
        label: '关于文学',
        path: 'literature',
        meta: {
          roles: ['admin', 'hero']
        },
        component: () => import(/* webpackChunkName: "Literature" */ "@/views/Literature.vue"),
      },
      {
        label: '关于爱情',
        path: 'love',
        meta: {
          roles: ['admin', 'hero']
        },
      },
      {
        label: '关于穿越世界的旅行',
        path: 'travel',
        meta: {
          roles: ['admin', 'boss']
        },
      },
    ]
  },
  {
    label: '金银盏',
    path: '/stock',
    meta: {
      icon: 'el-icon-moon-night',
      roles: ['admin', 'boss'],
    },
    children: [
      {
        label: '基金',
        path: 'fund',
        meta: {
          roles: ['admin', 'boss']
        },
        component: () => import(/* webpackChunkName: "Fund" */ "@/views/Fund.vue"),
      },
      {
        label: 'A股',
        path: 'rmb',
        meta: {
          roles: ['admin', 'boss']
        },
      },
      {
        label: '美股',
        path: 'dollar',
        meta: {
          roles: ['admin', 'hero']
        },
      },
      {
        label: '港股',
        path: 'hkd',
        meta: {
          roles: ['admin', 'boss']
        },
      },
    ]
  },
]