import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')


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