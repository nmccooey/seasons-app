import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  
  // Render method needed for class component. Called every time state is updated.
  render() {
    // If there is an error and no latitude.
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // If there is no error and we have latitude.
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    // If we have no error and no latitude.
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));