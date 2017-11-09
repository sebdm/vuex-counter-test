import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  mutations: mutations,
  state: {
    counter: 0,
    counterHistory: [],
    incrementBy: 1
  }
})

if (module.hot) {
  module.hot.accept(['./mutations', './actions', './getters'], () => {
    store.hotUpdate({
      mutations: require('./mutations'),
      actions: require('./actions'),
      getters: require('./getters')
    })
  })
}

export default store
