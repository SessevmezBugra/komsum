<template>
  <div class="app"  v-bind:style="{ backgroundColor: color}">
    <b-container fluid>
      <b-row>
        <b-col>
          <router-link to="/register">Register</router-link> |
          <router-link to="/login">Login</router-link> 
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">SOL</b-col>
        <b-col cols="6">
            <post-list></post-list>
        </b-col>
        <b-col cols="3">SAĞ</b-col>
      </b-row>
    </b-container>
    <div>
      <div >
<h1>Arkaplan rengi</h1>
  <div class="color">
<input type="text" v-bind:style="{ color: color}" v-model="color" maxlength="7" placeholder="#000000"/>
  <input type="color" v-model="color"/>
    </div>
</div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
     components: {
    "post-list": PostList,
  },
  name: "Home Tet",
  data() {
    return {
      selectedItem: null,
      color: {color: ''}
    };
  },
  methods: {},
};
</script>

<style>
#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    padding: 1rem 1rem;
    font-size: 2rem;
    border: 0;
    border-radius: 3px;
    background: #fff;
  }
  
}



input[type="color"]{
  width:40px;
  border:1px solid black;
  margin:0px;
  padding:0px !important;
  height:40px;
}


</style>