import React, {PropTypes} from 'react'

export default class Button extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button onClick={this.props.reset}>
        hi?
      </button>
    )
  }
}

Button.propTypes = { changename : PropTypes.func }
