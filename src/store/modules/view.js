
// initial state
const state = {
  loading:false
}

// getters
const getters = {
  getLoading: state => state.loading
}

// actions
const actions = {
  changeLoading ({ commit },isloading) {
    commit('changeLoading');
  }
}

// mutations
const mutations = {
  changeLoading(state,isloading){
     state.loading=isloading;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
