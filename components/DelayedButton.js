const React = require('react')

class DelayedButton extends React.Component {
  constructor(props) {
    super(props)

    this.delayed = this.props.onDelayedClick.bind(this)
  }

  timeOut(event) {
    event.persist()
    setTimeout(() => {this.delayed(event)}, this.props.delay)
  }

  render() {
    return <button onClick={this.timeOut.bind(this)} ></button>
  }
}

module.exports = DelayedButton
