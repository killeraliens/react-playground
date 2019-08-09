import React from 'react';


class Accordian extends React.Component {
  static defaultProps = {
    sections: []
  };

  constructor(props) {
    super(props);
    this.state = {
      current: null
    }
  }

  // componentDidMount() {
  //   this.setState({ current: this.props.sections[0]})
  // }

  handleButtonClick = (e) => {
    console.log(e.target.innerText);
    console.log(this.state.current);
    if (this.state.current !== null && e.target.innerText === this.state.current.title) {
       this.setState({ current: null });
    } else {
      this.setState({ current: this.props.sections[e.target.id]});
    }
  }

  renderSection = (section) => {
    if (this.state.current !== null && this.state.current === section) {
      // console.log('current section', this.state.current.title);
      return this.state.current.section;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.sections.map((section, i) => {
            return (<li key={i} >
              <button id={i} onClick={this.handleButtonClick}>{section.title}</button>
              <div>{this.renderSection(section)}</div>
            </li>)
          })}
        </ul>
      </div>
    )
  }

}

export default Accordian;
