<template>
  <b-container fluid class="overflow-auto mb-5" style="height: 86vh;">
    <b-row>
      <b-col>
        <post
          class="p-2 mt-3"
          avatar="person-circle"
          v-for="postData in fillPosts"
          :key="postData.avatar"
          :userName="postData.username"
          :content="postData.content"
          :date="postData.date"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Post from "./Post.vue";
import { mapGetters } from "vuex";
import { FETCH_POST } from "../../store/post/actions.type";

export default {
  components: {
    post: Post
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["posts"]),
    fillPosts() {
      var postListData = [];
      for (var data of this.posts) {
        postListData.push({
          username: data.username,
          content: data.content,
          date: data.createdAt,
        });
      }
      return postListData;
    },
  },
  methods: {
    getPosts() {
      this.$store.dispatch(FETCH_POST);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
</style>