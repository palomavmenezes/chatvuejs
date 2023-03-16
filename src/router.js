import Vue from 'vue'
import Router from 'vue-router'
import loginAdmin from './views/LoginAdmin.vue'
import ChatDashboard from './views/ChatDashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginAdmin
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatDashboard,
    }
  ]
})