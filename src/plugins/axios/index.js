import Vue from "vue";
import Axios from "axios";

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Axios.defaults.headers.common.accept = "application/json";

Axios.interceptors.response.use(
  res => {
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
