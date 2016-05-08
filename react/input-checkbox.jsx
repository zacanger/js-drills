// make an app that has a text input, checkbox, and header
// the header's text should be whatever is in the input
// its colour should be red if the checkbox is checked, and black otherwise
// render to a div with an id of 'root'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text  : ''
    , isRed : false
    }
  }

  handleChecked (e) {
    this.setState({isRed : !this.state.isRed})
  }

  handleText (e) {
    this.setState({text : e.target.value})
  }

  render() {
    return (
      <div>
        <input
          type='checkbox'
          checked={this.state.isRed}
          onChange={this.handleChecked.bind(this)}
        />
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleText.bind(this)}
        />
        <h1
          style={{color : this.state.isRed ? 'red' : 'black' }}>
          {this.state.text}
        </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

