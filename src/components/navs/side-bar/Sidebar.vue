<template>
  <b-sidebar id="sidebar-1" shadow>
    <b-container>
      <filter-bar />
    </b-container>
      <b-tabs content-class="mt-3">
        <b-tab title="Komsum" active>
          <geography-list></geography-list>
        </b-tab>
        <b-tab title="Basliklar">
          <tag-list></tag-list>
        </b-tab>
      </b-tabs>
  </b-sidebar>
</template>

<script>
import FilterBar from "../filter-bar/FilterBar.vue";
import GeographyList from "./GeographyList.vue";
import TagList from "./TagList.vue";

export default {
  components: {
    GeographyList,
    TagList,
    FilterBar,
  },
  data() {
    return {};
  },
  computed: {},

  methods: {},
  mounted() {},
  created() {},
};
</script>




<style  scoped>
</style>