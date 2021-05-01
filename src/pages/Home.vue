<template>
    <div class="app" v-bind:style="{ backgroundColor: color }">
      <b-container fluid>
        <b-row>
          <b-col>
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">
            <bubble-list></bubble-list>
            </b-col>
          <b-col cols="6">
            <post-list></post-list>
          </b-col>
          
          <b-col cols="3"><menu-list></menu-list> </b-col>
        </b-row>
      </b-container>
    
        <div></div>
        <!-- <h1>Arkaplan rengi</h1>
        <div class="color">
          <input
            type="text"
            v-bind:style="{ color: color }"
            v-model="color"
            maxlength="7"
            placeholder="#000000"
          />
          <input type="color" v-model="color" />
        </div> -->
      </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import MenuList from "../components/menu/MenuList.vue";
import BubbleList from "../components//bubble/BubbleList";

export default {
  components: {
    "post-list": PostList,
    "menu-list": MenuList,
    "bubble-list": BubbleList,
  },
  name: "Home Tet",
  data() {
    return {
      selectedItem: null,
      color: { color: "" },
    };
  },
  methods: {},
};
</script>

<style>
/* h1{
  margin-top: 80px;
  font-size: 15px;
  font-family:'Josefin Sans', sans-serif;
  margin-left: 15px;
}
input {
  font-size: 1rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 28px; 
  margin-right: 10px;
  
}
input[type="color"] {
  width: 30px;
  border: 1px solid black;
  padding: 0px !important;
  height: 30px;
 
 
} */

</style>