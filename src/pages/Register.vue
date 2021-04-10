<template>
  <div class="div-body mt-5">
    <b-container fluid="md">
      <b-row class="ml-3">
        <b-col cols="5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mt-5 ml-5">
         <b-form-group id="name" label="İsim:" label-for="name">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
       <b-form-group id="surname" label="Soyisim:" label-for="surname">
        <b-form-input
          id="surname"
          v-model="form.surName"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
       <b-form @submit.stop.prevent>
    <label for="text-password">Şifre</label>
    <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
   </b-form>
      <b-form-group
        id="input-group-1"
        label="Mail Adresi:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="ornek@komsum.com"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Meslek:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
    

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="men">Men</b-form-checkbox>
          <b-form-checkbox value="women">Women</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Kayıt ol</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    </b-col>
    <b-col cols="7" class="mt-5">
      <div class="right-side mt-5">
      </div>
    </b-col>
    </b-row>
</b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          surname: '',
          food: null,
          password : null,
          checked: [],
        },
        foods: [{ text: 'Select One', value: null }, 'Ev Hanımı', 'Ev Adamı', 'Emekli', 'Diğer'],
        show: true,
         options: [
         { text: 'Men', value: 'men' },
          { text: 'Women', value: 'women' },
         ]
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        this.form.password = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


<style scoped>


.div-body  {
 
  background-color: #f2f8f8;
}

.right-side {
  background: url("https://www.hursitekinci.com/wp-content/uploads/2016/05/kom%C5%9Fu-ve-kom%C5%9Fuluk-hakk%C4%B1.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}


</style>