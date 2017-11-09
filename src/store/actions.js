export const incrementCounter = ({commit}, payload) => { commit('incrementCounter', payload) }
export const decrementCounter = ({commit}, payload) => { commit('decrementCounter', payload) }
export const rollbackCounterOneStep = ({commit}) => { commit('rollbackCounterOneStep') }
