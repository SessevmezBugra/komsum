<template>
  <b-container class="bubble-list-container">
    <b-row class="mt-2">
        <b-col cols="4" v-for="bubbleData in bubbles" :key="bubbleData.filter">
            <bubble :bubbleBus="bubbleListBus" :areaType="bubbleData.areaType"  :filter="bubbleData.filter" :filterId="bubbleData.filterId" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Bubble from "./Bubble";
export default {
  components: {
    bubble: Bubble,
  },
  props: [
      "bubbles",
      "bubbleListBus"
  ],
  data() {
    return {
      
    };
  },
  methods: {
      
  }
};
</script>