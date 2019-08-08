import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      noise: 'tick'
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.noise === 'tick') {
        this.setState({ noise: 'tock'})
      } else {
        this.setState({ noise: 'tick'})
      }
    }, 1000);

    this.interval = setInterval(() => {
      this.setState({ noise: 'BOOOOOM!'})
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.noise}</p>
      </div>
    )
  }
}

export default Bomb;
