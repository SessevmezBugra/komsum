import {
    ADD_SELECTED_AREA,
    FETCH_CITY,
    FETCH_DISTRICT,
    FETCH_NEIGHBORHOOD,
    FETCH_STREET,
} from "./actions.type";

import {
    SET_CITY,
    SET_DISTRICT,
    SET_NEIGHBORHOOD,
    SET_STREET,
    SET_SELECTED_AREA
} from "./mutation.type"

import {
    GeographyService
} from "../common/api.service"

const initialState = {
    cities: [],
    districts: [],
    neighborhoods: [],
    streets: [],
    selectedAreas: [],
}

export const state = {...initialState };

export const actions = {
    async [FETCH_CITY](context) {
        const { data } = await GeographyService.getCities();
        context.commit(SET_CITY, data);
    },
    async [FETCH_DISTRICT](context, cityId) {
        const { data } = await GeographyService.getDistrictByCityId(cityId);
        context.commit(SET_DISTRICT, data);
    },
    async [FETCH_NEIGHBORHOOD](context, districtId) {
        const { data } = await GeographyService.getNeighborhoodsByDistrictId(districtId);
        context.commit(SET_NEIGHBORHOOD, data);
    },
    async [FETCH_STREET](context, neighborhoodId) {
        const { data } = await GeographyService.getStreetsByNeighborhoodId(neighborhoodId);
        context.commit(SET_STREET, data);
    },
    [ADD_SELECTED_AREA](context, selectedArea) {
        context.commit(SET_SELECTED_AREA, selectedArea);
    },
}

export const mutations = {
    [SET_CITY](state, cities) {
        state.cities = cities;
    },
    [SET_DISTRICT](state, districts) {
        state.districts = districts;
    },
    [SET_NEIGHBORHOOD](state, neighborhoods) {
        state.neighborhoods = neighborhoods;
    },
    [SET_STREET](state, streets) {
        state.streets = streets;
    },
    [SET_SELECTED_AREA](state, selectedArea) {
        state.selectedAreas.push(selectedArea);
    },
}

const getters = {
    cities(state) {
        return state.cities;
    },
    districts(state) {
        return state.districts;
    },
    neighborhoods(state) {
        return state.neighborhoods;
    },
    streets(state) {
        return state.streets;
    },
    selectedAreas(state) {
        return state.selectedAreas;
    },
}

export default {
    state,
    actions,
    mutations,
    getters
};