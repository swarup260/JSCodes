<template>
  <div>
      <b-form @submit="onSubmit">
       <b-form-input
          v-model="formData.username"
          type="text"
          required
          placeholder="Enter email"
        ></b-form-input>
       <b-form-input
          v-model="formData.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
       <b-form-input
          v-model="formData.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['signup']),
    onSubmit: function (event) {
      event.preventDefault()
      this.signup(this.formData)
    }
  }

}
</script>
<style scoped>
</style>
