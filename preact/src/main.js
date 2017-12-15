import { h, render } from 'preact';

const mountNode = document.getElementById('app');

const init = () => {
  let App = require('./App').default;
  render(<App />, mountNode, mountNode.lastChild);
};

init();

if (module.hot) {
  require('preact/devtools');
  module.hot.accept(() => {
    init();
  });
}
