import Vue from "vue";
import VueRouter from "vue-router";
import Store from '@/store/index.js'
import Layout from "@/layout/Layout.vue";
import Future from "@/views/Future.vue";
import { CateList } from '@/mock/cates';
import { getToken } from '@/utils/auth.js';

// const cateRouters = combCateToRouter(CateList);
// const whiteList = ['/login'];

Vue.use(VueRouter);
// 通用路由
const commRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "@/views/Login.vue"),
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: '/hello',
    children: [
      {
        path: "hello",
        name: "Hello",
        component: () => import(/* webpackChunkName: "Hello" */ "@/views/Hello.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/pdf",
    name: "Pdf",
    component: () => import(/* webpackChunkName: "Pdf" */ "@/views/Pdf.vue"),
  },
];
// 异常路由
const errRouters = [
  {
    path: "/404",
    name: 'x404',
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
  {
    path: '*',
    redirect: '/404',
  }
]

const createRouter = () => new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: commRoutes,
});

const router = createRouter();

router.beforeEach((to, from, next) => {
  const tokenValue = getToken();
  if(tokenValue) {
    if(to.path === '/login') {
      next({path: '/'})
    } else {
      next()
      // let roles = Store.state.roles;
      // if(roles.length) {
      //   console.log('11111111', from.path, to.path, roles)
      //   next()
      // } else {
      //   console.log('222222222', from.path, to.path, roles)
      //   roles = tokenValue.split('_').splice(2);
      //   let curRouter = dynamicAddRouter(roles);
      //   router.addRoutes(curRouter);
      //   router.addRoutes(errRouters);
      //   Store.commit('setRoles', roles);
      //   Store.commit('setCateList', curRouter);
      //   next({ ...to, replace: true })
      // }
    }
  } else {
    if(to.path === '/login') {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
})
// 重置路由数据
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
// 添加角色权限路由
export function addRolesRouter(roles) {
  let curRouter = dynamicAddRouter(roles);
  router.addRoutes(curRouter);
  router.addRoutes(errRouters);
  Store.commit('setCateList', curRouter);
}

export default router;


// 将类别cate转化为路由router
export function combCateToRouter(cates) {
  let routerList = cates.slice();
  routerList.forEach(item => {
    if(/^\//.test(item.path)) {
      item.component = Layout;
    } else {
      if(!item.component) item.component = Future;
    }
    if(!item.name) item.name = combRouterName(item.path);
    // 递归执行
    if(item.children) combCateToRouter(item.children);
  })
  return routerList;
}
// 处理路由名字
export function combRouterName(str) {
  let tempName = str || '';
  if(/^\//.test(tempName)) {
    tempName = tempName.replace(/^\//, '').charAt(0).toUpperCase() + tempName.slice(2);
  } else {
    tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
  }
  return tempName;
}
// 动态添加路由
export function dynamicAddRouter(roles) {
  const cateRouterList = combCateToRouter(CateList);
  let tempList = [];
  if(roles.includes("admin")) {
    tempList = cateRouterList;
  } else {
    tempList = filterRouter(cateRouterList, roles);
  }
  return tempList;
}
// 权限判断
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
// 过滤路由
function filterRouter(list, roles) {
  let res = [];
  list.forEach(item => {
    const tempItem = { ...item };
    if(hasPermission(roles, tempItem)) {
      if(tempItem.children) tempItem.children = filterRouter(tempItem.children, roles);
      res.push(tempItem);
    }
  })
  return res;
}