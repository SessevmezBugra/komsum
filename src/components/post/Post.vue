<template>
<!-- div içeresindeydi değiştirdim -->
    <b-container  fluid  >
        <b-row class="justify-content-md-center" id="post-component">
        <b-col cols="6" sm="6" md="6" lg="6"  class="definition"></b-col>
        <b-col class="definition" cols="12"> <b-avatar class="mr-2" size="2em" src="https://placekitten.com/300/300"></b-avatar>{{ userName }} </b-col>
        <b-col> <p class="content">{{ content }}</p> </b-col>  
        <!-- <b-col class="date">{{ date }}</b-col>  -->
      </b-row>
    </b-container>
</template>


<script>
export default {
  props: ["avatar", "userName", "content", "date"],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

#post-component {
  border: 1px solid;
  box-shadow: 2px 2px 2px 2px #c4c7be;
  border: 1px solid rgb(231, 231, 231);
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}
#post-component:hover {
  background: rgb(250, 250, 250);
  box-shadow: 1px 5px 2px rgb(186, 186, 187);
}
.date {
  text-align: right;
  font-family: "PT Serif", serif;
  margin-bottom: 70px;
}
.definition {
  text-align: left;
  font-family: "PT Serif", serif;
  font-size: 14px;
}
.content {
  text-align: left;
  margin-top: 15px;
  font-size: 15px;
}
</style>



