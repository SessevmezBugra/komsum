import Vue from "vue";
import { BASE_SERVICE_URI } from "./constants";

export const GeographyService = {

    
    getCities() {
        return Vue.axios
            .get(BASE_SERVICE_URI + "/geography/city");
    },

    getDistrictByCityId(cityId) {
        return Vue.axios
            .get(BASE_SERVICE_URI + "/geography/district/city/" + cityId);
    },

    getNeighborhoodsByDistrictId(districtId) {
        return Vue.axios
            .get(BASE_SERVICE_URI + "/geography/neighborhood/district/" + districtId);
    },

    getStreetsByNeighborhoodId(neighborhoodId) {
        return Vue.axios
            .get(BASE_SERVICE_URI + "/geography/street/neighborhood/" + neighborhoodId);
    },
}

export const PostService = {
    getPosts() {
        console.log(BASE_SERVICE_URI);
        return Vue.axios.get(BASE_SERVICE_URI + "/post");
    },
    addPost(post){
        return Vue.axios.post(BASE_SERVICE_URI + "/post", post);
    }
}
export const TagService = {
    getTags(){
        return Vue.axios.get(BASE_SERVICE_URI + "/tag");
    }

}