<template functional>
  <div class="other">
    <p>This is some other view.</p>
    <p>Counter: {{ props.counter }}</p>
    <p>Counter history: {{ props.counterHistory }}</p>
  </div>
</template>

<script>
export default {
  props: ['counter', 'counterHistory'],
  name: 'Other'
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
