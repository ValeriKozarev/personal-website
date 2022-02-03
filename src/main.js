import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageAbout from '@/components/PageAbout'
import PagePortfolio from '@/components/PagePortfolio'

// define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/about',
    name: 'About',
    component: PageAbout
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PagePortfolio
  }
]

// instantiate router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// create our Vue instance and link it with the router
const app = createApp(App)
app.use(router)
app.mount('#app')
