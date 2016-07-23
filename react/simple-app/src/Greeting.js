import React, {PropTypes} from 'react'

// there are a couple of ways you could do this.
// it's preferable to use a function whenever possible,
// but you could also use a class

// export default class Greeting extends React.Component {
  // render () {
    // return (
      // <span>
        // Hello, {this.props.name}!
          // </span>
      // )
    // }
  // }


const Greeting = props => <span>Hello, {props.name}!</span>

Greeting.propTypes = { name : PropTypes.string }

export default Greeting
