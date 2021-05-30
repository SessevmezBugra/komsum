<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-tag
          v-for="selectedArea in selectedAreas"
          @remove="remove(selectedArea)"
          :key="selectedArea.filterId"
          :title="selectedArea.filter"
          variant="success"
          class="m-1"
          style="font-size: 0.8rem"
          >{{ selectedArea.filter }}
        </b-form-tag>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import {
  FETCH_CITY,
  REMOVE_SELECTED_AREA,
  UPDATE_SELECTED_AREAS,
  FETCH_DISTRICT,
  FETCH_NEIGHBORHOOD,
  FETCH_STREET,
  UPDATE_BUBBLE_AREAS,
  ADD_SELECTED_AREA,
} from "../../store/actions.type";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "selectedAreas",
      "cities",
      "districts",
      "neighborhoods",
      "streets",
    ]),
  },
  methods: {
    remove(selectedArea) {
      let tmpSelectedAreas = [...this.selectedAreas];

      if (selectedArea.areaType == "CITY") {
        this.getCities();
        for (let index = 0; index < this.selectedAreas.length; index++) {
          const element = this.selectedAreas[index];
          if (element.areaType == "DISTRICT") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== element.filterId
            ); //ES6
          } else if (element.areaType == "NEIGHBORHOOD") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== element.filterId
            ); //ES6
          } else if (element.areaType == "STREET") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== element.filterId
            ); //ES6
          }
        }
      } else if (selectedArea.areaType == "DISTRICT") {
        // this.getDistrictByCityId(this.selectedAreas.find(x => x.this.selectedAreas == ));
        console.log("test",this.selectedAreas);
        for (let el = 0; el < this.selectedAreas.length; el++) {
          const deneme = this.selectedAreas[el];
          if (deneme.areaType == "NEIGHBORHOOD") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== deneme.filterId
            );
          } else if (deneme.areaType == "STREET") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== deneme.filterId
            );
          }
        }
      } else if (selectedArea.areaType == "NEIGHBORHOOD") {
        for (let index = 0; index < this.selectedAreas.length; index++) {
          const element = this.selectedAreas[index];
          if (element.areaType == "STREET") {
            tmpSelectedAreas = tmpSelectedAreas.filter(
              (item) => item.filterId !== element.filterId
            );
          }
        }
      }
      this.$store.dispatch(UPDATE_SELECTED_AREAS, tmpSelectedAreas);
      this.$store.dispatch(REMOVE_SELECTED_AREA, selectedArea);
    },
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
};
</script>




<style scoped>
</style>