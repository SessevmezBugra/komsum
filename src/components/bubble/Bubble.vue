<template>

    <div class="bubble-container">
      <h3>{{filter}}</h3>
    </div>

</template>

<script>
export default {
  props: ["filter"],
};
</script>

<style scoped>
.bubble-container{
height: 30px;
width: 70px;
 overflow: hidden;
  margin-top: 30px;
  color: rgb(0, 0, 0);
  background:  rgb(250, 250, 250);
  -webkit-border-top-right-radius: 25px;
  -webkit-border-bottom-right-radius: 125x;
  -webkit-border-bottom-left-radius: 25px;
  -webkit-border-top-left-radius: 25px;
  -moz-border-radius-topright: 25px;
  -moz-border-radius-bottomright: 25px;
  -moz-border-radius-bottomleft: 25px;
  -moz-border-radius-topleft: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  display: inline-block;
  padding: 10px;   
  border: 1px solid rgb(231, 231, 231);
  box-shadow: 2px 2px 2px 2px #c4c7be;                                 
}
h3{
  font-size: 12px;
  font-family:'Josefin Sans', sans-serif;
}

</style>


