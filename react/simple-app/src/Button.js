import React, {PropTypes} from 'react'

// you could use a class or a function, here. both are below.

// export default class Button extends React.Component {
// constructor (props) {
// super(props)
// }
//
// render () {
// return (
// <button onClick={this.props.onClick}>
// clear
// </button>
// )
// }
// }

const Button = props => <button onClick={props.onClick}>clear</button>

Button.propTypes = { onClick : PropTypes.func }

export default Button
