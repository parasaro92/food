import Vue from 'vue'
import Router from 'vue-router'
import Interview from './components/interview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'algo',
      component: Interview
    }
  ]
})