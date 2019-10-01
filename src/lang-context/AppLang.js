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
      lang: this.state.lang
    }
    return(
      <LanguageContext.Provider value={contextValue}>
        <div className='AppLang'>
          App Context
          <LangControls onUpdate={this.updateLanguage}/>
          <Child />
        </div>
      </LanguageContext.Provider>
    )
  }
}

export default AppLang;
