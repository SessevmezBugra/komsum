import {
    FETCH_CITY
} from "./actions.type";

import {
    SET_CITY
} from "./mutation.type"

import {
    GeographyService
} from "../common/api.service"

const initialState = {
    cities: [],
    districts: [],
    neighborhoods: [],
    streets: []
}

export const state = { ...initialState};

export const actions = {
    async [FETCH_CITY](context) {
        const { data } = await GeographyService.getCities();
        context.commit(SET_CITY, data);
    }
}

export const mutations = {
    [SET_CITY](state, cities) {
        state.cities = cities;
    }
}

const getters = {
    cities(state) {
        return state.cities;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
  };