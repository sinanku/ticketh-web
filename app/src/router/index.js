import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import Intro from '@/components/intro/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
