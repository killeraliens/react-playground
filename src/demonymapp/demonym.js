import React from 'react';
import './demonym.css';

class Demonym extends React.Component {
  render() {
    return(
      <div className='Demonym'>
        A {this.props.name} comes from {this.props.country}.
      </div>
    )
  }
}

export default Demonym;
