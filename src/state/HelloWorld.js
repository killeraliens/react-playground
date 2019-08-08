import React from 'react';

class HelloWorld extends React.Component {
  static defaultProps = {
    who: '...'
  }
  constructor(props) {
    super(props);

    this.state = {
      who: this.props.who
    }
  }

  handleButtonClick = (e) => {
    console.log('who state', this.state.who);
    console.log('who props', this.props.who);
    console.log(e.target.textContent);

    this.setState({
      who: e.target.textContent
    })
  }

  render() {
    console.log('helloworld renders');
    return (
      <div>
        <p>
          Hello {this.state.who}!
        </p>
        <button onClick={this.handleButtonClick}>World</button>
        <button onClick={this.handleButtonClick}>Friend</button>
        <button onClick={this.handleButtonClick}>React</button>
      </div>
    )
  }

}

export default HelloWorld;
