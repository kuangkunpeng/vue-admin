
// initial state
const state = {
  login:false
}

// getters
const getters = {
  getLogin: state => state.login
}

// actions
const actions = {
  loginSuccess ({ commit }) {
    commit('loginSuccess');
  }
}

// mutations
const mutations = {
  loginSuccess(state){
     state.login=true;
     alert(1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}