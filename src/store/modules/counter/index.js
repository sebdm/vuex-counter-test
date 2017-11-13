const createRegistry = (store) => {
  return {
    namespaced: true,
    state: {
      counters: []
    },
    mutations: {
      ADD_COUNTER (state, { id }) {
        if (state.counters.find((iid) => iid === id)) {
          return
        }

        state.counters.push(id)
        store.registerModule(`counter${id}`, require('./instance').default)
      },
      REMOVE_COUNTER (state, { id }) {
        state.counters.splice(state.counters.indexOf(id), 1)
        store.unregisterModule(`counter${id}`)
      }
    }
  }
}

export default createRegistry
