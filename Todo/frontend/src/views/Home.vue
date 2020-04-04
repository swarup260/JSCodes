<template>
  <div>
    <b-container>
      <AddTodo />
      <Todos />
    </b-container>
  </div>
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
