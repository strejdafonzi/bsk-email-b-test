import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'

import { currentLanguage, translations, setLanguage, languages } from './lang'
import StyleGuide from './components/StyleGuide.vue'
import Home from './Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/styles', name: 'Styles', component: StyleGuide },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.provide('translations', translations)
app.provide('currentLanguage', currentLanguage)
app.provide('setLanguage', setLanguage)
app.provide('languages', languages)

app.mount('#app')



/** scroll event listener
 *
 *  This event listener is carefully listening for any scrolling sounds, even the tiniest flick of the scrolling wheel.
 *  Once you are foolins enough to scroll - it's already too late! The listener now knows what you did and he will report this to the console.
 *  Needed for the logo scrolling effect on logo image on the homepage.
 *
 */

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
