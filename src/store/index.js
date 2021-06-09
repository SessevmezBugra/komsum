import Vue from "vue";
import Vuex from "vuex";

import geography from "./geography/geography.module";
import post from "./post/post.module";
import tag from "./tag/tag.module"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        geography,
        post,
        tag
    }
});