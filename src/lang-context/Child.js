import React, { Component } from 'react';
import Grandchild from './Grandchild'

class Child extends Component {
  render() {
    return(
      <div className='Child'>
        I am the child.
        <Grandchild />
      </div>
    )
  }
}

export default Child;
