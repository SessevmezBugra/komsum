<template>
  <div>
    <div class="bubble-container">
      <div>
      <bubble/>
    </div>
    </div>
  <b-container fluid>
    <b-row class="p-3">
      <b-col>
        <b-row v-for="postData in data" :key="postData.avatar" class="mt-2">
          <b-container fluid>
            <post :avatar="postData.avatar" :name="postData.name" :date="postData.date"/>
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import Post from "./Post.vue";
import Bubble from "./Bubble.vue";

export default {
  components: {
    "post" : Post,
    "bubble" : Bubble
  },
  data() {
    return {
      data: [
        {
          avatar: "person-circle",
          name: "Deneme 1",
          date: "21.01.1995"
        },
        {
          avatar: "person-circle",
          name: "Deneme 2",
          date: "21.01.1995"
        },
        {
          avatar: "person-circle",
          name: "Deneme 3",
          date: "21.01.1995"
        },
        {
          avatar: "person-circle",
          name: "Deneme 4",
          date: "21.01.1995"
        },
       
      ],
    };
  },
};
</script>

<style scoped>

.bubble-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>