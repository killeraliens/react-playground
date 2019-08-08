import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages.js';
import TheDate from './state/TheDate';
import Counter from './state/Counter';


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

function App() {
  return (
    <main className='App'>
        <div className="container">
          <Messages name="messages" unreadQty={10} />
          <Messages name="messages" unreadQty={0} />
        </div>
      <Split className='left' flexBasis='2'>
        Left split content
        {firstTooltip}
        {secondTooltip}
        {thirdTooltip}
      </Split>
      <Split className='right'>
        <TheDate />
        <Counter count={666} step={6}/>
      </Split>
    </main>
  );
}


export default App;
