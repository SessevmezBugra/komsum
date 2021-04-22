<template>
  <div>
    <b-container >
      <b-row align-v="center"  id="post-component" >
        <b-col class="definition" :avatar="avatar"><b-avatar src="https://placekitten.com/300/300"></b-avatar>
      {{name}}</b-col>   
       <b-col class="date">{{date}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>

export default{

    props: ["avatar", "name", "date"]
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
 #post-component{
  border: 1px solid;
  box-shadow: 5px 5px 5px 5px #c4c7be;
  border: 1px solid rgb(153, 153, 153);
  padding: 10px;
  border-radius: 20px;
}
.date{
  text-align: right;
   padding-bottom: 75px;
  font-family: 'PT Serif', serif;
}
.definition{
   text-align: left;
   padding-bottom: 50px;
   font-family: 'PT Serif', serif;
}
</style>



