<template>
  <b-container class="bubble-list-container">
    <b-row class="mt-2">
        <b-col cols="4" v-for="bubbleData in bubbles" :key="bubbleData">
            <bubble :filter="bubbleData.filter" />
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
      "bubbles"
  ],
  data() {
    return {
      
    };
  },
};
</script>