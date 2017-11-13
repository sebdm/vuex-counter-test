export const INCREMENT_COUNTER = (state, payload = { amount: 1 }) => {
  state.counter = state.counter == null ? 0 : state.counter
  state.counterHistory.push(state.counter)
  state.counter += payload.amount
}

export const DECREMENT_COUNTER = (state, payload = { amount: 1 }) => {
  state.counter = state.counter == null ? 0 : state.counter
  state.counterHistory.push(state.counter)
  state.counter -= payload.amount
}

export const ROLLBACK_COUNTER_ONE_STEP = (state) => {
  if (state.counterHistory.length < 1) {
    return
  }

  state.counter = state.counterHistory[state.counterHistory.length - 1]
  state.counterHistory.splice(-1)
}
