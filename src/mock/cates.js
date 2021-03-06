export const CateList = [
  {
    name: '内存与栈堆',
    isSpread: false,
    children: [
      {
        name: '内存',
        path: '/memory',
      },
      {
        name: '栈',
        path: '/stack',
      },
      {
        name: '堆',
        path: 'heap', 
      }
    ]
  },
  {
    name: '数据结构',
    path: 'datastrcuter',
    isSpread: true,
    children: [
      {
        name: '对象',
        path: 'object',
        children: [
          {
            name: '原型对象',
            path: 'prototype',
          },
          {
            name: '普通对象',
            path: 'nomral',
            isSpread: true,
            children: [
              {
                name: '普11111',
                path: 'pu1',
              },
              {
                name: '普222222',
                path: 'pu2',
                children: [
                  {
                    name: '小22222222',
                    path: 'm2'
                  },
                ]
              },
            ]
          }
        ]
      },
      {
        name: 'Map',
        path: 'map',
      }
    ]
  }
]