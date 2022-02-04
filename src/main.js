import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faPython, faAngular, faCss3Alt, faGitAlt, faAws, faJs, faJava, faNode, faSketch, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageAbout from '@/components/PageAbout'
import PagePortfolio from '@/components/PagePortfolio'

// add icons to library
library.add(faDatabase, faVuejs, faPython, faAngular, faCss3Alt, faGitAlt, faAws, faJs, faJava, faNode, faSketch, faHtml5)

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
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
