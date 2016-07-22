import React, {PropTypes} from 'react'

export default class Greeting extends React.Component {
  render () {
    return (
      <span>
          Hello, {this.props.name}!
      </span>
    )
  }
}

Greeting.propTypes = { name : PropTypes.string }
