<template>
  <div>
    <b-badge class="bubble-badge text-wrap" pill @click="sendToParent" variant="success">
      {{ filter }}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: ["filter", "bubbleBus", "filterId", "areaType"],
  methods: {
    sendToParent() {
      this.bubbleBus.$emit("onClickBubble", {
        filterId: this.filterId,
        areaType: this.areaType,
      });
    },
  },
};
</script>

<style scoped>
.bubble-badge {
  width: 100px !important;
  cursor: pointer;
}
</style>


