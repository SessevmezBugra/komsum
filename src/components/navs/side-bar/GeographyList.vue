<template>
  <b-container>
      <bubble-list :bubbleListBus="bus" class="bubbles" :bubbles="bubbleAreas">
      </bubble-list>
  </b-container>
</template>

<script>
import BubbleList from "../../bubble/BubbleList";
import Vue from "vue";
import {
  ADD_SELECTED_AREA,
  FETCH_CITY,
  FETCH_DISTRICT,
  FETCH_NEIGHBORHOOD,
  FETCH_STREET,
  UPDATE_BUBBLE_AREAS,
} from "../../../store/actions.type";
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
      bus: new Vue(),
      bubbleType: null,
    };
  },
  computed: {
    ...mapGetters([
      "cities",
      "districts",
      "neighborhoods",
      "streets",
      "bubbleAreas",
    ]),
  },

  methods: {
    async getCities() {
      await this.$store.dispatch(FETCH_CITY);
      var bubblesData = [];
      for (var city of this.cities) {
        bubblesData.push({
          filter: city.name,
          filterId: city.id,
          areaType: "CITY",
        });
      }
      this.$store.dispatch(UPDATE_BUBBLE_AREAS, bubblesData);
    },
    async getDistrictByCityId(cityId) {
      await this.$store.dispatch(FETCH_DISTRICT, cityId);
      var bubblesData = [];
      for (var district of this.districts) {
        bubblesData.push({
          filter: district.name,
          filterId: district.id,
          areaType: "DISTRICT",
        });
      }
      this.$store.dispatch(UPDATE_BUBBLE_AREAS, bubblesData);
    },
    async getNeighborhoodsByDistrictId(districtId) {
      await this.$store.dispatch(FETCH_NEIGHBORHOOD, districtId);
      var bubblesData = [];
      for (var neighborhood of this.neighborhoods) {
        bubblesData.push({
          filter: neighborhood.name,
          filterId: neighborhood.id,
          areaType: "NEIGHBORHOOD",
        });
      }
      this.$store.dispatch(UPDATE_BUBBLE_AREAS, bubblesData);
    },
    async getStreetsByNeighborhoodId(neighborhoodId) {
      await this.$store.dispatch(FETCH_STREET, neighborhoodId);
      var bubblesData = [];
      for (var street of this.streets) {
        bubblesData.push({
          filter: street.name,
          filterId: street.id,
          areaType: "STREET",
        });
      }
      this.$store.dispatch(UPDATE_BUBBLE_AREAS, bubblesData);
    },
    async onClickChild(data) {
      if (data.areaType == "CITY") {
        await this.getDistrictByCityId(data.filterId);
      } else if (data.areaType == "DISTRICT") {
        await this.getNeighborhoodsByDistrictId(data.filterId);
      } else if (data.areaType == "NEIGHBORHOOD") {
        await this.getStreetsByNeighborhoodId(data.filterId);
      } else {
        this.$store.dispatch(UPDATE_BUBBLE_AREAS, []);
      }
      this.$store.dispatch(ADD_SELECTED_AREA, data);
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