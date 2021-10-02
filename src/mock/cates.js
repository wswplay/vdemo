export const CateList = [
  {
    name: '技术栈',
    path: 'stack',
    meta: {
      icon: 'el-icon-moon-night'
    },
    children: [
      {
        name: 'Vue生态',
        path: 'vues',
        children: [
          {
            name: 'Vue',
            path: 'vuejs',
            children: [
              {
                name: '2.0',
                path: 'vue2.0',
              },
              {
                name: '3.0',
                path: 'vue3.0',
              },
            ]
          },
          {
            name: 'Vue-Router',
            path: 'vrouter',
          },
          {
            name: '数据管理',
            path: 'data',
            children: [
              {
                name: 'Vuex',
                path: 'vuex',
              },
              {
                name: '其他',
                path: 'other',
                children: [
                  {
                    name: '混入',
                    path: 'mixin',
                  },
                  {
                    name: '依赖注入',
                    path: 'inject',
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        name: 'Nodejs',
        path: 'node',
        children: [
          {
            name: 'Webpack',
            path: 'webpack', 
          },
          {
            name: 'Koa',
            path: 'koa', 
          }
        ]
      },
      {
        name: '性能优化',
        path: 'performance', 
      }
    ]
  },
  {
    name: '随笔',
    path: 'essay',
    meta: {
      icon: 'el-icon-moon-night'
    },
  }
]