// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    key: process.env.GOOGLE_API,
    // Enable more Google Maps libraries here
    libraries: ['places'],
  },
})

Vue.use(Vuetify, {
  iconfont: 'md'
})

import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
