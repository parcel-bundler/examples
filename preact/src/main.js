import { h, render } from 'preact';

let elem;

const init = () => {
  let App = require('./App').default;
  elem = render(<App />, document.getElementById('app'), elem);
};

init();

if (module.hot) {
  require('preact/devtools');
  module.hot.accept(() => {
    init();
  });
}
