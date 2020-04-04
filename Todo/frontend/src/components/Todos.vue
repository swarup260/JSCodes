<template>
  <div>
    <h1>All Todo</h1>
    <br />
    <b-card-group v-for="todo in AllTodos" :key="todo._id">
      <b-card>
        <b-card-text>{{todo.taskName}}</b-card-text>
        <b-button v-b-modal.modal-1>Update</b-button>
        <b-button @click="deleteTodo(todo._id)">Delete</b-button>
      </b-card>
      <b-modal id="modal-1" title="Update Todo!" hide-footer>
        {{todo.taskName}}
    </b-modal>
    </b-card-group>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      todos: []
    }
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    deleteT (_id) {
      console.log(_id)
    }
  },
  computed: mapGetters(['AllTodos']),
  created () {
    this.fetchTodos()
  }
}
</script>
