/*
 * Vue
 *
 * Import Vue and plugins need for the application
 * https://vuejs.org/
 */
import Vue from "vue";
import "./plugins";
import "@/assets/css/tailwind.css";

Vue.config.debug = process.env.NODE_ENV !== "production";

/*
 * Vue Router
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

export const router = createRouter();

/**
 * New vue-router instance
 * @returns {VueRouter}
 */
function createRouter() {
  return new VueRouter({
    mode: "history",
    routes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
  });
}

Vue.router = router;
