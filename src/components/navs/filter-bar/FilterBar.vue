<template>
  <b-container>
    <b-row cols="1">
      <b-col>
        <geography-filter-list></geography-filter-list>
      </b-col>
      <b-col>
        <tag-filter-list></tag-filter-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TagFilterList from "./TagFilterList.vue";
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