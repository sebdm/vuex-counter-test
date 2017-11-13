import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      props: true,
      redirect: { name: 'hello', params: { id: 1 } }
    },
    {
      path: '/:id',
      name: 'hello',
      props: true,
      component: () => import('@/components/HelloWorld')
    }]
})
