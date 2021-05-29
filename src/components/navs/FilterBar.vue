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
import { REMOVE_SELECTED_AREA } from '../../store/actions.type';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedAreas"]),
  },
  methods: {
    remove(selectedArea) {
      this.$store.dispatch(REMOVE_SELECTED_AREA, selectedArea);
      console.log("Filterbar tıklandı", selectedArea);
    },
  },
};
</script>




<style scoped>
</style>