import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Main2 from '@/components/Main2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Main2',
      name: 'Main2',
      component: Main2
    }
  ]
})
