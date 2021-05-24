import Vue from "vue";
import Vuex from "vuex";

import geography from "./geography.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    geography
  }
});
