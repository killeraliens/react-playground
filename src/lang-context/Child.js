import React, { Component } from 'react';
import Grandchild from './Grandchild'

class Child extends Component {
  render() {
    return(
      <main className='Child'>
        I am the child.
        <Grandchild />
      </main>
    )
  }
}

export default Child;
