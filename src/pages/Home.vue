<template>
  <div class="app" v-bind:style="{ backgroundColor: color }">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <nav-bar />
        </b-col>
      </b-row>
      <b-row>
        <b-col> </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <side-bar> </side-bar>
        </b-col>
        <b-col cols="6">
          <post-list></post-list>
        </b-col>

        <b-col cols="3"><menu-list></menu-list> </b-col>
      </b-row>
    </b-container>

    <div></div>
    <!-- <h1>Arkaplan rengi</h1>
        <div class="color">
          <input ///TEST
            type="text"
            v-bind:style="{ color: color }"
            v-model="color"
            maxlength="7"
            placeholder="#000000"
          />
          <input type="color" v-model="color" />
        </div> -->
  </div>
</template>

<script>
import Sidebar from "../components/navs/Sidebar.vue";
import PostList from "../components/PostList.vue";
import MenuList from "../components/menu/MenuList.vue";
import Navbar from "../components/navs/Navbar";
import Vue from "vue";

export default {
  components: {
    "post-list": PostList,
    "menu-list": MenuList,
    "nav-bar": Navbar,
    "side-bar": Sidebar,
  },
  name: "Home Tet",
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
/* h1{
  margin-top: 80px;
  font-size: 15px;
  font-family:'Josefin Sans', sans-serif;
  margin-left: 15px;
}
input {
  font-size: 1rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 28px; 
  margin-right: 10px;
  
}
input[type="color"] {
  width: 30px;
  border: 1px solid black;
  padding: 0px !important;
  height: 30px;
 
 
} */
</style>