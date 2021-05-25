<template>
  <b-modal id="modal-1" title="Komşuma haber ver:" ok-only>
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
import Vue from "vue";
import { FETCH_POST } from '../../store/actions.type';

export default {
  props: ["addPostBus"],
  data() {
    return {
      postContent: null,
    };
  },
  methods: {
    addPost() {
      console.log(this.postContent);
      this.$bvModal.hide("modal-1");
      var newPost = {
        createdAt: new Date(),
        username: "Hilal",
        content: this.postContent,
      };
      Vue.axios
        .post("http://46.101.87.81:4000/post", newPost)
        .then(() => {
          this.$store.dispatch(FETCH_POST);

        });
      this.postContent = null;
    },
    showPost() {
      this.$bvModal.show("modal-1");
    },
  },
};
</script>
