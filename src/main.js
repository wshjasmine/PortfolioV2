import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Splide from '@splidejs/splide';

const app = createApp(App)
app.use(VueSmoothScroll)
app.mount('#app')
new Splide( '.splide' ).mount();