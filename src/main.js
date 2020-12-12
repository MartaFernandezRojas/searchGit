import Vue from "vue";
import App from "./App.vue";
import api from './api.js';
import myAjax from './ajaxRequest.js';

//Mixins
Vue.mixin(myAjax);
Vue.mixin(api);

//import element library
import ElementUI from "element-ui";
Vue.use(ElementUI);

//import search component
import search from "./components/search/search.vue";
Vue.component("search", search);

new Vue({
  el: "#app",
  render: h => h(App)
});
