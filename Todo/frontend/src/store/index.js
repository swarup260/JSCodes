import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    todo
  }
})
