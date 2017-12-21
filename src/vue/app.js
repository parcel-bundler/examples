import Vue from "vue";
import App from "./MainApp.vue";

const app = new Vue({
  data: {},
  render: h => h(App)
});
app.$mount("#app");
