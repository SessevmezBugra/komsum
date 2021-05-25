<template>

  <b-container fluid>
    <b-row class="p-3">
      <b-col>
        <b-row v-for="postData in fillPosts" :key="postData.avatar" class="mt-2">
          <b-container fluid>
            
            <post avatar="person-circle" :userName="postData.username" :content="postData.content" :date="postData.date"/>
          </b-container>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  
</template>

<script>
import Post from "./Post.vue";
import { mapGetters } from 'vuex';
import { FETCH_POST } from '../../store/actions.type';


export default {
  components: {
    "post" : Post,

  },
  data() {
    return {
         
    };
  },
  computed: {
    ...mapGetters(["posts"]),
    fillPosts() {
      var postListData = []; 
      for(var data of this.posts) {
          postListData.push({
            username:data.username,
             content: data.content, 
             date: data.createdAt
          });
        }
        return postListData;
    }
  },
   methods: {
    getPosts() {
      this.$store.dispatch(FETCH_POST);
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>


</style>