import axios from 'axios'
import api from '../../_api'
import router from '../../router'

const state = {
  userData: ''
}

const getters = {
  getUserData: state => state.userData
}

const mutations = {
  setUserData: (state, data) => {
    state.userData = data
    localStorage.setItem('userData', JSON.stringify(data))
    /* Set Axios Header */
    axios.defaults.headers.common.Authorization = `Bearer ${data.data}`
  }
}

const actions = {
  async login ({ commit }, formData) {
    try {
      const result = await axios.post(api.getEndpoint(api.apiEndpoint.LOGIN), formData)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setUserData', result.data)
        router.push('/home')
      }
    } catch (error) {

    }
  },
  async signup ({ commit }, formData) {
    try {
      const result = await axios.post(api.getEndpoint(api.apiEndpoint.REGISTER), formData)
      if (result.status === 200 && result.statusText === 'OK') {
        commit('setUserData', result.data)
        router.push('/home')
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
