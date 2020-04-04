<template>
  <div>
    <b-form inline @submit="onSubmit">
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        v-model="formData.taskName"
        placeholder="Enter Todo"
      ></b-input>
      <b-form-datepicker id="example-datepicker" v-model="formData.deadline" class="mb-2"></b-form-datepicker>
      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.status"
        name="checkbox-1"
        unchecked-value="not_accepted"
      ></b-form-checkbox>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        taskName: '',
        status: false,
        deadline: Date.now(),
        isComplete: false
      }
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit: function (event) {
      event.preventDefault()
      this.addTodo(this.formData)
    }
  }
}
</script>
