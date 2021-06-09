<template>
  <b-form-tag no-remove variant="success" class="m-1 form-tag" style="font-size: 0.8rem">
    <b-container @click="sendToParent">{{ filter }}</b-container>
  </b-form-tag>
</template>

<script>
export default {
  props: ["filter", "bubbleBus", "filterId", "areaType"],
  methods: {
    sendToParent() {
      this.bubbleBus.$emit("onClickBubble", {
        filterId: this.filterId,
        areaType: this.areaType,
        filter: this.filter,
      });
    },
  },
};
</script>

<style scoped>
.form-tag {
  cursor: pointer;
}
</style>


