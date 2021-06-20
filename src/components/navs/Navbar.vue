<template>
  <b-navbar  variant="secondary" fixed="top">
    <b-icon
      icon="filter"
      font-scale="2"
      v-b-toggle.sidebar-1
      variant="light"
    ></b-icon>
    <b-navbar-brand href="#">Komsum</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  components: {
  },

  props: ["selectedBubbles"],
  data() {
    return {};
  },

  methods: {
    denemeData() {},
  },
};
</script>

<style>
/* .search-icon {
  background-color: white;
  padding: 3px;
  height: 2rem;
  border-radius: 5px 2px 3px;
} */
</style>