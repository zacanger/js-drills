import React    from 'react'
import Greeting from './Greeting'
import Input    from './Input'
import Button   from './Button'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name : '' }
  }

  changeName (e) {
    this.setState({ name : e.target.value })
  }

  clear () {
    this.setState({ name : '' })
  }

  render () {
    return (
      <div>
        <Greeting name={this.state.name} />
        <Input onChange={this.changeName.bind(this)} />
        <Button onClick={this.clear.bind(this)} />
      </div>
    )
  }
}
