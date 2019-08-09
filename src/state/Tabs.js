import React from 'react';
import './Tabs.css';


class Tabs extends React.Component {
  static defaultProps = {
    tabs: []
  }

  constructor(props) {
    super(props);

    this.state = {
      current: null
    }
  }

  handleButtonClick = (index) => {

  }

  renderContent = () => {

  }

  render() {
    const buttons = this.props.tabs.map((tab, i) => <button key={i} id={i} onClick={this.handleButtonClick(i)}>{tab.name}</button> ) ;
    const currentTab = this.props.tabs[0];
    return (
      <div className='Tabs'>
        {buttons}
        <div className='tab-content'>{currentTab ? currentTab.content : null}</div>
      </div>
    )
  }
}

export default Tabs;
