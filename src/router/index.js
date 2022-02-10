import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import shoppingCheckout from '../views/shoppingCheckout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/shoppingcheckout/1'

  },
  {
    path: '/shoppingcheckout/1',
    name: 'shopping-cart',
    component: shoppingCheckout
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
