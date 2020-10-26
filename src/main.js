import Vue from 'vue'
import App from './App'
import ColorDerective from './color'

Vue.directive('colored', ColorDerective)

new Vue({
  el: '#app',
  render: h => h(App)
})
