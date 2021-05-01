<template>
    
<b-container class="menu-container">
  <b-row >
    <b-col cols="2">  <b-icon :icon="icon" font-scale="1"></b-icon></b-col>
    <b-col cols="10"> {{text}} </b-col>
  </b-row>
</b-container>

</template>

<script>
export default{
    props: ["icon", "text"]
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.menu-container{
    background-color:white;
    border: 2px solid white;
    border-radius: 25px;
     transition: box-shadow .1;
     font-family:'Josefin Sans', sans-serif;
     font-size: 23px;
     width: 190px !important;
     margin-top: 25px;

}
.menu-container:hover{
     box-shadow: 0px 5px 5px skyblue;
     transition: box-shadow .3;
    
} 
</style>
