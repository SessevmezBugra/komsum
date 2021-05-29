import {
    ADD_SELECTED_AREA,
    FETCH_CITY,
    FETCH_DISTRICT,
    FETCH_NEIGHBORHOOD,
    FETCH_STREET,
    REMOVE_SELECTED_AREA,
} from "./actions.type";

import {
    SET_CITY,
    SET_DISTRICT,
    SET_NEIGHBORHOOD,
    SET_STREET,
    SET_SELECTED_AREA,
    REMOVE_SELECTED_AREA_FROM_SELECTED_AREAS
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
    [REMOVE_SELECTED_AREA](context, selectedArea) {
        context.commit(REMOVE_SELECTED_AREA_FROM_SELECTED_AREAS, selectedArea);
    }
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
    [REMOVE_SELECTED_AREA_FROM_SELECTED_AREAS](state, selectedArea) {
        let tmpSelectedAreas = [...state.selectedAreas];

        if (selectedArea.areaType == "CITY") {
            for (let index = 0; index < state.selectedAreas.length; index++) {
                const element = state.selectedAreas[index];

                if (element.areaType == "DISTRICT") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== element.filterId); //ES6
                } else if (element.areaType == "NEIGHBORHOOD") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== element.filterId); //ES6
                } else if (element.areaType == "STREET") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== element.filterId); //ES6

                }

            }
        } else if (selectedArea.areaType == "DISTRICT") {
            for (let el = 0; el < state.selectedAreas.length; el++) {
                const deneme = state.selectedAreas[el];
                if (deneme.areaType == "NEIGHBORHOOD") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== deneme.filterId);
                } else if (deneme.areaType == "STREET") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== deneme.filterId);
                }

            }


        } else if (selectedArea.areaType == "NEIGHBORHOOD") {
            for (let index = 0; index < state.selectedAreas.length; index++) {
                const element = state.selectedAreas[index];
                if (element.areaType == "STREET") {
                    tmpSelectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== element.filterId);
                }

            }

        }
        state.selectedAreas = tmpSelectedAreas.filter((item) => item.filterId !== selectedArea.filterId); //ES6
        console.log("geograpy tıklandı", selectedArea);
    }

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