<template>
  <b-container fluid>
    <b-row class="p-3">
      <b-col>
        <b-row v-for="postData in data" :key="postData" class="mt-2">
          <b-container fluid>
            <post :header="postData.header" :content="postData.content" />
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    post: Post,
  },
  data() {
    return {
      data: [
        {
          header: "test 1",
          content: "Deneme 1",
        },
        {
          header: "test 2",
          content: "Deneme 2",
        },
        {
          header: "test 3",
          content: "Deneme 3",
        },
        {
          header: "test 4",
          content: "Deneme 4",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>