import React, { Component } from 'react';
import GreatGrandchild from './GreatGrandchild'

class Grandchild extends Component {
  render() {
    return(
      <div className='Grandchild'>
       I am the grandchild
       <GreatGrandchild />
      </div>
    )
  }
}

export default Grandchild;
