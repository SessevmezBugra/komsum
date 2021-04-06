<template>

    <div>
          <b-button variant="danger">Button</b-button>

      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
    export default {
        name: "Home",
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