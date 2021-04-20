<template>
  <div>
    <b-container>
      <b-row align-v="center">
        <b-col>
          <h1>{{ header }}</h1>
          <b-form-textarea id="textarea" plaintext :value="content"  rows="3" max-rows="6"
          >  </b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>

export default{

    props: ["header", "content"]
};
</script>

<style>
#textarea {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 8px 10px #888888;
  border: 2px solid gray;
  padding: 10px;
  border-bottom-right-radius: 25px;
}
</style>



