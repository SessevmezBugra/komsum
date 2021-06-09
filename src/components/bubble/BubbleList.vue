<template>
  <b-container>
    <b-row class="mt-2">
      <bubble
        v-for="bubbleData in bubbles"
        :bubbleBus="bubbleListBus"
        :areaType="bubbleData.areaType"
        :filter="bubbleData.filter"
        :filterId="bubbleData.filterId"
        :key="bubbleData.filter"
      />
    </b-row>
  </b-container>
</template>
<script>
import Bubble from "./Bubble";
export default {
  components: {
    bubble: Bubble,
  },
  props: ["bubbles", "bubbleListBus"],
  data() {
    return {};
  },
  methods: {},
};
</script>