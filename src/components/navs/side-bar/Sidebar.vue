<template>
  <b-container>
    <b-sidebar id="sidebar-1" title="komsum" width="370px" shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Konum" active>
          <geography-list></geography-list>
        </b-tab>
        <b-tab title="Basliklar">
          <tag-list></tag-list>
        </b-tab>
      </b-tabs>
    </b-sidebar>
  </b-container>
</template>

<script>

import GeographyList from './GeographyList.vue';
import TagList from './TagList.vue';

export default {
  components: {
    GeographyList,
    TagList
  },
  data() {
    return {
     
    };
  },
  computed: {
    
  },

  methods: {
    
  },
  mounted() {
  },
  created() {
  },
};
</script>




<style  scoped>
</style>