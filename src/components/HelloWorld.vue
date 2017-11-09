<template>
  <div class="hello">
    <p>{{ counter }}</p>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCounter({ amount: incrementBy })">Increment</button>
    <button @click="decrementCounter({ amount: incrementBy })">Decrement</button>
    <button @click="rollbackCounterOneStep()">Rollback one step</button>
    <p>{{ counterHistory }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['counter', 'counterHistory']),
    incrementBy: {
      get () {
        return this.$store.state.incrementBy
      },
      set (value) {
        return this.$store.commit('setIncrementBy', {value})
      }
    }
  },
  methods: {
    ...mapActions([
      'incrementCounter',
      'decrementCounter',
      'rollbackCounterOneStep'
    ])
  },
  components: {}
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
