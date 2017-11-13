import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    incrementBy: 1
  },
  mutations: {
    SET_INCREMENT_BY (state, {value}) {
      state.incrementBy = value
    }
  },
  modules: {
  }
})

store.registerModule('counter', require('./modules/counter').default(store))

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
