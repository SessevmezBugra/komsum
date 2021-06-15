<template>
  <b-nav tabs justified class="position-fixed fixed-bottom bg-light">
    <b-nav-item class="m-0" @click="iconSelected('A')">
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-icon
            :class="{ active: houseDoor }"
            icon="house-door-fill"
            class="m-0 p-0 icon"
            font-scale="0.9"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item>
    <b-nav-item class="m-0" @click="iconSelected('B')">
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-icon
            :class="{ active: sunGlasses }"
            icon="sunglasses"
            class="m-0 p-0 icon"
            font-scale="0.9"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item>
    <b-nav-item class="m-0" @click="iconSelected('C')">
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-icon
            :class="{ active: bellIcon }"
            icon="bell-fill"
            class="m-0 p-0 icon"
            font-scale="0.9"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item>
    <b-nav-item class="m-0" @click="iconSelected('D')">
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-icon
            :class="{ active: envelopeIcon }"
            icon="envelope-fill"
            class="m-0 p-0 icon"
            font-scale="0.9"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item>
    <!-- <b-nav-item class="m-0">
      <b-row>
        <b-col>
          <b-icon
            icon="person-bounding-box"
            class="m-0 p-0"
            font-scale="0.9"
            variant="danger"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item> -->
    <b-nav-item class="m-0" @click="iconSelected('E')">
      <b-row>
        <b-col>
          <b-icon
            :class="{ active: circleIcon }"
            icon="plus-circle-fill"
            class="m-0 p-0"
            font-scale="0.9"
          ></b-icon>
        </b-col>
      </b-row>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      houseDoor: false,
      sunGlasses: false,
      bellIcon: false,
      envelopeIcon: false,
      circleIcon: false,
    };
  },
  methods: {
    iconSelected(icon) {
      if (icon === "A") {
        this.houseDoor = !this.houseDoor;
        (this.sunGlasses = false),
          (this.bellIcon = false),
          (this.envelopeIcon = false),
          (this.circleIcon = false);
      } else if (icon === "B") {
        this.sunGlasses = !this.sunGlasses;
        (this.houseDoor = false),
          (this.bellIcon = false),
          (this.envelopeIcon = false),
          (this.circleIcon = false);
      } else if (icon === "C") {
        this.bellIcon = !this.bellIcon;
        (this.houseDoor = false),
          (this.sunGlasses = false),
          (this.envelopeIcon = false),
          (this.circleIcon = false);
      } else if (icon === "D") {
        this.envelopeIcon = !this.envelopeIcon;
        (this.houseDoor = false),
          (this.sunGlasses = false),
          (this.bellIcon = false),
          (this.circleIcon = false);
      } else if (icon === "E") {
        this.circleIcon = !this.circleIcon;
        (this.houseDoor = false),
          (this.sunGlasses = false),
          (this.bellIcon = false),
          (this.envelopeIcon = false);
      }
    },
  },
};
</script>

<style scoped>
/*
.nav__link {
  color: #444444;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
  background-color: #eeeeee;
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 18px;
} */
/* @media (max-width: 540px) {
        .nav-link  {
          padding: 0px 0px !important;
        }
   }    */

.active {
  color: rgb(65, 66, 65);
  
}
</style>