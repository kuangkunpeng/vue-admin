
// initial state
const state = {
  loading:true
}

// getters
const getters = {
  getLoading: state => state.loading
}

// actions
const actions = {
  changeLoading ({ commit },isloading) {
    commit('changeLoading',isloading);
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
