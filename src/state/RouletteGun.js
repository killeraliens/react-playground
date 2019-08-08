import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  constructor(props) {
    super(props);

    this.state = {
      chamber: null,
      spinningTheChamber: false,
      played: false
    };
  }

  playRoulette = () => {
    this.setState({ spinningTheChamber: true, played: true });
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.floor(Math.random() * 9),
        spinningTheChamber: false
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    // console.log(this.state.chamber);
    let gameStatus;
    if (this.state.spinningTheChamber === true) {
      gameStatus = 'spinning the chamber and pulling the trigger!';
    } else if (this.state.chamber === this.props.bulletInChamber) {
      gameStatus = 'BANG!!!!';
    } else if (this.state.played === false) {
      gameStatus = 'Roulette Gun'
    } else {
      gameStatus = 'you\'re safe!';
    }
    return (
      <div>
        <p>{gameStatus}</p>
        <button onClick={this.playRoulette}>Pull the trigger</button>
      </div>
    )
  }
}

export default RouletteGun;
