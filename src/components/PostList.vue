<template>

  <b-container fluid>
    <b-row class="p-3">
      <b-col>
        <b-row v-for="postData in  postListData" :key="postData.avatar" class="mt-2">
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
import Vue from "vue";


export default {
  components: {
    "post" : Post,

  },
  data() {
    return {
      postListData:[]    
    };
  },
   methods: {
    getPosts() {
      Vue.axios.get("http://46.101.87.81:4000/post").then((response) => {
        for(var data of response.data) {
          this.postListData.push({
            username:data.username,
             content: data.content, 
             date: data.createdAt
          });
        }
        console.log(this.postListData);
      });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>


</style>