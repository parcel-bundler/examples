import { app } from 'hyperapp';

import view from './App';

const state = {
  count: 0
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
};

app(state, actions, view, document.body);
