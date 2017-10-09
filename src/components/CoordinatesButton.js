import React from "react";

class CoordinatesButton extends React.Component {
  buttonClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.buttonClick}>Coords</button>;
  }
}

export default CoordinatesButton;
