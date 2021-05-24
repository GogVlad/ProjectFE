import Vue from "vue";
import Router from "vue-router";

import Login from "../login/Login.vue";
import Register from "../register/Register.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },

    // otherwise redirect to home
    { path: "*", redirect: "/" },
  ],
});
