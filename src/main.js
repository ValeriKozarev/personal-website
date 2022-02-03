import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageAbout from '@/components/PageAbout'
import PagePortfolio from '@/components/PagePortfolio'

// define routes
const routes = [
  { path: '/', component: PageHome },
  { path: '/about', component: PageAbout },
  { path: '/portfolio', component: PagePortfolio }
]

// instantiate router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})

// create our Vue instance and link it with the router
const app = createApp(App)
app.use(router)
app.mount('#app')
