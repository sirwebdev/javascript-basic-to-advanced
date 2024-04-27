import React, { useState } from "react"

export class InputClass extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input {...this.props} type="text" value={this.props.value} />
    )
  }
}

export function InputFunction(props) {
  return (
    <input {...props} type="text" value={props.value} />
  )
}
