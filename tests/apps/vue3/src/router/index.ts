import {
  createRouter,
  createWebHistory
} from "vue-router";
import type {   Router, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import("../views/Account.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/thankyou",
    name: "ThankYou",
    component: () =>
      import("../views/ThankYou.vue"),
  },
  {
    path: "/teaser",
    name: "Teaser",
    component: () =>
      import("../views/Teaser.vue"),
  },
  {
    path: "/content-engagement",
    name: "ContentEngagement",
    component: () =>
      import(
        "../views/ContentEngagement.vue"
      ),
  },
  {
    path: "/directive",
    name: "Directive",
    component: () =>
      import("../views/Directive.vue"),
  },
  {
    path: "/shop/:id",
    name: "SingleProduct",
    component: () =>
      import("../views/Product.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
