<template>
  <b-container fluid>
    <b-container fluid class="position-fixed d-none d-lg-block">
      <nav-bar />
      <b-row class="mt-5">
        <b-col cols="12" sm="12" md="3" lg="3">
          <side-bar></side-bar>
          <b-row class="mt-3">
            <b-col>
              <filter-bar />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="12" lg="6"  class="overflow-auto mb-5" style="height: 86vh;">
          <post-list></post-list>
          <div class="menu-list d-lg-none">
            <mobile-menu-list />
          </div>
        </b-col>
        <b-col cols="3">
          <div class="menu-list d-none d-lg-block">
            <menu-list />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="d-lg-none">
      <mobile-navbar/>
      <b-row>
        <b-col cols="12" sm="12" md="3" lg="3">
          <side-bar></side-bar>
          <b-row class="mt-5">
            <b-col >
             <div class="mt-2 deneme">
               <filter-bar />
               </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="12" lg="6" class="mb-5">
          <post-list></post-list>
          <div class="menu-list d-lg-none">
            <mobile-menu-list />
          </div>
        </b-col>
        <b-col>
          <div class="menu-list d-none d-lg-block">
            <menu-list />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Sidebar from "../components/navs/side-bar/Sidebar";
import PostList from "../components/post/PostList.vue";
import MenuList from "../components/menu/MenuList.vue";
import Navbar from "../components/navs/Navbar";
import FilterBar from "../components/navs/filter-bar/FilterBar.vue";
import MobileMenuList from "../components/menu/MobileMenuList.vue";
import MobileNavbar from "../components/navs/MobileNavbar.vue";
import Vue from "vue";

export default {
  components: {
    "post-list": PostList,
    "menu-list": MenuList,
    "nav-bar": Navbar,
    "side-bar": Sidebar,
    "filter-bar": FilterBar,
    "mobile-menu-list": MobileMenuList,
    "mobile-navbar" : MobileNavbar
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
/* @media (max-width: 768px) {
     .position-fixed {

     }
   }    */

  .test {
    position: fixed;
    background: #e8e6e6;
    z-index: 1034;
    left: 0;
    right: 0;
    top: 0;
  }
</style>