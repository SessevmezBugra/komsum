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
import { FETCH_CITY } from "../../store/actions.type";
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
        for (var data of this.cities) {
          bubblesData.push({
            filter: data.name,
            filterId: data.id,
            areaType: "CITY",
          });
        }
      }
      // else if(this.bubbleType == "DISTRICT") {

      // }
      return bubblesData;
    },
    ...mapGetters(["cities"]),
  },
  methods: {
    getCities() {
      this.bubbleType = "CITY";
      this.$store.dispatch(FETCH_CITY);
      // Vue.axios
      //   .get("http://46.101.87.81:4000/geography/city")
      //   .then((response) => {
      //     for (var data of response.data) {
      //       this.bubblesData.push({
      //         filter: data.name,
      //         filterId: data.id,
      //         areaType: "CITY",
      //       });
      //     }
      //   });
    },
    getDistrictByCityId(cityId) {
      this.bubbleType = "DISTRICT";
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
      this.bubbleType = "NEIGHBORHOOD";
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
      this.bubbleType = "STREET";
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