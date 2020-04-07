<template>
<!-- eslint-disable -->
<!-- https://masonry.desandro.com/ CSS GRID -->
<!-- https://scotch.io/tutorials/building-a-google-keep-clone-with-vue-and-firebase-pt-2-->
  <b-container>
    <b-row>
      <b-col cols="12">
          <AddTodo class="my-3" />
      </b-col>
      <b-col cols="12">
          <Todos class="my-4" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo.vue'
import Todos from '@/components/Todos.vue'

export default {
  name: 'Home',
  components: {
    AddTodo,
    Todos
  }
}
</script>
