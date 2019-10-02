import React, {Component} from 'react'
import LanguageContext from './LanguageContext';

export default function LangControls(props) {
  return(
    <LanguageContext.Consumer>
      {(value) => {

        return(
          <div className='LangControls'>
            <button onClick={() => value.updateLanguage('en-GB')} disabled={value.lang === 'en-GB'}>
              British{' '}
              <span role='img' aria-label='en-GB'>🇬🇧</span>
            </button>
            <button onClick={() => value.updateLanguage('en-US')} disabled={value.lang === 'en-US'}>
              American{' '}
              <span role='img' aria-label='en-US'>🇺🇸</span>
            </button>
            <button onClick={() => value.updateLanguage('ko')} disabled={value.lang === 'ko'}>
              Korean{' '}
              <span role='img' aria-label='ko'>🇰🇷</span>
            </button>
          </div>
        )
      }}
    </LanguageContext.Consumer>
  );
}



// class LangControls extends Component {
//   static contextType = LanguageContext;

//   render() {
//     // console.log(LanguageContext.Consumer)
//     const lang = this.context.lang
//     return(
//       <div>
//         <button disabled={lang === 'en-GB'}>
//           British{' '}
//           <span role='img' aria-label='en-GB'>🇬🇧</span>
//         </button>
//         <button disabled={lang === 'en-US'}>
//           American{' '}
//           <span role='img' aria-label='en-US'>🇺🇸</span>
//         </button>
//         <button disabled={lang === 'ko'}>
//           Korean{' '}
//           <span role='img' aria-label='ko'>🇰🇷</span>
//         </button>
//       </div>
//     )
//   }
// }

// export default LangControls;
