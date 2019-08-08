import React from 'react';

class Bomb extends React.Component {
  static defaultProps = {
    count: 0
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     noise: 'tick'
  //   }
  // }
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count
    }
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     if (this.state.noise === 'tick') {
  //       this.setState({ noise: 'tock'})
  //     } else {
  //       this.setState({ noise: 'tick'})
  //     }
  //   }, 1000);

  //   this.interval = setInterval(() => {
  //     this.setState({ noise: 'BOOOOOM!'})
  //   }, 5000);
  // }
  componentDidMount() {
    let startBomb = setInterval(() => {
       this.setState({ count: this.state.count + 1})
    }, 1000);

    this.setState({interval: startBomb});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
    console.log(this.state.count);
    let bombStatus;
    if (this.state.count % 2 === 0 && this.state.count <= 8) {
      bombStatus = 'tick';
    } else if (this.state.count % 2 !== 0 && this.state.count <= 8) {
      bombStatus = 'tock'
    } else {
      bombStatus = 'BOOOM!'
    }
    if (this.state.count > 8 ) {
      clearInterval(this.state.interval);
    }
    return (
      <div>
        <p>{bombStatus}</p>
      </div>
    )
  }
}

export default Bomb;
