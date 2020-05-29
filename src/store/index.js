import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchUsers(ctx) {
      try {
        const {data} = await axios('https://api.github.com/users?per_page=20')
        console.log(data)
        ctx.commit('setUsers', data)
      } catch (e) {
        console.log(error.error)
      }
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  state: {
    users: []
  },
  getters: {
    users(state) {
      return state.users
    }
  }
})
