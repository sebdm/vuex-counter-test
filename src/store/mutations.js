export const incrementCounter = (state, payload = { amount: 1 }) => {
  state.counter = state.counter == null ? 0 : state.counter
  state.counterHistory.push(state.counter)
  state.counter += payload.amount
}

export const decrementCounter = (state, payload = { amount: 1 }) => {
  state.counter = state.counter == null ? 0 : state.counter
  state.counterHistory.push(state.counter)
  state.counter -= payload.amount
}

export const rollbackCounterOneStep = (state) => {
  if (state.counterHistory.length < 1) {
    return
  }

  state.counter = state.counterHistory[state.counterHistory.length - 1]
  state.counterHistory.splice(-1)
}

export const setIncrementBy = (state, {value}) => {
  state.incrementBy = value
}
