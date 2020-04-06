<template>
<!-- eslint-disable -->
  <div class="parent">
    <div class="child">
       <b-card no-body>
          <b-card-body>
            <b-form @submit="onSubmit">
         <h1 class="text-center">Login</h1>
         <p class="text-center">Sign In to your account</p>
         <b-row>
          <b-col cols="12">
            <b-input-group class="mb-4">
            <b-form-input 
              type="email" 
              class="form-control" 
              placeholder="Enter email" 
              autocomplete="email" 
              v-model="formData.email"  />
            </b-input-group>
          </b-col>
          <b-col cols="12">
           <b-input-group class="mb-4">
            <b-form-input 
              type="password" 
              class="form-control" 
              placeholder="Enter password"
              autocomplete="password" 
              v-model="formData.password"  />
            </b-input-group>
          </b-col>
         </b-row>
         <b-row>
           <b-col cols="6" class="text-left">
             <b-button type="submit" variant="dark" class="px-3">Login</b-button>
           </b-col>
           <b-col cols="6" class="text-right">
              <b-button href="/signup" variant="link" class="px-0">Not Have Account?</b-button>
           </b-col>
         </b-row>
       </b-form>
          </b-card-body>
        </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  computed: mapGetters(['getError']),
  methods: {
    ...mapActions(['login']),
    onSubmit: function (event) {
      event.preventDefault()
      this.login(this.formData)
    }
  }

}
</script>
<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
