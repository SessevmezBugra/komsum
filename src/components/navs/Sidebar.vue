<template>
  <b-container>
    <b-sidebar id="sidebar-1" title="komsum" width="370px" shadow>
      <bubble-list :bubbleListBus="bus" class="bubbles" :bubbles="bubblesData">
      </bubble-list>
    </b-sidebar>
  </b-container>
</template>

<script>
import BubbleList from "../bubble/BubbleList";
import Vue from "vue";

export default {
  components: {
    "bubble-list": BubbleList,
  },
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




<style  scoped>
</style>