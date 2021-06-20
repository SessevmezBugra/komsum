<template>
    <b-navbar  variant="secondary" id="navbar" fixed="top">
    <b-icon
      icon="filter"
      font-scale="2"
      v-b-toggle.sidebar-1
      variant="light"
    ></b-icon>
    <b-navbar-brand href="#">Komsum</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
 methods : {
   deneme() {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-56px";
        }
        prevScrollpos = currentScrollPos;
      };
      
    },
  },
  created()  {
    this.deneme();
  }
};
</script>

<style scoped>
#navbar {

  transition: top 0.3s;

}


</style>