import Vue from 'vue'
import Router from 'vue-router'
import dog from '@/views/dog'
import cat from '@/views/cat'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/dog',
      name: 'dog',
      component: dog
    },
    {
      path: '/cat',
      name: 'cat',
      component: cat
    }
  ]
})
