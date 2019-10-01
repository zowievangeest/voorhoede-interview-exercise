import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

require("./bootstrap");

new Vue(App).$mount("#app");
