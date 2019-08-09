import React from 'react';
import './Tabs.css';


class Tabs extends React.Component {
  static defaultProps = {
    tabs: []
  }

  constructor(props) {
    super(props);

    this.state = {
      current: 0
    }
  }

  handleButtonClick(index) {
    this.setState({current: index});
  }

  renderButtons() {
    return this.props.tabs.map((tab, i) => (
      <button key={i} id={i} onClick={() => this.handleButtonClick(i)}>{tab.name}</button>
    ));

  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.current];
    return(
      <div className='tab-content'>
        {currentTab.content}
      </div>
    )
  }

  render() {
    return (
      <div className='Tabs'>
        {this.renderButtons()}
        {this.props.tabs[0] && this.renderContent()}
      </div>
    )
  }
}

export default Tabs;
