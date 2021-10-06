import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/Layout.vue";
import Future from "@/views/Future.vue";
import { CateList } from '@/mock/cates';
const cateRouters = combCateToRouter(CateList);

Vue.use(VueRouter);

const routes = [
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
  ...cateRouters,
  {
    path: "/404",
    name: 'x404',
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
  {
    path: '*',
    redirect: '/404',
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to.path)
  next();
})

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