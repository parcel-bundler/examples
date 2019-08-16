import { h, render } from 'preact'

import App from './App'

const node = document.getElementById('app')

render(<App />, node!, node!.lastChild as Element)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
