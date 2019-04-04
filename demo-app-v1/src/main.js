// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import VCalendar from 'v-calendar'

import 'v-calendar/lib/v-calendar.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    key: process.env.GOOGLE_API,
    // Enable more Google Maps libraries here
    libraries: ['places'],
  },
});

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(VCalendar, {
  firstDayOfWeek: 2,
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'DD-MM-YYYY', 'DD/MM/YYYY'],
    dayPopover: 'L',
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
