import React, {Component} from 'react';
import languageSpecificCopy from './languageSpecificCopy'

class GreatGrandchild extends Component {
  render() {
    const copy = languageSpecificCopy['en-US'] || {};
    return(
      <div className='GreatGrandchild'>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
      </div>
    )
  }
}

export default GreatGrandchild;
