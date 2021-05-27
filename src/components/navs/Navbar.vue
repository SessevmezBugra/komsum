<template>
  <div>
    <b-navbar class="" toggleable="lg" variant="secondary">
      <b-icon
        icon="filter"
        font-scale="2"
        v-b-toggle.sidebar-1
        variant="light"
      ></b-icon>
      <b-navbar-brand href="#" @click="denemeData()">Komşum</b-navbar-brand>
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
       
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ["selectedBubbles"],
  data() {
    return {};
  },

  methods: {
    denemeData() {},
  },
};
</script>

<style>
.search-icon {
  background-color: white;
  padding: 3px;
  height: 2rem;
  border-radius: 5px 2px 3px;
}
</style>