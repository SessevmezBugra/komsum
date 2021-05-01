<template>
<b-container class="bubble-list-container">
      <b-col>
          <b-row class="mt-2" v-for="bubbleData in data" :key="bubbleData" >
            <bubble  :filter="bubbleData.filter"/>
          </b-row>
      </b-col>
  </b-container>
    
</template>
<script>
import Bubble from "./Bubble";
export default {
    components:{
        "bubble":Bubble
    },
    data(){
        return{
            data:[
                {
                 filter:"İstanbul"
                }
            ]
        }
    }
    
}
</script>