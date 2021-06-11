<template>

  <b-container fluid class="mt-3">
      <filter-bar/>
    <b-row>
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
import { FETCH_POST } from '../../store/post/actions.type';
import FilterBar from '../navs/filter-bar/FilterBar.vue';


export default {
  components: {
    "post" : Post,
    "filter-bar" : FilterBar

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