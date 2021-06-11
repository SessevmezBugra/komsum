<template>
  <b-container fluid class="position-fixed">
    <nav-bar />
    <b-row>
      <b-col cols="12" sm="12" md="3" lg="3"   class="mt-5">
        <side-bar></side-bar>
          <b-row>
          <b-col class="mt-2">
            <filter-bar />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6" class="mt-5">
        <post-list></post-list>
      </b-col>

      <b-col cols="12" sm="12" lg="3" class="mt-5 menu-list .d-none .d-sm-block .d-md-none"><menu-list></menu-list> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from "../components/navs/side-bar/Sidebar";
import PostList from "../components/post/PostList.vue";
import MenuList from "../components/menu/MenuList.vue";
import Navbar from "../components/navs/Navbar";
import FilterBar from "../components/navs/filter-bar/FilterBar.vue";

import Vue from "vue";

export default {
  components: {
    "post-list": PostList,
    "menu-list": MenuList,
    "nav-bar": Navbar,
    "side-bar": Sidebar,
    "filter-bar": FilterBar,
  },
  name: "Home",
  data() {
    return {
      selectedItem: null,
      color: { color: "" },
      bubblesData: [],
      denemeData: [],
      bus: new Vue(),
    };
  },
  methods: {
    getCities() {
      Vue.axios
        .get("http://46.101.87.81:4000/geography/city")
        .then((response) => {
          for (var data of response.data) {
            this.bubblesData.push({
              filter: data.name,
              filterId: data.id,
              areaType: "CITY",
            });
          }
        });
    },
    getDistrictByCityId(cityId) {
      Vue.axios
        .get("http://46.101.87.81:4000/geography/district/city/" + cityId)
        .then((response) => {
          for (var data of response.data) {
            this.bubblesData.push({
              filter: data.name,
              filterId: data.id,
              areaType: "DISTRICT",
            });
          }
        });
    },
    getNeighborhoodsByDistrictId(districtId) {
      Vue.axios
        .get(
          "http://46.101.87.81:4000/geography/neighborhood/district/" +
            districtId
        )
        .then((response) => {
          for (var data of response.data) {
            this.bubblesData.push({
              filter: data.name,
              filterId: data.id,
              areaType: "NEIGHBORHOOD",
            });
          }
        });
    },
    getStreetsByNeighborhoodId(neighborhoodId) {
      Vue.axios
        .get(
          "http://46.101.87.81:4000/geography/street/neighborhood/" +
            neighborhoodId
        )
        .then((response) => {
          for (var data of response.data) {
            this.bubblesData.push({
              filter: data.name,
              filterId: data.id,
              areaType: "STREET",
            });
            console.log("sokak");
          }
        });
    },

    onClickChild(data) {
      this.bubblesData = [];
      if (data.areaType == "CITY") {
        this.getDistrictByCityId(data.filterId);
      } else if (data.areaType == "DISTRICT") {
        this.getNeighborhoodsByDistrictId(data.filterId);
      } else if (data.areaType == "NEIGHBORHOOD") {
        this.getStreetsByNeighborhoodId(data.filterId);
      } else {
        return;
      }
    },
  },
  mounted() {
    this.bus.$on("onClickBubble", this.onClickChild);
  },
  created() {
    this.getCities();
  },
};
</script>




<style>

   /* @media (max-width: 720px) {
        .menu-list  {
          display: none;
        }
   } */


</style>