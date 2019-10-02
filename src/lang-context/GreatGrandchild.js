import React, {Component} from 'react';
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext';



// class GreatGrandchild extends Component {
//   static contextType = LanguageContext;

//   render() {
//     const copy = languageSpecificCopy[this.context.lang] || {}
//     return(
//       <section className='GreatGrandchild'>
//         <h1>{copy.title}</h1>
//         <p>{copy.body}</p>
//         <button onClick={() => this.context.updateLanguage('klingon')} disabled={this.context.lang === 'klingon'}>
//               Klingon{' '}
//               <span role='img' aria-label='klingon'>🖖</span>
//         </button>
//       </section>
//     )
//   }
// }

// export default GreatGrandchild;

//console.log('great grand', LanguageContext)

export default function GreatGrandchild(props) {

    return(
      <LanguageContext.Consumer>
        {value => {
          const copy = languageSpecificCopy[value.lang] || {}
          return(
            <div className='GreatGrandchild'>
              <h1>{copy.title}</h1>
              <p>{copy.body}</p>
              <button onClick={() => value.updateLanguage('klingon')} disabled={value.lang === 'klingon'}>
                Klingon{' '}
                <span role='img' aria-label='klingon'>🖖</span>
              </button>
            </div>

          )
        }}
      </LanguageContext.Consumer>
    )

}

