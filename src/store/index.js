import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
const requireContext = require.context("./modules/", true, /index\.js$/);

const modules = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
  .reduce((modules, [name, module]) => {
    if (module.default.namespaced === undefined) {
      module.default.namespaced = true;
    }
    return { ...modules, [name.replace("/index", "")]: module.default };
  }, {});

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules,

  /**
   * If strict mode should be enabled.
   */
  strict: debug
});
