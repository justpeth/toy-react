import ToyReact from './toy-react'

class App extends ToyReact.Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }
    this.buttonClickHandle = this.buttonClickHandle.bind(this)
  }
  buttonClickHandle() {
    this.setState({
      a: this.state.a + 1
    })
  }
  render() {
    let { a, b } = this.state
    return (
      <div>
        <div>{a.toString()}</div>
        <div>{b.toString()}</div>
        <button onClick={buttonClickHandle}></button>
      </div>
    )
  }
}

export default App;