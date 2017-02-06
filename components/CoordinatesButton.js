const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)

    this.receiveCoordinates = this.props.onReceiveCoordinates.bind(this)
  }

  handleClick(event){
    this.receiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}></button>
  }
}

module.exports = CoordinatesButton
