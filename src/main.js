import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import 'uno.css'
import './css/vxe-mystyle.scss'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

// import router - which is using in each modules
import router from './router'

// import pinia for vue store
import { createPinia } from 'pinia'

//import i18n & vxeTable
import i18n from './i18n'
import VXETable from 'vxe-table'

VXETable.setup({ i18n: (key, args) => i18n.global.t(key, args)})

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify
  }, // import Quasar plugins and add here
})

myApp.use(router)
myApp.use(createPinia())
myApp.use(VXETable)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
