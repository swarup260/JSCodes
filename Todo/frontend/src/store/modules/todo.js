import axios from 'axios'
import api from '../../_api'

const state = {
  todos: []
}

const getters = {
  AllTodos: state => state.todos
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo._id !== id))
}

const actions = {
  async fetchTodos ({ commit }) {
    try {
      /* Token */
      const userData = JSON.parse(localStorage.getItem('userData'))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.data}`
      /* Fetch All Todo */
      const result = await axios.get(api.getEndpoint(api.apiEndpoint.TODO))
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setTodos', result.data.data)
      }
    } catch (error) {

    }
  },
  async addTodo ({ commit }, formData) {
    try {
      const result = await axios.post(api.getEndpoint(api.apiEndpoint.TODO), formData)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('addTodo', result.data.data)
      }
    } catch (error) {

    }
  },
  async deleteTodo ({ commit }, id) {
    try {
      const result = await axios.delete(api.getEndpoint(`${api.apiEndpoint.TODO}/${id}`))
      if (result.status === 200 && result.statusText === 'OK') {
        console.log('DELETED', id)
        commit('removeTodo', id)
      }
    } catch (error) {

    }
  },
  async updateTodo ({ commit }, data) {
    try {
      const result = await axios.patch(api.getEndpoint(api.apiEndpoint.TODO), data)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setTodos', result.data)
      }
    } catch (error) {

    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
