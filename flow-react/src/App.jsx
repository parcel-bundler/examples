// @flow

import * as React from 'react'
import './App.css'

type Props = {
  reactMessage: string
}

type State = {
  flowMessage: string
}

export default class App extends React.Component<Props, State> {
  state = {
    flowMessage: 'Flow'
  }
  render() {
    return (
      <div>
        <h1>
          Hello World from {this.props.reactMessage}
          {' & '}
          {this.state.flowMessage}! 📦 🚀
        </h1>
      </div>
    )
  }
}
