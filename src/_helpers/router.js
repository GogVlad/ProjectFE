import Vue from "vue";
import Router from "vue-router";

import Login from "../login/Login.vue";
import Register from "../register/Register.vue";
import Home from "../home/Home.vue";
import CreateCv from "../create/Create.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login },
    { path: "/create-cv", name: "create", component: CreateCv },

    // otherwise redirect to home
    { path: "*", redirect: "/" },
  ],
});
