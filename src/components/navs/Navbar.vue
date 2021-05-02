<template>
<div>
  <b-navbar class="" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Komşum</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
            <div class="search-icon">
                 <b-icon-search></b-icon-search>
            </div>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form> -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          <b-dropdown-item href="#">   <router-link to="/login">Login</router-link></b-dropdown-item>
          <b-dropdown-item href="#">  <router-link to="/register">Register</router-link></b-dropdown-item>

          
         
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style>

.search-icon {
        background-color: white;
    padding: 3px;
    height: 2rem;
    border-radius: 5px 2px 3px;
}

</style>