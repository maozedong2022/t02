import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login"; //引入login页面到路由
import Layout from "@/views/Layout";
import Home from "@/views/Home";
import User from "@/views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //页面打开时 根路径
    // redirect: '/login' //让根路径重定向到login
    redirect: "/layout/home", //
  },
  {
    path: "/login", //这里代表login路由
    component: Login, //设置login路由转向 Login组件  记得把该组件挂在到App.vue里，<router-view></router-view>
  },
  {
    path: "/layout",
    component: Layout, //记得把该组件挂在到App.vue里，<router-view></router-view>
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "user",
        component: User,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
