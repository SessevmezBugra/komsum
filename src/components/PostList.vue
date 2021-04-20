<template>
    <b-container>
        <b-row class="p-3">
            <b-col cols="12">
      <b-card bg-variant="dark" text-variant="white" :title="index.header" v-for="index in data" :key="index" class="mt-4">
  <b-card-text>
     {{index.content}}
  </b-card-text>
  
</b-card>
</b-col>
</b-row>
  </b-container>
</template>

<script>

export default {
    data() {
        return {
            data: [
                {
                    header : "test 1",
                    content: "Deneme 1"
                },
                   {
                    header : "test 2",
                    content: "Deneme 2"
                },
                   {
                    header : "test 3",
                    content: "Deneme 3"
                },
                   {
                    header : "test 4",
                    content: "Deneme 4"
                }
                
            ]
        }
        
    },
}
</script>

<style scoped>

</style>