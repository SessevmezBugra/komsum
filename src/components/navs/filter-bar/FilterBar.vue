<template>
  <b-container>
    <geography-filter-list></geography-filter-list>
    <tag-filter-list></tag-filter-list>
  </b-container>
</template>

<script>
import TagFilterList from './TagFilterList.vue';
import GeographyFilterList from "./GeographyFilterList.vue";

export default {

  components: { GeographyFilterList, TagFilterList },

  data() {
    return {};
  },

  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>