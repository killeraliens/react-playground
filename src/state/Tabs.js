import React from 'react';


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
  render() {
    return (
      <div>
        {this.props.tabs.map((tab, i) => {
          return <button key={i} id={i}>{tab.name}</button>
        })}
      </div>
    )
  }
}

export default Tabs;
