import axios from 'axios'
import api from '../../_api'
import router from '../../router'

const state = {
  userData: '',
  error: {}
}

const getters = {
  getUserData: state => state.userData,
  getError: state => state.error
}

const mutations = {
  setUserData: (state, data) => {
    state.userData = data
    localStorage.setItem('userData', JSON.stringify(data))
    /* Set Axios Header */
    axios.defaults.headers.common.Authorization = `Bearer ${data.data}`
  },
  setError: (state, error) => (state.error = error)
}

const actions = {
  async login ({ commit }, formData) {
    try {
      const result = await axios.post(api.getEndpoint(api.apiEndpoint.LOGIN), formData)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setUserData', result.data)
        router.push('/home')
      }
      if (result.status === 400) {
        commit('setError', result.data)
      }
    } catch (error) {
      commit('setError', { status: false, message: error.message })
    }
  },
  async signup ({ commit }, formData) {
    try {
      const result = await axios.post(api.getEndpoint(api.apiEndpoint.REGISTER), formData)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setUserData', result.data)
        router.push('/home')
      }
      if (result.status === 400) {
        commit('setError', result.data)
      }
    } catch (error) {
      commit('setError', { status: false, message: error.message })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
