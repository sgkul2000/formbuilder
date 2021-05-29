import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exportModal: false
  },
  mutations: {
    toggleExportModal (state, value) {
      state.exportModal = value
    }
  },
  actions: {
  },
  getters:{
    showExportModal: state => {
      return state.exportModal
    }
  },
  modules: {
  }
})
