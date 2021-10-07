import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/style/index.less';
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局指令集
import GlobalDirectives from '@/directive/global.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 注册全局指令
GlobalDirectives.forEach(item => {
  Vue.directive(item.name, item.handler);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
