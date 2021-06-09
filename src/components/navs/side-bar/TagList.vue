<template>
  <b-container>
    <b-form-tag
      v-for="tag in tags"
      :no-remove="true"
      :key="tag.id"
      variant="danger"
      class="m-1"
      style="font-size: 0.8rem; cursor: pointer"
      >
      <b-container @click="onClickTag(tag)">
      {{ tag.trDesc }}
      </b-container>
    </b-form-tag>
  </b-container>
</template>
<script>
import { FETCH_TAG, ADD_SELECTED_TAG, REMOVE_TAG} from "../../../store/tag/actions.type";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["tags", "selectedTag"]),
  },
  methods: {
    getTags() {
      this.$store.dispatch(FETCH_TAG);
    },
    onClickTag(data) {
      this.$store.dispatch(ADD_SELECTED_TAG, data);
      this.$store.dispatch(REMOVE_TAG, data);     
    },
  },
  created() {
    this.getTags();
  },
};
</script>