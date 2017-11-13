<template>
  <div class="hello">
    <p>{{ counter }}</p>
    <input type="number" v-model.number="incrementBy" />
    <button @click="incrementCounter({ amount: incrementBy })">Increment</button>
    <button @click="decrementCounter({ amount: incrementBy })">Decrement</button>
    <button @click="rollbackCounterOneStep()">Rollback one step</button>
    <p>{{ counterHistory }}</p>
    <Other :counter="counter" :counterHistory="counterHistory" />
  </div> 
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import Other from '@/components/Other'

export default {
  props: {
    id: {
      required: true
    }
  },
  name: 'HelloWorld',
  data () {
    return {}
  },
  computed: {
    // ...mapState(['counter', 'counterHistory']),
    counter () {
      return this.$store.getters[`counter${this.id}/counter`]
    },
    counterHistory () {
      return this.$store.getters[`counter${this.id}/counterHistory`]
    },
    incrementBy: {
      get () {
        return this.$store.state.incrementBy
      },
      set (value) {
        return this.$store.commit('SET_INCREMENT_BY', { value })
      }
    }
  },
  methods: {
    // ...mapActions([
    //   'incrementCounter',
    //   'decrementCounter',
    //   'rollbackCounterOneStep'
    // ])
    incrementCounter (payload) {
      this.$store.dispatch(`counter${this.id}/incrementCounter`, payload)
    },
    decrementCounter (payload) {
      this.$store.dispatch(`counter${this.id}/decrementCounter`, payload)
    },
    rollbackCounterOneStep (payload) {
      this.$store.dispatch(`counter${this.id}/rollbackCounterOneStep`, payload)
    }
  },
  components: { Other },
  watch: {
    id () {
      if (this.$store.state.counter.counters.find(id => id === this.id)) {
        return
      }

      this.$store.commit('counter/ADD_COUNTER', { id: this.id })
    }
  },
  created () {
    if (this.$store.state.counter.counters.find(id => id === this.id)) {
      return
    }

    this.$store.commit('counter/ADD_COUNTER', { id: this.id })
  }
  // destroyed () {
  //   this.$store.commit('REMOVE_COUNTER', { id: this.id })
  // }
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
