import Vue from "vue";

export const GeographyService = {

    getCities() {
        return Vue.axios
          .get("http://46.101.87.81:4000/geography/city");
    },

    getDistrictByCityId(cityId) {
        return Vue.axios
          .get("http://46.101.87.81:4000/geography/district/city/" + cityId);
      },

      getNeighborhoodsByDistrictId(districtId) {
        return Vue.axios
          .get("http://46.101.87.81:4000/geography/neighborhood/district/" + districtId);
      },

      getStreetsByNeighborhoodId(neighborhoodId) {
        return Vue.axios
          .get("http://46.101.87.81:4000/geography/street/neighborhood/" + neighborhoodId);
      },
}

export const PostService = {
  getPosts() {
    return Vue.axios.get("http://46.101.87.81:4000/post");
  }
}