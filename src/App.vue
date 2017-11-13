<template>
  <div id="app">
    <router-link :to="{ name: 'hello', params: { id: '1' } }">HelloWorld</router-link>
    <router-link :to="{ name: 'hello', params: { id: '2' } }">Other</router-link>
    <div class="body">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.body > div {
  width: 75em; 
  display: inline-block;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
