export const incrementCounter = ({commit}, payload) => { commit('INCREMENT_COUNTER', payload) }
export const decrementCounter = ({commit}, payload) => { commit('DECREMENT_COUNTER', payload) }
export const rollbackCounterOneStep = ({commit}) => { commit('ROLLBACK_COUNTER_ONE_STEP') }
