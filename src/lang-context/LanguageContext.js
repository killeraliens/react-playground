import React from 'react'

const LanguageContext = React.createContext({
  lang: window.navigator.language,
  updateLanguage: () => {
    //console.log('updating lang')
  }
})

export default LanguageContext;
