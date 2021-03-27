import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import NavBar from "@/views/NavBar.vue";
import LeftBar from "@/views/LeftBar.vue";
import Main from "@/views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: {
      NavBar,
      LeftBar,
      Main
    }
  },
  {
    path: "/navbar",
    name: "NavBar",
    component: NavBar,
    children: [
      {
        path: "stack",
        name: "stack",
        component: Main,
      },
    ]
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
