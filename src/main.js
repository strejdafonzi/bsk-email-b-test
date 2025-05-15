import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { currentLanguage, translations, setLanguage, languages } from './lang';

// Create app instance first
const app = createApp(App);

// Provide injections on the app instance
app.provide('translations', translations);
app.provide('currentLanguage', currentLanguage);
app.provide('setLanguage', setLanguage);
app.provide('languages', languages); // Provide languages array

// Mount app AFTER provide calls
app.mount('#app');


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
