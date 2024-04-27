import React, { useState } from "react"

export class ButtonClass extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      name: ""
    }
  }

  handleUpdateCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <button onClick={this.handleUpdateCount}>
        <strong>Button Class: {this.state.count}</strong>
      </button>
    )
  }
}

export function ButtonFunction() {
  const [count, setCount] = useState(0) // [currentState, setState]

  function handleUpdateCount() {
    setCount(count + 1)
  }

  return (
    <button
      onClick={handleUpdateCount}
    >
      <strong>Button Function: {count}</strong>
    </button>
  )
}
