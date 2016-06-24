// Write a component that renders an H1 that says something!
// Use ReactDOM.render to target a div on your (imaginary) HTML

class Thing extends React.Component {
  render () {
    return (
      <h1>One!</h1>
    )
  }
}

ReactDOM.render(<Thing />, document.getElementById('root'))

