<template>
  <b-container>
    <b-form-tag
      v-for="tag in selectedTags"
      @remove="remove(tag)"
      :key="tag.id"
      :title="tag.trDesc"
      variant="danger"
      class="m-1"
      style="font-size: 0.8rem; cursor: pointer"
      >{{ tag.trDesc }}
    </b-form-tag>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import {  REMOVE_SELECTED_TAG,ADD_TAG } from '../../../store/tag/actions.type';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedTags"]),
  },
  methods: {
    remove(selectedTag) {
      this.$store.dispatch(REMOVE_SELECTED_TAG, selectedTag); 
      this.$store.dispatch(ADD_TAG, selectedTag);     
    },
    
  },
};
</script>