<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-button variant="danger">Button</b-button>
          <router-link to="/register">Register</router-link> |
          <router-link to="/login">Login</router-link> |
          <router-link to="/post">Post</router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">Taha</b-col>
        <b-col cols="6">
            <post-list></post-list>
        </b-col>
        <b-col cols="3">sessevmez</b-col>
      </b-row>
    </b-container>
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
    };
  },
  methods: {},
};
</script>

<style>
</style>