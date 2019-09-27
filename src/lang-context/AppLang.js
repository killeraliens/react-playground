import React, {Component} from 'react'
import Child from './Child'
import './AppLang.css'

class AppLang extends Component {
  render() {
    return(
      <div className='AppLang'>
        App Context
        <Child />
      </div>
    )
  }
}

export default AppLang;
