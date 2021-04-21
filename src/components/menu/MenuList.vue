<template>
  <b-container class="menu-list-container">
      <b-col>
          <b-row class="mt-2" v-for="menuItemData in data" :key="menuItemData.icon" >
            <menu-item :icon="menuItemData.icon" :text="menuItemData.text" />
          </b-row>
      </b-col>
  </b-container>
</template>


<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    "menu-item": MenuItem,
  },
  data() {
    return {
      data: [
        {
          icon: "house-door-fill",
          text: "Anasayfa",
        },
        {
          icon: "sunglasses",
          text: "Keşfet",
        },
        {
          icon: "bell-fill",
          text: "Bildirimler",
        },
        {
          icon: "envelope-fill",
          text: "Mesajlar",
        },
        {
          icon: "person-bounding-box",
          text: "Profil",
        },
        {
          icon: "plus-circle-fill",
          text: "Daha fazla",
        },
      ],
    };
  },
};
</script>


<style>

</style>