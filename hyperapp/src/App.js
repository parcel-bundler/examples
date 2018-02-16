import { h } from 'hyperapp';
import './App.css';

export default (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={actions.down} disabled={state.count <= 0}>ー</button>
    <button onclick={actions.up}>＋</button>
  </main>
);
