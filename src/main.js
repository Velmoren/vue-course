import Vue from 'vue'
import App from './App'
import Car from "./Car";

Vue.component('app-car', Car)

new Vue({
  el: '#app',
  render: h => h(App)
})
