import React, {Component} from 'react';
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext';



class GreatGrandchild extends Component {
  static contextType = LanguageContext;
  render() {
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

//console.log('great grand', LanguageContext)

// export default function GreatGrandchild(props) {

//     return(
//       <LanguageContext.Consumer>
//         {value => {
//           const copy = languageSpecificCopy[value.lang] || {}
//           return(
//             <div className='GreatGrandchild'>
//               <h1>{copy.title}</h1>
//               <p>{copy.body}</p>
//             </div>
//           )
//         }}
//       </LanguageContext.Consumer>
//     )

// }

