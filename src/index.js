import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Accordian from './state/Accordian';
// import HelloWorld from './state/HelloWorld';

const sectionProps = [
  {title: 'title 1', section: 'section 1 & some content'},
  {title: 'title 2', section: 'section 2 & some content'},
  {title: 'title 3', section: 'section 3 & some content'}
];

ReactDOM.render(<Accordian sections={sectionProps}/>, document.getElementById('root'));
 // ReactDOM.render(<HelloWorld />, document.getElementById('root'));
