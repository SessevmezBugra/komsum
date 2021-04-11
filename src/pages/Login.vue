<template>
  <b-container fluid style="height: -webkit-fill-available; background-image: url('https://cdn.pixabay.com/photo/2017/02/06/11/49/city-2042634_960_720.png');">
    <b-row style="height: -webkit-fill-available">
      <b-col></b-col>
      <b-col align-self="center">
        <b-card class="card border-primary mb-3" >
          <h2>GİRİŞ SAYFASI</h2>
          <hr />

          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="E-posta Adresi"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="email"
                v-model="form.email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form @submit.stop.prevent>
              <label for="password">Parola</label>
              <b-form-input
                type="password"
                id="password"
                v-model="form.password"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Şifreniz 8-20 karakter uzunluğunda olmalı, harf ve rakam
                içermeli ve boşluk, özel karakter veya emoji içermemelidir.
              </b-form-text>
            </b-form>

            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Beni Hatırla
            </b-form-checkbox>
            <b-button type="submit" variant="primary">Giriş Yap</b-button>
            <p class="text-xs-center">
              <br>
              <router-link to="/register"
                >Bir hesaba mı ihtiyacınız var?</router-link
              >
            </p>
            <p class="text-xs-center">
              <router-link to="/">Parolayı Unuttum</router-link>
            </p>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        submit: [],
        checked: [],
      },

      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      console.log(this.form.email);
      console.log(this.form.password);

      event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.checked = [];

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");

h2 {
  text-align: center;
  font-family: "Roboto", sans-serif;
}
button {
  float: right;
}
</style>