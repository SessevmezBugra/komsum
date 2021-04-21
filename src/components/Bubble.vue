<template>
  <div>
    <div class="bubble-list">
      <ul>
        <li v-for="filterSearch in filters" :key="filterSearch.city">
          <p>
            <span class="title">{{ filterSearch.city }}. </span>
            <span class="lbl">{{ filterSearch.street }} </span>
            <a href="" class="">
              <b-icon icon="x-circle" class="circle" variant="danger"></b-icon>
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          city: "İstanbul",
          street: "Denizköşkler",
        },
        {
          city: "Ankara",
          street: "Ahmetaga",
        },
        {
          city: "İzmir",
          street: "Mersinli",
        },
      ],
    };
  },
};
</script>


<style scoped>
.bubble-list {
  overflow: hidden;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  float: left;
  margin: 0 10px 10px 0;
}

li > p {
  font: 13px/18px "roboto";
  color: #fff;
  background: #d170db;
  -webkit-border-top-right-radius: 15px;
  -webkit-border-bottom-right-radius: 15px;
  -webkit-border-bottom-left-radius: 15px;
  -webkit-border-top-left-radius: 15px;
  -moz-border-radius-topright: 15px;
  -moz-border-radius-bottomright: 15px;
  -moz-border-radius-bottomleft: 15px;
  -moz-border-radius-topleft: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  display: inline-block;
  *display: inline;
  zoom: 1;
  padding: 5px;
}

li > p > .title {
  font-weight: bold;
  display: inline-block;
}

li > p > .tittle > .lbl {
  padding-left: 8px;
}
</style>


