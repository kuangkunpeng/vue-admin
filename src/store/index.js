import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import view from './modules/view'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    login,
    view
  }
})