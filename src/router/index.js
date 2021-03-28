import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "stack",
        name: "Stack",
        component: () => import(/* webpackChunkName: "stack" */ "@/components/Stack.vue"),
      },
      {
        path: "memory",
        name: "Memory",
        component: () => import(/* webpackChunkName: "memory" */ "@/components/Memory.vue"),
      },
      {
        path: "xcollapse",
        name: "Xcollapse",
        component: () => import(/* webpackChunkName: "xcollapse" */ "@/xvui/xcollapse.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
