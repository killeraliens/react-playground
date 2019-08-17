import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages.js';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import RouletteGun from './state/RouletteGun';
import Accordian from './state/Accordian';
import Tabs from './state/Tabs';
// import Demonym from './demonymapp/demonym';


const firstTooltip = (
  <Tooltip message='tooltip message' color='hotpink'>
   ipsum
  </Tooltip>
);
const secondTooltip = (
  <Tooltip message='another tooltip message' color='#126BCC'>
    officiis
  </Tooltip>
);
const thirdTooltip = (
  <Tooltip message='one more tooltip message'>
    Necessitatibus?
  </Tooltip>
);



const sectionProps = [
  {title: 'title 1', section: 'section 1 & some content'},
  {title: 'title 2', section: 'section 2 & some content'},
  {title: 'title 3', section: 'section 3 & some content'}
];
const tabsProp = [
  {name: 'name 1', content: 'content 1 & some content'},
  {name: 'name 2', content: 'content 2 & some content'},
  {name: 'name 3', content: 'content 3 & some content'}
];

function App() {
  return (
    <main className='App'>
        <div className="container">
          <Messages name="messages" unreadQty={10} />
          <Messages name="messages" unreadQty={0} />
        </div>
      <Split className='left' flexBasis='2'>
        <header>Left split content</header>
        <div>
          <Tabs tabs={tabsProp}/>
          <Accordian sections={sectionProps}/>
        </div>
        {firstTooltip}
        {secondTooltip}
        {thirdTooltip}
      </Split>
      <Split className='right'>
        <TheDate />
        <Counter count={666} step={6}/>
        <HelloWorld />
        <RouletteGun />
        <Bomb />
      </Split>
    </main>
  );
}


export default App;
