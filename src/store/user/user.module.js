import { LOGIN, LOGOUT } from "./actions.type";
import { RESET_AUTH, SET_AUTH } from "./mutations.type";

const initialState = {
    keycloak : null
}

export const state = { initialState };

export const actions = {
    [LOGIN](context, keycloak) {
        context.commit(SET_AUTH, keycloak);
    },
    [LOGOUT](context) {
        context.commit(RESET_AUTH);
    }
}

export const mutations = {
    [SET_AUTH](state, keycloak) {
        state.keycloak = keycloak
    }
}

const getters = {
    keycloak(state) {
        return state.keycloak;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}