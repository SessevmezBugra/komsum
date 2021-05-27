<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form-tag
          v-for="selectedArea in selectedAreas"
          @remove="remove()"
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
export default {
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters(["selectedAreas"]),
  },
  methods: {
      remove(selectedArea) {
          console.log("Silme");
          this.selectedAreas.splice(selectedArea, 1);
      }
       

    },

};
</script>




<style scoped>
</style>