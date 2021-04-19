<template>
    <div>
          <b-button variant="danger">Button</b-button>

      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/post">Post</router-link>
  </div>
</template>

<script>
    export default {
        name: "Home Tet",
        data() {
            return {
                selectedItem: null
            }
        },
        methods: {
            
        }
    }
</script>

<style>
    
</style>