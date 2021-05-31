import {
    PostService
} from "../../common/api.service";

import {
    FETCH_POST
} from "./actions.type";

import {
    SET_POST
} from "./mutations.type";

const initialState = {
    posts: []
}

export const state = {...initialState };

export const actions = {
    async [FETCH_POST](context) {
        const { data } = await PostService.getPosts();
        context.commit(SET_POST, data);
    }
}

export const mutations = {
    [SET_POST](state, posts) {
        state.posts = posts;
    }
}

const getters = {
    posts(state) {
        return state.posts;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};