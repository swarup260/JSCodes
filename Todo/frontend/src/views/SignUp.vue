<template>
    <!-- eslint-disable -->
    <b-container class="bv-example-row my-4 align-self-center">
        <b-row align-h="center">
            <b-col  align-v="center" cols="6">
                <b-card no-body class="p-4">
                    <b-card-body>
                        <b-form @submit="onSubmit">
                            <h1 class="text-center">Sign Up</h1>
                            <p class="text-center">Sign Up to your account</p>
                            <b-input-group class="mb-3">
                                <b-form-input type="text" class="form-control" placeholder="Enter username" autocomplete="username" v-model="formData.username"  />
                            </b-input-group>
                            <b-input-group class="mb-3">
                                <b-form-input type="text" class="form-control" placeholder="Enter email" autocomplete="username" v-model="formData.email"  />
                            </b-input-group>
                            <b-input-group class="mb-3">
                                <b-form-input type="text" class="form-control" placeholder="Enter password" autocomplete="username" v-model="formData.password"  />
                            </b-input-group>
                            <b-row>
                                <b-col cols="6" class="text-left">
                                    <b-button variant="dark" class="px-3">SignUp</b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
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
