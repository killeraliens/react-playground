import React, {Component} from 'react';
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext';


console.log('great grand', LanguageContext)
class GreatGrandchild extends Component {
  static contextType = LanguageContext;
  render() {
    //const copy = languageSpecificCopy['en-US'] || {};
    const copy = languageSpecificCopy[this.context.lang] || {}
    return(
      <div className='GreatGrandchild'>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
      </div>
    )
  }
}

export default GreatGrandchild;
