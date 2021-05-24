<template>
  <b-container @click="sendToParent"  class="menu-container">
    <b-row>
      <!-- <b-col cols="2"> <b-icon :icon="icon" font-scale="1"></b-icon></b-col>
      <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p> -->
      <b-col cols="12"  > <b-icon :icon="icon" font-scale="1"  ></b-icon> {{ text }}  </b-col>
    </b-row>
  </b-container>
</template> 

<script>
export default {
  props: ["icon", "text", "menuKey", "menuBus"],
  methods:{
    sendToParent(){
      this.menuBus.$emit("onClickMenu", { menuKey: this.menuKey } );
    },
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");

.menu-container {
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  transition: box-shadow 0.1;
  font-family: "Josefin Sans", sans-serif;
  font-size: 23px;
  width: 190px !important;
  margin-top: 25px;
  cursor: pointer;
  

      
}
.menu-container:hover {
  box-shadow: 0px 5px 5px skyblue;
  transition: box-shadow 0.3;
}
.b-icon{
  float:left;
  margin-right: 15px;
  margin-top: 3px;
}

</style>
