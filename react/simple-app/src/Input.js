import React, {PropTypes} from 'react'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <input
        onChange={this.props.onChange}
        style={{ width : 200 }}
        type="text"
        placeholder="Name, please."
      />
    )
  }
}

Input.propTypes = { changeName : PropTypes.func }
