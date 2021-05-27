<template>
  <b-container>
    <b-sidebar id="sidebar-1" title="komsum" width="370px" shadow>
      <bubble-list :bubbleListBus="bus" class="bubbles" :bubbles="fillBubbles">
      </bubble-list>
    </b-sidebar>
  </b-container>
</template>

<script>
import BubbleList from "../bubble/BubbleList";
import Vue from "vue";
import {
  ADD_SELECTED_AREA,
  FETCH_CITY,
  FETCH_DISTRICT,
  FETCH_NEIGHBORHOOD,
  FETCH_STREET,
} from "../../store/actions.type";
import { mapGetters } from "vuex";

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
      bubbleType: null,
    };
  },
  computed: {
    fillBubbles() {
      var bubblesData = [];
      if (this.bubbleType == "CITY") {
        for (var city of this.cities) {
          bubblesData.push({
            filter: city.name,
            filterId: city.id,
            areaType: "CITY",
          });
        }
      } else if (this.bubbleType == "DISTRICT") {
        for (var district of this.districts) {
          bubblesData.push({
            filter: district.name,
            filterId: district.id,
            areaType: "DISTRICT",
          });
        }
      } else if (this.bubbleType == "NEIGHBORHOOD") {
        for (var neighborhood of this.neighborhoods) {
          bubblesData.push({
            filter: neighborhood.name,
            filterId: neighborhood.id,
            areaType: "NEIGHBORHOOD",
          });
        }
      } else if (this.bubbleType == "STREET") {
        for (var street of this.streets) {
          bubblesData.push({
            filter: street.name,
            filterId: street.id,
            areaType: "STREET",
          });
        }
      }

      return bubblesData;
    },
    ...mapGetters(["cities", "districts", "neighborhoods", "streets"]),
  },
  methods: {
    getCities() {
      this.bubbleType = "CITY";
      this.$store.dispatch(FETCH_CITY);
    },
    getDistrictByCityId(cityId) {
      this.bubbleType = "DISTRICT";
      this.$store.dispatch(FETCH_DISTRICT, cityId);
    },
    getNeighborhoodsByDistrictId(districtId) {
      this.bubbleType = "NEIGHBORHOOD";
      this.$store.dispatch(FETCH_NEIGHBORHOOD, districtId);
    },
    getStreetsByNeighborhoodId(neighborhoodId) {
      this.bubbleType = "STREET";
      this.$store.dispatch(FETCH_STREET, neighborhoodId);
    },

    onClickChild(data) {
      this.$store.dispatch(ADD_SELECTED_AREA, data);
      this.bubblesData = [];
      if (data.areaType == "CITY") {
        this.getDistrictByCityId(data.filterId);
      } else if (data.areaType == "DISTRICT") {
        this.getNeighborhoodsByDistrictId(data.filterId);
      } else if (data.areaType == "NEIGHBORHOOD") {
        this.getStreetsByNeighborhoodId(data.filterId);
      } else {
        this.bubbleType = "EMPTY";
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