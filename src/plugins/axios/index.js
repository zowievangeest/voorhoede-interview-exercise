import Vue from "vue";
import Axios from "axios";
import NProgress from "nprogress";

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Axios.defaults.headers.common.accept = "application/json";

Axios.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

Axios.interceptors.response.use(
  res => {
    NProgress.done();
    return Promise.resolve(res);
  },
  error => {
    return Promise.reject(error);
  }
);

Vue.$http = Axios;
Object.defineProperty(Vue.prototype, "$http", {
  get() {
    return Axios;
  }
});
