import Vue from "vue";
import App from "./App";
import List from "./List";

Vue.component("app-list", List);

Vue.filter("uppercase", value => value.toUpperCase());

new Vue({
  el: "#app",
  render: h => h(App)
});
