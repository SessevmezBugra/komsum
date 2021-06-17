<template>
  <b-modal :id="id" title="Komşuma haber ver:" ok-only>
    <b-form-textarea
      id="textarea"
      v-model="postContent"
      placeholder="Bir şeyler yaz"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <template #modal-footer>
      <div class="w-100">
        <b-button
          @click="addPost"
          variant="outline-success"
          size="m"
          class="float-right"
        >
          Gönder
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>

import { ADD_POST, FETCH_POST  } from '../../store/post/actions.type';




export default {
  props: ["addPostBus", "id"],
  data() {
    return {
      postContent: null,
    };
  },
  methods: {
    async addPost() {
      console.log(this.postContent);
      this.$bvModal.hide("id");
      var newPost = {
        createdAt: new Date(),
        username: "Hilal",
        content: this.postContent,
      };
      await this.$store.dispatch(ADD_POST, newPost);
      this.postContent = null;

      this.$store.dispatch(FETCH_POST);
  
    },
    showPost() {
      this.$bvModal.show(this.id);
    },
  }
};
</script>
