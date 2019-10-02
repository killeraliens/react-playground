import React, {Component} from 'react'
import Child from './Child'
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'
import './AppLang.css'

class AppLang extends Component {
  state = {
    lang: window.navigator.language
  }

  updateLanguage = (lang) => {
    this.setState({lang: lang})
  }

  render() {
    const contextValue = {
      lang: this.state.lang,
      updateLanguage: this.updateLanguage
    }
    return(
      <LanguageContext.Provider value={contextValue}>
        <div className='AppLang'>
          App Context
          <LangControls updateLanguage={this.updateLanguage}/>
          <Child />
        </div>
      </LanguageContext.Provider>
    )
  }
}

export default AppLang;
