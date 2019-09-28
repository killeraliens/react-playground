import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import App from './paltrows-power-toes/App';
//import AppLang from './lang-context/AppLang'
import ScrapeApp from './scrape-test/ScrapeApp'

 //ReactDOM.render(<AppLang />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter >
    <ScrapeApp />
  </BrowserRouter>,
  document.getElementById('root')
);

//ReactDOM.render(, document.getElementById('root'));
