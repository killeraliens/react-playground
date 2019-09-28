import React, {Component} from 'react'
import Child from './Child'
import LangControls from './LangControls'
import LanguageContext from './LanguageContext'
import './AppLang.css'

class AppLang extends Component {

  render() {
    return(
      <div className='AppLang'>
        App Context
        <LangControls />
        <Child />
      </div>
    )
  }
}

export default AppLang;
