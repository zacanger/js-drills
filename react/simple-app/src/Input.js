import React, {PropTypes} from 'react'

// you could use either a class or a function

// export default class Input extends React.Component {
  // constructor (props) {
    // super(props)
    // }
  //
  // render () {
    // return (
      // <input
        // onChange={this.props.onChange}
        // style={{ width : 200 }}
        // type="text"
        // placeholder="Name, please."
        // />
    // )
    // }
  // }

const Input = props =>
  <input
    onChange={props.onChange}
    style={{ width : 200 }}
    type="text"
    placeholder="Name, please."
  />

Input.propTypes = { onChange : PropTypes.func }

export default Input
