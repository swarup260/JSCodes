<template>
<!-- eslint-disable -->
  <b-container class="d-flex justify-content-center">
    <div class="position-relative">
      <div class="keep-note title-style" contenteditable="true" id="title">
          <p class="text-left">Title</p>
        </div>
        <div class="keep-note body-style" contenteditable="true" @click="viewEditTask" id="body">
          <p class="text-left">Add a task...</p>
            <button class="close-btn" @click="closeEditTask"><i class="large material-icons icon">close</i></button>
        </div>
    </div>
  </b-container>
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
    },
    viewEditTask: function (event) {
      const titleBox = document.querySelector('div#title')
      const bodyBox = document.querySelector('div#body')
      const closeBtn = document.querySelector('button.close-btn')
      titleBox.style.display = 'block'
      closeBtn.style.display = 'block'
      bodyBox.classList.remove('body-style')
      bodyBox.classList.add('transition-body-style')
    },
    closeEditTask: function (event) {
      console.log('cleck')

      const titleBox = document.querySelector('div#title')
      const bodyBox = document.querySelector('div#body')
      const closeBtn = document.querySelector('button.close-btn')
      titleBox.style.display = 'none'
      closeBtn.style.display = 'none'
      bodyBox.classList.remove('transition-body-style')
      bodyBox.classList.add('body-style')
    }
  }
}
</script>
<style scoped>
.keep-note{
  margin-top: 50px;
  width: 598px;
  height: 46px;
  color: hsl(225, 6%, 13%);
  font-size: 14px;
  gap: normal;
  letter-spacing: 0.2px;
  line-height: 20px;
  padding: 12px 16px;
  border: 1px solid black;
}
.body-style {
  border-radius: 0.5rem;
}

.title-style {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: none;
  display: none;
}

.transition-body-style {
  position: absolute;
  height: 76px;
  top: 30%;
  border-top: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: all 0.15s ease 0s;
}
div:focus {
  outline-style: none;
  outline: none;
}
/* ToolBar */

.close-btn{
  border: none;
  background: none;
  float: right;
  cursor: pointer;
  display: none;
}
</style>
