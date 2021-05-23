<template>
  <b-container class="menu-list-container">
    <b-col>
      <b-row class="mt-2" v-for="menuItemData in data" :key="menuItemData.icon">
        <menu-item
          :icon="menuItemData.icon"
          :text="menuItemData.text"
          :menuKey="menuItemData.menuKey"
          :menuBus="bus"
        />
      </b-row>
      <add-post ref="addPost"></add-post>
    </b-col>
  </b-container>
</template>


<script>
import MenuItem from "./MenuItem";
import Vue from "vue";
import AddPost from "../post/AddPost";

export default {
  components: {
    "menu-item": MenuItem,
    "add-post": AddPost
  },
  data() {
    return {
      bus: new Vue(),
      data: [
        {
          icon: "house-door-fill",
          text: "Anasayfa",
          menuKey: "home-page",
        },
        {
          icon: "sunglasses",
          text: "Keşfet",
          menuKey: "discover",
        },
        {
          icon: "bell-fill",
          text: "Bildirimler",
          menuKey: "notification",
        },
        {
          icon: "envelope-fill",
          text: "Mesajlar",
          menuKey: "message",
        },
        {
          icon: "person-bounding-box",
          text: "Profil",
          menuKey: "profile",
        },
        {
          icon: "plus-circle-fill",
          text: "Daha fazla",
          menuKey: "more-than",
        },
      ],
    };
  },
  mounted() {
    this.bus.$on("onClickMenu", this.onClickMenu);
  },
  methods: {
    onClickMenu(data) {
      var menuKey = data.menuKey;
      if (menuKey == "more-than") {
        this.$refs.addPost.showPost();
      }
    },
  },
};
</script>

<style>
</style>