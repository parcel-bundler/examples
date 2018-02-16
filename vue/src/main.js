import Vue from 'vue/dist/vue'
import './main.css';

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h1>Hello World 📦 🚀</h1>
    </div>
  `
});

module.hot && module.hot.accept();
